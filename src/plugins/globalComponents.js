import WidgetSmall from '@/components/dashboard_elements/WidgetSmall';
import WidgetCompare from '@/components/dashboard_elements/WidgetCompare';
import LoaderOverlay from '@/components/LoaderOverlay';
import RectangularBadge from '@/components/RectangularBadge';

export default {
    install (Vue) {
        Vue.component('app-widget-small', WidgetSmall);
        Vue.component('app-widget-compare', WidgetCompare);
        Vue.component('app-loading', LoaderOverlay);
        Vue.component('o-badge', RectangularBadge);
    }
}