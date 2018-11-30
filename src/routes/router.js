import loadable from 'loadable-components'
// To see more options in https://github.com/smooth-code/loadable-components
const Home = loadable(() => import('../pages/home/Home'))
// Loadable({
//   loader: () => import('./my-component'),
//   loading: Loading,
// });

export default [
  {
    path: '/',
    component: Home,
    // childRoutes: [
    //   {
    //     path: '/sync',
    //     component: SyncView
    //   },
    //   {
    //     path: '/async',
    //     component: AsyncView
    //   }
    // ]
  }
]
