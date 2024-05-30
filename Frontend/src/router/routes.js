const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'dashboard', component: () => import('pages/DashboardPage.vue'),
        meta: {
          auth : true
        }
      },
      { path: 'login', component: () => import('pages/LoginPage.vue')},
      { path: 'register', component: () => import('pages/RegisterPage.vue')},
      { path: 'about', component: () => import('pages/AboutPage.vue')}
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
