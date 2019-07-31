export const routes = [
  {
    path: '/home',
    component: 'home/home',
    title: '主页',
    notMenu: true,
    exact: true
  }
];
// 动态路由测试数据
export const router = [
  {
    path: '/first',
    component: 'home/home1',
    title: 'first',
    children: [
      {
        path: '/home',
        component: 'home/home1',
        title: 'first-one',
        children: [
          {
            path: '/home1',
            component: 'home/home1',
            title: 'n-1'
          },
          {
            path: '/home2',
            component: 'home/home2',
            title: 'n-2'
          }
        ]
      }
    ]
  }
];

// 过滤路由数据，主要对接菜单展开数据的openNames，
export const filterMenuKeys = (routes, keys) => {
  routes.forEach(item => {
    item.keys = keys ? [...keys, item.path] : [item.path];
    if (Array.isArray(item.children) && item.children.length>0) {
      filterMenuKeys(item.children, item.keys);
    }
  })
};
