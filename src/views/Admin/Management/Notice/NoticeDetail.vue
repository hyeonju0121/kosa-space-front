<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 상세 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 상세 조회</h1>
            </div>

            <!-- 테이블 -->
            <div class="container mt-5" style="text-align: left;">
                <form @submit.prevent="handleSubmit">
                    <table class="table" style="text-align:center">
                        <tbody>
                            <tr>
                                <td>
                                    제목
                                </td>
                                <td colspan="3" style="text-align:left">
                                    <textarea maxlength="100" @input="checkTitleLength" required v-model="notice.ntitle"
                                        cols="90" rows="1" style="resize: none;" placeholder="공지사항 제목을 입력해주세요.(100자 이내)">
                                            </textarea>
                                    <p>{{ notice.ntitle.length }}/100</p>
                                </td>
                            </tr>
                            <tr>
                                <td>작성날짜</td>
                                <td style="text-align:left">
                                    <input v-model="notice.ncreatedat">

                                </td>
                                <td>작성자</td>
                                <td style="text-align:left">
                                    <input v-model="notice.writer">
                                </td>
                            </tr>
                            <tr>
                                <td>공지사항 유형</td>
                                <td colspan="3" style="text-align: left;">
                                    <input v-model="notice.ncategory">
                                </td>
                            </tr>
                            <tr>
                                <td>교육장 명</td>
                                <td style="text-align:left">
                                    <input v-model="notice.ecname">
                                </td>
                                <td>교육과정</td>
                                <td>
                                    <input v-model="notice.cname">
                                </td>
                            </tr>
                            <tr>
                                <td>첨부파일</td>
                                <td colspan="3" style="text-align:left">
                                    <input ref="nattach" type="file">
                                </td>
                            </tr>

                            <tr>
                                <td colspan="4">
                                    <textarea v-model="notice.ncontent" rows="15" cols="100" style="resize: none"
                                        placeholder="공지사항 내용을 입력해주세요.(1000자 이내)" maxlength="1000">
                                    </textarea>
                                    <p>{{ notice.ncontent.length }}/1000</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <!-- 버튼부분 -->
                    <div style="display: flex; justify-content: center;">
                        <input class="btn btn-dark  me-3" @click="handleList()" value="목록">
                        <input class="btn btn-info  me-3" @click="handleUpdate()" value="수정">
                        <input class="btn btn-danger " @click="handleDelete()" value="삭제">
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
// import axios from "axios";
// import { useStore } from "vuex";

//라우터 객체 얻기
const router = useRouter();



//상태 정의
let notice = ref({
    nno: "",
    ecno: "",
    cno: "",
    writer: "홍길동",
    mid: "",
    ncategory: "강의장",
    ntitle: "강의장 청결",
    ncontent: "강의장 깔끔하게 사용해주세요!",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "2024-06-25",
    nupdatedat: "",
    ecname: "송파 교육장",
    cname: "MSA 1차"
});


function handleList() {
    router.push('./list');
}

function handleUpdate() {

    //multipart/form-data 객체 생성
    const formData = new FormData();

    //입력값들 넣기
    formData.append("category", notice.value.ncategory);
    formData.append("educenter", notice.value.educenter);
    formData.append("course", notice.value.course);
    formData.append("title", notice.value.ntitle);
    formData.append("content", notice.value.ncontent);

    //파일 넣기
    // const elAttach = nattach.value;
    // if(elAttach.files.length !=0) {
    //     formData.append("nattach", elAttach.files[0]);
    // }

    //공지사항 쓰기 요청
    // try{
    //     const response = await noticeAPI.noticeCreate(formData);
    //     router.back();
    // } catch(error) {
    //     console.log(error);
    // }

    //공지사항 등록할때 데이터 잘 넘어가는지 확인
    console.log(formData);
    console.log(JSON.parse(JSON.stringify(notice.value)));

    router.push('./list');
}

function handleDelete() {
    router.push("./list");
}



//첨부파일 상태 정의
// const nattach = ref(null);

//QueryString으로 전달된 bno와 pageNo 얻기
// const route = useRoute();
// const bno = route.query.nno;
// const pageNo = route.query.pageNo;

//해당 bno의 게시물 얻는 함수 정의
// async function getNotice(argNno) {
//     try {
//         const response = await noticeAPI.noticeRead(argNno);
//         notice.value = response.data;
//         if(notice.value.nattachname != null) {
//             getAttach(argNno);
//         }
//     }
//     catch(error) {
//         console.log(error);
//     }
// }

// async function getAttach(argNno) {
//     try {
//         const response = await noticeAPI.noticeAttachDownload(argNno);
//         const blob = response.data;
//         nattach.value = URL.createObjectURL(blob);
//     } catch(error) {
//         console.log(error);
//     }
// }

//store 객체 얻기
// const store = useStore();

//로그인 여부에따라 공지사항 조회 화면
//로그인이 되어 있을 경우
// if(store.state.userId !== '') {
//bno에 해당하는 게시물 가져오기
//     getBoard(bno);
// } else {
//로그인이 되어 있지 않을 경우 로그인 페이지로 이동
//     router.push("/");
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
</style>
