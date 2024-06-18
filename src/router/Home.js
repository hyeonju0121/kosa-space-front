const routes =[
    {   
        path: '/',
        component: () => import('@/views/Home'),
        children: [
            {
                path: "login", // "/login"
                name: 'login',
                component: () => import('@/views/Home/Login.vue')
            },
            {
                path: '/signup',
                name: 'signup',
                component: () => import('@/views/Home/SignUp.vue')
            },
            {
              path: '/signup/complete',
              name: 'signupcomplete',
              component: () => import('@/views/Home/SignUpComplete.vue')
          },
            {
                path: '/find/id',
                name: 'findid',
                component: () => import('@/views/Home/FindId.vue')
            },
            {
                path: '/find/password',
                name: 'findpassword',
                component: () => import('@/views/Home/FindPassword.vue')
            },
        ]
    },

];

export default routes;