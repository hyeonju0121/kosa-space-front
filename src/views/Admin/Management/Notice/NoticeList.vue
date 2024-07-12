<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
      <div class="item-section mt-2 mb-2" style="font-size: 12px">
        <span>공지사항 관리 > 공지사항 목록</span>
      </div>
  
      <!-- 
      <article class="key_visual_area visual_customer">
					<div class="txt_area">
						<h2>공지사항</h2>
						<p>코사스페이스에서 알리는 새소식을 안내해 드립니다.</p>
					</div>
					<figure class="img" title="고객센터 이미지">
            <img src="@/assets/visual_customer.png" style="width: 200px; height: 150px;">
          </figure>
			</article>
    -->
  
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h1 id="itemTitle">공지사항</h1>
        </div>
    </div>

      <form @submit.prevent="handleSubmitFilter1">
        <div class="align" style="display: flex; margin-bottom: 5%;">
          <div class="InpBox">
            <select title="교육장 선택" v-model="filter.ecname" :class="btnEnable">
              <option selected disabled :value="''">교육장 선택</option>
              <option v-for="item in ecnames" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>
          <div class="InpBox" style="margin-left: 1%; width: 370px;">
            <select title="교육과정 선택" v-model="filter.cname" :class="btnEnable">
              <option selected disabled :value="''">교육과정 선택</option>
              <option v-for="item in cnames" :key="item" :value="item">{{ item }}</option>
            </select>
          </div>
  
          <!--
          <div class="InpBox" style="margin-left: 1%; width: 150px;">
            <select title="카테고리 선택" v-model="filter.ncategory" :class="btnEnable">
              <option selected disabled :value="''">카테고리 선택</option>
              <option value="all">전체</option>
              <option value="출결">출결</option>
              <option value="수업">수업</option>
              <option value="강의실">강의실</option>
              <option value="취업">취업</option>
              <option value="행사">행사</option>
            </select>
          </div>
        -->
        </div>
      </form>

      <div class="search-head-sec">
          <div class="search-title" id="listCnt"><p><b>총 <span class="search-num">{{ notices.length }}</span>개</b>의 글이 등록되어 있습니다</p></div>
              <div class="search-input-box">
                  <div class="search-input-group">
                      <div class="lpart">
                          <select id="columnName" class="dsgn-select" title="검색 구분 선택">
                              <option value="">카테고리 선택</option>
                              <option value="all">전체</option>
                              <option value="출결">출결</option>
                              <option value="수업">수업</option>
                              <option value="강의실">강의실</option>
                              <option value="취업">취업</option>
                              <option value="행사">행사</option>
                          </select>
                      </div>
                      <div class="rpart">
                          <div class="input-box">
                              <input type="text" id="columnValue" class="dsgn-input" placeholder="검색어를 입력하세요" value="" title="검색어 입력">
                              <button type="button" class="btn btn-txtclear"><span class="icon-txtclear"><span class="hidden-txt">문구삭제</span></span></button>
                          </div>
                          <button type="button" id="searchBtn" class="btn btn-sub bg-main btn-search">검색</button>
                          <button type="button" id="searchBtn" class="btn btn-sub bg-main btn-search" @click="handleCreateBtn">공지사항 등록</button>  
                      </div>
                  </div>
              </div>
          </div>
  
      <div class="mt-3">
        <table class="notice-table">
          <tbody>
            <tr v-for="notice in notices" :key="notice.id" :class="{'highlight': notice.highlight}">
              <td class="label">{{ notice.nno }}</td>
              <td class="label">
                <span class="d-flex">
                  <span class="new_mark2">전체</span>
                  <span class="new_mark_complete ms-2">취업</span>
                </span>
              </td>
              <td class="title">{{ notice.title }}</td>
              <td class="date">{{ notice.date }}</td>
              <td class="views">{{ notice.views }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  // Sample data for ecnames, cnames, and notices
  const ecnames = ref(['교육장1', '교육장2', '교육장3']);
  const cnames = ref(['과정1', '과정2', '과정3']);
  const notices = ref([
    { id: 1, nno: 1, title: '금융데이터거래소 이용약관 개정 안내', date: '2020-12-21', views: 31, highlight: true },
    { id: 2, nno: 2, title: '금융권 데이터 유통 가이드(2020.10 개정)', date: '2020-10-29', views: 237, highlight: true },
    { id: 3, nno: 3, title: '금융데이터거래소 및 데이터전문기관(금융보안원) 소개자료', date: '2020-09-15', views: 355, highlight: true },
    { id: 4, nno: 4, title: '금융데이터거래소 이용약관 개정 안내', date: '2020-12-21', views: 31, highlight: false },
    { id: 5, nno: 5, title: '금융권 데이터 유통 가이드(2020.10 개정)', date: '2020-10-29', views: 237, highlight: false },
    { id: 6, nno: 6, title: '금융데이터거래소 및 데이터전문기관(금융보안원) 소개자료', date: '2020-09-15', views: 355, highlight: false },
    { id: 7, nno: 7, title: '개인정보 처리방침 개정 안내', date: '2020-08-19', views: 137, highlight: false },
    { id: 8, nno: 8, title: '금융데이터거래소 이용약관 변경 안내', date: '2020-08-05', views: 194, highlight: false },
    { id: 9, nno: 9, title: '2020년 하반기 데이터바우처(AI데이터 가공 바우처) 사업 안내', date: '2020-07-16', views: 298, highlight: false },
  ]);
  
  const filter = ref({
    ecname: '',
    cname: '',
    ncategory: ''
  });
  
  function handleSubmitFilter1() {
    // Filtering logic here
  }
  
  function handleCreateBtn() {
    // Logic to handle the create button click
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
  td,
  button {
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
  
  .mt-3 {
    margin-top: 1rem;
  }
  
  .notice-summary {
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  
  .search-box {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .search-box input {
    width: 200px;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }
  
  .search-box button {
    background-color: #ccc;
    border: 1px solid #ccc;
    border-left: none;
    padding: 0.5rem 1rem;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }
  
  .notice-table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid #37c375;
  }
  
  .notice-table tr {
    border-bottom: 1px solid #ccc;
  }
  
  .notice-table tr.highlight {
    background-color: #f2fdf7;
  }
  
  .notice-table td {
    padding: 0.75rem;
  }
  
  .notice-table .label {
    width: 5%;
    text-align: center;
    font-weight: bold;
    color: #37c375;
  }
  
  .notice-table .title {
    width: 70%;
    text-align: left;
  }
  
  .notice-table .date {
    width: 15%;
    text-align: center;
  }
  
  .notice-table .views {
    width: 10%;
    text-align: center;
  }
  
  .btn-dark {
    background-color: #343a40;
    border-color: #343a40;
    color: #fff;
  }
  
  .btn-sm {
    padding: 5px 10px;
    font-size: 12px;
  }

  .key_visual_area {
    width: 1260px;
    height: 170px;
    border-radius: 10px;
    margin: 0;
    color: #fff;
    padding: 35px 80px 35px 60px;
    display: flex;
    background: #37c375;
    box-sizing: border-box;
}

.key_visual_area .txt_area {
    display: flex;
    flex-direction: column;
}

.key_visual_area h2 {
    font-size: 35px;
}

.key_visual_area p {
    font-size: 15px;
    margin-top: 10px;
    line-height: 1.3;
}
.key_visual_area.visual_customer .img {
    width: 180px;
    height: 133px;
    background: transparent no-repeat 0 0;
    background-size: 227px 200px;
    position: absolute;
    right: 420px;
    top: 53px;
}

/* 검색 */
.search-head-sec {
    padding-bottom: 50px;
}

.search-head-sec .search-title {
    padding-bottom: 30px;
}

.search-title {
    text-align: center;
    font-size: 30px;
}

.search-title .search-num {
    color: #22C55E;
}

.search-title b {
    font-weight: 900;
}

.search-input-group {
    text-align: center;
    font-size: 0;
}

.search-input-group .lpart {
    display: inline-block;
}

.search-input-group .dsgn-select {
    width: 280px;
}

.input-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.dsgn-select {
    width: 400px;
    height: 54px;
    padding: 0 47px 0 20px;
    vertical-align: middle;
    font-size: 16px;
    color: #303030;
    border-radius: 9px;
    background: #f7f7f9 url(https://www.yeskey.or.kr/resources/image/component/form/select_arrow.svg) no-repeat right 20px center;
}

.dsgn-select {
    appearance: none;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
}

.dsgn-input {
    width: 400px;
    height: 54px;
    padding: 0 20px;
    vertical-align: middle;
    font-size: 16px;
    color: #333333;
    border-radius: 9px;
    background: #f7f7f9;
}

.dsgn-input {
    appearance: none;
    box-sizing: border-box;
    border: none;
    box-shadow: none;
}

.search-input-group .rpart {
    display: inline-block;
    margin-left: 10px;
}

.input-box {
    position: relative;
    display: inline-block;
    vertical-align: middle;
}

.search-input-group .btn.btn-sub {
    min-width: 80px;
    margin-left: 10px;
    font-weight: 500;
}

.input-box .btn-txtclear {
    position: absolute;
    top: 50%;
    right: 10px;
    margin-top: -20px;
}

.btn.btn-txtclear {
    display: none;
    position: relative;
    width: 40px;
    height: 40px;
}

.btn.bg-main {
    color: #ffffff;
    border: 1px solid #22C55E;
    background: #22C55E;
}

.btn.btn-sub {
    min-width: 100px;
    padding: 0 24px;
    height: 50px;
    line-height: 52px;
    border-radius: 7px;
}

.btn {
    vertical-align: middle;
    position: relative;
    box-sizing: border-box;
    text-align: center;
    color: #303030;
    font-size: 16px;
}

/* tag */
.new_mark_complete {
    display: block;
    width: 38px;
    height: 24px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
}

.new_mark2 {
    display: block;
    width: 50px;
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
  