<template>
    <!-- contents -->
    <div class="headingArea">
        <!-- seongmin -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="d-flex" style="height: 90%; width: 80%;">
                <div class="shadow col-12 col-md-6" style="height: 100%;">
                    <div class="p-3 p-md-4 p-xl-5" style="height: 90%;">
                        <div class="row mb-5">
                            <div class="col-12">
                                <div class="mb-5">
                                    <div class="text-center mb-4">
                                        <a href="#!">
                                            <!-- <img src="./assets/img/bsb-logo.svg"
                                                                alt="BootstrapBrain Logo" width="175" height="57"> -->
                                        </a>
                                    </div>
                                    <h1 class="text-center">
                                        <b class="text-decoration-underline">Find Password</b>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <!-- 비밀번호 찾기 폼 -->
                        <form @submit.prevent="handleSubmit">
                            <div class="row gy-3 overflow-hidden">
                                <!-- 이름 -->
                                <div class="col-12">
                                    <!-- 이름 입력과 동시에 유효성 검사 -->
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="text" class="form-control" name="mname" id="mname"
                                                placeholder="이름" v-model.trim="member.mname" @input="namePatternCheck()"
                                                required>
                                            <label for="mname" class="form-label">Name</label>
                                        </div>
                                    </div>
                                    <!-- 이름 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-2">
                                        <p v-if="mnameCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 2글자 이상 한글만 입력 가능합니다. (길이 2 ~ 5 공백 X)
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <!-- 아이디 입력과 동시에 유효성 검사 -->
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="form-floating" style="width: 80%">
                                            <input type="text" class="form-control" name="mid" id="mid"
                                                v-model.trim="member.mid" @input="idPatternCheck()" placeholder="아이디">
                                            <label for="mid" class="form-label">ID</label>
                                        </div>
                                    </div>
                                    <!-- 아이디 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-2">
                                        <p v-if="midCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 영어 대/소문자와 숫자로 입력해주세요. (길이 5 ~ 12 공백 X)
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <!-- 이메일 입력과 동시에 유효성 검사 -->
                                    <div class="d-flex justify-content-center col-12">
                                        <div class="form-floating mb-1" style="width: 80%">
                                            <input type="email" class="form-control" name="memail" id="memail" value=""
                                                placeholder="이메일" v-model="member.memail" @input="emailPatternCheck()"
                                                required>
                                            <label for="email" class="form-label">email</label>
                                        </div>
                                    </div>
                                    <!-- 이메일 유효성 검사를 통한 DOM 생성 여부 -->
                                    <div class="d-flex justify-content-center align-content-center col-12 m-0 p-0 mb-2">
                                        <p v-if="memailCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ex: abcd@gmail.com 의 형식으로 기입해주십시오.
                                        </p>
                                    </div>
                                </div>

                                <!-- 비밀번호 찾기 버튼 -->
                                <div v-if="introducePassword !== true" class="d-flex justify-content-center col-12">
                                    <button class="btn btn-outline-dark btn-lg" :class="onState()" type="submit"
                                        @click="handleFindPassword()" style="width: 80%"><b>비밀번호
                                            찾기</b></button>
                                </div>
                                <div v-if="introducePassword === true" class="d-grid d-flex justify-content-center">
                                    <RouterLink to="/" class="btn btn-outline-dark btn-lg" type="submit"
                                        style="width: 80%"><b>로그인하기</b></RouterLink>
                                </div>
                                <!-- 이름과 아이디와 이메일이 서로 일치할시 정보를 보여줄 div태그 -->
                                <div class="col-12">
                                    <p v-if="introducePassword === true" class="text-center">
                                        <b style="color:blue">'{{ memberId }}'</b>의
                                        비밀번호를 <b style="color:red">'12345'</b>로 초기화하였습니다.
                                    </p>
                                    <!-- 아이디와 이메일이 서로 일치하지 않는다면 -->
                                    <p v-if="introducePassword === false" class="text-center text-danger">
                                        이름, 아이디, 이메일이 일치하지 않습니다.
                                    </p>
                                </div>
                                <div class="d-flex justify-content-center col-12 mb-3">
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
                <div class="shadow col-12 col-md-6" style="height: 100%;">
                    <!-- <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                        src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                        alt="Welcome back you've been missed!" height="100%"> -->
                    <img src="@/assets/login_background.svg" class="img-fluid rounded-start w-100 h-100" height="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import authAPI from '@/apis/authAPI';

const store = useStore();

const member = ref({
    mid: "",
    mname: "",
    memail: "",
    mcreatedat: ""
});

// v-if를 사용하여 DOM 생성 여부를 위한 변수 선언
let mnameCheck = ref(null);
let midCheck = ref(null);
let memailCheck = ref(null);

// 이름과 아이디, 이메일의 일치 여부에 따라 v-if를 사용할 DOM 생성 변수
let introducePassword = ref(null);

// --------------------------------------------------
// ####유효성 검사####
// 이름 유효성 검사
const mnamePattern = /^[가-힣]{2,6}$/;
function namePatternCheck() {
    if (mnamePattern.test(member.value.mname)) {
        mnameCheck.value = true;
    } else {
        mnameCheck.value = false;
    }
}
// 아이디 유효성 검사
const midPattern = /^[a-zA-Z0-9]{5,12}$/;
function idPatternCheck() {
    if (midPattern.test(member.value.mid)) {
        midCheck.value = true;
    } else {
        midCheck.value = false;
    }
}
// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;  // 정규식 수정해야함.
function emailPatternCheck() {
    if (memailPattern.test(member.value.memail)) {
        memailCheck.value = true;
    } else {
        memailCheck.value = false;
    }
}
// --------------------------------------------------


// 비밀번호 찾기 버튼 활성화 / 비활성화 --> 회원가입 부분과 틀리다.
function onState() {
    if (mnameCheck.value && midCheck.value && memailCheck.value) {
        return "";
    } else {
        return "disabled";
    }
}

// 응답으로 받은 아이디를 저장하는 변수
let memberId;

// 비밀번호 찾기 버튼
async function handleFindPassword() {
    console.log("1. JSON.stringify(member.value) = " + JSON.stringify(member.value));
    console.log("2. JSON.parse(JSON.stringify(member)) = " + JSON.parse(JSON.stringify(member)));
    console.log("3. JSON.parse(JSON.stringify(member.value)) = " + JSON.parse(JSON.stringify(member.value)));

    const response = await authAPI.findPassword(member.value.mname, member.value.mid, member.value.memail);
    console.log(response.data);

    if (response.data !== "none") {
        introducePassword.value = true;
        memberId = response.data;
    } else {
        introducePassword.value = false;
    }
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
