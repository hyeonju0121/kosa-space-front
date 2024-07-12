<template>
    <div class="main p-3" style="margin-left: 25px;">
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
                    <select id="educenter" title="교육장 선택" v-model="filter.ecname" :class="btnEnable">
                        <option selected disabled :value="''">교육장 선택</option>
                        <option v-for="item in ecnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select id="course" title="교육과정 선택" v-model="filter.cname" :class="btnEnable">
                        <option selected disabled :value="''">교육과정 선택</option>
                        <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>

            </div>
        </form>

            <div class="container mt-3">
                <div class="d-flex align-content-center mb-4">

                </div>
                <div class="select-course-contents ms-3 mb-4">
                    <h5 class="course-name">MSA 기반 Full Stack 개발 전문가 양성과정 2차</h5>
                    <span class="course-requireddate">(2024.02.26 ~ 2024.07.26)</span>
                </div>
                <div class="table">
                    <table class="table" style="width: 1000px">
                        <thead class="text-center align-middle" style="height: 70px;">
                            <th style="width: 15%">프로필</th>
                            <th style="width: 15%">이름</th>
                            <th style="width: 30%">교육생 번호</th>
                            <th style="width: 40%">상세보기</th>
                        </thead>
                        <tbody class="text-center align-middle">
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/hyeonju.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>유팀장</td>
                                <td>M2001</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/seongmin.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>김성민</td>
                                <td>M2002</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/kyungseob.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>홍경섭</td>
                                <td>M2003</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
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
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';

const router = useRouter();

let ecnames = ref();
let cnames = ref();

onMounted(() => {
    console.group("진행중인 교육과정 확인");
    progressCourseList(filter.value.ecname);

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

watch(
    () => filter.value.ecname,
    (newEcname, oldEcname) => {
        console.log("ecname 값 변경 oldEcname = " + oldEcname);
        console.log("ecname 값 변경 newEcname = " + newEcname);
        progressCourseList(newEcname);
    }
)

watch(
    () => filter.value.cname,
    (newCname, oldCname) => {
        console.log("ecname 값 변경 oldCname = " + oldCname);
        console.log("ecname 값 변경 newCname = " + newCname);
        // totalAttendanceList(filter.value.ecname, newCname, adate);
    }
)



function handleDailyNoteBtn() {
    router.push('/admin/dailynote/trainee/note/list');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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
