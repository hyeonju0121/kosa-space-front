<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 강의실 관리 > 강의실 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">강의실 목록</h1>
            </div>
        </div>

        <form @submit.prevent="handleSubmitFilter1">
            <div class="align" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="교육장 선택" v-model="filter.ecname">
                        <option selected disabled value="">교육장 선택</option>
                        <option value="전체">전체</option>
                        <option value="송파교육센터">송파교육센터</option>
                        <option value="가산교육센터">가산교육센터</option>
                        <option value="혜화교육센터">혜화교육센터</option>
                    </select>
                </div>
                <button type="button" class="BtnType SizeM" @click="handleSubmitFilter1" style="margin-left: 1%;">
                    강의실 조회
                </button>
                <button type="button" class="BtnType SizeM" @click="handleCreateBtn" style="margin-left: 1%;">
                    강의실 등록
                </button>
            </div>
        </form>

        <div class="interview_list_header">
            <div class="total_interviews">총 0건</div>

            <!-- 필터 -->
            <div class="search_interview">
                    <div class="InpBox search_order" style="margin-left:120px;">
                        <!-- 승인여부 -->
                        <select id="search_status" title="강의실 사용 여부" v-model="filter.trenable">
                            <option selected disabled value="">강의실 사용 여부</option>
                            <option value="0">전체</option>
                            <option value="1">사용중</option>
                            <option value="2">미사용</option>
                        </select>
                    </div>
            </div>
        </div>

        <!-- 조회 안했을 때 ---------------------------------------------------------->
        <!--<div class="interview_list" v-if="!submitStatus">-->
            <!-- 면접 요청 리스트 없을 경우 -->
            <!--<div class="empty_data">
                <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                <strong class="tit">교육장이 선택되지 않았습니다.</strong>
                <div class="txt">교육장을 선택하고 강의실 조회를 눌러주세요!</div>
            </div>
        </div>-->
        
        <div id="career_growth_contents">
            <section class="careerplus alljob_category">
                <ul class="list_contents">
                    <li class="item">
                        <RouterLink to="/admin/room/detail">
                        <div class="card_contents">
                            <div class="thumbnail">
                                <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy">
                            </div>
                            <strong class="ecname">L1 강의실</strong>
                            <div class="meta">
                                <span class="new_mark_complete">사용중</span>
                                <span class="new_mark1"> 송파교육센터</span>
                            </div>
                            <div class="keywords">
                                <span class="date_author">현재 MSA 2차 Full Stack 개발자 양성과정 진행중</span>
                                <br>
                                <span class="date_author">2024.02.26~2024.07.26까지 강의실 사용불가</span>
                            </div>
                        </div>
                        </RouterLink>
                    </li>

                    <li class="item">
                        <div class="card_contents">
                            <div class="thumbnail">
                                <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy">
                            </div>
                            <strong class="ecname">L2 강의실</strong>
                            <div class="meta">
                                <span class="new_mark2">사용가능</span>
                                <span class="new_mark1"> 송파교육센터</span>
                            </div>
                            <div class="keywords">
                                <!--#css #프론트엔드 #node.js #html #mysql #api #aws #javascript #풀스택 #백엔드/서버개발--> 
                            </div>
                        </div>
                    </li>

                    <li class="item">
                        <div class="card_contents">
                            <div class="thumbnail">
                                <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy">
                            </div>
                            <strong class="ecname">L3 강의실</strong>
                            <div class="meta">
                                <span class="new_mark2">사용가능</span>
                                <span class="new_mark1"> 송파교육센터</span>
                            </div>
                            <div class="keywords">
                               <!--#css #프론트엔드 #node.js #html #mysql #api #aws #javascript #풀스택 #백엔드/서버개발 -->
                            </div>
                        </div>
                    </li>

                    <li class="item">
                        <div class="card_contents">
                            <div class="thumbnail">
                                <img src="https://cdn.class101.net/images/dc1a77c6-6e8d-4554-b10e-ff98997c7a0c/640xauto.webp"
                                    alt="[웹 개발자 단과반 1교시] HTML, CSS, JS 프론트엔드 속성 실무!"
                                    onerror="this.onerror=null; this.src='//www.saraminimage.co.kr/sri/careertip/img_class_one_o_one.png'"
                                    loading="lazy">
                            </div>
                            <strong class="ecname">L4 강의실</strong>
                            <div class="meta">
                                <span class="new_mark2">사용가능</span>
                                <span class="new_mark1"> 송파교육센터</span>
                            </div>
                            <div class="keywords">
                               <!--#css #프론트엔드 #node.js #html #mysql #api #aws #javascript #풀스택 #백엔드/서버개발 -->
                            </div>
                        </div>
                    </li>



                </ul>
            </section>




        </div>

        <div class="container mt-3" v-if="submitStatus">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">강의실 명</th>
                        <th scope="col">수용 가능 인원</th>
                        <th scope="col">사용 가능 여부</th>
                        <th scope="col">현재 진행중인 교육과정</th>
                        <th scope="col">등록일</th>
                        <th scope="col">비고</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>1</td>
                        <td>L1</td>
                        <td>34 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>L2</td>
                        <td>30 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>L3</td>
                        <td>25 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>L4</td>
                        <td>34 명</td>
                        <td>가능</td>
                        <td></td>
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();

