<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 개인별 데일리 과제 목록 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 목록 조회</h1>
            </div>

            <PersonalProfileHeader class="mt-2 mb-3" />
            <div class="d-flex mb-4">
                <input class="me-3" type="date" id="" name="" min="" value="">
                <span class="me-3">~</span>
                <input type="date" id="" name="" min="" value="">
            </div>
            <div class="table">
                <table class="" style="width: 1000px;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 15%">이름</th>
                        <th style="width: 15%">교육생 번호</th>
                        <th style="width: 30%">제출여부</th>
                        <th style="width: 25%">상세보기</th>
                        <th style="width: 15%">주차별 태그</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><span class="btn btn-dark">제출</span></td>
                            <td>
                                <RouterLink to="/admin/dailynote/trainee/note/detail" class="btn btn-outline-dark btn-sm">과정
                                    상세보기</RouterLink>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary btn-sm">1주차</RouterLink>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><span class="btn btn-dark">제출</span></td>
                            <td>
                                <RouterLink to="/admin/dailynote/trainee/note/detail" class="btn btn-outline-dark btn-sm">과정
                                    상세보기</RouterLink>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary btn-sm">2주차</RouterLink>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><span class="btn btn-dark">미제출</span></td>
                            <td>
                                <RouterLink to="/admin/dailynote/trainee/note/detail" class="btn btn-outline-dark btn-sm">과정
                                    상세보기</RouterLink>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary btn-sm">3주차</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="6" class="text-center" style="height: 50px">
                            <b class="text-danger">페이지네이션 추가</b>
                        </td>
                    </tfoot>
                </table>
            </div>
            <div>
                <BaseButtonUpdate class="mt-3" @click="handleDailyNoteBtn">과제 상세 보기</BaseButtonUpdate>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter } from 'vue-router';
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'

const router = useRouter();

function handleDailyNoteBtn() {
    router.push('/admin/dailynote/trainee/note/detail');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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
</style>
