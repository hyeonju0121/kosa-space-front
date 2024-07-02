<template>
    <!-- contents -->
    <div class="headingArea">
        <!-- seongmin -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="d-flex" style="height: 90%; width: 80%;">
                <div class="shadow col-12 col-md-6" style="height: 100%;">
                    <div class="p-3 p-md-4 p-xl-5" style="height: 90%;">
                        <div class="row">
                            <div class="col-12">
                                <div class="mb-5">
                                    <div class="text-center mb-4">
                                        <a href="#!">
                                            <!-- <img src="./assets/img/bsb-logo.svg"
                                                                alt="BootstrapBrain Logo" width="175" height="57"> -->
                                        </a>
                                    </div>
                                    <h1 class="text-center">
                                        <b> </b>
                                        <b class="text-decoration-underline">Sign Up</b>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <!-- 회원가입 폼 -->
                        <form @submit.prevent="handleSubmit">
                            <div class="row gy-3 overflow-hidden">
                                <!-- 아이디 -->
                                <div class="col-12">
                                    <div class="d-flex justify-content-center col-12">
                                        <!-- 아이디 입력과 동시에 유효성 검사 -->
                                        <div class="form-floating" style="width: 70%">
                                            <input type="text" class="form-control" name="mid" id="mid"
                                                v-model.trim="member.mid" placeholder="아이디" @input="idPatternCheck()"
                                                required>
                                            <label for="mid" class="form-label ms-2">ID</label>
                                        </div>
                                        <!-- 중복 아이디 검사 버튼 -->
                                        <div class="d-flex align-items-center ms-1">
                                            <span class="btn btn-secondary btn-sm" @click="handleIdCheck()">
                                                중복<br>
                                                체크
                                            </span>
                                        </div>
                                    </div>
                                    <!-- 아이디 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-1">
                                        <p v-if="midCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            영어 소문자와 숫자로 입력해주세요. (길이 5 ~ 12 공백 X)
                                        </p>
                                    </div>
                                </div>
                                <!-- 이름 -->
                                <div class="col-12">
                                    <!-- 이름 입력과 동시에 유효성 검사 -->
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="text" class="form-control" name="mname" id="mname"
                                                v-model.trim="member.mname" placeholder="이름" @input="namePatternCheck()"
                                                required>
                                            <label for="mname" class="form-label">Name</label>
                                        </div>
                                    </div>
                                    <!-- 이름 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-1">
                                        <p v-if="mnameCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            2글자 이상 한글만 입력 가능합니다. (길이 2 ~ 5 공백 X)
                                        </p>
                                    </div>
                                </div>
                                <!-- 비밀번호 입력 -->
                                <div class="col-12">
                                    <!-- 비밀번호 입력과 동시에 유효성 검사 -->
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="password" class="form-control" name="mpassword" id="mpassword1"
                                                v-model.trim="member.mpassword" value="" placeholder="비밀번호"
                                                @input="passwordPatternCheck()" required>
                                            <label for="password" class="form-label">Password</label>
                                        </div>
                                    </div>
                                    <!-- 비밀번호 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-1">
                                        <p v-if="mpasswordCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 영어 대/소문자, 숫자, 특수문자를 포함하여야 합니다. (길이 5 ~ 12 공백 X)
                                        </p>
                                    </div>
                                </div>
                                <!-- 비밀번호 일치 확인 -->
                                <div class="col-12">
                                    <!-- 2차 확인 비밀번호 입력과 동시에 1차 비밀번호와 값 일치 확인 -->
                                    <div class="d-flex justify-content-center">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="password" class="form-control" name="mpassword" id="mpassword2"
                                                v-model.trim="mpasswordDoubleCheck" value="" placeholder="비밀번호 확인"
                                                @input="passwordDoubleCheck()" required>
                                            <label for="password" class="form-label">Password Check</label>
                                        </div>
                                    </div>
                                    <!-- 비밀번호 값 일치를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-1">
                                        <p v-if="mpasswordCheck2 === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            비밀번호를 다시 한번 확인해주세요.
                                        </p>
                                    </div>
                                </div>

                                <!-- 이메일 입력 -->
                                <div class="col-12">
                                    <div class="d-flex justify-content-center">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="email" class="form-control" name="memail" id="memail" value=""
                                                v-model.trim="member.memail" placeholder="이메일"
                                                @input="emailPatternCheck()" required>
                                            <label for="email" class="form-label">email</label>
                                        </div>
                                    </div>
                                    <!-- 이메일 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-1">
                                        <p v-if="memailCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ex: abcd@gmail.com 의 형식으로 기입해주십시오.
                                        </p>
                                    </div>
                                </div>

                                <!-- 휴대폰입력 -->
                                <div class="d-flex justify-content-center col-12">
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="d-flex align-items-center mb-1" style="width: 80%">
                                            <span>Phone Number: </span>
                                            <!-- 휴대폰 앞 번호 -->
                                            <input type="text" class="form-control text-center ms-2"
                                                name="mphonenumber1" id="mphonenumber1" value="010"
                                                style="width: 15%; height: 50px" readonly>
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 중간 번호 -->
                                            <input type="text" class="form-control text-center" name="mphonenumber2"
                                                v-model.trim="mphonenummiddle" id="mphonenumber2" placeholder="Mid"
                                                style="width: 20%; height: 50px" @input="phonePatternmiddleCheck()"
                                                required>
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 뒷 번호 -->
                                            <input type="text" class="form-control text-center" name="mphonenumber3"
                                                v-model.trim="mphonenumend" id="mphonenumber3" placeholder="End"
                                                style="width: 20%; height: 50px" @input="phonePatternendCheck()"
                                                required>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0">
                                    <p v-if="mphoneMiddleCheck === false" class="text-center text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        휴대폰 중간번호 4자리를 입력해주세요.
                                    </p>
                                </div>
                                <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0">
                                    <p v-if="mphoneEndCheck === false" class="text-center text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        휴대폰 끝번호 4자리를 입력해주세요.
                                    </p>
                                </div>
                                <div class="col-12 mt-4">
                                    <div class="d-grid d-flex justify-content-center">
                                        <RouterLink to="/" class="btn btn-outline-danger btn-lg me-4">
                                            <b>취소</b>
                                        </RouterLink>
                                        <!-- <button class="btn btn-outline-dark btn-lg"
                                                            type="submit"><b>회원가입</b></button> -->
                                        <button class="btn btn-outline-dark btn-lg" :class="btnShow" type="submit">
                                            <b>회원가입</b>
                                        </button>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center col-12">
                                    <div class="" style="width: 80%">
                                        <div class="d-grid d-flex justify-content-center">
                                            <RouterLink to="/find/id" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">아이디
                                                찾기</RouterLink>
                                            <span class="ms-2 me-2" style="font-size: 0.8rem;"> | </span>
                                            <RouterLink to="/find/password" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">
                                                비밀번호 찾기</RouterLink>
                                            <span class="ms-2 me-2" style="font-size: 0.8rem"> | </span>
                                            <RouterLink to="/signUp" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">
                                                회원가입</RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="shadow col-12 col-md-6" style="height: 100%; border: 2px solid red">
                    <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                        src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                        height="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import authAPI from '@/apis/authAPI';

