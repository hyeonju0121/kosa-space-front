<template>
  <div class="container">
  <aside class="sidebar">
    <div class="menu-btn">
        <i><PhCaretLeft class="icon" weight="bold" /></i>
    </div>
    <div class="head">
      <div class="sidebar-logo">
            <!--<img src="@/assets/logo.png" alt="" class="user-img-detail">-->
            <i><PhSquaresFour class="icon" weight="fill" color="#07b278"/></i>
      </div>
      <div class="logo-text">
        <p class="title">KOSA SPACE</p>
      </div>
    </div>
    <!-- student ----------------------------------------------------------->
      <div class="nav">
        <div class="menu">
          <p class="title">Main</p>
          <ul>
            <li>
              <a href="#">
                <i><PhUser class="icon"/></i>
                <span class="text">마이페이지</span>
                <i class="arrow"><PhCaretDown class="icon"/></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <RouterLink to="/trainee/dashboard">
                    대시보드
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/trainee/mypage/info/modify">
                    회원정보 수정
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">
                <i><PhMonitor class="icon"/></i>
                <span class="text">출결관리</span>
                <i class="arrow"><PhCaretDown class="icon"/></i>
              </a>
              <ul class="sub-menu">
                <li>
                  <RouterLink to="/trainee/attendance/detail">
                    출결 현황 조회
                  </RouterLink>
                </li>
                <li>
                  <RouterLink to="/trainee/attendance/reason/create">
                    출결 변경 신청
                  </RouterLink>
                </li>
              </ul>
            </li>
            <li class="active">
              <a href="#">
                <i><PhGraduationCap class="icon"/></i>
                <span class="text">과제관리</span>
                <i class="arrow"><PhCaretDown class="icon"/></i>
              </a>
              <ul class="sub-menu">
                  <li>
                      <a href="#">
                          <span class="text">과제 제출</span>
                      </a>
                  </li>
                  <li>
                    <RouterLink to="/trainee/dailynote/list">
                      과제 제출 현황 조회
                    </RouterLink>
                  </li>
              </ul>
            </li>
            <li>
              <RouterLink to="/trainee/community">
                <i><PhBrowser class="icon"/></i>
                <span class="text">반 커뮤니티</span>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    <div class="menu">
      <p class="title">Account</p>
      <ul>
        <li>
          <a href="#" @click="handleLogOut()">
            <i><PhSignOut class="icon"/></i>
            <span class="text" >로그아웃</span>
          </a>
        </li>
      </ul>
    </div>

    <div class="user">
      <div class="user-img">
        <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${headerInfo.mid}`"
                                            class="user-img-detail" />
      </div>
      <div class="user-details">
        <p class="title">{{ mid }}</p>
        <p class="name">{{ headerInfo.mname }}</p>
      </div>
    </div>
 </aside>
</div>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import jQuery from 'jquery';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';

const store = useStore();
const router = useRouter();

const $ = jQuery;

const mid = store.state.mid;

// 교육생 Header 정보 받아오기
let headerInfo = ref({});


onMounted(() => {
$(".menu > ul > li").click(function () {
// 이미 활성화된 active에 대해서 active 제거하기
$(this).siblings().removeClass("active");
// 클릭했을 때 active 활성화시키기
$(this).toggleClass("active");
// down 버튼 클릭시 서브카테고리 메뉴 활성화 시키기 
$(this).find("ul").slideToggle();
// 다른 서브카테코리를 클릭시 현재 활성화된 카테고리 close 시키기
$(this).siblings().find("ul").slideUp();
// 서브카테고리 아이템의 클래스 actice 제거하기 
$(this).siblings().find("ul").find("li").removeClass("active");
});

$(".menu-btn").click(function() {
$(".sidebar").toggleClass("active");
})

traineeHeader(mid);

});

async function traineeHeader(mid) {
    try {
        const response = await traineeInfoAPI.traineeInfo(mid);
        headerInfo.value = response.data;
        console.log("헤더 정보 받아오기 : " + headerInfo.value);
    } catch (error) {
        console.log(error);
    }
}



function handleLogOut() {
  console.log("로그아웃");
  store.dispatch("deleteAuth");
  router.push("/login");
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input, span, p, textarea, select {
	font-family: 'Noto Sans KR', sans-serif;
}

* {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: "Inter", sans-serif;
}

body {
background-color: #dbe2f4;
}

/* .container {
display: flex;
align-items: center;
width: 100%;
min-height: 100vh;
} */

/* sticky부모요소의 높이가 충분하지 않아서 sticky가 중간에 깨지는 현상이 발생함 따라서 부모요소에 최소 높이를 2000px줌으로써 해결함 */
.container {
  min-height: 2000px; /* 원하는 높이로 설정 */
  max-width: 340px;
  padding: 0%;
}


.sidebar {
position: sticky;
top: 0; /* 화면 상단에 고정 */
align-self: flex-start; /* 추가된 속성 */
width: 290px;
height: 100vh;
display: flex;
flex-direction: column;
gap: 20px;
background-color: #232323;
padding: 24px;
border-radius: 0px;
transition: all 0.3s;
}

.sidebar .head {
display: flex;
gap: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #434343;
}

/*로고 틀 (원형)*/
.sidebar-logo .icon{
width: 44px;
height: 44px;
overflow: hidden;
}

/*로고 이미지 사이즈 조정*/
.sidebar-logo img {
width: 100%;
object-fit: cover;
}

/*사용자 교육생 번호, 메뉴 타이틀 텍스트*/
.logo-text .title {
font-size: 20px;
font-weight: 800;
color: #757575;
text-transform: uppercase;
margin-top: 10px;
}

.sidebar .user {
display: flex;
gap: 20px;
padding-bottom: 20px;
border-bottom: 1px solid #434343;
}

/*사용자 이미지 틀 (원형)*/
.user-img {
width: 44px;
height: 44px;
border-radius: 50%;
overflow: hidden;
}

/*사용자 이미지 사이즈 조정*/
.user-img img {
width: 100%;
object-fit: cover;
}

/*사용자 교육생 번호, 메뉴 타이틀 텍스트*/
.user-details .title {
font-size: 17px;
font-weight: 500;
color: #a1a1a1;
text-transform: uppercase;
margin-bottom: 2px;
}

/*사용자 이름 텍스트 */
.user-details .name {
font-size: 14px;
font-weight: 500;
color: #a1a1a1;
}

.nav {
flex: 1;
}

/*메뉴 타이틀 텍스트*/
.menu .title {
font-size: 13px;
font-weight: 500;
color: #a1a1a1;
text-transform: uppercase;
margin-bottom: 10px;
}

.menu ul li {
position: relative;
list-style: none;
margin-bottom: 5px;
}

.menu ul li a {
display: flex;
align-items: center;
gap: 10px;
font-size: 17px;
font-weight: 500;
color: #a1a1a1;
text-decoration: none;
padding: 12px 8px;
border-radius: 0px;
transition: all 0.3s;
}

/* menu바 아이템 클릭시 활성화되는 css*/
.menu ul li > a:hover,
.menu ul li.active > a {
color: #22C55E;
background-color: #c6c5c50f;
border-left: 3px solid #22C55E;
}

/* menu바 아이콘 크기 지정*/
.menu ul li .icon {
font-size: 20px;
}
.menu ul li .text {
flex: 1;
}
.menu ul li .arrow {
font-size: 14px;
margin-left: 70px;
transition: all 0.3s;
}
.menu ul li.active .arrow {
transform: rotate(180deg); /* down 버튼 활성화시 180도 회전 시키기*/
}

.menu .sub-menu {
display: none; /* down 버튼 클릭 안했을시에는 서브메뉴 안보이게 비활성화*/
margin-left: 20px;
padding-left: 20px;
padding-top: 5px;
border-left: 1px solid #434343;
}
.menu .sub-menu li a {
padding: 10px 8px;
font-size: 16px;
}
.menu:not(:last-child) {
padding-bottom: 10px;
margin-bottom: 20px;
border-bottom: 2px solid #434343;
}
.menu-btn {
position: absolute;
right: -14px;
top: 3.5%;
width: 28px;
height: 28px;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
color: #757575;
border: 2px solid #f6f6f6;
background-color: #fff;
}
.menu-btn:hover i {
color: #000;
}
.menu-btn i {
transition: all 0.3s;
}
.sidebar.active {
width: 92px;
}
.sidebar.active .menu-btn i {
transform: rotate(180deg);
}

.sidebar.active .logo-text {
display: none;
}

.sidebar.active .user-details {
display: none;
}
.sidebar.active .menu .title {
text-align: center;
}
.sidebar.active .menu ul li .arrow {
display: none;
}
.sidebar.active .menu > ul > li > button {
position: relative;
display: flex;
align-items: center;
justify-content: center;
}

/* 사이드바 확장 안했을 때, 카테코리 클릭시 옆 화면에 표시되는 css*/
.sidebar.active .menu > ul > li > a .text {
position: absolute;
left: 70px;
top: 50%;
transform: translateY(-50%);
padding: 10px;
border-radius: 4px;
color: #fff;
background-color: #000;
opacity: 0;
visibility: hidden;
transition: all 0.3s;
min-width: 8rem;
}
.sidebar.active .menu > ul > li > a .text::after {
content: "";
position: absolute;
left: -5px;
top: 20%;
width: 20px;
height: 20px;
border-radius: 2px;
background-color: #000;
transform: rotate(45deg);
z-index: -1;
}
.sidebar.active .menu > ul > li > a:hover .text {
left: 50px;
opacity: 1;
visibility: visible;
}

.sidebar.active .menu .sub-menu {
position: absolute;
top: 0;
left: 20px;
width: 200px;
border-radius: 20px;
padding: 10px 20px;
border: 1px solid #f6f6f6;
background-color: #fff;
box-shadow: 0px 10px 8px rgba(0, 0, 0, 0.1);
}

</style>
