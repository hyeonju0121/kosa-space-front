<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육과정 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea mb-3">
            <div class="title">
                <h1 id="itemTitle">교육과정 목록</h1>
            </div>
        </div>

        <div class="align" style="display: flex;">
            <div class="InpBox">
                <select id="room" title="교육장 선택" v-model="filter.ecname">
                    <option :value="''" disabled selected>교육장 선택</option>
                    <option v-for="name in nameList" :value="name" :key="name">{{ name }}</option>
                </select>
            </div>
            <div class="InpBox" style="margin-left: 1%;">
                <select id="status" title="진행 여부" v-model="filter.cstatus">
                    <!-- <option :value="''" disabled selected>진행 여부</option> -->
                    <option :value="filter.cstatus">{{ filter.cstatus }}</option>
                    <option value="진행예정">진행예정</option>
                    <option value="진행중">진행중</option>
                    <option value="진행완료">진행완료</option>
                </select>
            </div>
            <div class="InpBox" style="margin-left: 1%;">
                <select id="professor" title="강사진" v-model="filter.cprofessor">
                    <!-- <option value="" selected>강사진</option> -->
                    <option :value="filter.cprofessor">{{ filter.cprofessor }}</option>
                    <option value="신용권">신용권</option>
                    <option value="마성일">마성일</option>
                    <option value="조효석">조효석</option>
                </select>
            </div>

            <button type="button" class="BtnType SizeM" style="margin-left: 47%;" @click="handleCreateBtn">
                교육과정 등록
            </button>
        </div>
        <!-- 교육과정 목록 부분 -->
        <div>
            <ul class="self_exam_list">
                <li v-for="course in courseData.courseInfo" :key="course.cno" class="personality_test">
                    <div class="course-img">
                        <div v-for="(url, index) in course.attachments" :key="index" class="course-img">
                            <img :src="course.attachments[0]" class="course-img-detail"
                                style="width: 150px; height: 140px;">
                        </div>

                    </div>
                    <h5 class="tit">{{ course.cname }}
                        <div style="display: flex;">
                            <span class="new_mark1">{{ course.ecname }}</span>
                            <span class="new_mark_complete" style="margin-left:2%;">{{ course.cstatus }}</span>
                            <span class="new_mark3" style="margin-left:2%;">{{ course.cprofessor }}</span>
                        </div>
                        <div style="margin-top: 2%;">
                            <RouterLink :to="`/admin/course/update?cno=${course.cno}`">
                                <button type="button" class="btn btn-outline-dark btn-sm"
                                    @click="handleUpdateBtn">수정</button>
                            </RouterLink>

                            <button type="button" class="btn btn-outline-dark btn-sm"
                                style="margin-left: 2%;">삭제</button>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">{{ course.cstartdate }}~{{ course.cenddate }}</p>

                        <span class="contents_mark" style="float:left;">요일시간</span>
                        <p class="contents_txt">{{ course.ctrainingdate }} / {{ course.ctrainingtime }}</p>

                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">{{ course.ctotalnum }}명</p>

                        <span class="contents_mark" style="float:left;">교육장</span>
                        <p class="contents_txt">{{ course.ecname }}</p>
                    </div>
                </li>
            </ul>

            <div v-if="courseData.courseInfo.length > 0">
                <div class="mt-2" style="display: flex; justify-content: center;">
                    <div>
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                        <button v-if="courseData.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(courseData.pager.startPageNo - 1)">이전</button>
                        <button v-for="pageNo in courseData.pager.pageArray" :key="pageNo"
                            :class="(courseData.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                            class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                            {{ pageNo }}
                        </button>
                        <button v-if="courseData.pager.groupNo < courseData.pager.totalGroupNo"
                            class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(courseData.pager.endPageNo + 1)">다음</button>
                        <button class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(courseData.pager.totalPageNo)">맨끝</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import courseAPI from '@/apis/courseAPI';
import { onMounted, ref, watch } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

onMounted(() => {
    educenterNameList();
    // 요청 url에 쿼리 스트링이 있다면
    if (route.query.ecname) {
        console.log("route.query.ecname = " + route.query.ecname);
    } else {
        filter.value.ecname = "송파교육센터";
    }

    getCourseData(filter.value.ecname, filter.value.cstatus, filter.value.cprofessor, cPageNo.value);
});

// 교육과정 등록 버튼
function handleCreateBtn() {
    router.push({
        path: "/admin/course/create",
        query: {
            ecname: filter.value.ecname,
            cstatus: filter.value.cstatus,
            cprofessor: filter.value.cprofessor,
            cPageNo: cPageNo.value
        }
    });
}


// 교육과정 수정 버튼
function handleUpdateBtn() {
    router.push({
        path: "/admin/course/update",
        query: {
            ecname: filter.value.ecname,
            cstatus: filter.value.cstatus,
            cprofessor: filter.value.cprofessor,
            cPageNo: cPageNo.value
        }
    });
}

// 필터 상태 객체 정의
const filter = ref({
    ecname: route.query.ecname || "교육장 선택",
    cstatus: route.query.cstatus || "전체",
    cprofessor: route.query.cprofessor || "전체"
});

