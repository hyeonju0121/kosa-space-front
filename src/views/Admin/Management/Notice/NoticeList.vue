<template>
    <div class="main" style="margin-left: 25px; width: 1200px;">
      <div class="item-section mt-2 mb-2" style="font-size: 12px">
        <span>공지사항 관리 > 공지사항 목록</span>
      </div>
  
      <!-- contents -->
      <div class="headingArea" style="margin-bottom: 2%;">
        <div class="title">
          <h1 id="itemTitle">공지사항 목록</h1>
        </div>
      </div>
  
      <form @submit.prevent="handleSubmitFilter1">
        <div class="align" style="display: flex;">
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
        </div>
      </form>
  
      <div class="mt-3" style="text-align:right">
        <input type="button" class="btn btn-dark btn-sm" value="등록" @click="handleCreateBtn">
      </div>
  
      <div class="mt-3">
        <div class="notice-summary">
          총 {{ notices.length }}개의 글이 등록되어 있습니다.
        </div>
        <div class="search-box">
          <input type="text" placeholder="공지사항 검색">
          <button class="search-button">
            <img src="search-icon.png" alt="Search">
          </button>
        </div>
        <table class="notice-table">
          <tbody>
            <tr v-for="notice in notices" :key="notice.id" :class="{'highlight': notice.highlight}">
              <td class="label">{{ notice.label }}</td>
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
    { id: 1, label: '공지', title: '금융데이터거래소 이용약관 개정 안내', date: '2020-12-21', views: 31, highlight: true },
    { id: 2, label: '공지', title: '금융권 데이터 유통 가이드(2020.10 개정)', date: '2020-10-29', views: 237, highlight: true },
    { id: 3, label: '공지', title: '금융데이터거래소 및 데이터전문기관(금융보안원) 소개자료', date: '2020-09-15', views: 355, highlight: true },
    { id: 4, label: '', title: '금융데이터거래소 이용약관 개정 안내', date: '2020-12-21', views: 31, highlight: false },
    { id: 5, label: '', title: '금융권 데이터 유통 가이드(2020.10 개정)', date: '2020-10-29', views: 237, highlight: false },
    { id: 6, label: '', title: '금융데이터거래소 및 데이터전문기관(금융보안원) 소개자료', date: '2020-09-15', views: 355, highlight: false },
    { id: 7, label: '', title: '개인정보 처리방침 개정 안내', date: '2020-08-19', views: 137, highlight: false },
    { id: 8, label: '', title: '금융데이터거래소 이용약관 변경 안내', date: '2020-08-05', views: 194, highlight: false },
    { id: 9, label: '', title: '2020년 하반기 데이터바우처(AI데이터 가공 바우처) 사업 안내', date: '2020-07-16', views: 298, highlight: false },
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
  }
  
  .notice-table tr {
    border-bottom: 1px solid #ccc;
  }
  
  .notice-table tr.highlight {
    background-color: #f0f8ff;
  }
  
  .notice-table td {
    padding: 0.75rem;
  }
  
  .notice-table .label {
    width: 5%;
    text-align: center;
    font-weight: bold;
    color: #007bff;
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
  </style>
  