// 필터 상태 객체 정의
const filter = ref({
    ecname: "",
    trenable: ""
});

let submitStatus = ref(false);

// 교육장 필터 선택하고, 승인 조회 버튼 클릭 시 
function handleSubmitFilter1() {
    submitStatus.value = !submitStatus.value;
    console.log(filter.value);
}


function handleCreateBtn() {
    router.push('/admin/room/create');
}

function handleUpdateBtn() {
    router.push('/admin/room/update');
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

/* th, td 
{
  text-align: center; 
  vertical-align: middle;
} */

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
    text-align: left;
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


/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
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
}

.search_area {
    display: inline-block;
    position: relative;
    width: 160px;
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
    width: 100%;
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

/* 필터 적용 안할 때 리스트  */
.interview_list .empty_data {
    padding: 72px 0 80px;
    border-bottom: 1px solid #ebedf2;
    color: #575d6d;
    text-align: center;
}

.empty_data img {
    display: block;
    margin: 0 auto;
}

.empty_data .tit {
    display: block;
    margin: 24px auto 4px;
    color: #5c667b;
    font-size: 18px;
    line-height: 32px;
}

.empty_data .txt {
    margin: 0 auto 24px;
    color: #475067;
    font-size: 14px;
    line-height: 24px;
}

/*강의실 목록*/
section {
    display: block;
}

.careerplus {
    margin: 0 auto;
    padding: 48px 0 0;
}

.careerplus.alljob_category {
    padding: 0;
    text-align: left;
}

.list_contents {
    display: grid;
    width: 100%;
    gap: 35px 60px;
    grid-template-columns: repeat(3, 0fr);
    grid-auto-rows: auto;
    grid-auto-flow: row;
    padding-bottom: 72px;
}

ol,
ul,
li {
    list-style: none;
    margin: 0;
    padding: 0;
}

li {
    display: list-item;
    unicode-bidi: isolate;
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


.card_contents {
    display: grid;
    gap: 10px;
    grid-template-columns: 320px;
    grid-auto-flow: row;
    place-content: start start;
    place-items: start start;
    color: #444;
    text-decoration: none;
    margin: 0;
    padding: 0;
}

/*
img {
    overflow-clip-margin: content-box;
    overflow: clip;
}

.list_contents .item .thumbnail>img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
}
*/

.thumbnail {
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 200px;
    border: 1px solid #d7dce5;
    border-radius: 12px;
}

.thumbnail>img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
    border: 0;
}

.list_contents .item .ecname {
    display: block;
    overflow: hidden;
    width: 100%;
    max-height: 52px;
    color: #373f57;
    font-size: 17px;
    line-height: 24px;
    text-overflow: ellipsis;
    white-space: normal;
    font-weight: bold;
}

.item .meta {
    display: grid;
    grid-auto-flow: column dense;
    gap: 8px;
    align-items: center;
}

.list_contents .item .meta .img {
    overflow: hidden;
    position: relative;
    width: 24px;
    height: 24px;
    border-radius: 12px;
}

.careerplus .list_contents .item .meta .name {
    color: #67738e;
    font-size: 13px;
    line-height: 20px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
}

.list_contents .item .meta .name+.cname {
    padding-left: 10px;
    color: #67738e;
    font-size: 13px;
    line-height: 20px;
    max-width: 125px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    position: relative;
}

.date_author {
    padding-left: 10px;
    color: #67738e;
    font-size: 13.5px;
    line-height: 20px;
    max-width: 250px;

}

.list_contents .item .keywords {
    overflow: hidden;
    width: 100%;
    height: 50px;
    color: #67738e;
    font-size: 12px;
    line-height: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
}

/* tag */
.new_mark_complete {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
}

.new_mark1 {
    display: block;
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: #5f8af8;
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: #dee8f8;
}

.new_mark2 {
    display: block;
    width: 90px;
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
