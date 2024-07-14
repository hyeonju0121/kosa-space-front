<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 목록</span>
        </div>

        <!-- 
      <article class="key_visual_area visual_customer">
					<div class="txt_area">
						<h2>공지사항</h2>
						<p>코사스페이스에서 알리는 새소식을 안내해 드립니다.</p>
					</div>
					<figure class="img" title="고객센터 이미지">
            <img src="@/assets/visual_customer.png" style="width: 200px; height: 150px;">
          </figure>
			</article>
    -->

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex; margin-bottom: 5%;">
                <div class="InpBox">
                    <select title="교육장 선택" v-model="filter.ecname" :class="btnEnable">
                        <!-- <option selected disabled :value="''">교육장 선택</option> -->
                        <option selected :value="filter.ecname">{{ filter.ecname }}</option>
                        <option v-for="item in ecnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select title="교육과정 선택" v-model="filter.cname" :class="btnEnable">
                        <!-- <option selected disabled :value="''">교육과정 선택</option> -->
                        <option selected :value="filter.cname">{{ filter.cname }}</option>
                        <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>

                <!--
          <div class="InpBox" style="margin-left: 1%; width: 150px;">
            <select title="카테고리 선택" v-model="filter.ncategory" :class="btnEnable">
              <option selected disabled :value="''">카테고리 선택</option>
              <option value="all">전체</option>
              <option value="출결">출결</option>
              <option value="수업">수업</option>
              <option value="강의실">강의실</option>
              <option value="취업">취업</option>
              <option value="행사">행사</option>
            </select>
          </div>
        -->
            </div>
        </form>

        <div class="search-head-sec">
            <div class="search-title" id="listCnt">
                <!-- <p><b>총 <span class="search-num">{{ notices.length }}</span>개</b>의 글이 등록되어 있습니다</p> -->
            </div>
            <div class="search-input-box">
                <div class="search-input-group">
                    <div class="lpart">
                        <select id="columnName" class="dsgn-select" title="검색 구분 선택"
                            v-model="filter.ncategory">
                            <!-- <option value="">카테고리 선택</option> -->
                            <!-- <option :value="filter.ncategory">{{ filter.ncategory }}</option> -->
                            <option value="all">전체</option>
                            <option value="출결">출결</option>
                            <option value="수업">수업</option>
                            <option value="강의실">강의실</option>
                            <option value="취업">취업</option>
                            <option value="행사">행사</option>
                        </select>
                    </div>
                    <div class="rpart">
                        <div class="input-box">
                            <input type="text" id="columnValue" class="dsgn-input" placeholder="검색어를 입력하세요" value=""
                                title="검색어 입력">
                            <button type="button" class="btn btn-txtclear"><span class="icon-txtclear"><span
                                        class="hidden-txt">문구삭제</span></span></button>
                        </div>
                        <button type="button" id="searchBtn" class="btn btn-sub bg-main btn-search">검색</button>
                        <button type="button" id="searchBtn" class="btn btn-sub bg-main btn-search"
                            @click="handleCreateBtn">공지사항 등록</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-3">
            <table class="notice-table">
                <tbody>
                    <!-- <tr v-for="item in noticeList.notice" :key="item" :class="{ 'highlight': notice.highlight }"> -->
                    <tr v-for="item in noticeList.notice" :key="item">
                        <td class="label">{{ item.rnum }}</td>
                        <td class="label">
                            <span class="d-flex">
                                <span class="new_mark2">전체</span>
                                <span class="new_mark_complete ms-2">{{ item.ncategory }}</span>
                            </span>
                        </td>
                        <td class="title"><span @click="goNoticeDetail(item.nno)" style="cursor: pointer;">{{
                            item.ntitle }}</span></td>
                        <td class="date">{{ item.ncreatedat.substring(0, 10) }}</td>
                        <td class="views">{{ item.nhitcount }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="noticeList.notice.length > 1">
            <div class="mt-2" style="display: flex; justify-content: center;">
                <div>
                    <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                    <button v-if="noticeList.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                        @click="changePageNo(noticeList.pager.startPageNo - 1)">이전</button>
                    <button v-for="pageNo in noticeList.pager.pageArray" :key="pageNo"
                        :class="(noticeList.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                        class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                        {{ pageNo }}
                    </button>
                    <button v-if="noticeList.pager.groupNo < noticeList.pager.totalGroupNo"
                        class="btn btn-outline-info btn-sm me-1"
                        @click="changePageNo(noticeList.pager.endPageNo + 1)">다음</button>
                    <button class="btn btn-outline-info btn-sm me-1"
                        @click="changePageNo(noticeList.pager.totalPageNo)">맨끝</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import communityAPI from '@/apis/communityAPI';
import educenterAPI from '@/apis/educenterAPI';
import courseAPI from '@/apis/courseAPI';

import { ref, onMounted, watch } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const nPageNo = ref(route.query.nPageNo || 1);

const ecnames = ref();
const cnames = ref();

const noticeList = ref({
    notice: "",
    pager: ""
});

let filter = ref({
    ecname: route.query.ecname || "송파교육센터",
    cname: route.query.cname || "MSA 2차 Full Stack 개발자 양성과정",
    ncategory: route.query.ncategory || "전체"
});

const btnEnable = ref("");

onMounted(() => {
    console.group("공지사항 목록 화면 랜더링 완료");
    // 교육장 목록 (필터)
    listCenterSet();
    // 진행중인 교육과정 가져오기 (필터)
    progressCourseList(filter.value.ecname);
    // 교육장과 교육과정에 따른 공지 목록 가져오기
    getNoticeList(filter.value.ecname, filter.value.cname, filter.value.ncategory, nPageNo.value);


    console.groupEnd();
});


// 1. 교육장 목록 가져오기 ( O )
async function listCenterSet() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1);
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 2. 진행중인 교육과정 목록 가져오기 ( O )
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

