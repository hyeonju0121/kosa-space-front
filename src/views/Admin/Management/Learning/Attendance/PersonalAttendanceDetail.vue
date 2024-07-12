<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 개인별 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 출결 현황 조회</h1>
            </div>

            <!--  -->
            <div>
                <!-- 해당 교육생 프로필 헤더 -->
                <div class="mb-3">
                    <div class="acc_cont">
                        <div class="img-td">
                            <div class="profile_wrap">
                                <div class="profile profile_attach">
                                    <div class="user-img">
                                        <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${headerInfo.mid}`"
                                            class="user-img-detail" />
                                    </div>
                                    <div class="profile_info">
                                        <h6 class="user-name">{{ headerInfo.mname }} ({{ headerInfo.mid }})</h6>
                                        <div class="profile-info-contents">
                                            <h5 class="user-course">{{ headerInfo.cname }}</h5>
                                            <span class="user-course-requireddate">({{ headerInfo.cstartdate }} ~ {{
                                                headerInfo.cenddate }})</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 출결 날짜별 조회 -->
                <div class="mb-3">
                    <VueDatePicker range v-model="date" :enable-time-picker="false" @update:model-value="handleDate"
                        @closed="alertFn" />
                </div>

                <!-- 개인별 출결조회 테이블 -->
                <div class="container">
                    <div>
                        <table class="table table-hover" style="text-align:center">
                            <thead>
                                <tr>
                                    <th>날짜</th>
                                    <th>입실 시간</th>
                                    <th>퇴실 시간</th>
                                    <th>상태</th>
                                    <th>비고</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in personalAttendance" :key="item">
                                    <td>{{ item.adate }}</td>
                                    <td>{{ item.acheckin }}</td>
                                    <td>{{ item.acheckout }}</td>
                                    <td>{{ item.astatus }}</td>
                                    <!-- 사유보기 버튼은 상태가 지각,외출,결석등 일때 나타난다.(현재 사유작성 모달페이지 작성이 안됨 링크 달기x)-->
                                    <td>
                                        <div v-if="item.anconfirm">
                                            <button class="btn btn-outline-secondary btn-sm" @click="handlerReasonBtn(item.adate)">사유 조회</button>
                                        </div>
                                    </td>
                                    <AttendanceReasonDialog :id="`attendanceReasonDialog${item.adate}`" :mid="mid" :adate="item.adate"/>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import { ref, onMounted, watch, defineEmits } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useRoute, useRouter } from 'vue-router';
import attendanceAPI from '@/apis/attendanceAPI';
import { PhStrategy } from '@phosphor-icons/vue';
import axios from 'axios';
import { Modal } from "bootstrap"; // 사유 모달
import AttendanceReasonDialog from './Dialog/AttendanceReasonDialog.vue'; // 사유 컴포넌트

const route = useRoute();
const router = useRouter();

// 화면 마운트
onMounted(() => {
    // 웹 사이트를 이용하는 기준의 날짜를 초기값으로 주고, DatePicker
    const startDate = new Date('2024/02/26');
    const endDate = new Date('2024/07/26');
    // const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
    traineeHeader(mid.value);
});

// 교육생 Header 정보 받아오기
let mid = ref(route.query.mid || "");
let headerInfo = ref({});

async function traineeHeader(mid) {
    try {
        const response = await traineeInfoAPI.getTraineeProfileHeader(mid);
        headerInfo.value = response.data;
        console.log("헤더 정보 받아오기 : " + headerInfo.value);
    } catch (error) {
        console.log(error);
    }
}

// 교육생 출결 상세 리스트
const date = ref();

let selectDates = ref();

const handleDate = (modelData) => {
    if (modelData) {
        let days = "";

        for (let rangeDate of modelData) {
            const date = new Date(rangeDate);

            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, "0");
            const day = date.getDate().toString().padStart(2, "0");
            const formattedDate = `${year}-${month}-${day}`;

            days = days += `-${formattedDate}`;
        }

        // 데이트 피커에 보여줄 날짜
        date.value = modelData;

        console.log("selectDates 시작일자 = " + selectDates.value.substring(0, 10));
        console.log("selectDates 종료일자 = " + selectDates.value.substring(13, 23));
        console.log("mid = " + mid.value);
    }
};

// 날짜에 대한 데이터 포멧
const dateRangeFormat = (value) => {
    console.log("데이터 범위 포매터 실행, value = " + value);
    try {
        const startDate = value[0];
        const endDate = value[1];

        if (startDate && endDate) {
            const startYear = startDate.getFullYear();
            const startMonth = (startDate.getMonth() + 1).toString().padStart(2, "0");
            const startDay = startDate.getDate().toString().padStart(2, "0");

            const endYear = endDate.getFullYear();
            const endMonth = (endDate.getMonth() + 1).toString().padStart(2, "0");
            const endDay = endDate.getDate().toString().padStart(2, "0");

            selectDates.value = `${startYear}-${startMonth}-${startDay} ~ ${endYear}-${endMonth}-${endDay}`;
            console.log("Date 포멧된 데이터" + selectDates.value);
            return `${startYear}-${startMonth}-${startDay} ~ ${endYear}-${endMonth}-${endDay}`;
        }
    } catch (error) {
        console.log(error);
        return "날짜 범위를 선택해주세요.";
    }
};

// 데이트 피커 close
const alertFn = () => {

}

// 교육생 출결 정보 변수
let personalAttendance = ref(
    // "adate": "2024-07-01",
    // "acheckin": "09:05",
    // "acheckout": "17:58",
    // "astatus": "정상출결",
    // "aconfirm": true,    // 출결 승인 여부
    // "anconfirm": false   // 출결 - 결석 및 조퇴 사유 신청 승인여부
)

// 교육생 출결 정보 가져오기
async function personalAttendanceInfo(mid, startdate, enddate) {
    try {
        const response = await attendanceAPI.getTraineeAttendanceDetail(mid, startdate, enddate);
        personalAttendance.value = response.data;
        console.log(response.data);
        console.log("개인 출결 현황 정보 가져오기 성공");
    } catch (error) {
        console.log("개인 출결 현황 정보 가져오기 실패");
    }
}

// 데이트 피커의 값이 변한다면 그에 따른 리스트 불러오
watch(
    () => date.value,
    (nv, ov) => {
        dateRangeFormat(nv);
        personalAttendance.value = personalAttendanceInfo(mid.value, selectDates.value.substring(0, 10), selectDates.value.substring(13, 23));
    }
)

// 사유 모달
let attendanceReasonDialog = null;

// 사유 보기 버튼 클릭시, 교육생이 제출한 사유에 대한 모달 활성화
function handlerReasonBtn(adate) {
    // modal 객체 생성
    attendanceReasonDialog = new Modal(document.querySelector("#attendanceReasonDialog"+adate));
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

/* img ------------*/
.profile_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding: 0;
    background: white;
}

.profile_attach {
    line-height: normal;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    display: flex;
    align-items: center;
}

.profile_info {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 30px;
}

/*사용자 이미지 틀 (원형)*/
.user-img {
    width: 90px;
    height: 90px;
    border-radius: 25px;
    margin-left: 10px;
    overflow: hidden;
}

/*사용자 이미지 사이즈 조정*/
.user-img img {
    width: 100%;
    object-fit: cover;
}

.user-name {
    line-height: normal;
    font-size: 15px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 0;
}

.user-course {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-top: 10px;
    color: #3d3d3d;
}

.profile_info {
    padding-right: 20px;
}

.profile-info-contents h5,
profile-info-contents span {
    display: inline;
    color: #3d3d3d;
}

.profile-info-contents span {
    margin-left: 10px;
    color: #919191;
}

.img-td {
    color: var(--txt-color);
    border-collapse: collapse;
    box-sizing: border-box;
    display: table-cell;
    flex: 1;
    margin: 0;
    margin-left: 30px;
}
</style>
