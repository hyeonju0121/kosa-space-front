const routes = [
    {   
        path: '/admin',
        component: () => import('@/views/Admin/'),
        redirect: '/admin/dashboard',
        children: [
            {
                // 마이페이지 > 대시보드 --------------------------------------------------------------------------------------
                path: 'dashboard',
                component: () => import('@/views/Admin/MyPage/DashBoard.vue')
            },
            {
                // 마이페이지 > 회원정보수정 --------------------------------------------------------------------------------------
                path: 'mypage/info/modify',
                component: () => import('@/views/Admin/MyPage/UpdateAdmin.vue')
            },
            {
                // 교육관리 > 교육장 --------------------------------------------------------------------------------------
                path: "educenter/list", // "/admin/educenter/list"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/CenterList.vue')
            },
            {
                path: "educenter/create", // "/admin/educenter/create"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/CreateCenter.vue')
            },
            {
                path: "educenter/update", // "/admin/educenter/update"
                component: () => import('@/views/Admin/Management/Edu/EduCenter/UpdateCenter.vue')
            },
            {   // 교육관리 > 교육과정 --------------------------------------------------------------------------------------
                path: "course/list", // "/admin/course/list"
                component: () => import('@/views/Admin/Management/Edu/Course/CourseList.vue')
            },
            {
                path: "course/create", // "/admin/course/create"
                component: () => import('@/views/Admin/Management/Edu/Course/CreateCourse.vue')
            },
            {
                path: "course/update", // "/admin/course/update"
                component: () => import(/* webpackChunkName: "course" */ '@/views/Admin/Management/Edu/Course/UpdateCourse.vue')
            },
            {
                // 교육과정 > 강의실 --------------------------------------------------------------------------------------
                path: "room/list", // "/admin/room/list"
                component: () => import(/* webpackChunkName: "room" */ '@/views/Admin/Management/Edu/TrainingRoom/RoomList.vue')
            },
            {
                path: "room/create", // "/admin/room/create"
                component: () => import(/* webpackChunkName: "room" */ '@/views/Admin/Management/Edu/TrainingRoom/CreateRoom.vue')
            },
            {
                path: "room/update", // "/admin/room/update"
                component: () => import(/* webpackChunkName: "room" */ '@/views/Admin/Management/Edu/TrainingRoom/UpdateRoom.vue')
            },
            {
                // 교육관리 > 교육생 --------------------------------------------------------------------------------------
                path: "trainee/list", // "/admin/trainee/list"
                component: () => import(/* webpackChunkName: "trainee" */ '@/views/Admin/Management/Edu/Trainee/TraineeList.vue')
            },
            {
                path: "trainee/register", // "/admin/trainee/register"
                component: () => import(/* webpackChunkName: "trainee" */ '@/views/Admin/Management/Edu/Trainee/CreateTrainee.vue')
            },
            {
                path: "trainee/update", // "/admin/trainee/update"
                component: () => import(/* webpackChunkName: "trainee" */ '@/views/Admin/Management/Edu/Trainee/UpdateTrainee.vue')
            },
            {
                path: "trainee/detail", // "/admin/trainee/detail"
                component: () => import(/* webpackChunkName: "trainee" */ '@/views/Admin/Management/Edu/Trainee/TraineeDetail.vue')
            },
            {
                // 학습관리 > 출결관리 --------------------------------------------------------------------------------------
                path: "attendance/list", // "/admin/attendance/list"
                component: () => import(/* webpackChunkName: "attendance" */ '@/views/Admin/Management/Learning/Attendance/AttendanceList.vue')
            },
            {
                path: "attendance/trainee/detail", // "/admin/attendance/trainee/detail"
                component: () => import(/* webpackChunkName: "attendance" */ '@/views/Admin/Management/Learning/Attendance/PersonalAttendanceDetail.vue')
            },
            {
                // 학습관리 > 데일리 과제 관리 --------------------------------------------------------------------------------------
                path: "dailynote/list", // "/admin/dailynote/list"
                component: () => import(/* webpackChunkName: "dailynote" */ '@/views/Admin/Management/Learning/DailyNote/TraineeNoteList.vue')
            },
            {
                path: "dailynote/trainee/note/list", // "/admin/dailynote/trainee/note/list"
                component: () => import(/* webpackChunkName: "dailynote" */ '@/views/Admin/Management/Learning/DailyNote/PersonalNoteList.vue')
            },
            {
                path: "dailynote/trainee/note/detail", // "/admin/dailynote/trainee/note/detail"
                component: () => import(/* webpackChunkName: "dailynote" */ '@/views/Admin/Management/Learning/DailyNote/PersonalNoteDetail.vue')
            },
            {
                // 공지사항 관리 --------------------------------------------------------------------------------------
                path: "notice/list", // "/admin/notice/list"
                component: () => import(/* webpackChunkName: "notice" */ '@/views/Admin/Management/Notice/NoticeList.vue')
            },
            {
                path: "notice/create", // "/admin/notice/create"
                component: () => import(/* webpackChunkName: "notice" */ '@/views/Admin/Management/Notice/CreateNotice.vue')
            },
            {
                path: "notice/update", // "/admin/notice/update"
                component: () => import(/* webpackChunkName: "notice" */ '@/views/Admin/Management/Notice/UpdateNotice.vue')
            },
            {
                path: "notice/detail", // "/admin/notice/detail"
                component: () => import(/* webpackChunkName: "notice" */ '@/views/Admin/Management/Notice/NoticeDetail.vue')
            }
        ]
    },
];

export default routes;