// 3. 교육장과 교육과정에 따른 공지사항 목록 리스트 가져오기
async function getNoticeList(ecname, cname, ncategory, pageNo) {
    try {
        console.group("getNoticeList 실행");
        console.log("ecname = " + ecname);
        console.log("cname = " + cname);
        console.log("ncategory = " + ncategory);
        console.log("pageNo = " + pageNo);

        if (ncategory === "전체") ncategory = 'all';

        const response = await communityAPI.getNoticeList(ecname, cname, ncategory, pageNo);
        noticeList.value.notice = response.data.notice;
        noticeList.value.pager = response.data.pager;
        // test.value = response.data;
        console.log("공지사항 목록 가져오기 성공");
        console.log("noticeList.value.notice = " + noticeList.value.notice);
        console.log("noticeList.value.pager = " + noticeList.value.pager);
        // console.log("test.value = " + JSON.stringify(test.value));
        console.groupEnd();
    } catch (error) {
        console.log(error);
        console.log("공지사항 목록 가져오기 실패");
    }
}

watch(
    () => filter.value.ecname,
    (nv, ov) => {
        console.log("filter.value.ecname 변경 전 = " + nv);
        console.log("filter.value.ecname 변경 후 = " + ov);
        filter.value.cname = "교육과정 선택";
        getNoticeList(nv, filter.value.cname, filter.value.ncategory, nPageNo.value);
        progressCourseList(nv);
    }
)

watch(
    () => filter.value.cname,
    (nv, ov) => {
        console.log("filter.value.cname 변경 전 = " + nv);
        console.log("filter.value.cname 변경 후 = " + ov);
        getNoticeList(filter.value.ecname, nv, filter.value.ncategory, nPageNo.value);
    }
)

watch(
    () => filter.value.ncategory,
    (nv, ov) => {
        console.log("filter.value.cname 변경 전 = " + nv);
        console.log("filter.value.cname 변경 후 = " + ov);
        getNoticeList(filter.value.ecname, nv, filter.value.ncategory, nPageNo.value);
    }
)

// 공지사항 단건 조회
function goNoticeDetail(nno) {
    router.push({
        path: "/admin/notice/detail",
        query: {
            nno: nno,
            nPageNo: nPageNo.value,
            ecname: filter.value.ecname,
            cname: filter.value.cname,
            ncategory: filter.value.ncategory,
            mid: noticeList.value.notice.mid
        }
    })
}



function handleSubmitFilter1() {
    // Filtering logic here
}

