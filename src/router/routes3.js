export default [
  {
    path: '/',
    component: () => import('pages/menuprincipal'),
    children: [
      { path: '/aula1', component: () => import('pages/aula1') },
      { path: '/aula2', component: () => import('pages/aula2') },
    ],
  },

  {
    // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
