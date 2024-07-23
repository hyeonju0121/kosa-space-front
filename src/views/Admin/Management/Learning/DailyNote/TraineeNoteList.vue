<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 데일리 과제 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">데일리 과제 현황 조회</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="교육장 선택" v-model="filter.ecname" class="btnEnable">
                        <!-- <option selected disabled :value="''">교육장 선택</option> -->
                        <option selected disabled :value="filter.ecname">{{ filter.ecname }}</option>
                        <option v-for="item in ecnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select id="course" title="교육과정 선택" v-model="filter.cname" class="btnEnable">
                        <!-- <option selected disabled :value="''">교육과정 선택</option> -->
                        <option selected disabled :value="filter.cname">{{ filter.cname }}</option>
                        <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>

            </div>
        </form>

        <div class="container mt-3">
            <div class="d-flex align-content-center mb-4">

            </div>

            <div class="select-course-contents ms-3 mb-4">
                <h5 class="course-name">{{ filter.cname }}</h5>
                <span class="course-requireddate">(2024.02.26 ~ 2024.07.26)</span>
            </div>

            <div class="dailynote-table">
                <table class="styled-table" style="width: 100%;" v-if="length >= 1">
                    <thead class="table-header text-center align-middle"
                        style="border-bottom:1px solid #ccc; height: 70px;">
                        <th style="width: 15%">프로필</th>
                        <th style="width: 15%">이름</th>
                        <th style="width: 30%">교육생 번호</th>
                        <th style="width: 40%">상세보기</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr v-for="items in trainee" :key="items" style="border-bottom:1px solid #dcdcdc;">
                            <td>
                                <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${items.mid}`" width="110"
                                    height="150">
                            </td>
                            <td>{{ items.mname }}</td>
                            <td>{{ items.mid }}</td>
                            <td>
                                <button type="button" id="detailBtn" class="btn bg-main"
                                    @click="goPersonalDailyList(items.mid, adate, pageNo)">
                                    과정 상세보기
                                </button>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import courseAPI from '@/apis/courseAPI';
import educenterAPI from '@/apis/educenterAPI';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import axios from 'axios';


const router = useRouter();
const route = useRoute();

let ecnames = ref();
let cnames = ref();

// DB로부터 받아올 데이터를 저장할 변수
let trainee = ref();

// 받아오는 데이터의 길이 값을 받을 변수
let length = ref();

onMounted(() => {
    console.group("진행중인 교육과정 확인");
    progressCourseList(filter.value.ecname);
    traineeList(filter.value.ecname, filter.value.cname);

    // 등록된 교육장 불러오기
    listCenterSet();
})

// 필터 상태 객체 정의
const filter = ref({
    ecname: "송파교육센터",
    cname: "MSA 2차 Full Stack 개발자 양성과정"
});

// 1. 교육장 목록 가져오기
async function listCenterSet() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1);
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 2. 진행중인 교육과정 목록 가져오기
async function progressCourseList(ecname) {
    // getInprogressCourseList
    try {
        const response = await courseAPI.getInprogressCourseList(ecname);
        cnames.value = response.data;
        console.log("cnames.value = " + cnames.value);
        console.log("진행중인 교육과정 정보 가져오기 성공");
    } catch (error) {
        console.log(error);
        console.log("진행중인 교육과정 정보 가져오기 실패");
    }
}

// 3. 교육장, 교육과정 기준으로 교육생 리스트 가져오기
// 교육생 리스트 가져오기
async function traineeList(ecname, cname) {
    try {
        console.log("traineeList 실행");
        console.log("ecname = " + ecname);
        console.log("cname = " + cname);
        if (ecname === "undefined") ecname = "all";
        if (cname === "undefined") cname = "all";
        const response = await traineeInfoAPI.getTraineeList(ecname, cname);
        trainee.value = response.data;
        // console.log("response.data.rnum = " + JSON.stringify(response.data));
        console.log("trainee.value = " + trainee.value.length);
        length.value = trainee.value.length;
    } catch (error) {
        console.log("traineeList 메소드 실패");
        console.log(error);
    }
}

const adate = "2024-07-15";
const rPageNo = ref(route.query.rPageNo || 1);

// 4. 교육생 번호를 눌렀을때 교육생 상세조회가 된다.
function goPersonalDailyList(mid, adate, rPageNo) {
    router.push({
        path: '/admin/dailynote/trainee/note/list',
        query: {
            mid: mid,
            adate: adate,
            rPageNo: 1
        }
    })
}

watch(
    () => filter.value.ecname,
    (newEcname, oldEcname) => {
        console.log("ecname 값 변경 oldEcname = " + oldEcname);
        console.log("ecname 값 변경 newEcname = " + newEcname);
        progressCourseList(newEcname);
        filter.value.cname = "교육과정 선택"
        traineeList(filter.value.ecname, "all");
    }
)

watch(
    () => filter.value.cname,
    (newCname, oldCname) => {
        console.log("ecname 값 변경 oldCname = " + oldCname);
        console.log("ecname 값 변경 newCname = " + newCname);
        traineeList(filter.value.ecname, filter.value.cname);
    }
)

function handleDailyNoteBtn() {
    router.push('/admin/dailynote/trainee/note/list');
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
select,
strong,
th,
td,
button {
    font-family: 'Noto Sans KR', sans-serif;
}


.btn.bg-main {
    color: #ffffff;
    border: 1px solid #22C55E;
    background: #22C55E;
}


.btnEnable {
    width: 400px;
    height: 54px;
    font-size: 16px;
    color: #303030;
    border-radius: 9px;
    background: #8a8a91
}

.dailynote-table {
    border-top: 1px solid #37c375;

}

.th {
    border-bottom: 1px solid #ccc;
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


</style>
