<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육생 등록</span>
        </div>

        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 등록 </h1>
                <div id="itemDetail">| {{ request.ecname }} - {{ request.cname }}</div>
            </div>

            <!-- 교육생 등록 폼 -->
            <form @submit.prevent="handleSubmit">
                <!-- 테이블 + 버튼 -->
                <div class="container" style="text-align: left;">
                    <!-- 테이블 -->
                    <table class="table">
                        <tbody>
                            <tr>
                                <td style="vertical-align: middle;">
                                    교육생 이미지
                                </td>
                                <td colspan="3">
                                    <div style="text-align:left">
                                        <!-- 교육생 이미지 (필수) -->
                                        <img :src="src" width="110" height="150" class="ms-5">
                                        <!-- <input ref="trainee.tprofileimg" type="file" class="form-control p-3 mt-2"
                                            name="tprofileimg" id="tprofileimg" accept="image/*" onchange=""
                                            style="width: 300px;" required> -->
                                        <input ref="trainee.tprofileimg" type="file" class="form-control p-3 mt-2"
                                            name="tprofileimg" id="tprofileimg" accept="image/*" @change="addImage"
                                            style="width: 300px;" required>
                                        <p v-if="imgCheck === false" class="text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            교육생 이미지는 필수입력사항입니다.
                                        </p>
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>교육생 이름</td>
                                <td colspan="3">
                                    <input type="text" name="mname" id="mname" v-model.trim="request.mname"
                                        placeholder="이름" style="width: 150px;" @input="namePatternCheck()" required>
                                    <!-- 이름 유효성 검사를 통한 DOM 생성 여부 -->
                                    <p v-if="mnameCheck === false" class="text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        2글자 이상 한글만 입력 가능합니다. (길이 2 ~ 6 공백 X)
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>학력</td>
                                <td colspan="3">
                                    <!-- 팀원 셀렉트 옵션 태그 확인하고 수정(통일시키기) -->
                                    <select id="tacademic" name="tacademic" style="width: 150px;"
                                        v-model.trim="request.tacademic" required>
                                        <option value="학력" selected disabled>학력</option>
                                        <option value="고등학교">고등학교</option>
                                        <option value="대학교">대학교</option>
                                    </select>

                                    <!-- 고등학교를 선택했을 시 -->
                                    <div class="form-floating mt-2" style="width: 150px">
                                        <input v-model.trim="request.tschoolname" type="text" class="form-control"
                                            @input="schCheck()" name="tschoolname" placeholder="" style="width: 150px;">
                                        <label for="tschoolname" class="form-label">학교명</label>
                                        <p v-if="tschoolNameCheck === false" class="text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            학교명 입력은 필수입력사항입니다.
                                        </p>
                                    </div>
                                    <!-- 대학교를 선택했을 시 -->
                                    <div v-if="request.tacademic === '대학교'">
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model.trim="request.tmajor" type="text" class="form-control"
                                                name="tmajor" placeholder="" style="width: 150px;">
                                            <label for="tmajor" class="form-label">주전공</label>
                                        </div>
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model.trim="request.tminor" type="text" class="form-control"
                                                name="tminor" placeholder="" style="width: 150px;">
                                            <label for="tminor" class="form-label">부전공</label>
                                        </div>
                                        <!-- 학점에 대한 유효성 검사 #.### ? -->
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model.trim="request.tgrade" type="text" class="form-control"
                                                name="tgrade" placeholder="" style="width: 150px;">
                                            <label for="tgrade" class="form-label">평균학점</label>
                                        </div>
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <select v-model.trim="request.tfield" name="check" class="form-control"
                                                style="width: 150px;" required>
                                                <option value=1>전공</option>
                                                <option value=0>비전공</option>
                                            </select>
                                            <label for="check" class="form-label">전공 여부</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>나이</td>
                                <td><input type="text" v-model.trim="request.tage" style="width: 80px;" required></td>
                                <td>성별</td>
                                <td>
                                    <select v-model.trim="request.tsex" @change="checkSex()" required>
                                        <option value="성별 선택" selected disabled>성별 선택</option>
                                        <option value=1>남자</option>
                                        <option value=0>여자</option>
                                    </select>
                                    <!-- 성별 유효성 검사를 통한 DOM 생성 여부 -->
                                    <p v-if="tsexCheck === false" class="text-center text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        성별을 선택해주세요.
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td colspan="3">
                                    <div class="td">
                                        <DaumPostCode3 @send-daumpostcode="postcodeinfo" />
                                        <input type="text" v-model.trim="request.taddressdetail" placeholder="상세주소"
                                            style="width:500px; margin-top: 3%;">
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td colspan="3">
                                    <div class="d-flex align-items-center">
                                        <input type="text" class="form-control me-2" name="emailFront" id="emailFront"
                                            v-model.trim="memailFront" @input="emailPatternCheck()"
                                            style="width: 150px;" required />
                                        <span> @ </span>
                                        <input type="text" class="form-control ms-2" name="emailBack" id="emailBack"
                                            v-model.trim="memailBack" @input="emailPatternCheck()" style="width: 150px;"
                                            required />
                                        <span v-if="memailCheck === false" class="text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 이메일 형식이 올바르지 않습니다. (ex. kosaspace@naver.com)
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>핸드폰 번호</td>
                                <td colspan="3">
                                    <!-- 휴대폰 앞번호 -->
                                    <input type="text" name="mphonenumver1" id="mphonenumber1" value="010"
                                        style="width: 80px;" readonly>
                                    <span class="ms2-2 me-2">-</span>
                                    <!-- 휴대폰 중간 번호 -->
                                    <input maxlength="4" type="text" name="mphonenumber2" id="mphonenumber2"
                                        style="width: 100px;" v-model.trim="mphonenummiddle"
                                        @input="phonePatternmiddleCheck()" required>
                                    <span class="ms-2 me-2">-</span>
                                    <!-- 휴대폰 뒷 번호 -->
                                    <input maxlength="4" type="text" name="mphonenumber3" id="mphonenumber3" value=""
                                        style="width: 100px;" v-model.trim="mphonenumend"
                                        @input="phonePatternendCheck()" required>
                                    <p v-if="mphoneMiddleCheck === false" class="text-center text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        휴대폰 중간번호 4자리를 입력해주세요.
                                    </p>
                                    <p v-if="mphoneEndCheck === false" class="text-center text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        휴대폰 끝번호 4자리를 입력해주세요.
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 버튼부분 -->
                    <div style="text-align: center;">
                        <button class="btn btn-info btn-sm me-3" :class="btnShow">등록</button>
                        <input class="btn btn-danger btn-sm" value="취소" @click="handleCancle()">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import DaumPostCode3 from './DaumPostCode3.vue';
