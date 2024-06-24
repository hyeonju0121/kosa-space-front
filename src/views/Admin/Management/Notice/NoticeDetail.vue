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

            <div class="mt-5"></div>


            <div class="container" style="text-align: left;">
                <!-- 테이블 -->
                <form @submit.prevent="handleSubmit">
                    <table class="table" style="text-align:center">
                        <tbody>
                            <tr>
                                <td>
                                    제목
                                </td>
                                <td colspan="3" style="text-align:left">
                                    <input v-model="notice.ntitle" type="text" value="강의장 청결 유지">
                                </td>
                            </tr>
                            <tr>
                                <td>작성날짜</td>
                                <td style="text-align:left">
                                    <input v-model="notice.ncreatedat" value="2024.06.19">
                                </td>
                                <td>작성자</td>
                                <td><input v-model="notice.mid" value="운영진"></td>
                            </tr>
                            <tr>
                                <td>공지사항 유형</td>
                                <td colspan="3" style="text-align: left;">
                                    <input v-model="notice.ncategory" value="강의장">
                                </td>
                            </tr>
                            <tr>
                                <td>교육장 명</td>
                                <td style="text-align:left">
                                    <input v-model="notice.cname" value="송파 교육장">
                                </td>
                                <td>교육과정</td>
                                <td><input v-model="notice.cname" value="MSA 2차"></td>
                            </tr>
                            <tr>
                                <td>첨부파일</td>
                                <td colspan="3" style="text-align:left">
                                    <input ref="nattach" type="file">
                                </td>
                            </tr>

                            <tr>
                                <td colspan="4">
                                    <textarea rows="15" cols="100" style="resize: none;">강의장 깔끔하게 사용해주세요!
                                    </textarea>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                <div class="btn_big_wrap" style="text-align:center">

                </div>
            </div>

            <!-- 버튼부분 -->
            <div>
                <span style="margin-left:100px;">
                    <BaseButtonUpdate @click="handleUpdateBtn">공지사항 수정</BaseButtonUpdate>
                </span>
                <span>
                    <BaseButtonCancle style="margin-left: 10px;">공지사항 삭제</BaseButtonCancle>
                </span>
                <BaseButtonSubmit @click="handleListBtn">공지사항 목록</BaseButtonSubmit>
            </div>




        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
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
    mid: "",
    ncategory: "",
    ntitle: "",
    ncontent: "",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "",
    nupdatedat: "",
    ecname: "",
    cname: ""
});

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

function handleListBtn() {
    router.push('/admin/notice/list');
}

function handleUpdateBtn() {
    router.push('/admin/notice/update');
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



</style>
