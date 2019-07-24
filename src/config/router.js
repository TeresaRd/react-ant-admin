export const router = [
  {
    path: '/first',
    component: 'home/home1',
    title: 'first',
    children: [
      {
        path: '/hoasdfme',
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