import traineeInfoAPI from '@/apis/traineeInfoAPI';

//라우터 객체 얻기
const router = useRouter();
const route = useRoute();

// 교육장과 교육과정을 이전의 라우터에서 받아옴.
onMounted(() => {
    request.value.ecname = route.query.ecname || '';
    request.value.cname = route.query.cname || '';
});


//주소api에서 우편번호와 주소 값가져오기
function postcodeinfo(data1, data2) { // data1이 adress, data2가 postcode
    console.log("postcodeinfo 실행");
    request.value.tpostcode = data2;
    request.value.taddress = data1;
}

// Rest API로 보낼 상태 객체
let request = ref({
    ecname: "",
    cname: "",
    mid: "",
    mname: "",
    mpassword: "",
    mphone: "",
    memail: "",
    tsex: "성별 선택",
    tpostcode: "",
    taddress: "",
    tage: "",
    tfield: false,
    tacademic: "학력",
    tschoolname: "",
    tmajor: "",
    tminor: "",
    tgrade: "",
    tstatus: "",
    tprofileimg: null,
    tprofileoname: "",
    tprofiletype: "",
    taddressdetail: ""
});

// v-if를 사용하여 DOM 생성 여부를 위한 변수 선언
let mnameCheck = ref(null); // 이름 유효성 v-if
let memailCheck = ref(null); // 이메일 유효성 v-if
let mphoneMiddleCheck = ref(null); //휴대폰 중간 번호 유효성 v-if
let mphoneEndCheck = ref(null); //휴대폰 끝 번호 유효성 v-if
let mphoneTotalCheck = ref(null); // 휴대폰 전체 유효성
let tsexCheck = ref(null); // 성별 v-if부분
let imgCheck = ref(false);
let tschoolNameCheck = ref(false);

// 이메일 앞, 뒤의 값을 받고 확인할 변수
let memailFront = ref("");
let memailBack = ref("");

// 휴대폰 번호 중간, 끝 번호의 값을 받고 확인할 변수 선언
let mphonenummiddle = ref("");
let mphonenumend = ref("");

// 학교명 입력 확인
function schCheck() {
    console.log(request.value.tschoolname.length);
    if (request.value.tschoolname.length > 3) {
        tschoolNameCheck.value = true;
    } else {
        tschoolNameCheck.value = false;
    }
    onState();
}

// 이미지 파일 미리보기
const src = ref();
let attach = null;

function addImage(e) {
    console.log("파일 추가");
    const file = e.target.files[0];
    console.log("file = " + file);
    if (file) {
        console.log("파일 추가 성공");
        src.value = URL.createObjectURL(file);
        imgCheck.value = true;
        console.log("src.value = " + src.value); // BLOB
        // console.log("src.value.file = " + src.value.files[0]);

        // file을 formdata에 넣기위해 attach 변수에 저장
        attach = file;
        console.log("attach = " + attach);
    } else {
        imgCheck.value = false;
    }
    onState();
}

