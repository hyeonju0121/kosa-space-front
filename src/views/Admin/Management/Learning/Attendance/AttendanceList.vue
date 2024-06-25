<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">출결 현황 조회</h1>
            </div>

            <div class="mt-3">
                <div class="mb-3" style="display: flex;">
                        <div class="me-3">
                            <select v-model="attendance.ecname">
                                <option selected disabled value="교육장">교육장 선택</option>
                                <option value="송파 교육장">송파 교육장</option>
                                <option value="혜화 교육장">혜화 교육장</option>
                                <option value="가산 교육장">가산 교육장</option>
                            </select>
                        </div>

                        <div class="me-3">
                            <select v-model="attendance.cname">
                                <option selected disabled value="교육과정">교육과정 선택</option>
                                <option value="MSA 1차">MSA 1차</option>
                                <option value="MSA 2차">MSA 2차</option>
                                <option value="클라우드">클라우드</option>
                            </select>
                        </div>

                        <div>
                            <div class="btn btn-dark btn-sm mb-1" @click="handleCheck">교육생 조회</div>
                        </div>
                    </div>

                <!-- datepicker 부분 -->
                <div class="mb-3">
                    <div>기간별 조회</div>
                    <VueDatePicker v-model="date" range />
                </div>                

                <!-- 출결 테이블 부분 -->
                    <div class="container">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th>번호</th>
                                    <th>사진</th>
                                    <th>이름</th>
                                    <th>입실시간</th>
                                    <th>퇴실시간</th>
                                    <th>상태</th>
                                    <th>비고</th>
                                    <th>상세보기</th>
                                    <th>출결 진행률</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{{ attendance.ano }}</td>
                                    <td><img src="@/assets/kyungseob.jpg" width="110" height="150">{{ attendance.profile }}
                                    </td>
                                    <td>{{ attendance.name }}</td>
                                    <td>{{ attendance.starttime }}</td>
                                    <td>{{ attendance.endtime }}</td>
                                    <td>{{ attendance.astatus }}</td>
                                    <td></td>
                                    <td><router-link to="./trainee/detail" class="btn btn-dark btn-sm">출결현황 보기</router-link>
                                    </td>
                                    <td>
                                        <div class="attendance-box" style="width: 120%; height: 80px;">
                                            <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                                <div class="d-flex flex-row justify-content-between">
                                                    <span style="font-size: 14px;">2024.06.19 기준</span>
                                                    <span style="font-size: 14px;">70% (84일 / 105일)</span>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" style="width:70%">70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td><img src="@/assets/hyeonju.jpg" width="110" height="150"></td>
                                    <td>유현주</td>
                                    <td></td>
                                    <td></td>
                                    <td>결석</td>
                                    <td>
                                        <button class="btn btn-info btn-sm" @click="handlerReasonBtn">사유보기</button>
                                    </td>
                                    <td>
                                        <router-link to="./trainee/detail" class="btn btn-dark btn-sm"
                                            @click="handleAttendanceBtn">출결현황 보기</router-link>
                                    </td>
                                    <td>
                                        <div class="attendance-box" style="width: 120%; height: 80px;">
                                            <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                                <div class="d-flex flex-row justify-content-between">
                                                    <span style="font-size: 14px;">2024.06.19 기준</span>
                                                    <span style="font-size: 14px;">70% (84일 / 105일)</span>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" style="width:70%">70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td><img src="@/assets/seongmin.jpg" width="110" height="150"></td>
                                    <td>김성민</td>
                                    <td>9:20</td>
                                    <td>17:55</td>
                                    <td>지각</td>

                                    <td><button class="btn btn-info btn-sm" @click="handlerReasonBtn">사유보기</button></td>
                                    
                                    <td><router-link to="./trainee/detail" class="btn btn-dark btn-sm"
                                            @click="handleAttendanceBtn">출결현황 보기</router-link>
                                    </td>
                                    
                                    <td>
                                        <div class="attendance-box" style="width: 120%; height: 80px;">
                                            <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                                <div class="d-flex flex-row justify-content-between">
                                                    <span style="font-size: 14px;">2024.06.19 기준</span>
                                                    <span style="font-size: 14px;">70% (84일 / 105일)</span>
                                                </div>
                                                <div class="progress">
                                                    <div class="progress-bar bg-success" style="width:70%">70%</div>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    </div>

    <AttendanceReasonDialog id="attendanceReasonDialog"/>
</template>

<script setup>
import { useRouter } from 'vue-router';
//datepicker  
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// modal
import AttendanceReasonDialog from '@/views/Admin/Management/Learning/Attendance/AttendanceReasonDialog.vue';
import { Modal } from "bootstrap";

const date = ref();

let attendanceReasonDialog = null;

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];

    // modal 객체 생성
    attendanceReasonDialog = new Modal(document.querySelector("#attendanceReasonDialog"));
})

let attendance = ref({
    ecname: "교육장",
    cname: "교육과정",
    ano: "1",
    profile: "",
    name: "이경섭",
    starttime: "08:45",
    endtime: "17:55",
    astatus: "정상 출결"
})


// 사유 보기 버튼 클릭시, 교육생이 제출한 사유에 대한 모달 활성화
function handlerReasonBtn() {
    attendanceReasonDialog.show();
}

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
</style>
