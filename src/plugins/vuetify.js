import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {
  VApp,
  VBadge,
  VBreadcrumbs,
  VBtn,
  VCard,
  VDivider,
  VFooter,
  VGrid,
  VIcon,
  VItemGroup,
  VList,
  VNavigationDrawer,
  VProgressLinear,
  VToolbar,
  transitions 
} from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import pl from 'vuetify/es5/locale/pl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VBadge,
    VBreadcrumbs,
    VBtn,
    VCard,
    VDivider,
    VFooter,
    VGrid,
    VIcon,
    VItemGroup,
    VList,
    VNavigationDrawer,
    VProgressLinear,
    VToolbar,
    transitions 
  },
  iconfont: 'mdi',
  lang: {
    locales: { pl },
    current: 'pl'
  },
  theme: {
      primary: '#3f51b5',
      secondary: '#193a9a',
      accent: '#e91e63',
      error: '#ff5252',
      info: '#2196f3',
      success: '#4caf50',
      warning: '#ffc107'
  }
});
