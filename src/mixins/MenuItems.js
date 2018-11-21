export const menuItemsData = {
    data() {
        return {
            menuItems: [
                {
                    icon: 'mdi-information',
                    title: 'Dashboard',
                    route: '/dashboard',
                    active: true,
                },
                {
                    icon: 'mdi-chart-bar',
                    title: 'Charts',
                    route: '/charts',
                },
                {
                    icon: 'mdi-android',
                        title: 'About',
                    subItems: [
                    { title: 'Breakfast & brunch', route: '/about'},
                    { title: 'New American', route: '/about1' },
                    { title: 'Sushi', route: '/about2' }
                ]
                },
                {
                    icon: 'mdi-briefcase-check',
                        title: 'Sales',
                    route: '/sales',
                },
                {
                    icon: 'mdi-camera',
                        title: 'Purchase',
                    subItems: [
                    { title: 'Item 1', route: '/purchase' },
                    { title: 'Item 2', route: '/purchase1' },
                    { title: 'Item 3', route: '/purchase2' }
                ]
                },
            ]
        }
    }
}