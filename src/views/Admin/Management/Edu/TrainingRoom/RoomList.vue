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
        <!-- 필터부분 -->
        <div class="align" style="display: flex;">
            <div class="InpBox">
                <select id="room" title="교육장 선택" v-model="filter.ecname">
                    <option seleceted :value="filter.ecname">{{ filter.ecname }}</option>
                    <option v-for="ecname in ecnames" :value=ecname :key="ecname">{{ ecname }}</option>
                </select>
            </div>

            <!-- 필터 -->
            <div class="search_interview">
                <div class="InpBox search_order" style="margin-left:10px;">
                    <!-- 승인여부 -->
                    <select id="status" title="강의실 사용 여부" v-model="filter.trenable">
                        <option :value="filter.trenable" selected>{{ filter.trenable }}</option>
                        <option value="사용중">사용중</option>
                        <option value="사용가능">사용가능</option>
                    </select>
                </div>
            </div>

            <button type="button" class="BtnType SizeM" @click="handleCreateBtn" style="margin-left: 1%;">
                강의실 등록
            </button>
        </div>

        <div class="interview_list_header">
            <div class="total_interviews">총 {{ roomListlength }}건</div>
        </div>

        <!-- 조회 안했을 때 ---------------------------------------------------------->
        <!-- <div class="interview_list" v-if="!submitStatus"> -->
        <!-- 면접 요청 리스트 없을 경우 -->
        <!-- <div class="empty_data">
                <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                <strong class="tit">교육장이 선택되지 않았습니다.</strong>
                <div class="txt">교육장을 선택하고 강의실 조회를 눌러주세요!</div>
            </div> -->


        <div id="career_growth_contents">
            <section class="careerplus alljob_category">
                <ul class="list_contents">
                    <li class="item" v-for="room in roomList" :key="room.trno">
                        <RouterLink :to="`/admin/room/detail?trno=${room.trno}`">
                            <div class="card_contents">
                                <div class="thumbnail">
                                    <img v-if="roomattach != null" :src="roomattach" />
                                </div>
                                <strong class="ecname">{{ room.trname }} 강의실</strong>
                                <div class="meta">
                                    <span class="new_mark_complete" v-if="room.trenableResult === '사용중'">{{
                                        room.trenableResult }}</span>
                                    <span class="new_mark2" v-if="room.trenableResult === '사용가능'">{{ room.trenableResult
                                        }}</span>
                                    <span class="new_mark1"> {{ room.ecname }}</span>
                                </div>
                                <div class="keywords" v-if="room.trenableResult === '사용중'">
                                    <span class="date_author">현재 {{ room.cname }} 진행중</span>
                                    <br>
                                    <span class="date_author">{{ room.cstartdate }}~{{ room.cenddate }}까지 강의실
                                        사용불가</span>
                                </div>
                            </div>
                        </RouterLink>
                    </li>
                </ul>
            </section>
        </div>
    </div>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import trainingroomAPI from '@/apis/trainingroomAPI';

const router = useRouter();

onMounted(() => {
    educenterNameList();
    trainingroomList(filter.value.ecname, filter.value.trenable);
})

// 필터 상태 객체 정의
const filter = ref({
    ecname: "송파교육센터",
    trenable: "전체"
});


// 교육장 이름 전체 목록을 가져오는 메소드
const ecnames = ref();

// 교육장 목록 불러오기
async function educenterNameList() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1);
    } catch (error) {
        console.log(error);
    }
}

//교육장 이름 기준으로 강의실 목록을 가져오는 메소드
const roomList = ref([]);
const roomattach = ref(null);
let roomListlength = ref(roomList.value.length);

// 강의실 리스트 불러오기
async function trainingroomList(ecname, trenable) {
    try {
        console.log("ecname = " + ecname);
        console.log("trenable = " + trenable);
        if (trenable === "" || trenable === undefined || trenable === "전체") trenable = "all";
        console.log("trenable = " + trenable);
        const response = await trainingroomAPI.getTrainingroomList(ecname, trenable);
        roomList.value = response.data;

        roomListlength.value = roomList.value.length;

        //사진 얻기위해 eano를 얻음
        const data = roomList.value;
        const eano = data[0].eanoList[0];
        console.log(eano);
        getAttach(eano);


    } catch (error) {
        console.log(error);
    }
}

console.log(roomList);

//eano를 통해 해당 첨부 파일을 가져오는 함수
async function getAttach(eano) {
    try {
        const response = await trainingroomAPI.getRoomAttach(eano);
        const blob = response.data;
        roomattach.value = URL.createObjectURL(blob);
    } catch (error) {
        console.log(error);
    }
}

// 강의실 등록 버튼 이벤트
function handleCreateBtn() {
    router.push('/admin/room/create');
}

// 교육장 선택에 따라 강의실 목록 바꾸어 주기.
watch(() => filter.value.ecname,
    (nv, ov) => {
        filter.value.trenable = "전체";
        trainingroomList(nv, filter.value.trenable);
    }
)

// 강의실 상태 선택에 따라 강의실 목록 바꾸어 주기.
watch(() => filter.value.trenable,
    (nv, ov) => {
        trainingroomList(filter.value.ecname, nv);
    }
)

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
