<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육생 관리 > 교육생 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 목록</h1>
            </div>

            <!--필터 (현주 추가)-->
            <div class="d-flex justify-content-between mt-3">
                <div class="d-flex">
                    <div class="InpBox">
                        <select id="educenter" title="교육장 선택" v-model.trim="ecname" @change="centerChange()">
                            <option :value="''" disabled selected>교육장 선택</option>
                            <option v-for="ecname in ecnames" :key="ecname" :value="ecname"> {{ ecname }}
                            </option>
                        </select>
                    </div>

                    <div class="InpBox" style="margin-left: 1%; width: 370px;">
                        <select :class="courseShow" id="course" title="교육과정 선택" v-model.trim="cname"
                            @change="courseChange()">
                            <option :value="''" disabled selected>교육과정 선택</option>
                            <option v-for="cname in cnames" :key="cname" :value="cname"> {{ cname }}
                            </option>
                        </select>
                    </div>
                </div>
                <!-- 교육생 등록 버튼 -->
                <div class="d-flex justify-content-end mb-3 me-3" style="text-align:right;">
                    <button class="btn btn-dark" @click="handleCreateBtn()">교육생
                        등록</button>
                </div>
            </div>

            <!-- 교육생 리스트 -->
            <TraineeList :ecname="ecname" :cname="cname" ref="$traineeList" />
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import courseAPI from '@/apis/courseAPI';

import TraineeList from './components/TraineeList.vue'

const router = useRouter();
const route = useRoute();

/* 
    교육생 목록에 현재 DB에 등록되어있는 교육장들과 
    그에 따른 교육과정들의 정보가 마운트되어야 함.
*/
onMounted(() => {
    console.group("onMounted 실행");
    listCenterSet();

    console.log("route.query.ecname = " + route.query.ecname);
    console.log("route.query.cname = " + route.query.cname);
    console.groupEnd();
});

// 교육장 리스트를 받아올 변수
let ecnames = ref("");

// 교육장 리스트에서 선택한 값을 받아올 변수
let ecname = ref(route.query.ecname || '');
// let ecname = ref("");

// 교육과정 리스트를 받아올 변수
let cnames = ref("");

// 교육과정 리스트에서 선택한 값을 받아올 변수
let cname = ref(route.query.cname || '');
// let cname = ref("");

// page number
const pageNo = ref(route.query.PageNo || 1);

// 서버에서 받아오는 값을 저장할 변수
let responseList = ref();

// 교육장 필터 선택에 따른 교육과정 select 태그 선택 여부
let courseShow = ref("btn disabled");

// 등록된 교육장 불러오기
async function listCenterSet() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1);
        console.log("교육장 리스트 가져오기 성공");
    } catch (error) {
        console.log("교육장 리스트 가져오기 실패");
    }
}

// 교육장에 따른 교육과정 불러오기
async function listCourseSet(ecname) {
    try {
        const response = await courseAPI.getCourseNameList(ecname);
        cnames.value = response.data;
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 교육장 필터값 변경시
function centerChange() {
    console.group("교육장 필터 값 변경");
    console.log("ecname.value = " + ecname.value);
    cname.value = '';
    // 교육장에 따른 교육과정 목록 가져오기
    listCourseSet(ecname.value); // O

    // 교육장의 값 변경에 따라 교육과정 필터 선택 버튼 활성화 / 비활성화
    if (ecname.value === "" || ecname.value === "전체" || undefined) {
        courseShow.value = "btn disabled";
    } else {
        courseShow.value = "";
    }

    // '선택된 교육장의 모든 교육과정' 교육생 목록을 불러옴.
    cname.value = '';
    handleTraineeInfoList();
}

// 교육과정 필터 값 변경시
function courseChange() {
    console.log("cname.value = " + cname.value);
    // traineeList(ecname.value, cname.value);
    handleTraineeInfoList();
}


// 교육생 등록 버튼을 눌렀을 시 path와 쿼리 스트링 값 전달
function handleCreateBtn() {
    router.push({
        path: '/admin/trainee/register',
        query: {
            ecname: ecname.value,
            cname: cname.value,
            pageNo: pageNo.value
        }
    })

}

// ----- 자식 컴포넌트의 함수를 부모 컴포넌트에서 호출 --------------------------------------------
const $traineeList = ref();

function handleTraineeInfoList() {
    $traineeList.value.submit();
}

// watch(educenter.value.ecname, (newEcname, oldEcname) => {
//     if (newEcname === '' && newEcname === '전체') {
//         courseShow.value = "btn disabled";
//     } else {
//         courseShow.value = "";
//     }
// });

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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}


/* table (현주 추가) ------------------------------------*/
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
    text-align: left;
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

.createbtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
    margin-left: 10px;
}


/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* 필터 */
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

/* 필터 적용 안할 때 리스트  */
.interview_list .empty_data {
    padding: 72px 0 80px;
    border-bottom: 1px solid #ebedf2;
    color: #575d6d;
    text-align: center;
}

.empty_data img {
    display: block;
    margin: 0 auto;
}

.empty_data .tit {
    display: block;
    margin: 24px auto 4px;
    color: #5c667b;
    font-size: 18px;
    line-height: 32px;
}

.empty_data .txt {
    margin: 0 auto 24px;
    color: #475067;
    font-size: 14px;
    line-height: 24px;
}
</style>
