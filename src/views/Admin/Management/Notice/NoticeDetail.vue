<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 상세 조회</span>
        </div>


        <div class="headingArea">
            <div class="title1">
                <h1 id="itemTitle">공지사항 상세 조회</h1>
            </div>


            <div class="container mt-5" style="text-align: left;">
                <div class="detail-board-box">
				<input type="hidden" id="boardSeq">
				<div class="title-group">
					<div class="lpart">
						<span class="hidden-txt">제목</span>
						<div class="title" id="title">{{ notice.ntitle }}</div>
					</div>
					<div class="rpart">
						<div class="board-date">
							<span class="hidden-txt">작성일</span> <span class="text" id="regDate">2022-07-07</span>
						</div>
					</div>
				</div>

                <div class="category" style="display: flex;">
                    <div class="educenter">
                        <p class="category-title">교육장</p>
                        <h5 class="category-sub">송파교육센터</h5>
                    </div>
                    <div class="course" style="margin-left: 6%;">
                        <p class="category-title2">교육과정</p>
                        <h5 class="category-sub">MSA 2차 Full Stack 개발자 양성과정</h5>
                    </div>
                    <div class="type" style="margin-left: 6%;">
                        <p class="category-title">유형</p>
                        <h5 class="category-sub">취업</h5>
                    </div>
                    <div class="writer" style="margin-left: 6%;">
                        <p class="category-title3">작성자</p>
                        <h5 class="category-sub">kosaSB</h5>
                    </div>
                </div>


				<div class="conts-group" id="boardCtt">
                    <p style="line-height: 1.8;">
                        금융결제원 CA 인증서 만료일 도래에 따라 CA인증서가 갱신되었음을&nbsp;안내드리오니 아래를 참고하시어 갱신된&nbsp;운영&nbsp;CA인증서를 적용하여 주시기 바랍니다.
                        <br><br>
                        <strong>1.&nbsp;갱신된&nbsp;운영 CA인증서<br></strong>
                    </p>
                    <table class="__se_tbl" style="border: 1px solid rgb(199, 199, 199); border-image: none;" border="0" cellspacing="0" cellpadding="0" _se2_tbl_template="4"><tbody><tr><td style="padding: 3px 4px 2px; width: 137px; height: 17px; text-align: left; color: rgb(102, 102, 102); font-weight: normal; border-right-color: rgb(231, 231, 231); border-right-width: 1px; border-right-style: solid; background-color: rgb(243, 243, 243);"><p align="center" style="line-height: 1.8;">&nbsp;구분</p></td><td style="padding: 3px 4px 2px; width: 266px; height: 17px; text-align: left; color: rgb(102, 102, 102); font-weight: normal; border-right-color: rgb(231, 231, 231); border-right-width: 1px; border-right-style: solid; background-color: rgb(243, 243, 243);"><p align="center" style="line-height: 1.8;">운영</p></td></tr><tr><td style="padding: 3px 4px 2px; width: 137px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="line-height: 1.8;">&nbsp;CN</p></td><td style="padding: 3px 4px 2px; width: 266px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="line-height: 1.8;">&nbsp;yessignCA Class 3</p></td></tr><tr><td style="padding: 3px 4px 2px; width: 137px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="line-height: 1.8;">&nbsp;유효기간</p></td><td style="padding: 3px 4px 2px; width: 266px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="line-height: 1.8;">2020-05-15 ~ 2030-05-15</p></td></tr><tr><td style="padding: 3px 4px 2px; width: 137px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="line-height: 1.8;">&nbsp;<strong>갱신일</strong></p></td><td style="padding: 3px 4px 2px; width: 266px; height: 18px; color: rgb(102, 102, 102); border-top-color: rgb(231, 231, 231); border-right-color: rgb(231, 231, 231); border-top-width: 1px; border-right-width: 1px; border-top-style: solid; border-right-style: solid; background-color: rgb(255, 255, 255);"><p align="center" style="text-align: center; line-height: 1.8;"><strong>2022년 8월 7일</strong></p></td></tr></tbody></table><p style="line-height: 1.8;"><br><strong>2. 조치사항<br></strong>&nbsp;&nbsp;① 인증서 프로그램(가입자설비, RA시스템, PKI 검증서버 등)에 갱신된 인증서* 적용<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; * 인증서 DN 및 일련번호 변경됨<br>&nbsp;&nbsp;② 인증서가 갱신되었을 때 디렉토리 서버에서 자동 다운로드 받을 수 있도록 가입자설비 수정<br><strong><span style="color: rgb(58, 50, 195);">&nbsp; </span><span style="color: rgb(58, 50, 195);">※ 상기 조치 사항은 전문보안업체에 문의하여 조치</span></strong><br><br><strong>3. 미조치시 발생가능한 오류 (예시)</strong><br>&nbsp;- ';인증서 검증에 실패했습니다. 디렉토리 주소가 없습니다';<br>&nbsp;- ';허용되지 않은 CA로부터 발급된 인증서입니다';<br>&nbsp;- ';전자서명 인증서 유효성 검사 중 오류가 발생했습니다'; <br>-&nbsp;&nbsp;인증서 로그인시 인증서가 보이지 않는 현상 등 <br><br><strong>4. 문의처 : yeskeycert@kftc.or.kr</strong>&nbsp;<br><br>감사합니다.&nbsp;&nbsp;&nbsp;&nbsp;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p><div class="info-file"><div class="title">첨부파일(<span class="file-num">1</span>건)</div><div class="list"><ul><li><a href="#" class="btn btn-txt-file" addfileseq="101206">금융결제원 운영 CA인증서(yessignCA Class 3).zip</a></li>NaN</ul></div></div></div>
			</div>   
                
                <!--
                <div class="mb-3">
                    <span
                        style="font-size: 2rem; border-bottom: 4px solid #22C55E; padding-bottom: 3px; font-weight: 500;">{{
                            notice.ntitle }}</span>
                </div>
                 -->

                <!--
                <div class="d-flex justify-content-between mb-1">
                    <div class="d-flex ms-2">
                        <span class="caregory">{{ notice.ncategory }}</span>
                        <span class="center ms-2">{{ notice.ecname }}</span>
                        <span class="center ms-2">{{ notice.cname }}</span>
                    </div>
                    <div class="me-3">
                        <span class="text-end">{{ notice.ncreatedat }}</span>
                    </div>
                </div>
                -->

                <!--<div class="p-2 mb-3" style="border-bottom: 1px solid #22C55E;">-->
                    <!-- <input ref="nattach" type="file"> -->
                <!--</div>-->

                <!--
                <div class="d-flex flex-column p-3 mb-3"
                    style="width: 100%; min-height: 460px; border: 1px solid #22C55E">
                    <span>
                        <img class="p-3" src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                        <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${notice.mid}`" width="110"
                            height="150">
                    </span>
                    <span class="p-3" style="font-size: 1.3rem">
                        {{ notice.ncontent }}
                    </span>
                </div>
                <div class="d-flex justify-content-end">
                    <button class="btn btn-outline-secondary me-3" @click="handleList()" value="목록">목록으로</button>
                </div>
            -->
            </div>
        </div>
    </div>
</template>



<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import axios from "axios";
// import { useStore } from "vuex";

//라우터 객체 얻기
const router = useRouter();

//상태 정의
let notice = ref({
    nno: "",
    ecno: "",
    cno: "",
    writer: "관리자",
    mid: "2024M2003",
    ncategory: "강의장",
    ntitle: "강의장 청결 관련",
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
select,
button {
    font-family: 'Noto Sans KR', sans-serif;
}

.headingArea {
    position: relative;
    padding: 22px 0 0;
    margin: 0 0 20px;
}

.headingArea .title1 {
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

/* 레이아웃 수정 */
.caregory {
    display: block;
    width: 90px;
    height: 30px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
    font-weight: 500;
}

.center {
    display: block;
    width: 90px;
    height: 30px;
    border-radius: 4px;
    color: rgb(102, 241, 21);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgb(40, 167, 172);
    font-weight: 500;
}

.detail-board-box {
    border-top: 1px solid #303030;
    border-bottom: 1px solid #e0e0e0;
}

.detail-board-box .title-group {
    display: table;
    width: 100%;
    padding: 30px 0;
}

.detail-board-box .title-group .lpart {
    display: table-cell;
    vertical-align: top;
}

.hidden-txt {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
    font-size: 1px;
    margin: 0;
    padding: 0;
    border: 0;
    white-space: nowrap;
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
}

.detail-board-box .title-group .title {
    padding-right: 20px;
    font-size: 30px;
    font-weight: 900;
    word-break: keep-all;
}

.detail-board-box .title-group .rpart {
    display: table-cell;
    vertical-align: top;
    min-width: 200px;
    padding-top: 10px;
    text-align: right;
}

.board-date {
    display: inline-block;
}

.detail-board-box .conts-group {
    padding: 34px 30px 30px;
    background: #f7f7f9;
}

.detail-board-box .conts-group .info-file {
    width: 100%;
    padding: 16px 30px;
    margin-top: 30px;
    border: 1px solid #f5f5f5;
    border-radius: 8px;
    box-sizing: border-box;
    font-size: 0;
    background: #ffffff;
}

.detail-board-box .conts-group .info-file .title {
    display: inline-block;
    vertical-align: top;
    width: 120px;
    padding-right: 26px;
    box-sizing: border-box;
    font-size: 16px;
}

.detail-board-box .conts-group .info-file .list {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 120px);
}

.detail-board-box .conts-group .info-file .list .btn.btn-txt-file {
    text-align: left;
}

.btn.btn-txt-file {
    font-size: 16px;
    font-weight: 900;
    text-decoration: underline;
    color: #4b27e7;
    background: #ffffff;
}

.category-title {
    font-size: 0.8rem;
    color: #d44439;
    margin-bottom: 3%;
}

.category-title2 {
    font-size: 0.8rem;
    color: #d44439;
    margin-bottom: 0.7%;
}

.category-title3 {
    font-size: 0.8rem;
    color: #d44439;
    margin-bottom: 0.7%;
}

.category-sub {
    font-size: 1.2rem;
    color: #333232;
}

</style>
