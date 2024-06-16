const routes = [
    {   // 마이페이지 > 대시보드
        path: '/admin/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Admin/MyPage/DashBoardView.vue')
    },
    {
        // 마이페이지 > 회원정보수정
        path: '/admin/mypage/info/modify',
        name: 'updateadmin',
        component: () => import('@/views/Admin/MyPage/UpdateAdminView.vue')
    },
    {   // 교육관리 > 교육장 
        path: '/admin/educenter',
        component: () => import('@/views/Admin/Management/Edu/EduCenter/'),
        redirect: '/admin/educenter/list',
        children: [
            {
                path: "list", // "/admin/educenter/list"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/components/CenterList.vue')
            },
            {
                path: "create", // "/admin/educenter/create"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/components/CreateCenter.vue')
            },
            {
                path: "update", // "/admin/educenter/update"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/components/UpdateCenter.vue')
            }
        ]
    },
    {   // 교육관리 > 교육과정
        path: '/admin/course',
        component: () => import('@/views/Admin/Management/Edu/Course/'),
        redirect: '/admin/course/list',
        children: [
            {
                path: "list", // "/admin/course/list"
                component: () => import('@/views/Admin/Management/Edu/Course/components/CourseList.vue')
            },
            {
                path: "create", // "/admin/course/create"
                component: () => import('@/views/Admin/Management/Edu/Course/components/CreateCourse.vue')
            },
            {
                path: "update", // "/admin/course/update"
                component: () => import('@/views/Admin/Management/Edu/Course/components/UpdateCourse.vue')
            }
        ]
    },
    {   // 교육관리 > 강의실
        path: '/admin/room',
        component: () => import('@/views/Admin/Management/Edu/TrainingRoom/'),
        redirect: '/admin/room/list',
        children: [
            {
                path: "list", // "/admin/room/list"
                component: () => import('@/views/Admin/Management/Edu/TrainingRoom/components/RoomList.vue')
            },
            {
                path: "create", // "/admin/room/create"
                component: () => import('@/views/Admin/Management/Edu/TrainingRoom/components/CreateRoom.vue')
            },
            {
                path: "update", // "/admin/room/update"
                component: () => import('@/views/Admin/Management/Edu/TrainingRoom/components/UpdateRoom.vue')
            }
        ]
    },
    {   // 교육관리 > 교육생
        path: '/admin/trainee',
        component: () => import('@/views/Admin/Management/Edu/Trainee/'),
        redirect: '/admin/trainee/list',
        children: [
            {
                path: "list", // "/admin/trainee/list"
                component: () => import('@/views/Admin/Management/Edu/Trainee/components/TraineeList.vue')
            },
            {
                path: "register", // "/admin/trainee/register"
                component: () => import('@/views/Admin/Management/Edu/Trainee/components/CreateTrainee.vue')
            },
            {
                path: "update", // "/admin/trainee/update"
                component: () => import('@/views/Admin/Management/Edu/Trainee/components/UpdateTrainee.vue')
            },
            {
                path: "detail", // "/admin/trainee/detail"
                component: () => import('@/views/Admin/Management/Edu/Trainee/components/TraineeDetail.vue')
            }
        ]
    },
    {   // 학습관리 > 출결관리 
        path: '/admin/attendance',
        component: () => import('@/views/Admin/Management/Learning/Attendance/'),
        redirect: '/admin/attendance/list',
        children: [
            {
                path: "list", // "/admin/attendance/list"
                component: () => import('@/views/Admin/Management/Learning/Attendance/components/AttendanceList.vue')
            },
            {
                path: "trainee/detail", // "/admin/attendance/trainee/detail"
                component: () => import('@/views/Admin/Management/Learning/Attendance/components/PersonalAttendanceDetail.vue')
            }
        ]
    },
    {   // 학습관리 > 데일리 과제관리 
        path: '/admin/dailynote',
        component: () => import('@/views/Admin/Management/Learning/DailyNote/'),
        redirect: '/admin/dailynote/list',
        children: [
            {
                path: "list", // "/admin/dailynote/list"
                component: () => import('@/views/Admin/Management/Learning/DailyNote/components/TraineeNoteList.vue')
            },
            {
                path: "trainee/note/list", // "/admin/dailynote/trainee/note/list"
                component: () => import('@/views/Admin/Management/Learning/DailyNote/components/PersonalNoteList.vue')
            },
            {
                path: "trainee/note/detail", // "/admin/dailynote/trainee/note/detail"
                component: () => import('@/views/Admin/Management/Learning/DailyNote/components/PersonalNoteDetail.vue')
            }
        ]
    },
    {   // 학습관리 > 공지사항 관리 
        path: '/admin/notice',
        component: () => import('@/views/Admin/Management/Notice/'),
        redirect: '/admin/notice/list',
        children: [
            {
                path: "list", // "/admin/notice/list"
                component: () => import('@/views/Admin/Management/Notice/components/NoticeList.vue')
            },
            {
                path: "create", // "/admin/notice/create"
                component: () => import('@/views/Admin/Management/Notice/components/CreateNotice.vue')
            },
            {
                path: "update", // "/admin/notice/update"
                component: () => import('@/views/Admin/Management/Notice/components/UpdateNotice.vue')
            },
            {
                path: "detail", // "/admin/notice/detail"
                component: () => import('@/views/Admin/Management/Notice/components/NoticeDetail.vue')
            }
        ]
    }
    
];

export default routes;