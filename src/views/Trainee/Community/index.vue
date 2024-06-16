<template>
    <div class="main p-3">
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">반 커뮤니티</h1>
            </div>
        </div>

        <div>
            <RouterLink to="/trainee/community/notice/list">공지사항</RouterLink>
            <RouterLink to="/trainee/community/notice/detail">공지사항 조회</RouterLink>
            <RouterLink to="/trainee/community/assignment/list">과제자료실</RouterLink>
            <RouterLink to="/trainee/community/reference/list">수업자료실</RouterLink>
        </div>
            <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
            <RouterView/>
    </div>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
</style>
