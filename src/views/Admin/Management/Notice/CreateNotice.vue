<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 등록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 등록</h1>
            </div>

            <div class="ms-3">
                <div>
                    <!-- 테이블 -->
                    <div class="container" style="text-align: left;">
                        <form @submit.prevent="handleSubmit">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            공지사항 유형
                                        </td>
                                        <td colspan="3">
                                            <select required v-model="notice.ncategory" @change="checkNcategory">
                                                <option value="취업">취업</option>
                                                <option value="행사">행사</option>
                                                <option value="강의장">강의장</option>
                                                <option value="수업">수업</option>
                                                <option value="출석">출석</option>
                                            </select>
                                            <!-- 공지사항 유형 체크 안하고 등록 버튼을 눌렀을시 나오는 문구 -->
                                            <div>
                                                <p v-if="!noticeCategoryPatternCheck" class="text-center text-danger"
                                                    style="float: left;">유형을 선택해 주세요</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>교육장</td>
                                        <td>
                                            <select required v-model="notice.ecname" @change="checkEcname">
                                                <option value="송파 교육센터">송파 교육센터</option>
                                                <option value="혜화 교육센터">혜화 교육센터</option>
                                                <option value="가산 교육센터">가산 교육센터</option>
                                            </select>
                                            <!-- 교육장 체크 안하고 등록버튼 눌렀을때 나오는 문구 -->
                                            <div>
                                                <p v-if="!noticeEcnamePatternCheck" class="text-center text-danger"
                                                    style="float: left;">교육장을 선택해 주세요</p>
                                            </div>
                                        </td>
                                        <td>교육과정</td>
                                        <td>
                                            <select required v-model="notice.cname" @change="checkCname">
                                                <option value="전체">전체</option>
                                                <option value="MSA 1차">MSA 1차</option>
                                                <option value="MSA 2차">MSA 2차</option>
                                                <option value="클라우드">클라우드</option>
                                            </select>
                                            <!-- 교육과정 체크 안하고 등록버튼 눌렀을때 나오는 문구 -->
                                            <div>
                                                <p v-if="!noticeCnamePatternCheck" class="text-center text-danger"
                                                    style="float: left;">교육과정을 선택해 주세요</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>공지사항 제목</td>
                                        <td colspan="3">
                                            <textarea maxlength="100" @input="checkTitleLength" required
                                                v-model="notice.ntitle" cols="90" rows="1" style="resize: none;"
                                                placeholder="공지사항 제목을 입력해주세요.(100자 이내)">
                                            </textarea>
                                            <p>{{ notice.ntitle.length }}/100</p>
                                            <div>
                                                <p v-if="submitted && !noticeTitlePatternCheck"
                                                    class="text-center text-danger" style="float: left;">제목은 반드시
                                                    입력해야
                                                    합니다.(100자 이내)</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>공지사항 내용</td>
                                        <td colspan="3">
                                            <textarea maxlength="1000" @input="checkContentLength"
                                                v-model="notice.ncontent" required name="ncontent" cols="90" rows="20"
                                                style="resize: none;" placeholder="공지사항 내용을 입력해주세요.(1000자 이내)">
                                            </textarea>
                                            <p>{{ notice.ncontent.length }}/1000</p>
                                            <div>
                                                <p v-if="submitted && !noticeContentPatternCheck"
                                                    class="text-center text-danger" style="float:left">내용은 반드시
                                                    입력해야합니다.(1000자 이내)</p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>첨부파일</td>
                                        <td colspan="3">
                                            <input type="file" ref="nattach">

                                            <!-- <label for="battach" class="col-sm-2 col-form-label">첨부그림</label>
                                                    <div v-if="board.nattachoname !== null">
                                                        <img width="300" 
                                                            :src="`${axios.defaults.baseURL}/notice/nattach/${notice}?accessToken=${$store.state.accessToken}`"/>
                                                    </div>
                                                    <div class="col-sm-10 mt-2">
                                                        <input id="nattach" type="file" class="form-control-file" ref="nattach"/>
                                                    </div> -->
                                        </td>
                                    </tr>

                                </tbody>
                            </table>

                            <!-- 버튼부분 -->
                            <div>
                                <div style="text-align:center">
                                    <input class="btn btn-dark btn-sm me-3" value="등록" @click="handleSubmit">
                                    <input class="btn btn-danger btn-sm" value="취소" @click="handleCancle">
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import communityAPI from '@/apis/communityAPI';

import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref } from "vue";
// import noticeAPI from "@/apis/noticeAPI";

// 유효성 검사 상태를 추적하는 변수
let submitted = ref(false);


//공지사항 제목 유효성검사(제목은 1~100글자)
let noticeTitlePatternCheck = ref("");
const noticeTitlePattern = /^.{1,100}$/;

function checkTitleLength(event) {
    const value = event.target.value;
    if (value.length > 100) {
        notice.value.ntitle = value.slice(0, 100);
    } else {
        notice.value.ntitle = value;
    }
    noticeTitlePatternCheck.value = noticeTitlePattern.test(notice.value.ntitle);
}

//공지사항 내용 유효성 검사(글자수 1~1000)
let noticeContentPatternCheck = ref("");
const noticeContentPattern = /^.{1,1000}$/;

function checkContentLength(event) {
    const value = event.target.value;
    if (value.length > 1000) {
        notice.value.ncontent = value.slice(0, 1000);
    } else {
        notice.value.ncontent = value;
    }
    noticeContentPatternCheck.value = noticeContentPattern.test(notice.value.ncontent);
}

// 공지사항 유형 유효성 검사
let noticeCategoryPatternCheck = ref(true);
function checkNcategory() {
    noticeCategoryPatternCheck.value = notice.value.ncategory !== "";
}

// 교육장 유효성 검사
let noticeEcnamePatternCheck = ref(true);
function checkEcname() {
    noticeEcnamePatternCheck.value = notice.value.ecname !== "";
}

// 교육과정 유효성 검사
let noticeCnamePatternCheck = ref(true);
function checkCname() {
    noticeCnamePatternCheck.value = notice.value.cname !== "";
}


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
})



const nattach = ref(null);

//등록버튼을 눌렀을때 실행
function handleSubmit() {
    // 유효성 검사를 시작
    submitted.value = true;

    //등록버튼 눌렀을때 select태그 유효성검사 
    checkNcategory();
    checkEcname();
    checkCname();


    // 유효성 검사를 통과해야 등록 가능
    if (!noticeTitlePatternCheck.value || !noticeContentPatternCheck.value || !noticeCategoryPatternCheck.value || !noticeEcnamePatternCheck.value || !noticeCnamePatternCheck.value) {
        alert('모든 필드를 올바르게 입력해주세요.');
        return;
    }

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

    //공지사항 등록버튼 누른후 공지사항 목록으로 이동
    router.push('/admin/notice/list');

}

//취소 버튼을 클릭했을 때 실행
function handleCancle() {
    router.push('/admin/notice/list');
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
</style>
