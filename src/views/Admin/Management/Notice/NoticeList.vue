<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea" style="margin-bottom: 2%;">
            <div class="title">
                <h1 id="itemTitle">공지사항 목록</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select title="교육장 선택" v-model="filter.ecname" :class="btnEnable">
                        <option selected disabled :value="''">교육장 선택</option>
                        <option v-for="item in ecnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>
                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select title="교육과정 선택" v-model="filter.cname" :class="btnEnable">
                        <!-- <option selected disabled value="">교육과정 선택</option>
                        <option value="2024M2">MSA 기반 Full Stack 개발 전문가 양성과정 2차</option>
                        <option value="2024C1">클라우드 솔루션즈 아키텍트 양성과정 1차</option> -->
                        <option selected disabled :value="''">교육과정 선택</option>
                        <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
                    </select>
                </div>

                <div class="InpBox" style="margin-left: 1%; width: 150px;">
                    <select title="카테고리 선택" v-model="filter.ncategory" :class="btnEnable">
                        <!-- <option selected disabled value="">교육과정 선택</option>
                        <option value="2024M2">MSA 기반 Full Stack 개발 전문가 양성과정 2차</option>
                        <option value="2024C1">클라우드 솔루션즈 아키텍트 양성과정 1차</option> -->
                        <option selected disabled :value="''">카테고리 선택</option>
                        <option value="all">전체</option>
                        <option value="출결">출결</option>
                        <option value="수업">수업</option>
                        <option value="강의실">강의실</option>
                        <option value="취업">취업</option>
                        <option value="행사">행사</option>
                    </select>
                </div>
            </div>
        </form>

        <div class="mt-3" style="text-align:right">
            <input class="btn btn-dark btn-sm" value="등록" @click="handleCreateBtn">
        </div>

        <div class="interview_list_header" style="margin-top: 2%;">
            <div class="total_interviews">총 0건 <span>(2024-07-10 19:50 기준)</span></div>
        
            <!-- 필터 -->
            <div class="search_interview">
                    <div class="TypoBox search_area" style="margin-left: 2%;">
                        <input type="text" class="Typo search" id="search_keyword" value="" placeholder="공지사항 검색">
                        <button type="button" id="keyword_search">
                            <PhMagnifyingGlass color="#838181"  style="width: 24px; height: 24px;"/>
                        </button>
                    </div>
            </div>
        </div>

        <div class="mt-3">
            <!-- 출결 테이블 부분 -->
            <div class="container">
                <div class="container mt-3">
                    <table class="styled-table">
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">제목</th>
                                <th scope="col">교육장</th>
                                <th scope="col">교육과정명</th>
                                <th scope="col">카테고리</th>
                                <th scope="col">공지사항 제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성일</th>
                                <th scope="col">수정일</th>
                                <th scope="col">수정/삭제</th>
                            </tr>
                        </thead>
                        <tbody class="table-group-divider">
                            <tr v-for="item in attendance" :key="item">
                                <td>{{ item.rnum }}</td>
                                <td>{{ item.mname }}</td>
                                <td>{{ item.mid }}</td>
                                <td>{{ item.acheckin }}</td>
                                <td>{{ item.acheckout }}</td>
                                <td>
                                    <div class="attendance-box" style="width: 120%; height: 80px;">
                                        <div style="width: 340px; margin-top: 5%; margin-left: 10px;">
                                            <div class="d-flex flex-row justify-content-between">
                                                <span style="font-size: 14px;"> 2024-07-10기준</span>
                                                <span style="font-size: 14px;">{{ item.percentage }}% ({{ item.approvecnt
                                                }}일 / {{ item.crequireddate }}일)</span>
                                            </div>
                                            <div class="progress" aria-valuenow="50">
                                                <div class="progress-bar bg-success" style="width:70%">{{ item.percentage }}%</div>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{{ item.approvecnt }}</td>
                                <td>{{ item.latenesscnt }}</td>
                                <td>{{ item.absencecnt }}</td>
                                <td>
                                    <router-link to="./trainee/detail" class="btn btn-dark btn-sm">
                                        출결현황 보기
                                    </router-link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <!-- 공지사항 테이블이 나오는 부분-->
        <div class="container">
            <table class="table table-hover" style="text-align:center">
                <thead>
                    <tr>
                        <th>게시글 번호</th>
                        <th>공지사항 제목</th>
                        <th>교육장</th>
                        <th>교육 과정명</th>
                        <th>유형</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>수정일</th>
                        <th>수정/삭제</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <!-- <tr v-for="notice in page.notices" :key="notice.nno"> -->
                        <td>{{ notice.nno }}</td>
                        <td>
                            <RouterLink :to="`/admin/notice/detail?nno=${notice.nno}&pageNo=${pageNo}`">{{ notice.ntitle
                            }}</RouterLink>
                        </td>
                        <td>{{ notice.ecname }}</td>
                        <td>{{ notice.cname }}</td>
                        <td>{{ notice.ncategory }}</td>
                        <td>({{ notice.writer }}){{ notice.name }}</td>
                        <td>{{ notice.ncreatedat }}</td>
                        <td>{{ notice.nupdatedat }}</td>
                        <td>
                            <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                            <router-link to="./list" class="btn btn-danger btn-sm" @click="handleRemove">삭제</router-link>
                        </td>
                    </tr>
                    <tr>
                        <!-- <tr v-for="notice in page.notices" :key="notice.nno"> -->
                        <td>2</td>
                        <td>
                            <RouterLink to="/admin/notice/detail">출결 확인</RouterLink>
                        </td>
                        <td>혜화 교육장</td>
                        <td>MSA 1차</td>
                        <td>출결</td>
                        <td>(운영진)홍길동</td>
                        <td>2024-06-23</td>
                        <td></td>
                        <td>
                            <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                            <router-link to="./list" class="btn btn-danger btn-sm" @click="handleRemove">삭제</router-link>
                        </td>
                    </tr>
                    <tr>
                        <!-- <tr v-for="notice in page.notices" :key="notice.nno"> -->
                        <td>3</td>
                        <td>
                            <RouterLink to="/admin/notice/detail">수업 휴무</RouterLink>
                        </td>
                        <td>가산 교육장</td>
                        <td>클라우드</td>
                        <td>수업</td>
                        <td>(강사진)전현무</td>
                        <td>2024-06-24</td>
                        <td></td>
                        <td>
                            <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                            <router-link to="./list" class="btn btn-danger btn-sm" @click="handleRemove">삭제</router-link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import courseAPI from '@/apis/courseAPI';
