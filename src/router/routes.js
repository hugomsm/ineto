
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/menuprincipal') },
      { path: 'aula1', component: () => import('pages/aula1') },
      { path: 'aula2', component: () => import('pages/aula2') },
      { path: 'aula3', component: () => import('pages/aula3') },
      // { path: 'aula4', component: () => import('pages/aula4') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
