<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 강의실 관리 > 강의실 상세보기</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">강의실 정보</h1>
            </div>
        </div>
        
        <div class="header" style="display: flex;">
            <div id="carouselExample" class="carousel slide" style="width: 500px;">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy" class="d-block w-100" style="height: 300px;">
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy" class="d-block w-100" style="height: 300px;">
                    </div>
                    <div class="carousel-item">
                        <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy" class="d-block w-100" style="height: 300px;">
                    </div> 
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <div class="header-sides" style="margin-left: 5%; width: 800px;">
                <div class="header-sides-title" style="display: flex;">
                    <h3 class="header-title">L1 강의실</h3>

                    <button type="button" @click="handleUpdateBtn" style="border: none; background-color:transparent; margin-left: 50%; margin-bottom: 5%;">
                        <PhPencilCircle :size="28" color="#6fd41c" weight="duotone" style="width: 30px; height: 30px;"/>
                    </button>

                    <button type="button" @click="handleDeleteBtn" style="border: none; background-color:transparent; margin-left: 1%; margin-bottom: 5%;">
                        <PhTrashSimple :size="28" color="#f23c1c" weight="duotone" style="width: 30px; height: 30px;" />
                    </button>
                </div>

                <div class="header-sides-contents">
                    <span class="contents_mark" style="float:left;">교육장</span>
                    <p class="contents_txt">&nbsp;&nbsp;송파교육센터</p>

                    <span class="contents_mark" style="float:left;">수용가능인원</span>
                    <p class="contents_txt">&nbsp;&nbsp;30명</p>

                    <span class="contents_mark" style="float:left;">사용여부</span>
                    <p class="contents_txt">&nbsp;&nbsp;사용중</p>

                    <span class="contents_mark" style="float:left;">진행중인 강의</span>
                    <p class="contents_txt">&nbsp;&nbsp;MSA 2차 Full Stack 개발자 양성과정</p>

                    <span class="contents_mark" style="float:left;">강의실 사용 가능일</span>
                    <p class="contents_txt">&nbsp;&nbsp;2024.07.26일 이후 강의실 사용가능</p>

                    <span class="contents_mark" style="float:left;">등록일시</span>
                    <p class="contents_txt">&nbsp;&nbsp;2024.01. 21 13:15</p>

                    <span class="contents_mark" style="float:left;">수정일시</span>
                    <p class="contents_txt">&nbsp;&nbsp;2024.01. 21 13:15</p>
                </div>
            </div>
        </div>

        <!-- contents2 -->
        <div class="headingArea">
            <div class="title2" style="margin-top: 2px;">
                <h1 id="itemTitle2" style="margin-top: 2%;">강의실 사용 현황 조회</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="강의실 이용 현황">
                        <option selected disabled value="">강의실 이용 여부</option>
                        <option value="전체">전체</option>
                        <option value="진행예정">진행예정</option>
                        <option value="진행중">진행중</option>
                        <option value="진행완료">진행완료</option>
                    </select>
                </div>
                <button type="button" class="BtnType SizeM" @click="handleSubmitFilter1" style="margin-left: 1%;">
                    강의실 현황 조회
                </button>
            </div>
        </form>

        <div class="interview_list_header">
            <div class="total_interviews">총 2건</div>
        </div>

        <div>
            <ul class="self_exam_list">
                <li class="personality_test">
                    <div class="course-img">
                        <img src="@/assets/course1.png" class="course-img-detail">
                    </div>
                    <h5 class="tit">MSA 기반 Full Stack 개발 전문가 양성과정 1차
                        <div style="display: flex;">
                            <span class="new_mark1">송파교육센터</span>
                            <span class="new_mark_complete" style="margin-left:2%;">진행완료</span>
                            <span class="new_mark3" style="margin-left:2%;">마성일 교수</span>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">&nbsp;&nbsp;2024.01.25 ~ 2024.06.25</p>

                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">&nbsp;&nbsp;20명</p> 
                    </div>
                </li>

                <li class="personality_test">
                    <div class="course-img">
                        <img src="@/assets/course1.png" class="course-img-detail">
                    </div>
                    <h5 class="tit">MSA 기반 Full Stack 개발 전문가 양성과정 2차
                        <div style="display: flex;">
                            <span class="new_mark1">송파교육센터</span>
                            <span class="new_mark_proceeding" style="margin-left:2%;">진행중</span>
                            <span class="new_mark3" style="margin-left:2%;">신용권 교수</span>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">&nbsp;&nbsp;2024.02.26 ~ 2024.07.26</p>

                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">&nbsp;&nbsp;20명</p>
      
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <DeleteDialog id="deleteDialog"/>
</template>

<script setup>
import DeleteDialog from './DeleteDialog.vue';
import { Modal } from 'bootstrap';
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';

const router = useRouter();

let deleteDialog = null;

onMounted(() => {
    // modal 객체 생성
    deleteDialog = new Modal(document.querySelector("#deleteDialog"));
})

function handleUpdateBtn() {
    router.push('/admin/room/update');
}

function handleDeleteBtn() {
    // 삭제 모달 활성화
    deleteDialog.show();
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

.headingArea .title2 {
    border-top: 1px solid #dbdbdb;
}

#itemTitle2 {
    font-weight: 600;
    font-size: 1.4rem;
    color: rgb(46, 46, 46);
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
    margin-top: 5px;
    padding-left: 24px;
    color: #5c667b;
    font-size: 15px;
    line-height: 20px;
}

/* course info */
/* ------ contents ---------------*/
.self_exam_wrap .self_exam_list {
    display: block;
    margin-top: 10px;
    border-bottom: 1px solid #eaedf4;
}

/*교육과정 이미지 틀 (원형)*/
.course-img {
    position: absolute;
    left: 0px;
    top: 10%;
    width: 120px;
    height: 120px;
    overflow: hidden;
}

/*교육과정 이미지 사이즈 조정*/
.course-img img {
    width: 100%;
}

ul, li {
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
    width: 120px;
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
    margin-left: 3%;
    width: 500px;
}

.self_exam_list>li .body {
    padding-left: 6%;
    top: 15%;
}

.self_exam_list {
    display: block;
    border-bottom: 1px solid #eaedf4;
}

.self_exam_list>li {
    display: inline-block;
    position: relative;
    padding: 25px 2px 14px 520px;
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
    top: 15px;
    left: 190px;
    max-width: 350px;
    color: #373f57;
    font-size: 16px;
    font-weight: 600;
    line-height: 40px;
}

.header-title {
    font-weight: 600;
    font-size: 1.5rem;
    color: #373f57;
}

</style>
