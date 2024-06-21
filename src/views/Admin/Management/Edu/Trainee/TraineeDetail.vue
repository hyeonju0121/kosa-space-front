<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육생 상세조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 상세조회</h1>
            </div>

            <!-- contents -->
            <div class="container" style="text-align: left;">
                <!-- 테이블 -->
                <table class="table">
                    <tbody>
                        <tr>

                            <td>
                                <div style="text-align:left">
                                    <img src="@/assets/kyungseob.jpg" width="110" height="150" class="ms-5">
                                </div>
                            </td>
                            <td style="vertical-align: middle;">
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>교육생 이름</td>
                            <td><input value="이경섭"></td>
                            <td>참여중인 교육과정 명</td>
                            <td><input value="MSA 2차"></td>
                        </tr>
                        <tr>
                            <td>학력</td>
                            <td>
                                <select class="form-control p-3" id="tacademic" name="tacademic" style="width: 150px;"
                                    v-model="academic" required>
                                    <option value="고등학교">고등학교</option>
                                    <option value="대학교">대학교</option>
                                </select>
                            </td>
                            <td>전공여부</td>
                            <td>
                                <select style="width: 150px;">
                                    <option value="1">전공</option>
                                    <option value="2">비전공</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>나이</td>
                            <td><input value="32"></td>
                            <td>성별</td>
                            <td><input value="남자"></td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>핸드폰 번호</td>
                            <td><input value="010-xxxx-xxxx"></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>교육생 상태</td>
                            <td>
                                <select style="width: 150px;">
                                    <option value="1">과정 진행중</option>
                                    <option value="2">퇴소</option>
                                    <option value="3">정상 수료</option>
                                </select>
                            </td>
                            <td></td>
                            <td></td>

                        </tr>
                    </tbody>
                </table>
                <div class="btn_big_wrap" style="text-align:center">
                    <span class="me-3">
                        <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
                    </span>
                    <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCancle() {
    router.push('/admin/trainee/list');
}

function handleSubmit() {
    router.push('/admin/trainee/list');
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
p,
span,
small,
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
</style>
