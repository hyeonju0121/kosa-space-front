<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 개인별 데일리 과제 상세 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
            </div>

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
            
            <div class="table">
                <table class="" style="width: 1000px;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 55%">과제 제목</th>
                        <th style="width: 15%">작성일</th>
                        <th style="width: 10%">주차별 태그</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr v-for="item in traineeData" :key="item"
                            style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>
                                <a :href="`${item.refurl}`"
                                    target="_blank" style="text-decoration-line: none; color:black; ">
                                    {{ item.reftitle }}
                                </a>
                            </td>
                            <td>{{ item.refdate }}</td>
                            <td><span class="btn btn-dark btn-sm">{{ item.refweek }}</span></td>
                        </tr>
                      
                    </tbody>
                </table>
                <div class="btn_big_wrap">
                    <BaseButtonSubmit @click="handleCheck">뒤로가기</BaseButtonSubmit>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import referenceDataAPI from '@/apis/referenceDataAPI';
import axios from 'axios';
import traineeInfoAPI from '@/apis/traineeInfoAPI';

const router = useRouter();
const route = useRoute();

const mid = ref(route.query.mid || "");
const rPageNo = ref(route.query.rPageNo || 1);
const refweek = ref(route.query.refweek || "");
const adate = "2024-07-15";

const traineeData = ref({});

onMounted(() => {
    traineeHeader(mid.value);
    traineeList(mid.value, refweek.value);
})

async function traineeList(mid, refweek) {
    try {
        console.log("mid = " + mid);
        console.log("refweek = " + refweek);
        const response = await referenceDataAPI.personalDailySubmitDetail(mid, refweek);
        traineeData.value = response.data;
        
        console.log("traineeData.value = " + traineeData.value);
        console.log("traineeList 메소드 성공");
    } catch (error) {
        console.log("traineeList 메소드 실패");
        console.log(error);
    }
}

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

function handleCheck() {
    // router.back();
    router.push({
        path: '/admin/dailynote/trainee/note/list',
        query: {
            mid: mid.value,
            adate: adate,
            rPageNo: rPageNo.value
        }
    })
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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
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
