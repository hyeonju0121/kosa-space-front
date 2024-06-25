<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 목록</h1>
            </div>


            <!-- 제목과 내용을 떨어뜨리기위해 사용함 -->
            <div class="mb-3"></div>


            <!--조회,등록,검색 부분 -->
            <div class="mb-3">
                <!-- 조회,공지사항 등록버튼 -->
                <span class="mb-5">
                    <!-- 조회 폼 -->
                    <form @submit.prevent="handlecheck">
                        <div style="display: flex;">
                            <div class="me-1">
                                교육장
                                <select v-model="check.secname">
                                    <option value="교육장" selected disabled>교육장 선택</option>
                                    <option value="전체">전체</option>
                                    <option value="송파 교육장">송파 교육장</option>
                                    <option value="혜화 교육장">혜화 교육장</option>
                                    <option value="가산 교육장">가산 교육장</option>
                                </select>
                            </div>

                            <div class="me-1">
                                교육과정
                                <select v-model="check.scname">
                                    <option value="교육과정" selected disabled>교육과정 선택</option>
                                    <option value="전체">전체</option>
                                    <option value="MSA 1차">MSA 1차</option>
                                    <option value="MSA 2차">MSA 2차</option>
                                    <option value="클라우드">클라우드</option>
                                </select>
                            </div>

                            <div class="me-1">
                                작성자
                                <select v-model="check.swriter">
                                    <option value="작성자" selected disabled>작성자 선택</option>
                                    <option value="운영진">운영진</option>
                                    <option value="강사진">강사진</option>
                                </select>
                            </div>

                            <div>
                                유형
                                <select v-model="check.scategory">
                                    <option value="유형" selected disabled>유형 선택</option>
                                    <option value="출결">출결</option>
                                    <option value="수업">수업</option>
                                    <option value="강의장">강의장</option>
                                    <option value="취업">취업</option>
                                    <option value="행사">행사</option>
                                </select>
                            </div>

                            <div class="ms-3">
                                <button class="btn btn-dark btn-sm" @click="handlecheck">조회</button>
                            </div>
                        </div>
                    </form>


                    <!-- 로그인 했을때만 공지사항 등록가능 -->
                    <!-- <div v-if="$store.state.userId !== ''" class="mb-3">
                        <span class="ms-5" style="text-align:right">
                            <BaseButtonCreate class="mt-3" @click="handleCreateBtn">공지사항 등록</BaseButtonCreate>
                        </span>                    
                    </div> -->

                    <!-- (공지사항 등록 버튼) 위에 작성해놔서 지워질 부분-->
                    <div class="mt-3" style="text-align:right">
                        <input class="btn btn-dark btn-sm" value="등록" @click="handleCreateBtn">
                    </div>
                </span>




                <!-- 공지사항 검색하는 부분 -->
                <div class="mb-3" style="text-align:right">
                    <div class="mt-3">
                        <span class="me-3">
                            <input type="search" name="search" placeholder="입력해주세요" />
                        </span>
                        <button id="searchBtn" class="btn btn-dark btn-sm">검색</button>
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
                                <router-link to="./list" class="btn btn-danger btn-sm"
                                    @click="handleRemove">삭제</router-link>
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
                                <router-link to="./list" class="btn btn-danger btn-sm"
                                    @click="handleRemove">삭제</router-link>
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
                                <router-link to="./list" class="btn btn-danger btn-sm"
                                    @click="handleRemove">삭제</router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>


import { useRoute, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
// import noticeAPI from "@/apis/noticeAPI";

//라우터 객체 얻기
const router = useRouter();

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
    swriter: "작성자",
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

/* 테이블 가운데 정렬 */
table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
</style>
