const routes =[
    {   
        path: '/',
        component: () => import('@/views/Home'),
        children: [
            {
                path: "login", // "/login"
                name: 'login',
                component: () => import('@/views/Home/components/Login.vue')
            },
            {
                path: '/signup',
                name: 'signup',
                component: () => import('@/views/Home/components/SignUp.vue')
            },
            {
              path: '/signup/complete',
              name: 'signupcomplete',
              component: () => import('@/views/Home/components/SignUpComplete.vue')
          },
            {
                path: '/find/id',
                name: 'findid',
                component: () => import('@/views/Home/components/FindId.vue')
            },
            {
                path: '/find/password',
                name: 'findpassword',
                component: () => import('@/views/Home/components/FindPassword.vue')
            },
        ]
    },

];

export default routes;