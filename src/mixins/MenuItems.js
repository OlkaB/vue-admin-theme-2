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
                    route: '/wykresy',
                },
                {
                    icon: 'mdi-android',
                    title: 'About',
                    subItems: [
                    { title: 'Breakfast & brunch', route: '/o_nas'},
                    { title: 'New American', route: '/about1' },
                    { title: 'Sushi', route: '/about2' }
                ]
                },
                {
                    icon: 'mdi-briefcase-check',
                    title: 'Sales',
                    route: '/sprzedaz',
                },
                {
                    icon: 'mdi-camera',
                    title: 'Purchase',
                    subItems: [
                    { title: 'Item 1', route: '/zakupy' },
                    { title: 'Item 2', route: '/purchase1' },
                    { title: 'Item 3', route: '/purchase2' }
                ]
                },
            ]
        }
    }
}