function handleCreateBtn() {
    // Logic to handle the create button click
}

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    console.log("changePageNo 함수 실행");
    console.log("argPageNo = " + argPageNo);
    nPageNo.value = argPageNo;
    getNoticeList(filter.value.ecname, filter.value.cname, filter.value.ncategory, argPageNo);
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

a {
    text-decoration: none;
}

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

.mt-3 {
    margin-top: 1rem;
}

.notice-summary {
    font-size: 1rem;
    margin-bottom: 1rem;
}

.search-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
}

.search-box input {
    width: 200px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
}

.search-box button {
    background-color: #ccc;
    border: 1px solid #ccc;
    border-left: none;
    padding: 0.5rem 1rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
}

.notice-table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #37c375;
}

.notice-table tr {
    border-bottom: 1px solid #ccc;
}

.notice-table tr.highlight {
    background-color: #f2fdf7;
}

.notice-table td {
    padding: 0.75rem;
}

.notice-table .label {
    width: 5%;
    text-align: center;
    font-weight: bold;
    color: #37c375;
}

.notice-table .title {
    width: 70%;
    text-align: left;
}

.notice-table .date {
    width: 15%;
    text-align: center;
}

.notice-table .views {
    width: 10%;
    text-align: center;
}

.btn-dark {
    background-color: #343a40;
    border-color: #343a40;
    color: #fff;
}

.btn-sm {
    padding: 5px 10px;
    font-size: 12px;
}

.key_visual_area {
    width: 1260px;
    height: 170px;
    border-radius: 10px;
    margin: 0;
    color: #fff;
    padding: 35px 80px 35px 60px;
    display: flex;
    background: #37c375;
    box-sizing: border-box;
}

.key_visual_area .txt_area {
    display: flex;
    flex-direction: column;
}

.key_visual_area h2 {
    font-size: 35px;
}

.key_visual_area p {
    font-size: 15px;
    margin-top: 10px;
    line-height: 1.3;
}

.key_visual_area.visual_customer .img {
    width: 180px;
    height: 133px;
    background: transparent no-repeat 0 0;
    background-size: 227px 200px;
    position: absolute;
    right: 420px;
    top: 53px;
}

/* 검색 */
.search-head-sec {
    padding-bottom: 50px;
}

.search-head-sec .search-title {
    padding-bottom: 30px;
}

.search-title {
    text-align: center;
    font-size: 30px;
}

.search-title .search-num {
    color: #22C55E;
}

.search-title b {
    font-weight: 900;
}

.search-input-group {
    text-align: center;
    font-size: 0;
}

.search-input-group .lpart {
    display: inline-block;
}

.search-input-group .dsgn-select {
    width: 280px;
}

.input-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.dsgn-select {
    width: 400px;
    height: 54px;
    padding: 0 47px 0 20px;
    vertical-align: middle;
    font-size: 16px;
    color: #303030;
    border-radius: 9px;
    background: #f7f7f9 url(https://www.yeskey.or.kr/resources/image/component/form/select_arrow.svg) no-repeat right 20px center;
}

.dsgn-select {
    appearance: none;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
}

.dsgn-input {
    width: 400px;
    height: 54px;
    padding: 0 20px;
    vertical-align: middle;
    font-size: 16px;
    color: #333333;
    border-radius: 9px;
    background: #f7f7f9;
}

.dsgn-input {
    appearance: none;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
}

.search-input-group .rpart {
    display: inline-block;
    margin-left: 10px;
}

.input-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.search-input-group .btn.btn-sub {
    min-width: 80px;
    margin-left: 10px;
    font-weight: 500;
}

.input-box .btn-txtclear {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -20px;
}

.btn.btn-txtclear {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
}

.btn.bg-main {
    color: #ffffff;
    border: 1px solid #22C55E;
    background: #22C55E;
}

.btn.btn-sub {
    min-width: 100px;
    padding: 0 24px;
    height: 50px;
    line-height: 52px;
    border-radius: 7px;
}

.btn {
    vertical-align: middle;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    color: #303030;
    font-size: 16px;
}

/* tag */
.new_mark_complete {
    display: block;
    width: 38px;
    height: 24px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
}

.new_mark2 {
    display: block;
    width: 50px;
    height: 24px;
    border-radius: 4px;
    color: #2a7c6d;
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: #defaf6;
}
</style>