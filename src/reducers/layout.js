import { COLLAPSED, INITROUTE } from './../constants/layout'

const collapsed = sessionStorage.getItem('collapsed');
const layout_state = {
  collapsed: !!(collapsed === '1'),
  routes: []
}

const routes = [
  {
    path: '/home',
    component: 'home',
    title: '主页',
    notMenu: true
  }
]

export default function layout (state = layout_state, action) {
  switch (action.type) {
    case COLLAPSED:
      sessionStorage.setItem('collapsed', !state.collapsed?'1':'0');
      return {
        ...state,
        collapsed: !state.collapsed
      }
    case INITROUTE:
      console.log(action.routes)
      return {
        ...state,
        routes: routes.concat(action.routes || [])
      }
    default: return state;
  }
}
