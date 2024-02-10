import {
  TOGGLE_COLLAPSED_NAV,
  CHANGE_LOCALE,
  SIDE_NAV_STYLE_CHANGE,
  NAV_TYPE_CHANGE,
  TOP_NAV_COLOR_CHANGE,
  HEADER_NAV_COLOR_CHANGE,
  TOGGLE_MOBILE_NAV,
  SWITCH_THEME,
  TOGGLE_THEME_CONFIG_OPEN
} from '../constants/Theme'
import { THEME_CONFIG } from 'configs/AppConfig'

const initState = {
  ...THEME_CONFIG
}

const theme = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_THEME_CONFIG_OPEN: {
      return {
        ...state,
        themeConfigOpen: !state.themeConfigOpen
      }
    }
    case TOGGLE_COLLAPSED_NAV:
      return {
        ...state,
        navCollapsed: action.payload
      }
    case SIDE_NAV_STYLE_CHANGE:
      return {
        ...state,
        sideNavTheme: action.sideNavTheme
      }
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale
      }
    case NAV_TYPE_CHANGE:
      return {
        ...state,
        navType: action.navType
      }
    case TOP_NAV_COLOR_CHANGE:
      return {
        ...state,
        topNavColor: action.topNavColor
      }
    case HEADER_NAV_COLOR_CHANGE:
      return {
        ...state,
        headerNavColor: action.headerNavColor
      }
    case TOGGLE_MOBILE_NAV:
      return {
        ...state,
        mobileNav: action.payload
      }
    case SWITCH_THEME:
      return {
        ...state,
        currentTheme: action.currentTheme
      }
    default:
      return state
  }
}

export default theme
