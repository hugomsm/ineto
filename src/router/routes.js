
export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/menuprincipal') },
      { path: 'aula1', component: () => import('pages/aula1') },
      { path: 'aula2', component: () => import('pages/aula2') },
    ],
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
