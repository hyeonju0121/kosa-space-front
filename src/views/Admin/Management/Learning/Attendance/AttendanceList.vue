<template>
    <div class="main p-3" style="margin-left: 25px; width: 1400px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">출결 현황 조회</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="교육장 선택" v-model="filter.ecname">
                        <option selected disabled value="">교육장 선택</option>
                        <option value="송파교육센터">송파교육센터</option>
                        <option value="가산교육센터">가산교육센터</option>
                        <option value="혜화교육센터">혜화교육센터</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select id="course" title="교육과정 선택" v-model="filter.cname">
                        <option selected disabled value="">교육과정 선택</option>
                        <option value="2024M2">MSA 기반 Full Stack 개발 전문가 양성과정 2차</option>
                        <option value="2024C1">클라우드 솔루션즈 아키텍트 양성과정 1차</option>
                    </select>
                </div>

            </div>
        </form>

        <div class="interview_list_header" style="margin-top: 2%;">
            <div class="total_interviews">총 0건 <span>(2024-07-10 19:50 기준)</span></div>
        </div>

        <div class="mt-3">
            <!-- 출결 테이블 부분 -->
            <div class="container">
                <div class="container mt-3">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">이름</th>
                                <th scope="col">교육생 번호</th>
                                <th scope="col">입실</th>
                                <th scope="col">퇴실</th>
                                <th scope="col">출결 진행률</th>
                                <th scope="col">출석</th>
                                <th scope="col">지각</th>
                                <th scope="col">결석</th>
                                <th scope="col">상세보기</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr v-for="item in attendance" :key="item">
                                <td>{{ item.rnum }}</td>
                                <td>{{ item.mname }}</td>
                                <td>{{ item.mid }}</td>
                                <td>{{ item.acheckin }}</td>
                                <td>{{ item.acheckout }}</td>
                                <td>
                                    <div class="attendance-box" style="width: 120%; height: 80px;">
                                        <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                            <div class="d-flex flex-row justify-content-between">
                                                <span style="font-size: 14px;"> 2024-07-10기준</span>
                                                <span style="font-size: 14px;">{{ item.percentage }}% ({{ item.approvecnt }}일 / {{ item.crequireddate }}일)</span>
                                            </div>
                                            <div class="progress">
                                                <div class="progress-bar bg-success" style="width:70%">{{ item.percentage }}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ item.approvecnt }}</td>
                                <td>{{ item.latenesscnt }}</td>
                                <td>{{ item.absencecnt }}</td>
                                <td>
                                    <router-link to="./trainee/detail" class="btn btn-dark btn-sm">
                                        출결현황 보기
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import attendanceAPI from '@/apis/attendanceAPI';
import '@vuepic/vue-datepicker/dist/main.css';

const route = useRoute();

// 요청 경로의 변경을 감시
// watch(route, (newRoute, oldRoute) => {
//     if(newRoute.query.ecname) { // 쿼리에 ecname 들어있으면 해당 페이지로 요청
//         getBoardList(newRoute.query.pageNo);
//         pageNo.value =newRoute.query.pageNo;
//     } else { // 안들어왔으면 1페이지 그대로
//          getBoardList(1);
//          pageNo.value = 1;
//     }
// });




const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

// 필터 상태 객체 정의
const filter = ref({
    ecname: "송파교육센터",
    cname: ""
 });


 // 교육장 이름 전체 목록을 가져오는 메소드
const nameList = ref([]);

 // 교육생 출결 상태 객체 정의
const attendance = ref([]);

async function totalAttendanceList(ecname, cname, adate) {
    try {
        const response = await attendanceAPI.getTotalAttendanceList(ecname, cname, adate);
        attendance.value = response.data;
        console.log(response.data);
        console.log("출결현황 정보 가져오기 성공");


    } catch(error) {
        console.log("출결현황 정보 가져오기 실패");
    }
}

totalAttendanceList(filter.value.ecname, "MSA 2차 Full Stack 개발자 양성과정", "2024-07-10");

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

a {
    text-decoration: none;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
input,
p,
span,
small,
textarea,
select,
strong,
th,
td {
    font-family: 'Noto Sans KR', sans-serif;
}

.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title {
    border-bottom: 2px solid #2a3954;
}

#itemTitle {
    font-weight: 700;
    font-size: 1.6rem;
}


/* table */
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #22C55E;
    color: #ffffff;
    text-align: center;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* select option css */
.InpBox {
    display: inline-block;
    vertical-align: top;
}

.InpBox select {
    padding: 0 28px 0 12px;
    width: 100%;
    height: 40px;
    border: 1px solid #232323;
    border-radius: 4px;
    box-sizing: border-box;
    color: #232323;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    background-color: #dbdbdb0e;
    cursor: pointer;
}

.BtnType {
    display: block;
    margin-bottom: 8px;
    width: 150px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    background-color: #22C55E;
    cursor: pointer;
}

.SizeM {
    padding: 6px 11px;
    height: 40px;
    font-size: 14px;
    line-height: 24px;
}

/* table header */
.interview_list_header {
    clear: both;
    padding: 20px 0 50px;
    border-bottom: 1px solid #d7dce5;
}

.total_interviews {
    float: left;
    margin-top: 17px;
    padding-left: 24px;
    color: #5c667b;
    font-size: 15px;
    line-height: 20px;
}

.search_interview {
    float: right;
    display: flex;
    width: 410px;
}

.search_area {
    display: inline-block;
    position: relative;
    width: 160px;
}

.TypoBox {
    display: inline-block;
    position: relative;
    border: 1px solid #8491a7;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
}

.TypoBox .text {
    padding-right: 36px;
    width:100%;
    padding-block: 1px;
    padding-inline: 2px;
}

.TypoBox .Typo {
    padding: 8px 12px;
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #475067;
    font-size: 14px;
    line-height: 20px;
    background: none;
}

.search_interview .search_area button {
    display: inline-block;
    position: absolute;
    top: 6px;
    right: 4px;
    width: 32px;
    height: 32px;
    border: 0;
    background: url(https://www.saraminimage.co.kr/sri/person/resume/bg_alink.png) repeat;
}
</style>
