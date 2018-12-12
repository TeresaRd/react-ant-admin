import { COLLAPSED, INITROUTE } from './../constants/layout'

export const toggleCollapsed = () => {
  return {
    type: COLLAPSED
  }
}

export const initRoute = (routes) => {
  return {
    type: INITROUTE,
    routes: routes || []
  }
}
