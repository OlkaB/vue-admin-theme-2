import WidgetSmall from '@/components/dashboard_elements/WidgetSmall';
import WidgetCompare from '@/components/dashboard_elements/WidgetCompare';

export default {
    install (Vue) {
        Vue.component('app-widget-small', WidgetSmall);
        Vue.component('app-widget-compare', WidgetCompare);
    }
}