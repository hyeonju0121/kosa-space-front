<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h4 id="itemTitle">공지사항 상세 조회</h4>
        </div>


        <!-- contents -->             
            <div class="container" style="text-align: left;">
                <!-- 테이블 -->
                <table class="table" style="text-align:center">
                    <tbody>
                        <tr>
                            <td>
                                제목
                            </td>
                            <td colspan="3" style="text-align:left">
                                <input readonly v-model="notice.ntitle">
                            </td>
                        </tr>
                        <tr>
                            <td>작성날짜</td>
                            <td style="text-align:left">
                                <input readonly v-model="notice.ncreatedat">
                            </td>
                            <td>작성자</td>
                            <td><input readonly v-model="notice.nname"></td>
                        </tr>
                        <tr>
                            <td>공지사항 유형</td>
                            <td colspan="3" style="text-align: left;">
                                <input readonly v-model="notice.ncategory">
                            </td>
                        </tr>
                        <tr>
                            <td>교육장 명</td>
                            <td style="text-align:left">
                                <input readonly v-model="notice.ecname">
                            </td>
                            <td>교육과정</td>
                            <td><input readonly v-model="notice.cname"></td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td colspan="3" style="text-align:left">
                                <input type="file" ref="nattach">
                            </td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <textarea v-model="notice.ncontent" name="notice_content" rows=15 cols=140
                                    style="resize: none;" readonly>
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <!-- 버튼부분 -->
            <div style="text-align:center;">
                <BaseButtonSubmit @click="handleListBtn" style="margin-top: 10px;">공지사항 목록</BaseButtonSubmit>
            </div>       
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from "vue";
// import axios from "axios";
// import { useStore } from "vuex";

//라우터 객체 얻기
const router = useRouter();


//상태 정의
let notice = ref({
    nno: "",
    ecno: "",
    cno: "",    
    nname:"홍길동",
    ncategory: "강의장",
    ntitle: "강의장 청결 유지",
    ncontent: "강의장 깔끔하게 사용해주세요!",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "2024.06.19",
    nupdatedat: "",
    ecname: "송파 교육장",
    cname: "MSA 2차"
})

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


//공지사항 목록으로 이동하는 버튼함수
function handleListBtn() {
    router.push('/trainee/community/');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
    font-size: 1.2rem;
}

/* 테이블 크기 고정 */
table {
    width: 100%;
}
</style>
