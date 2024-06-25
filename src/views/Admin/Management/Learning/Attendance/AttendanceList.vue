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

            <!-- select + table 부분 -->
            <div class="mt-3">
                <!-- select부분 -->
                <form @submit.prevent="handleCheck">
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
                </form>

                <!-- datepicker 부분 -->
                <div class="mb-3">
                    <div>기간별 조회</div>
                    <VueDatePicker v-model="date" range />
                </div>                

                <!-- 출결 테이블 부분 -->
                <form>
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
                                    <!-- 사유작성모달이 현재 만들어있지 않아서 라우터링크 경로를 달아두지 못했음.. -->
                                    <td>
                                        <button class="btn btn-info btn-sm" @click="attendanceSubmit">사유보기</button>
                                    </td>
            
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
                                    <td>3</td>
                                    <td><img src="@/assets/seongmin.jpg" width="110" height="150"></td>
                                    <td>김성민</td>
                                    <td>9:20</td>
                                    <td>17:55</td>
                                    <td>지각</td>

                                    <!-- 사유작성모달이 현재 만들어있지 않아서 라우터링크 경로를 달아두지 못했음.. -->
                                    <td><button class="btn btn-info btn-sm" @click="attendanceSubmit">사유보기</button></td>
                                    
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
                </form>
            </div>
        </div>
    </div>


    <!-- 출결 사유 보기 모달 -->
    <Dialog id="attendanceViewModal">
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <div style="background-color: #22C55E; color: white">
                출결 사유
            </div>
        </template>

        <template v-slot:body>
            <form>
                <div class="mb-3">
                    <select>
                        <option value="지각">지각</option>
                        <option value="조퇴">조퇴</option>
                        <option value="외출">외출</option>
                        <option value="결석">결석</option>
                    </select>
                </div>
                <div>
                    <textarea>사유작성</textarea>
                </div>
                <div>
                    <input id="attach" type="file" class="form-control p-3" ref="attach">
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="handleCloseModal">닫기</button>
        </template>
    </Dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
//datepicker  
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
// 부트스트랩 모달
import { Modal } from 'bootstrap';
import Dialog from '@/components/UIComponents/Dialog.vue';

const date = ref();
let attendanceModal =null;

onMounted(() => {
    console.log("AssignmentList 컴포넌트 마운트 완료");
    // modal 객체로 생성
    attendanceModal = new Modal(document.querySelector('#attendanceViewModal'));
});

function handleCloseModal() {
    attendanceModal.hide();
}

function attendanceSubmit() {
    // 사유 보기 버튼 클릭시, attendanceModal 활성화
    attendanceModal.show();
}

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
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

const router = useRouter();

function handleAttendanceBtn() {
    router.push('/admin/attendance/trainee/detail');
}

function handleCheck() {
    console.log(JSON.parse(JSON.stringify(attendance.value)));
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
}</style>
