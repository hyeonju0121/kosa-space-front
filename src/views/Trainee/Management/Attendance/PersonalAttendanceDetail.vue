<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>출결 관리 > 개인별 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 출결 현황 조회</h1>
            </div>

            <div>
                <div class="mb-3">
                    <!-- <PersonalProfileHeader /> -->
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

                <div class="mb-3">
                    <VueDatePicker v-model="date" range />
                </div>


                <div class="container">
                    <table class="table table-hover">
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
                                <td>2024.06.17</td>
                                <td>08:30</td>
                                <td>17:55</td>
                                <td>정상 출결</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>2024.06.18</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <td><button class="btn btn-danger btn-sm" @click="handleCreateBtn">사유 제출</button></td>
                            </tr>
                            <tr>
                                <td>2024.06.18</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <td><button class="btn btn-danger btn-sm" @click="handleCreateBtn">사유 제출</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>






            <!-- <div>
                <BaseButtonUpdate @click="handleCreateBtn">사유 작성</BaseButtonUpdate>
            </div> -->
        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter, useRoute } from 'vue-router';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

const mid = ref(route.query.mid || "");
const rPageNo = ref(route.query.rPageNo || 1);
const refweek = ref(route.query.refweek || "");
const adate = "2024-07-15";

const traineeData = ref({});

function handleCreateBtn() {
    router.push(`/trainee/attendance/reason/create`)
}

//datepicker  
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
    traineeHeader("2024M2002");
})

// 교육생 Header 정보 받아오기
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