// import noticeAPI from "@/apis/noticeAPI";

//라우터 객체 얻기
const router = useRouter();
const route = useRoute();


// 필터 상태 객체 정의
const filter = ref({
    ecname: route.query.ecname || "송파교육센터",
    cname: route.query.cname || "",
    ncategory: route.query.ncategory || "",
});


//상태 정의
let notice = ref({
    name: "박나래",
    nno: "1",
    ecno: "",
    cno: "",
    writer: "운영진",
    ncategory: "강의장",
    ntitle: "강의장 청결 유지",
    ncontent: "",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "2024-06-22",
    nupdatedat: "",
    ecname: "송파교육장",
    cname: "MSA 2차",
    secname: "교육장",
    scname: "교육과정",
    swriter: "작성자",
    scategory: "유형",

});

//select 조회에 사용되는 check
let check = ref({
    secname: "교육장",
    scname: "교육과정",
    scategory: "유형"
})

// const page = ref({
//     notices: [],
//     pager: {}
// });

//GET 방식으로 전달된 파라미터 값얻기
// const route = useRoute();
// const pageNo = ref(route.query.pageNo || 1);

//게시물 목록을 가져오는 메소드 정의
// async function getNoticeList(pageNo) {
//     try {
//         const response = await noticeAPI.getNoticeList(pageNo);
//         page.value.notices = response.data.notices;
//         page.value.pager = response.data.pager;
//     } catch(error){
//         console.log(error);
//     }
// }

//게시물 목록 가져오기
// getNoticeList(pageNo.value);

//페이저의 버튼을 클릭했을 때 해당 페이지로 이동하는 메소드 정의
// 
// function changePageNo(argPageNo) {
//     router.push('/admin/notice/list?pageNo=${argPageNo}');
// }

//요청 경로의 변경을 감시
// watch(route, (newRoute, oldRoute) => {
//     if(newRoute.query.pageNo) {
//         getnoticeList(newRoute.query.pageNo);
//         pageNo.value = newRoute.query.pageNo;
//     } else {
//         getnoticeList(1);
//         pageNo.value = 1;
//     }
// });


//조회 콘솔로그
function handlecheck() {
    console.log(JSON.parse(JSON.stringify(check.value)));
}

//공지사항 등록버튼
function handleCreateBtn() {
    router.push('/admin/notice/create');
}

//공지사항 삭제버튼
// function handleRemove() {
//     try {
//         await noticeAPI.noticeDelete(nno);
//         router.push("/admin/notice/list");
//     } catch(error) {
//         console.log(error);
//     }
// }





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

/* 테이블 가운데 정렬 */
table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
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

/* table header */
.interview_list_header {
    clear: both;
    padding: 20px 0 50px;
    border-bottom: 1px solid #d7dce5;
}

.total_interviews {
    float: left;
    margin-top: 17px;
    padding-left: 24px;
    color: #5c667b;
    font-size: 15px;
    line-height: 20px;
}

.search_interview {
    float: right;
    display: flex;
}

.TypoBox {
    display: inline-block;
    position: relative;
    border: 1px solid #8491a7;
    border-radius: 4px;
    box-sizing: border-box;
    background-color: #fff;
}

.TypoBox .text {
    padding-right: 36px;
    width:100%;
    padding-block: 1px;
    padding-inline: 2px;
}

.TypoBox .Typo {
    padding: 8px 12px;
    width: 100%;
    height: 38px;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    color: #475067;
    font-size: 14px;
    line-height: 20px;
    background: none;
}

.search_interview .search_area button {
    display: inline-block;
    position: absolute;
    top: 6px;
    right: 4px;
    width: 32px;
    height: 32px;
    border: 0;
    background: url(https://www.saraminimage.co.kr/sri/person/resume/bg_alink.png) repeat;
}

/* table */
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
    text-align: center;
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

</style>
