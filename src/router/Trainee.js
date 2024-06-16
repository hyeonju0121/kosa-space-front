const routes = [
    {   // 마이페이지 > 대시보드
        path: '/trainee/dashboard',
        component: () => import('@/views/Trainee/MyPage/DashBoardView.vue')
    },
    {
        // 마이페이지 > 회원정보수정
        path: '/trainee/mypage/info/modify',
        component: () => import('@/views/Trainee/MyPage/UpdateTraineeView.vue')
    },
    {   // 출결관리 > 출결
        path: '/trainee/attendance',
        component: () => import('@/views/Trainee/Management/Attendance'),
        redirect: '/trainee/attendance/detail',
        children: [
            {
                path: "detail", // "/trainee/attendance/detail"
                component: () => import('@/views/Trainee/Management/Attendance/components/PersonalAttendanceDetail.vue')
            },
            {
                path: "reason/create", // "/trainee/attendance/reason/create"
                component: () => import('@/views/Trainee/Management/Attendance/components/CreateReasonContents.vue')
            }
        ]
    },
    {   // 데일리 과제 관리 > 과제
        path: '/trainee/dailynote',
        component: () => import('@/views/Trainee/Management/DailyNote'),
        redirect: '/trainee/dailynote/list',
        children: [
            {
                path: "list", // "/trainee/dailynote/list"
                component: () => import('@/views/Trainee/Management/DailyNote/components/PersonalNoteList.vue')
            },
            {
                path: "detail", // "/trainee/dailynote/detail"
                component: () => import('@/views/Trainee/Management/DailyNote/components/PersonalNoteDetail.vue')
            }
        ]
    },
    {   // 반 커뮤니티
        path: '/trainee/community',
        component: () => import('@/views/Trainee/Community'),
        redirect: '/trainee/community/notice/list',
        children: [
            {
                path: "notice/list", // "/trainee/community/notice/list"
                component: () => import('@/views/Trainee/Community/components/NoticeList.vue')
            },
            {
                path: "notice/detail", // "/trainee/community/notice/detail"
                component: () => import('@/views/Trainee/Community/components/NoticeDetail.vue')
            },
            {
                path: "assignment/list", // "/trainee/community/assignment/list"
                component: () => import('@/views/Trainee/Community/components/AssignmentList.vue')
            },
            {
                path: "reference/list", // "/trainee/community/reference/list"
                component: () => import('@/views/Trainee/Community/components/ReferenceDataList.vue')
            }
        ]
    },
];

export default routes;