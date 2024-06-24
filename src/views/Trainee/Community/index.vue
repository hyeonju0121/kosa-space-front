<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>반 커뮤니티</span>
        </div>

        <!-- contents -->
        <div class="headingArea mb-5">
            <div class="title">
                <h1 id="itemTitle">반 커뮤니티</h1>
            </div>
            <PersonalProfileHeader />
        </div>

        <div id="my_box" class="mb-4">
            <table class="table-secondary text-center" style="width: 40%; border-bottom: 4px solid lightgray;">
                <thead>
                    <th :style="thstyle1">
                        <RouterLink to="/trainee/community/notice/list"
                            style="text-decoration-line: none; color:black; font-size:1.4rem" :style="rcolor1"
                            @click="handleStyle1()">
                            <b>공지사항</b>
                        </RouterLink>
                    </th>
                    <th :style="thstyle3">
                        <RouterLink to="/trainee/community/reference/list"
                            style="text-decoration: none; color:black; font-size:1.4rem" :style="rcolor3"
                            @click="handleStyle3()"><b>수업
                                자료실</b></RouterLink>
                    </th>
                    <th :style="thstyle2">
                        <RouterLink to="/trainee/community/assignment/list"
                            style="text-decoration: none; color:black; font-size:1.4rem" :style="rcolor2"
                            @click="handleStyle2()"><b>과제
                                제출</b></RouterLink>
                    </th>
                </thead>
            </table>
        </div>

        <!-- 중첩된 라우트의 컴포넌트가 보여질 위치 -->
        <RouterView />
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue';
import { ref } from 'vue';

let thstyle1 = ref("padding-bottom: 6px; border-bottom: 4px solid #22C55E; padding-bottom: 10px;");
let thstyle2 = ref("padding-bottom: 6px;");
let thstyle3 = ref("padding-bottom: 6px;");
let rcolor1 = ref("color:#22C55E;");
let rcolor2 = ref("");
let rcolor3 = ref("");

function handleStyle1() {
    thstyle1.value = "border-bottom: 4px solid #22C55E; padding-bottom: 10px;"
    thstyle2.value = "padding-bottom: 6px;"
    thstyle3.value = "padding-bottom: 6px;"
    rcolor1.value = "color:#22C55E;"
    rcolor2.value = ""
    rcolor3.value = ""
}

function handleStyle2() {
    thstyle1.value = "padding-bottom: 6px;"
    thstyle2.value = "border-bottom: 4px solid #22C55E; padding-bottom: 10px;"
    thstyle3.value = "padding-bottom: 6px;"
    rcolor1.value = ""
    rcolor2.value = "color:#22C55E;"
    rcolor3.value = ""
}

function handleStyle3() {
    thstyle1.value = "padding-bottom: 6px;"
    thstyle2.value = "padding-bottom: 6px;"
    thstyle3.value = "border-bottom: 4px solid #22C55E; padding-bottom: 10px;"
    rcolor1.value = ""
    rcolor2.value = ""
    rcolor3.value = "color:#22C55E;"
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
textarea,
select {
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
    list-style: none;
    width: 30rem;
}
</style>
