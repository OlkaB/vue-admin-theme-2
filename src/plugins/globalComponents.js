import AnimateNumber from '@/components/AnimateNumber';
import RectangularBadge from '@/components/BadgeRectangular';
import WidgetCompare from '@/components/WidgetCompare';
import WidgetSmall from '@/components/WidgetSmall';

export default {
    install (Vue) {
        Vue.component('doz-animate-number', AnimateNumber);
        Vue.component('doz-badge--rect', RectangularBadge);
        Vue.component('doz-widget-compare', WidgetCompare);
        Vue.component('doz-widget-small', WidgetSmall);
    }
}