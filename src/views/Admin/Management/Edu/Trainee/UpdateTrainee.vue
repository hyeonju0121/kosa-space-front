<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육생 관리 > 교육생 수정</span>
        </div>


        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 수정</h1>
            </div>

            <!-- contents -->
            <div class="container" style="text-align: left;">
                <!-- 테이블 -->
                <table class="table">
                    <tbody>
                        <tr>
                            <td style="vertical-align: middle;">
                                교육생 이미지
                            </td>
                            <td>
                                <div style="text-align:left">
                                    <img src="@/assets/kyungseob.jpg" width="110" height="150" class="ms-5">
                                    <input type="file" class="form-control p-3 mt-2" name="tprofileimg" id="tprofileimg"
                                        accept="image/*" onchange="" style="width: 300px;">
                                </div>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>교육생 이름</td>
                            <td colspan="3"><input value="이경섭"></td>                            
                        </tr>
                        <tr>
                            <td>학력</td>
                            <td>                               
                                <select class="form-control p-3" id="tacademic" name="tacademic" style="width: 150px;"
                                    v-model="academic" required>
                                    <option value="고등학교">고등학교</option>
                                    <option value="대학교">대학교</option>
                                </select>
                                <button class="btn btn-info btn-sm" @click="test">test</button>
                                <!-- 고등학교를 선택했을 시 -->
                                <div v-if="academic === '고등학교'">
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tschoolname" id="" value=""
                                            placeholder="" style="width: 150px;">
                                        <label for="tschoolname" class="form-label">학교명</label>
                                    </div>
                                </div>
                                <!-- 대학교를 선택했을 시 -->
                                <div v-if="academic === '대학교'">
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tschoolname" id="" value=""
                                            placeholder="" style="width: 150px;">
                                        <label for="tschoolname" class="form-label">학교명</label>
                                    </div>
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tmajor" id="" value="" placeholder=""
                                            style="width: 150px;">
                                        <label for="tmajor" class="form-label">주전공</label>
                                    </div>
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tminor" id="" value="" placeholder=""
                                            style="width: 150px;">
                                        <label for="tminor" class="form-label">부전공</label>
                                    </div>
                                    <!-- 학점에 대한 유효성 검사 #.### ? -->
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tgrade" id="" value="" placeholder=""
                                            style="width: 150px;">
                                        <label for="tgrade" class="form-label">평균학점</label>
                                    </div>
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input type="text" class="form-control" name="tfield" id="" value="전공/비전공"
                                            placeholder="전공/비전공 둘중 하나값" style="width: 150px;" readonly>
                                    </div>
                                </div>
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
                            <td><input></td>
                            <td>성별</td>
                            <td><input></td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>핸드폰 번호</td>
                            <td><input></td>
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
                <div class="btn_big_wrap" style="vertical-align: middle;">
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
import { ref } from 'vue';

const router = useRouter();

function handleCancle() {
    router.push('/admin/trainee/list');
}

function handleSubmit() {
    router.push('/admin/trainee/list');
}

let academic = ref("");

function test() {
    console.log(academic.value);
    const testa = document.querySelector('#tacademic');
    academic.value = testa.value;
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
