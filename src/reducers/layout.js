import { COLLAPSED, INITROUTE, SETOPENKEYS } from './../constants/layout';
import { routes, filterMenuKeys } from "../config/router";

const collapsed = sessionStorage.getItem('collapsed');
const layout_state = {
  collapsed: !!(collapsed === '1'),
  routes: routes,
  openKeys: [],
};

export default function layout (state = layout_state, action) {
  switch (action.type) {
    case COLLAPSED:
      sessionStorage.setItem('collapsed', !state.collapsed?'1':'0');
      return {
        ...state,
        collapsed: !state.collapsed
      };
    case INITROUTE:
      const mutilRoutes = routes.concat(action.routes || []);
      filterMenuKeys(mutilRoutes);
      return {
        ...state,
        routes: routes.concat(action.routes || [])
      };
    case SETOPENKEYS:
      return {
        ...state,
        openKeys: action.openKeys || []
      };
    default: return state;
  }
}