const store = useStore();
const router = useRouter();

const member = ref({
    mid: "",
    mname: "",
    mphone: "",
    mpassword: "",
    memail: "",
});

/*
    스크립트 유효성 검사 
    ( https://junvelee.tistory.com/28 or https://velog.io/@purplew/Javascript-%EC%A0%95%EA%B7%9C%ED%91%9C%ED%98%84%EC%8B%9D#-test )

    1. 아이디 : 영어 소문자 + 숫자 (아이디 길이 5 ~ 12) --> 
    (영어 소문자로 시작하고 영어 소문자는 꼭 필요함. 숫자는 선택)
    2. 아이디 중복 검사
    3. 비밀번호 : 영어 대/소문자 + 숫자 (비밀번호 길이 5 ~ 12) --> 
     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{4,20}$/;
    4. 이메일 : 영어 소문자 or 영어 소문자 + 숫자 (길이 8~12) + @ + 이메일.com
    5. 이메일 중복 검사
    6. 휴대폰 번호 : 중간 4, 끝 4
    7. 휴대폰 번호 중복 검사 (변경될 수 있으므로 뺌)
    8. 이름 한글로만 받기
*/

// v-if를 사용하여 DOM 생성 여부를 위한 변수 선언
let midCheck = ref(null);
let mnameCheck = ref(null);
let mpasswordCheck = ref(null);
let mpasswordCheck2 = ref(null);
let memailCheck = ref(null);
let mphoneMiddleCheck = ref(null);
let mphoneEndCheck = ref(null);
let mphoneTotalCheck = ref(null);

// 비밀번호 2차 검증을 위한 변수 선언
let mpasswordDoubleCheck = ref("");

// 휴대폰 번호 중간, 끝 번호의 값을 받고 확인할 변수 선언
let mphonenummiddle = ref("");
let mphonenumend = ref("");

