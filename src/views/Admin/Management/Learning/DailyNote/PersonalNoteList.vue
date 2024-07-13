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

            <div class="table">
                <table class="" style="width: 1000px; vertical-align: middle;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 15%">이름</th>
                        <th style="width: 15%">교육생 번호</th>
                        <th style="width: 30%">제출여부</th>
                        <th style="width: 25%">상세보기</th>
                        <th style="width: 15%">주차별 태그</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px; vertical-align: middle;">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><div class="btn btn-dark" style="padding: 6px 20px;">제출</div></td>
                            <td style="vertical-align: middle;">
                                <button class="detail-btn" style="margin-top: 10px; margin-bottom: 10px;" @click="handleDailyNoteBtn">
                                    과제 상세 보기
                                </button>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary">1주차</RouterLink>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px;">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><span class="btn btn-dark" style="padding: 6px 20px;">제출</span></td>
                            <td>
                                <button class="detail-btn" style="margin-top: 10px; margin-bottom: 10px;" @click="handleDailyNoteBtn">
                                    과제 상세 보기
                                </button>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary">2주차</RouterLink>
                            </td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>유팀장</td>
                            <td>M2001</td>
                            <td><span class="btn btn-danger">미제출</span></td>
                            <td style="vertical-align: middle;">
                                <button class="detail-btn" style="margin-top: 10px; margin-bottom: 10px;" @click="handleDailyNoteBtn">
                                    과제 상세 보기
                                </button>
                            </td>
                            <td>
                                <RouterLink to="" class="btn btn-primary">3주차</RouterLink>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <!-- <td colspan="6" class="text-center" style="height: 50px">
                            <b class="text-danger">페이지네이션 추가</b>
                        </td> -->
                    </tfoot>
                </table>
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

.detail-btn{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    color: white;
    background-color: #22C55E;
    border: 1px solid white;
    margin-left: 10px;      
    border-radius: 9px;  
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