// route.query값이 있다면 셀렉트 버튼 활성화 / 비활성화
// let btnEnable = ref("");

// 교육장 이름 전체 목록을 가져오는 메소드
const nameList = ref();

// 등록된 교육장 목록 가져오기
async function educenterNameList() {
    try {
        const response = await educenterAPI.educenterNameList();
        nameList.value = response.data.splice(1); // 인덱스 0번째 요소 '전체'를 뺌
    } catch (error) {
        console.log(error);
    }
}

// 교육과정 목록을 가져오는 메소드
const courseData = ref({
    courseInfo: "",
    pager: ""
});

// 교육과정 데이터(리스트) 가져오는 메소드
async function getCourseData(ecname, cstatus, cprofessor, pageNo) {
    try {
        console.log("getCourseData 실행");
        if (ecname === "" || ecname === "전체" || ecname === undefined) ecname = "all";
        if (cstatus === "" || cstatus === "전체" || cstatus === undefined) cstatus = "all";
        if (cprofessor === "" || cprofessor === "전체" || cprofessor === undefined) cprofessor = "all";
        const response = await courseAPI.getCourseList(ecname, cstatus, cprofessor, pageNo);
        courseData.value = response.data;
        console.log("courseData = " + courseData.value);

        //각 교육과정 첨부파일 URL 가져오기
        for (const course of courseData.value.courseInfo) {
            if (course.eanoList && course.eanoList.length > 0) {
                course.attachments = [];
                for (const eano of course.eanoList) {
                    const url = await getAttach(eano);
                    course.attachments.push(url);
                }
            }
        }

    } catch (error) {
        console.log(error);
    }
}

// eano를 통해 해당 첨부 파일을 가져오는 함수
async function getAttach(eano) {
    try {
        const response = await courseAPI.getCourseAttach(eano);
        const blob = response.data;
        return URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

const cPageNo = ref(route.query.cPageNo || 1);

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    console.log("changePageNo 함수 실행");
    console.log("argPageNo = " + argPageNo);
    cPageNo.value = argPageNo;
    getCourseData(filter.value.ecname, filter.value.cstatus, filter.value.cprofessor, cPageNo.value);
}

watch(() => filter.value.ecname,
    (nv, ov) => {
        filter.value.cstatus = "전체";
        filter.value.cprofessor = "전체";
        getCourseData(nv, filter.value.cstatus, filter.value.cprofessor, 1);
    })

watch(() => filter.value.cstatus,
    (nv, ov) => {
        filter.value.cprofessor = "전체";
        getCourseData(filter.value.ecname, nv, filter.value.cprofessor, 1);
    })

watch(() => filter.value.cprofessor,
    (nv, ov) => {
        getCourseData(filter.value.ecname, filter.value.cstatus, nv, 1);
    })



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

/*교육과정 이미지 틀 (원형)*/
.course-img {
    position: absolute;
    left: 0px;
    width: 170px;
    height: 170px;
    overflow: hidden;
}

/*교육과정 이미지 사이즈 조정*/
.course-img img {
    width: 100%;
    object-fit: cover;
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

/* ------ contents ---------------*/
.self_exam_wrap .self_exam_list {
    display: block;
    margin-top: 10px;
    border-bottom: 1px solid #eaedf4;
}

ul,
li {
    list-style: none;
}

ul {
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    unicode-bidi: isolate;
}

.new_mark1 {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: #4876ef;
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: #d4e2f7;
}

.new_mark2 {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: #2a7c6d;
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: #defaf6;
}

.new_mark3 {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(115, 68, 227);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgb(236, 236, 255);
}

.new_mark_complete {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
}

.new_mark_proceeding {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(241, 104, 21);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgb(255, 242, 221);
}

.contents_mark {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(127, 127, 127);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgba(226, 229, 231, 0.69);
}

.txt_heading {
    display: block;
    margin-bottom: 8px;
    max-width: 450px;
    color: #373f57;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}

.txt {
    display: block;
    margin-bottom: 8px;
    max-width: 450px;
    color: #373f57;
    font-size: 16px;
    line-height: 24px;
}

.contents_txt {

    margin-bottom: 8px;
    color: #373f57;
    font-size: 16px;
    line-height: 24px;
}

.self_exam_list>li .body {
    position: relative;
    width: 100%;
    padding-left: 6%;
}

.self_exam_list>li .body .status {
    display: block;
    margin-bottom: 40px;
}

.self_exam_list {
    display: block;
    border-bottom: 1px solid #eaedf4;
}

.self_exam_list>li {
    display: inline-block;
    position: relative;
    padding: 37px 37px 37px 520px;
    width: 100%;
    border-top: 1px solid #d7dce5;
    box-sizing: border-box;
    font-size: 0;
    text-align: left;
    background-repeat: no-repeat;
    background-position: 40px 32px;
}

.self_exam_list>li>.tit {
    display: inline-block;
    position: absolute;
    top: 32px;
    left: 190px;
    max-width: 350px;
    color: #373f57;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
}
</style>
