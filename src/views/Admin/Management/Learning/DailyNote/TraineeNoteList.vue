<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 데일리 과제 관리 > 데일리 과제 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">데일리 과제 현황 조회</h1>
            </div>

            <div class="container mt-3">
                <div class="d-flex align-content-center mb-4">
                    <!-- 
                educenter의 ecname 값과 매칭
                이 값이 none이라면 모든 교육장의 학생 리스트를 보여줄지 회의
            -->
                    <select class="form-control text-center p-3 me-3" id="ecname" name="ecname" style="width: 150px;">
                        <option value="none" selected>교육장 선택</option>
                        <option value="all">전체</option>
                        <option value="송파">송파</option>
                        <option value="혜화">혜화</option>
                        <option value="가산">가산</option>
                    </select>
                    <!-- 
                course의 cname 값과 매칭 
                위의 교육장 값에 따른 교육과정이 옵션값으로 나와야한다.
            -->
                    <select class="form-control text-center p-3 me-3" id="cname" name="cname" style="width: 150px;">
                        <option value="none" selected>교육과정 선택</option>
                        <option value="all">전체</option>
                        <option value="MSA 1차">MSA 1차</option>
                        <option value="MSA 2차">MSA 2차</option>
                        <option value="Cloud 1차">Cloud 1차</option>
                    </select>
                    <!-- 위의 select값들이 선택되어야 보이게끔할지 선택 -->
                    <button class="btn btn-outline-secondary btn-sm" style="height: 45px;">교육생 조회</button>
                </div>
                <div class="select-course-contents ms-3 mb-4">
                    <h5 class="course-name">MSA 기반 Full Stack 개발 전문가 양성과정 2차</h5>
                    <span class="course-requireddate">(2024.02.26 ~ 2024.07.26)</span>
                </div>
                <div class="table">
                    <table class="table" style="width: 1000px">
                        <thead class="text-center align-middle" style="height: 70px;">
                            <th style="width: 15%">프로필</th>
                            <th style="width: 15%">이름</th>
                            <th style="width: 30%">교육생 번호</th>
                            <th style="width: 40%">상세보기</th>
                        </thead>
                        <tbody class="text-center align-middle">
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/hyeonju.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>유팀장</td>
                                <td>M2001</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/seongmin.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>김성민</td>
                                <td>M2002</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
                                </td>
                            </tr>
                            <tr style="border-bottom:1px solid #dcdcdc;">
                                <td>
                                    <img src="@/assets/kyungseob.jpg" class="rounded-circle"
                                        style="width: 80px; height: 80px;">
                                </td>
                                <td>홍경섭</td>
                                <td>M2003</td>
                                <td>
                                    <RouterLink to="/admin/dailynote/trainee/note/list" class="btn btn-outline-dark btn-sm">
                                        과정 상세보기</RouterLink>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <td colspan="4" class="text-center">
                                <b class="text-danger">페이지네이션 추가</b>
                            </td>
                        </tfoot>
                    </table>
                </div>
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

const router = useRouter();

function handleDailyNoteBtn() {
    router.push('/admin/dailynote/trainee/note/list');
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
