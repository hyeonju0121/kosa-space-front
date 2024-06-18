<template>
     <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>반 커뮤니티</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">반 커뮤니티</h1>
            </div>
            <PersonalProfileHeader/>
        </div>

        <div id="my_box">
            <ul class="my_menu">
                <li id="menu1" style="margin-right: 10px;">
                    <RouterLink to="/trainee/community/notice/list">공지사항</RouterLink>
                </li>
                <li id="menu2" style="margin-right: 10px;">
                    <RouterLink to="/trainee/community/assignment/list">과제 자료실</RouterLink>
                </li>
                <li id="menu3" style="margin-right: 10px;">
                    <RouterLink to="/trainee/community/reference/list">수업 자료실</RouterLink>
                </li>
            </ul>
        </div>

        <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
        <RouterView />
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input, textarea, select {
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

.my_menu {
    display: flex;
}

.my_menu {
	list-style:none; 
	width:30rem;
}

</style>
