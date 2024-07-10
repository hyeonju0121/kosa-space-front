<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육생 상세조회</span>
        </div>

        <!-- 스피너 -->
        <div class="mt-3" v-if="isLoading === true">
            <div class="spinner-border text-success" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>

        <!-- contents -->
        <div v-if="isLoading === false" class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 상세조회</h1>
            </div>

            <!-- contents -->
            <div class="container" style="text-align: left;">
                <!-- 교육생 상세조회 수정폼 -->

                <!-- 테이블 -->
                <table class="table">
                    <tbody>
                        <tr>
                            <td colspan="4">
                                <div style="text-align:left">
                                    <!-- <img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${route.query.mid}`"
                                            width="110" height="150" class="ms-5"> -->
                                    <img :src="src" width="110" height="150" class="ms-5">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>교육생 이름</td>
                            <td><input v-model.trim="traineeInfoData.mname"></td>
                            <td>교육과정 명</td>
                            <td><input v-model="traineeInfoData.cname"></td>
                        </tr>
                        <tr>
                            <td>학력</td>
                            <td>
                                <select class="form-control p-3" id="tacademic" name="tacademic" style="width: 150px;"
                                    v-model="traineeInfoData.tacademic" aria-readonly="true">
                                    <option value="고등학교">고등학교</option>
                                    <option value="대학교">대학교</option>
                                </select>

                                <!-- 고등학교를 선택했을 시 -->
                                <div v-if="traineeInfoData.tacademic === '고등학교'">
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model="traineeInfoData.academicName" type="text" class="form-control"
                                            name="tschoolname" id="" value="" placeholder="" style="width: 150px;">
                                        <label for="tschoolname" class="form-label">학교명</label>
                                    </div>
                                </div>
                                <!-- 대학교를 선택했을 시 -->
                                <div v-if="traineeInfoData.tacademic === '대학교'">
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model="traineeInfoData.tschoolname" type="text" class="form-control"
                                            name="tschoolname" id="" value="" placeholder="" style="width: 150px;">
                                        <label for="tschoolname" class="form-label">학교명</label>
                                    </div>
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model="traineeInfoData.tmajor" type="text" class="form-control"
                                            name="tmajor" id="" value="" placeholder="" style="width: 150px;">
                                        <label for="tmajor" class="form-label">주전공</label>
                                    </div>
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model="traineeInfoData.tminor" type="text" class="form-control"
                                            name="tminor" id="" value="" placeholder="" style="width: 150px;">
                                        <label for="tminor" class="form-label">부전공</label>
                                    </div>
                                    <!-- 학점에 대한 유효성 검사 #.### ? -->
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model="traineeInfoData.tgrade" type="text" class="form-control"
                                            name="tgrade" id="" value="" placeholder="" style="width: 150px;">
                                        <label for="tgrade" class="form-label">평균학점</label>
                                    </div>
                                </div>
                            </td>
                            <td>전공여부</td>
                            <td>
                                <select v-model="traineeInfoData.tfield" style="width: 150px;">
                                    <option value="true">전공</option>
                                    <option value="false">비전공</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>나이</td>
                            <td><input type="text" v-model="traineeInfoData.tage"></td>
                            <td>성별</td>
                            <td>
                                <select v-model="traineeInfoData.tsex">
                                    <option value="성별" selected disabled>성별 선택</option>
                                    <option value="true">남자</option>
                                    <option value="false">여자</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>주소</td>
                            <div class="td">
                                <input type="text" placeholder="우편번호" v-model.trim="traineeInfoData.tpostcode"
                                    style="width:100px">
                                <br>
                                <input type="text" v-model.trim="traineeInfoData.taddress" placeholder="주소"
                                    style="width:400px; margin-top: 3%;"><br>
                                <input type="text" v-model.trim="traineeInfoData.taddressdetail" placeholder="상세주소"
                                    style="width:500px; margin-top: 3%;">
                            </div>
                        </tr>
                        <tr>
                            <td>핸드폰 번호</td>
                            <td colspan="3">
                                <input v-model="traineeInfoData.mphone">
                            </td>
                        </tr>
                        <tr>
                            <td>교육상태</td>
                            <td colspan="3">
                                <select v-model="traineeInfoData.tstatus" style="width: 150px;">
                                    <option :value="traineeInfoData.tstatus" selected>{{ traineeInfoData.tstatus }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn_big_wrap" style="text-align:center">
                    <span class="me-3">
                        <BaseButtonSubmit @click="handleSubmit">확인</BaseButtonSubmit>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter, useRoute } from 'vue-router';
import { onMounted, ref, onBeforeMount } from 'vue';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import axios from 'axios';

const router = useRouter();
const route = useRoute();

// 라우트 이동간에 onBeforeMout 보다 빠르게 실행됨.
const mid = route.query.mid;
const ecname = route.query.ecname;
const cname = route.query.cname;

// mid에 따른 교육생 정보를 받아올 변수
let traineeInfoData = ref();
let isLoading = ref(true);  // 로딩 상태 변수 추가

// 교육생 이미지 다운로드
let src = ref();

onMounted(() => {
    console.group("교육생 상세보기 onMounted 실행");
    traineeInfoSet(mid);
    console.log("mid = " + mid);
    console.log("ecname = " + ecname);
    console.log("cname = " + cname);
    console.groupEnd("onMouted 실행 완료");
})


async function traineeInfoSet(mid) {
    isLoading.value = true;
    try {
        console.log("교육생 정보 불러오기 성공");
        const response = await traineeInfoAPI.traineeInfo(mid);
        traineeInfoData.value = response.data;
        console.log("response.data = " + response.data);
        console.log("traineeInfoData.value = " + traineeInfoData.value);
        // console.log("traineeInfoData.value = " + JSON.stringify(traineeInfoData.value));
        console.log("traineeInfoData.value.mid = " + traineeInfoData.value.mid);
        console.log("traineeInfoData.value.mname = " + traineeInfoData.value.mname);
        src.value = `${axios.defaults.baseURL}/edu/download/traineeattach/${traineeInfoData.value.mid}`;
        isLoading.value = false;  // 데이터 로드 완료 후 로딩 상태 변경
    } catch (error) {
        console.log("교육생 정보 불러오기 실패");
        isLoading.value = false;  // 에러 발생 시에도 로딩 상태 변경
    }
}

// 확인 버튼 // 이전에 있던 리스트로 돌아가기
function handleSubmit() {
    router.push({
        path: '/admin/trainee/list?ecname=' + ecname + "&cname=" + cname,
        query: {
            detailEcname: ecname,
            detailCname: cname,
        }
    });

    // router.back();
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
