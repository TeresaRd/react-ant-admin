import { COLLAPSED, INITROUTE, SETOPENKEYS } from './../constants/layout'

// 菜单开启关闭
export const toggleCollapsed = () => {
  return {
    type: COLLAPSED
  }
};
// 初始化路由
export const initRoute = (routes) => {
  return {
    type: INITROUTE,
    routes: routes || []
  }
};
// 菜单的展开状态
export const setOpenKeys = (openKeys) => {
  return {
    type: SETOPENKEYS,
    openKeys
  }
};