// 성별 유효성 검사
function checkSex() {
    tsexCheck.value = request.value.tsex !== '성별';
    onState();
}

// 이름 유효성 검사
const mnamePattern = /^[가-힣]{2,6}$/;
function namePatternCheck() {
    if (mnamePattern.test(request.value.mname)) {
        mnameCheck.value = true;
    } else {
        mnameCheck.value = false;
    }
    onState();
}

// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  // 정규식 수정해야함.
function emailPatternCheck() {
    request.value.memail = memailFront.value + "@" + memailBack.value;
    if (memailPattern.test(request.value.memail)) {
        memailCheck.value = true;
    } else {
        memailCheck.value = false;
    }
    onState();
}

// 휴대폰 중간번호 유효성 검사
function phonePatternmiddleCheck() {
    const mphoneMiddlePattern = /^[0-9]{4}$/;
    if (mphoneMiddlePattern.test(mphonenummiddle.value)) {
        mphoneMiddleCheck.value = true;
    } else {
        mphoneMiddleCheck.value = false;
    }
    phonePatternCheck();
}

// 휴대폰 끝번호 유효성 검사
function phonePatternendCheck() {
    const mphoneEndPattern = /^[0-9]{4}$/;
    if (mphoneEndPattern.test(mphonenumend.value)) {
        mphoneEndCheck.value = true;
    } else {
        mphoneEndCheck.value = false;
    }
    phonePatternCheck();
}

// 휴대폰 번호 전체 유효성 검사
const mphonePattern = /^(010)-\d{4}-\d{4}$/;
function phonePatternCheck() {
    request.value.mphone = "010-" + mphonenummiddle.value + "-" + mphonenumend.value;
    console.log("member.value.mphone : " + request.value.mphone);
    console.log("mphonenummiddle : " + mphonenummiddle.value);
    console.log("mphonenumend : " + mphonenumend.value);
    // mphoneTotalCheck.value = mphonePattern.test(member.value.mphone);
    if (mphonePattern.test(request.value.mphone)) {
        mphoneTotalCheck.value = true;
    } else {
        mphoneTotalCheck.value = false;
    }
    onState();
}

// 전체 입력값 확인하기
let btnShow = ref("disabled");
function onState() {
    // 전체 유효성 검사를 통과하면 회원가입 버튼 활성화
    if (mnameCheck.value && memailCheck.value && mphoneTotalCheck.value
        && tsexCheck.value && imgCheck.value && tschoolNameCheck.value) {
        btnShow.value = "";
    } else {
        btnShow.value = "disabled";
    }
}

//취소버튼을 눌렀을때
function handleCancle() {
    router.push('/admin/trainee/list');
}

//등록 버튼을 눌렀을때
async function handleSubmit() {
    console.log("handleSubmit 버튼 실행");
    console.log("request.value = " + request.value);

    const formData = new FormData();

    //입력값들 넣기
    formData.append("ecname", request.value.ecname);
    formData.append("cname", request.value.cname);
    formData.append("mid", request.value.mid);
    formData.append("mname", request.value.mname);
    formData.append("mphone", request.value.mphone);
    formData.append("memail", request.value.memail);
    formData.append("tsex", request.value.tsex);
    formData.append("tage", request.value.tage);
    formData.append("tfield", request.value.tfield);
    formData.append("tacademic", request.value.tacademic);
    formData.append("tschoolname", request.value.tschoolname);
    formData.append("tmajor", request.value.tmajor);
    formData.append("tminor", request.value.tminor);
    formData.append("tgrade", request.value.tgrade);
    formData.append("tstatus", request.value.tstatus);
    // 파일 넣기
    // formData.append("tprofiledata", request.value.tprofileimg.files[0]);    // trainee.tprofileimg
    formData.append("tprofiledata", attach); // 이미지 파일이 들어가는지 확인..
    // 우편번호와 주소, 상세주소 넣기
    formData.append("tpostcode", request.value.tpostcode);
    formData.append("taddress", request.value.taddress);
    formData.append("taddressdetail", request.value.taddressdetail);
    // tprofileimg: "",
    // tprofileoname: "",
    // tprofiletype: ""

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    console.log("formData = " + formData);
    //교육생 등록 요청
    try {
        console.log("traineeInfoAPI 실행 전");
        await traineeInfoAPI.traineeRegister(formData);
        router.push("/admin/trainee/list");
    } catch (error) {
        console.log(error);
    }
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

#itemDetail {
    font-weight: 600;
    font-size: 1.4rem;
    margin-top: 20px;
    margin-bottom: 10px;
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
