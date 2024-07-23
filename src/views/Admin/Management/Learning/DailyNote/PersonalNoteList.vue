<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 개인별 데일리 과제 목록 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 목록 조회</h1>
            </div>

            <!-- 해당 교육생 프로필 헤더 -->
            <div class="resume_item represent mb-3">
                <div class="acc_cont">
                    <div class="img-td">
                        <div class="profile_wrap">
                            <div class="profile profile_attach">
                                <div class="user-img">
                                    <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${headerInfo.mid}`"
                                        class="user-img-detail" />
                                </div>
                                <div class="profile_info">
                                    <p class="header"><span>교육생 프로필</span></p>
                                    <h6 class="user-name">{{ headerInfo.mname }} ({{ headerInfo.mid }})</h6>
                                    <div class="profile-info-contents">
                                        <h5 class="user-course">{{ headerInfo.cname }}</h5>
                                        <span class="user-course-requireddate">
                                            ({{ headerInfo.cstartdate }} ~ {{ headerInfo.cenddate }})
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table">
                <table class="" style="width: 1000px; vertical-align: middle;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 15%">이름</th>
                        <th style="width: 15%">교육생 번호</th>
                        <th style="width: 30%">제출여부</th>
                        <th style="width: 25%">상세보기</th>
                        <th style="width: 15%">주차별 태그</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr v-for="item in traineeData.result" :key="item"
                            style="border-bottom:1px solid #dcdcdc; height: 50px; vertical-align: middle;">
                            <td>{{ item.mname }}</td>
                            <td>{{ item.mid }}</td>
                            <td>
                                <div class="btn btn-dark" style="padding: 6px 20px; width: 30%;">{{ item.submitstatus }}</div>
                            </td>
                            <td style="vertical-align: middle;">
                                <!-- <button class="detail-btn" style="margin-top: 10px; margin-bottom: 10px;" @click="handleDailyNoteBtn"> -->
                                <button @click="goPersonalNoteDetail(item.mid, item.refweek, rPageNo)" class="detail-btn"
                                    style="margin-top: 10px; margin-bottom: 10px;">
                                    과제 상세 보기
                                </button>
                            </td>
                            <td>
                                <span class="btn btn-primary">{{ item.refweek }}</span>
                            </td>
                        </tr>

                    </tbody>
                    <tfoot>
                        <!-- <td colspan="6" class="text-center" style="height: 50px">
                            <b class="text-danger">페이지네이션 추가</b>
                        </td> -->
                    </tfoot>
                </table>

                <div class="mt-2" style="display: flex; justify-content: center;">
                    <div>
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(mid, adate, 1)">처음</button>
                        <button v-if="traineeData.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(mid, adate, traineeData.pager.startPageNo - 1)">이전</button>
                        <button v-for="pageNo in traineeData.pager.pageArray" :key="pageNo"
                            :class="(traineeData.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                            class="btn btn-sm me-1" @click="changePageNo(mid, adate, pageNo)">
                            {{ pageNo }}
                        </button>
                        <button v-if="traineeData.pager.groupNo < traineeData.pager.totalGroupNo"
                            class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(mid, adate, traineeData.pager.endPageNo + 1)">다음</button>
                        <button class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(mid, adate, traineeData.pager.totalPageNo)">맨끝</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter, useRoute } from 'vue-router';
import { watch, ref, onMounted } from 'vue';
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import referenceDataAPI from '@/apis/referenceDataAPI';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import axios from 'axios';

const router = useRouter();
const route = useRoute();


onMounted(() => {
    traineeHeader(mid.value);
    traineeList(mid.value, adate.value, rPageNo.value);
})

let mid = ref(route.query.mid || '');
const adate = ref(route.query.adate || "2024-07-15");

console.log("mid: " + mid.value);


const traineeData = ref({
    pager: "",
    result: ""
})

const rPageNo = ref(route.query.rPageNo || 1);


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

async function traineeList(mid, adate, pageNo) {
    try {
        const response = await referenceDataAPI.personalDailySubmitList(mid, adate, pageNo);
        traineeData.value = response.data;

        console.log("traineeData.value = " + traineeData.value);
    } catch (error) {
        console.log("traineeList 메소드 실패");
        console.log(error);
    }
}

function goPersonalNoteDetail(mid, refweek, pageNo) {
    router.push({
        path: '/admin/dailynote/trainee/note/detail',
        query: {
            mid: mid,
            refweek: refweek,
            rPageNo: pageNo
        }
    })
}


// -- 페이징 처리 --
function changePageNo(mid, adate, argPageNo) {
    console.log("changePageNo 함수 실행");
    console.log("argPageNo = " + argPageNo);

    console.log("mid.value = " + mid);
    console.log("rPageNo.value = " + argPageNo);
    rPageNo.value = argPageNo;

    // router.push(`/admin/dailynote/trainee/note/list?rPageNo=${argPageNo}`);
    // router.push(`/admin/dailynote/trainee/note/list?mid=${mid}&adate=${adate.value}&rPageNo=${argPageNo}`);
    router.push({
        path: "/admin/dailynote/trainee/note/list",
        query: {
            mid: mid,
            adate: adate.value,
            rPageNo: argPageNo
        }
    });
}

// watch(
//     () => rPageNo.value,
//     (nv, ov) => {
//         console.log("rPageNo.value 값 변경 ov = " + ov);
//         console.log("rPageNo.value 값 변경 nv = " + nv);
//         traineeList(mid.value, adate.value, rPageNo.value);
//     }
// )

// 요청 경로의 변경을 감시
watch(route, (newRoute, oldRoute) => {
    if (newRoute.query.rPageNo) { // 쿼리에 pageNo가 들어있으면 해당 페이지로 요청
        // traineeList(traineeData.value.result.mid, traineeData.value.result.refweek, newRoute.query.rPageNo);
        //traineeList(mid.value, traineeData.value.result.refweek, newRoute.query.rPageNo);
        traineeList(mid.value, adate.value, newRoute.query.rPageNo);
        rPageNo.value = newRoute.query.rPageNo;
    } else { // 안들어왔으면 1페이지 그대로
        // traineeList(traineeData.value.result.mid, traineeData.value.result.refweek, 1);
        //traineeList(mid.value, traineeData.value.result.refweek, 1);
        traineeList(mid.value, adate.value, 1);
        rPageNo.value = 1;
    }
});


// function handleDailyNoteBtn() {
//     router.push('/admin/dailynote/trainee/note/detail');
// }
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
select,
strong,
th,
td,
button {
    font-family: 'Noto Sans KR', sans-serif;
}

.detail-btn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    color: white;
    background-color: #22C55E;
    border: 1px solid white;
    margin-left: 10px;
    border-radius: 9px;
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
    /*background: white;*/
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
    font-weight: 600;
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


/*  header*/
.resume_item.represent {
    padding: 20px;
    border-top: none;
    border-radius: 16px;
    background-color: #f3fffb;
}

.resume_item {
    display: block;
    position: relative;
    padding: 32px;
    border-top: 1px solid #dcdcdc;
    font-size: 0;
    text-align: left;
}

.resume_item.type_profile .header {
    width: 100px;
}

.resume_item .header {
    display: flex;
    position: relative;
    color: #116d3f;
    font-size: 14px;
    font-weight: bold;
    line-height: 16px;
}

.header>span {
    position: relative;
    box-shadow: inset 0 -8px 0 #dbfee8;
}

.resume_item.type_profile .profile_info {
    margin-left: 22px;
    width: 100%;
}

</style>
