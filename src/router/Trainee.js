const routes = [
    {  
        path: '/trainee/',
        component: () => import('@/views/Trainee'),
        redirect: '/trainee/dashboard',
        children: [
            {   // 마이페이지 > 대시보드
                path: 'dashboard',
                component: () => import('@/views/Trainee/MyPage/DashBoard.vue')
            },
            {
                // 마이페이지 > 회원정보수정
                path: 'mypage/info/modify',
                component: () => import('@/views/Trainee/MyPage/UpdateTrainee.vue')
            },
            {
                // 출결관리 > 출결
                path: "attendance/detail", // "/trainee/attendance/detail"
                component: () => import('@/views/Trainee/Management/Attendance/PersonalAttendanceDetail.vue')
            },
            {
                path: "attendance/reason/create", // "/trainee/attendance/reason/create"
                component: () => import('@/views/Trainee/Management/Attendance/CreateReasonContents.vue')
            },
            {
                // 데일리 과제 관리 > 과제
                path: "dailynote/list", // "/trainee/dailynote/list"
                component: () => import('@/views/Trainee/Management/DailyNote/PersonalNoteList.vue')
            },
            {
                path: "dailynote/detail", // "/trainee/dailynote/detail"
                component: () => import('@/views/Trainee/Management/DailyNote/PersonalNoteDetail.vue')
            },
            {   // 반 커뮤니티
                path: 'community', // "/trainee/community"
                component: () => import('@/views/Trainee/Community'),
                redirect: '/trainee/community/notice/list',
                children: [
                    {
                        path: "notice/list", // "/trainee/community/notice/list"
                        component: () => import('@/views/Trainee/Community/NoticeList.vue')
                    },
                    {
                        path: "notice/detail", // "/trainee/community/notice/detail"
                        component: () => import('@/views/Trainee/Community/NoticeDetail.vue')
                    },
                    {
                        path: "assignment/list", // "/trainee/community/assignment/list"
                        component: () => import('@/views/Trainee/Community/AssignmentList.vue')
                    },
                    {
                        path: "reference/list", // "/trainee/community/reference/list"
                        component: () => import('@/views/Trainee/Community/ReferenceDataList.vue')
                    }
                ]
            },
        ]
    },
];

export default routes;