import store from '@/store'

export default (to, from, next) => {
    console.log("Auth guard: ", store, this, store.getters.userRole)
    if(store.getters.userRole === "admin" || store.getters.userRole === "sales") {
        //if user is logged just let him go where he wanted
        next();
    } else {
        // if user is not allowed move him to home page
        next('/');
    }
}