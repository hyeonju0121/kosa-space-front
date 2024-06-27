<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
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
                        <option value="전체">전체</option>
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
                <button type="button" class="BtnType SizeM" @click="handleSubmitFilter1" style="margin-left: 1%;">
                    교육생 조회
                </button>
            </div>
        </form>

        <!-- datepicker ----------->
        <div class="mt-3">
            <span>기간별 조회</span>
            <VueDatePicker v-model="date" range />
        </div>   

        <div class="interview_list_header">
            <div class="total_interviews">총 0건</div>

            <!-- 필터 -->
            <div class="search_interview">
                <div class="InpBox search_order">
                    <!-- 입실여부 -->
                    <select id="search_status" name="search_status" title="응답 유형">
                        <option value="0">입실여부</option>
                        <option value="0">전체</option>
                        <option value="1">입실</option>
                        <option value="2">미입실</option>
                    </select>
                </div>
                <div class="InpBox search_order" style="margin-left: 2%;">
                    <!-- 퇴실여부 -->
                    <select id="search_status" name="search_status" title="응답 유형">
                        <option value="0">퇴실여부</option>
                        <option value="0">전체</option>
                        <option value="1">퇴실</option>
                        <option value="2">미퇴실</option>
                    </select>
                </div>
                <div class="TypoBox search_area" style="margin-left: 2%;">
                    <input type="text" class="Typo search" id="search_keyword" name="search_keyword" value="" placeholder="교육생 입력">
                    <button type="button" id="keyword_search">
                        <PhMagnifyingGlass color="#838181"  style="width: 24px; height: 24px;"/>
                    </button>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <!-- 출결 테이블 부분 -->
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>교육생 번호</th>
                            <th>입실시간</th>
                            <th>퇴실시간</th>
                            <th>출결 진행률</th>
                            <th>출석</th>
                            <th>지각</th>
                            <th>결석</th>
                            <th>비고</th>
                            <th>출결 알림</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{{ attendance.ano }}</td>
                            <td>{{ attendance.name }}</td>
                            <td>{{ attendance.mid }}</td>
                            <td>{{ attendance.starttime }}</td>
                            <td>{{ attendance.endtime }}</td>
                            <td>
                                <div class="attendance-box" style="width: 120%; height: 80px;">
                                    <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[0] }} 기준</span>
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[1] }}% ({{ attendance.attendancestatus[2] }}일 / {{ attendance.attendancestatus[3] }}일)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">{{ attendance.attendancestatus[1] }}%</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{{ attendance.attendancetotalnum[0] }}</td>
                            <td>{{ attendance.attendancetotalnum[1] }}</td>
                            <td>{{ attendance.attendancetotalnum[2] }}</td>
                            <td>
                                <router-link to="./trainee/detail" class="btn btn-dark btn-sm">
                                    출결현황 보기
                                </router-link>
                            </td>
                            <td><button class="btn btn-dark btn-sm">알림 전송</button></td>      
                        </tr>
                        <!------------------------------------------------------------------------------>
                        <tr>
                            <td>2</td>
                            <td>김성민</td>
                            <td>2024M2002</td>
                            <td>08:58</td>
                            <td>18:10</td>
                            <td>
                                <div class="attendance-box" style="width: 120%; height: 80px;">
                                    <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[0] }} 기준</span>
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[1] }}% ({{ attendance.attendancestatus[2] }}일 / {{ attendance.attendancestatus[3] }}일)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">{{ attendance.attendancestatus[1] }}%</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{{ attendance.attendancetotalnum[0] }}</td>
                            <td>{{ attendance.attendancetotalnum[1] }}</td>
                            <td>{{ attendance.attendancetotalnum[2] }}</td>
                            <td>
                                <router-link to="./trainee/detail" class="btn btn-dark btn-sm">
                                    출결현황 보기
                                </router-link>
                            </td>
                            <td><button class="btn btn-dark btn-sm">알림 전송</button></td>      
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>이경섭</td>
                            <td>2024M2003</td>
                            <td>{{ attendance.starttime }}</td>
                            <td>{{ attendance.endtime }}</td>
                            <td>
                                <div class="attendance-box" style="width: 120%; height: 80px;">
                                    <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[0] }} 기준</span>
                                            <span style="font-size: 14px;">{{ attendance.attendancestatus[1] }}% ({{ attendance.attendancestatus[2] }}일 / {{ attendance.attendancestatus[3] }}일)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">{{ attendance.attendancestatus[1] }}%</div>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>{{ attendance.attendancetotalnum[0] }}</td>
                            <td>{{ attendance.attendancetotalnum[1] }}</td>
                            <td>{{ attendance.attendancetotalnum[2] }}</td>
                            <td>
                                <router-link to="./trainee/detail" class="btn btn-dark btn-sm">
                                    출결현황 보기
                                </router-link>
                            </td>
                            <td><button class="btn btn-dark btn-sm">알림 전송</button></td>      
                        </tr>      
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
})

// 필터 상태 객체 정의
const filter = ref({
    ecname: "",
    cname: "",
    approve: "",
    mname: "",
 });

 // 교육생 출결 상태 객체 정의
const attendance = ref({
    ano: "1",
    name: "유현주",
    mid: "M2001",
    starttime: "08:45",
    endtime: "17:55",
    // 출결 진행률
    attendancestatus: ["2024-06-27", 70, 84, 105],
    // 출석, 지각, 결석 
    attendancetotalnum: [84, 1, 0]
})

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
select {
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
