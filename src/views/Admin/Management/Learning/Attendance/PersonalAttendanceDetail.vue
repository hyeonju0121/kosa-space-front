<template>
    <div class="main p-3" style="margin-left: 25px;">
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
                    <PersonalProfileHeader />
                </div>

                <!-- 출결 날짜별 조회 -->
                <div class="mb-3">
                    <VueDatePicker v-model="date" range/>
                </div>

                <!-- 개인별 출결조회 테이블 -->
                <div class="container">
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
                            <tr>
                                <!-- <td>{{ personalAttendance.date }}</td>
                                <td>{{ personalAttendance.starttime }}</td>
                                <td>{{ personalAttendance.endtime }}</td>
                                <td>{{ personalAttendance.state }}</td> -->
                                <td></td>
                            </tr>
                            <tr>
                                <td>2024.06.18</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <!-- 사유보기 버튼은 상태가 지각,외출,결석등 일때 나타난다.(현재 사유작성 모달페이지 작성이 안됨 링크 달기x)-->
                                <td><router-link to="" class="btn btn-info btn-sm">사유</router-link></td>
                            </tr>
                            <tr>
                                <td>2024.06.19</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <td><router-link class="btn btn-info btn-sm">사유</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import { ref, onMounted, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { useRoute, useRouter } from 'vue-router';
import attendanceAPI from '@/apis/attendanceAPI';
import { PhStrategy } from '@phosphor-icons/vue';

const route = useRoute();
const router = useRouter();

// 교육생 출결 정보 변수
let personalAttendance = ref(
    // "adate": "2024-07-01",
    // "acheckin": "09:05",
    // "acheckout": "17:58",
    // "astatus": "정상출결",
    // "aconfirm": true,    // 출결 승인 여부
    // "anconfirm": false   // 출결 - 결석 및 조퇴 사유 신청 승인여부
)

const date = ref({
    year: "",
    month: "",
    day: "",
    formattedDate: ""
});

const startDate = new Date();
const endDate = new Date(new Date().setDate(startDate.getDate() + 7));

onMounted(() => {
    // 날짜 date To String
    // startDate
    date.value.year = startDate.getFullYear();
    date.value.month = startDate.getMonth() + 1;
    date.value.day = startDate.getDate();

    // 날짜와 시간을 문자열로 포맷팅
    date.value.formattedDate = `${date.value.year}-${String(date.value.month).padStart(2, '0')}-${String(date.value.day).padStart(2, '0')}`;
    start.value = date.value.formattedDate;
    // 확인
    console.log("start.value = " + start.value);

    // endDate
    date.value.year = endDate.getFullYear();
    date.value.month = endDate.getMonth() + 1;
    date.value.day = endDate.getDate();

    // 날짜와 시간을 문자열로 포맷팅
    date.value.formattedDate = `${date.value.year}-${String(date.value.month).padStart(2, '0')}-${String(date.value.day).padStart(2, '0')}`;
    end.value = date.value.formattedDate;
    // 확인
    console.log("end.value = " + end.value);

})

let start = ref();
let end = ref();


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


// startdate, enddate
// watch([() => start.value, () => end.value],
//     (nv, ov) => {
//         console.log("start.value & end.value ov = " + ov);
//         console.log("start.value & end.value nv = " + nv);
//     }
// )

watch(
    () => start.value,
    (nv, ov) => {
        console.log("start 값 변경 nv = " + nv);
        console.log("start 값 변경 ov = " + ov);
        // // startDate
        // date.value.year = startDate.getFullYear();
        // date.value.month = startDate.getMonth() + 1;
        // date.value.day = startDate.getDate();

        // // 날짜와 시간을 문자열로 포맷팅
        // date.value.formattedDate = `${date.value.year}-${String(date.value.month).padStart(2, '0')}-${String(date.value.day).padStart(2, '0')}`;
        // start.value = date.value.formattedDate;
        // // 확인
        // console.log("start.value = " + start.value);
    }
)

// watch(
//     () => filter.value.cname,
//     (newCname, oldCname) => {
//         console.log("ecname 값 변경 oldCname = " + oldCname);
//         console.log("ecname 값 변경 newCname = " + newCname);
//         totalAttendanceList(filter.value.ecname, newCname, adate);
//     }
// )


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
</style>
