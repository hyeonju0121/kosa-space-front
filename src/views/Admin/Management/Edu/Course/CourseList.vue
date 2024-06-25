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
                <select id="room" title="교육장 선택">
                    <option value="" selected="">교육장 선택</option>
                    <option value="option1">전체</option>
                    <option value="option1">미정</option>
                    <option value="option2">송파교육센터</option>
                    <option value="option3">가산교육센터</option>
                    <option value="option3">혜화교육센터</option>
                </select>
            </div>
            <div class="InpBox" style="margin-left: 1%;">
                <select id="status" title="진행 여부">
                    <option value="" selected="">진행 여부</option>
                    <option value="option1">전체</option>
                    <option value="option1">진행 예정</option>
                    <option value="option2">진행중</option>
                    <option value="option3">진행 완료</option>
                </select>
            </div>
            <div class="InpBox" style="margin-left: 1%;">
                <select id="professor" title="강사진">
                    <option value="" selected="">강사진</option>
                    <option value="option1">전체</option>
                    <option value="option1">신용권</option>
                    <option value="option2">마성일</option>
                    <option value="option3">조효석</option>
                </select>
            </div>

            <button type="button" class="BtnType SizeM" style="margin-left: 47%;" @click="handleCreateBtn">
                교육과정 등록
            </button>
        </div>

        <!--<BaseButtonSubmit @click="handleCreateBtn" style="margin-top: 1%;">교육과정 등록</BaseButtonSubmit>-->

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
                        <div style="margin-top: 2%;">
                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark btn-sm" style="margin-left: 2%;">삭제</button>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">2024.01.25 ~ 2024.06.25</p>

                        <span class="contents_mark" style="float:left;">요일시간</span>
                        <p class="contents_txt">월, 화, 수, 목, 금 / 9:00 ~ 18:00</p>
                     
                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">20명</p>

                        <span class="contents_mark" style="float:left;">교육장</span>
                        <p class="contents_txt">송파교육센터</p>          
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
                        <div style="margin-top: 2%;">
                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark btn-sm" style="margin-left: 2%;">삭제</button>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">2024.02.26 ~ 2024.07.26</p>

                        <span class="contents_mark" style="float:left;">요일시간</span>
                        <p class="contents_txt">월, 화, 수, 목, 금 / 9:00 ~ 18:00</p>
                     
                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">20명</p>

                        <span class="contents_mark" style="float:left;">교육장</span>
                        <p class="contents_txt">송파교육센터</p>          
                    </div>
                </li>

                <li class="personality_test">
                    <div class="course-img">
                        <img src="@/assets/course3.png" class="course-img-detail">
                    </div>
                    <h5 class="tit">클라우드 솔루션즈 아키텍트 양성과정 1차
                        <div style="display: flex;">
                            <span class="new_mark1">송파교육센터</span>
                            <span class="new_mark_proceeding" style="margin-left:2%;">진행중</span>
                            <span class="new_mark3" style="margin-left:2%;">조효석 교수</span>
                        </div>
                        <div style="margin-top: 2%;">
                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark btn-sm" style="margin-left: 2%;">삭제</button>
                        </div>
                    </h5>
                    <div class="body">
                        <span class="contents_mark" style="float:left;">교육일정</span>
                        <p class="contents_txt">2024.02.26 ~ 2024.07.26</p>

                        <span class="contents_mark" style="float:left;">요일시간</span>
                        <p class="contents_txt">월, 화, 수, 목, 금 / 9:00 ~ 18:00</p>
                     
                        <span class="contents_mark" style="float:left;">수강인원</span>
                        <p class="contents_txt">20명</p>

                        <span class="contents_mark" style="float:left;">교육장</span>
                        <p class="contents_txt">송파교육센터</p>          
                    </div>
                </li>
                <li class="personality_test">
                    <div class="course-img">
                        <img src="@/assets/course3.png" class="course-img-detail">
                    </div>
                    <h5 class="tit">MSA 기반 Full Stack 개발 전문가 양성과정 3차
                        <div style="display: flex;">
                            <span class="new_mark1">송파교육센터</span>
                            <span class="new_mark2" style="margin-left:2%;">진행예정</span>
                            <span class="new_mark3" style="margin-left:2%;">신용권 교수</span>
                        </div>
                        <div style="margin-top: 2%;">
                            <button type="button" class="btn btn-outline-secondary btn-sm" @click="handleUpdateBtn">수정</button>
                            <button class="btn btn-outline-dark btn-sm" style="margin-left: 2%;">삭제</button>
                        </div>
                    </h5>
                    <div class="body">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/course/create');
}

function handleUpdateBtn() {
    router.push('/admin/course/update');
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
select, th, td {
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
