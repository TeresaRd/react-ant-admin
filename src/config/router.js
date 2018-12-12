export const router = [
  {
    path: '/first',
    component: 'home',
    title: 'first',
    children: [
      {
        path: '/hoasdfme',
        component: 'home',
        title: 'first-one',
        children: [
          {
            path: '/home',
            component: 'home',
            title: 'n-1'
          }
        ]
      }
    ]
  },
  {
    path: '/home1',
    component: 'home/home1',
    title: 'home1',
    // notMenu: true
  },
  {
    path: '/home2',
    component: 'home/home2',
    title: 'home2',
    // notMenu: true
  }
]
