<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 개인별 데일리 과제 상세 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
            </div>

            <PersonalProfileHeader class="mt-2 mb-3" />
            <div class="table">
                <table class="" style="width: 1000px;">
                    <thead class="text-center align-middle" style="height: 70px;">
                        <th style="width: 55%">과제 제목</th>
                        <th style="width: 10%">용량</th>
                        <th style="width: 15%">작성일</th>
                        <th style="width: 10%">주차별 태그</th>
                        <th style="width: 10%">-</th>
                    </thead>
                    <tbody class="text-center align-middle">
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>Day 70. 2024-06-18 컴포넌트 설계작업</td>
                            <td>40KB</td>
                            <td>2024.06.18</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td><button class="btn btn-danger btn-sm">삭제</button></td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>Day 69. 2024-06-17 시각화 자료 추가 보충작업</td>
                            <td>13MB</td>
                            <td>2024.06.17</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td><button class="btn btn-danger btn-sm">삭제</button></td>
                        </tr>
                        <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                            <td>Day 68. 2024-06-16 Rest API 구조 설계</td>
                            <td>56KB</td>
                            <td>2024.06.16</td>
                            <td><span class="btn btn-dark btn-sm">10주차</span></td>
                            <td><button class="btn btn-danger btn-sm">삭제</button></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <td colspan="5" class="text-center" style="height: 50px">
                            <b class="text-danger">페이지네이션 추가</b>
                        </td>
                    </tfoot>
                </table>
                <div class="btn_big_wrap">
                    <BaseButtonSubmit @click="handleCheck">뒤로가기</BaseButtonSubmit>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCheck() {
    router.push(`/admin/dailynote/trainee/note/list`);
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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}
</style>