// --------------------------------------------------
// ####유효성 검사####
// 아이디 유효성 검사
const midPattern = /^[a-zA-Z0-9]{5,12}$/;
function idPatternCheck() {
    if (midPattern.test(member.value.mid)) {
        midCheck.value = true;
    } else {
        midCheck.value = false;
    }
    onState();
}
// 이름 유효성 검사
const mnamePattern = /^[가-힣]{2,6}$/;
function namePatternCheck() {
    if (mnamePattern.test(member.value.mname)) {
        mnameCheck.value = true;
    } else {
        mnameCheck.value = false;
    }
    onState();
}
// 비밀번호 유효성 검사
const mpasswordPattern = /^[a-zA-Z0-9]{5,12}$/;     // 비밀번호 유효성 규칙 확실하게 정해야함.
// 비밀번호 유효성 ( 영어 대/소문자와 숫자, 특수문자를 하나이상 포함 ) 
// /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
function passwordPatternCheck() {
    if (mpasswordPattern.test(member.value.mpassword)) {
        mpasswordCheck.value = true;
    } else {
        mpasswordCheck.value = false;
    }
    onState();
}
// 비밀번호 2차 확인
function passwordDoubleCheck() {
    if (member.value.mpassword === mpasswordDoubleCheck.value) {
        mpasswordCheck2.value = true;
    } else {
        mpasswordCheck2.value = false;
    }
    onState();
}
// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  // 정규식 수정해야함.
function emailPatternCheck() {
    if (memailPattern.test(member.value.memail)) {
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
    onState();
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
    onState();
}

// 휴대폰 번호 전체 유효성 검사
const mphonePattern = /^(010)-\d{4}-\d{4}$/;
function phonePatternCheck() {
    member.value.mphone = "010-" + mphonenummiddle.value + "-" + mphonenumend.value;
    console.log("member.value.mphone : " + member.value.mphone);
    console.log("mphonenummiddle : " + mphonenummiddle.value);
    console.log("mphonenumend : " + mphonenumend.value);
    // mphoneTotalCheck.value = mphonePattern.test(member.value.mphone);
    if (mphonePattern.test(member.value.mphone)) {
        mphoneTotalCheck.value = true;
    } else {
        mphoneTotalCheck.value = false;
    }
}
// --------------------------------------------------

// 아이디 중복 체크 (데이터베이스가 있다는 가정하에 작성하는 코드)
const midVal = store.state.member.mid;  // 현재 M2001 로 고정 (현재는 store에 임의로 데이터를 저장해놓고 불러옴. 추후에 데이터베이스에 있는 아이디로 비교해야함.)
let idCheckBtn = ref(false);
// 아이디 중복검사 버튼 이벤트
function handleIdCheck() {
    if (midPattern.test(member.value.mid) && member.value.mid.length >= 4) {
        if (member.value.mid === midVal) {
            alert("중복된 아이디가 있습니다!", member.value.mid);
            member.value.mid = "";
            idCheckBtn.value = false;
        } else if (member.value.mid !== midVal) {
            alert("사용가능한 아이디입니다!");
            idCheckBtn.value = true;
        }
    }
    else {
        alert("유효성 검사에 적합하지 않습니다.");
        member.value.mid = "";
        idCheckBtn.value = false;
    }
    onState();

    // 처음에 사용가능한 아이디를 중복체크 했다가, 다시 아이디 입력란을 변경시키면 idCheckBtn.value를 false로 바꾸어줘야한다. (보충)
    // --> handleSubmit에 2중으로 하나 더 조건을 달자...
}

// 전체 입력값 확인하기
// let totalCheck = ref(false);
let btnShow = ref("disabled");
function onState() {
    console.group("각 input태그의 값을 확인하기");
    console.log("midCheck : " + midCheck.value);
    console.log("mnameCheck : " + mnameCheck.value);
    console.log("mpasswordCheck : " + mpasswordCheck.value);
    console.log("mpasswordCheck2 : " + mpasswordCheck2.value);
    console.log("memailCheck : " + memailCheck.value);
    console.log("mphoneTotalCheck : " + mphoneTotalCheck.value);
    console.log("idCheckBtn : " + idCheckBtn.value);
    console.groupEnd();
    // 전체 유효성 검사를 통과하면 회원가입 버튼 활성화
    if (midCheck.value && mnameCheck.value && mpasswordCheck.value
        && mpasswordCheck2.value && memailCheck.value
        && mphoneTotalCheck.value && idCheckBtn.value) {
        btnShow.value = ""
    } else {
        btnShow.value = "disabled"
    }
}

// 회원가입 버튼 이벤트
async function handleSubmit() {
    if (member.value.memail === store.state.member.memail) {
        alert("해당 이메일로 이미 가입한 아이디가 있습니다.");
        // 아이디 찾기로 넘어가시겠습니까? --> 모달 추가해볼까..
    } else if (member.value.mid === midVal) {
        alert("중복된 아이디가 있습니다! 다시 한번 중복 체크해주세요!")
    }

    console.log("member.value = " + member.value);
    console.log("JSON.stringify(member.value) = " + JSON.stringify(member.value));
    console.log("JSON.parse(JSON.stringify(member.value) = " + JSON.parse(JSON.stringify(member.value)));

    const data = JSON.parse(JSON.stringify(member.value));
    // const data = JSON.stringify(member.value);
    const response = await authAPI.signup(data);

    // 회원가입이 성공한다면
    alert("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
    router.push("/");
}


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