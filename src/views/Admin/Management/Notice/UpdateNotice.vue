<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 수정</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 수정</h1>
            </div>

            <div class="mt-5"></div>


            <div class="ms-3">
                <div>
                    <form @submit.prevent="handleSubmit">
                        <div class="container" style="text-align: left;">
                            <!-- 테이블 -->
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            공지사항 유형
                                        </td>
                                        <td>
                                            <select v-model="notice.ncategory">
                                                <option value="공지사항 유형" selected disabled>공지사항 유형 선택</option>
                                                <option value="취업">취업</option>
                                                <option value="행사">행사</option>
                                                <option value="강의장">강의장</option>
                                                <option value="수업">수업</option>
                                                <option value="출석">출석</option>
                                            </select>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>교육장</td>
                                        <td>
                                            <select v-model="notice.ecname">
                                                <option value="교육장" selected disabled>교육장 선택</option>
                                                <option value="송파 교육센터">송파 교육센터</option>
                                                <option value="혜화 교육센터">혜화 교육센터</option>
                                            </select>
                                        </td>
                                        <td>교육과정</td>
                                        <td>
                                            <select v-model="notice.cname">
                                                <option value="교육과정" selected disabled>교육과정 선택</option>
                                                <option value="전체">전체</option>
                                                <option value="MSA 1차">MSA 1차</option>
                                                <option value="MSA 2차">MSA 2차</option>
                                                <option value="클라우드">클라우드</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>공지사항 제목</td>
                                        <td colspan="3">
                                            <textarea v-model="notice.ntitle" name="ntitle" cols="53" rows="1" id="n"
                                                placeholder="공지사항 제목을 입력해주세요."></textarea>
                                        </td>                                        
                                    </tr>
                                    <tr>
                                        <td>공지사항 내용</td>
                                        <td colspan="3">
                                            <textarea v-model="notice.ncontent" name="ncontent" cols="53" rows="10" id="n"
                                                placeholder="공지사항 내용을 입력해주세요."></textarea>
                                        </td>
                                        
                                    </tr>
                                    <tr>
                                        <td>첨부파일</td>
                                        <td colspan="3"><input type="file" ref="nattach"></td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- 버튼부분 -->
                            <div>
                                <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                                <!-- <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit> -->
                                <input class="btn btn-info btn-sm" type="submit" value="수정" @click="handleSubmit">
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
// import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
// import noticeAPI from "@/apis/noticeAPI";

//QueryString으로 전달된 nno와 pageNo 얻기
// const route= useRoute();
// const nno = route.query.nno;
// const pageNo = route.query.pageNo;

//상태 정의
//상태 정의
let notice = ref({
    nno: "",
    ecno: "",
    cno: "",
    mid: "",
    ncategory: "공지사항 유형",
    ntitle: "",
    ncontent: "",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "",
    nupdatedat: "",
    ecname: "교육장",
    cname: "교육과정"
});

const nattach = ref(null);

//해당 nno의 공지사항 얻는 함수 정의
// async function getNotice(argNno) {
//     try{
//         const response = await noticeAPI.noticeRead(argNno);
//         notice.value = response.data;
//     } catch(error) {
//         console.log(error);
//     }
// }

//nno에 해당하는 공지사항 가져오기
// getNotice(nno);

//router 객체 얻기
const router = useRouter();

//수정 버튼 클릭했을 때 실행하는 함수 정의
async function handleSubmit() {
    //multipart/form-data 객체 생성
    const formData = new FormData();
    //문자 파트 넣기
    formData.append("nno", notice.value.nno);
    formData.append("category", notice.value.category);
    formData.append("educenter", notice.value.educenter);
    formData.append("course", notice.value.course);
    formData.append("title", notice.value.title);
    formData.append("content", notice.value.content);
    //파일 파트 넣기
    // const elnattach = nattach.value;
    // if(elnattach.files.length != 0) {
    //     formData.append("nattach", elnattach.files[0]);
    // }
    //공지사항 수정 요청
    // try{
    //     await noticeAPI.noticeUpdate(formData);
    //     router.push(`/Management/Notice/NoticeList?pageNo=${pageNo}`);        
    // } catch(error) {
    //     console.log(error);
    // }

    console.log(formData);
    console.log(JSON.parse(JSON.stringify(notice.value)));

    router.push('/admin/notice/list');

}

//취소 버튼을 클륵했을 때 실행하는 함수 정의
function handleCancle() {
    router.push('/admin/notice/list');
    // router.push(`/Management/Notice/NoticeList?pageNo=${pageNo}`);
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

.noticetitle {
    width: 100%;
    height: 6.25em;
    resize: none;
}

#n {
    resize: none;
}
</style>
