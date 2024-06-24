<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>마이페이지 > 회원정보수정</span>
        </div>

        <div>
            <!-- contents -->
            <div class="headingArea">
                <div class="title">
                    <h1 id="itemTitle">회원정보수정</h1>
                </div>
            </div>
            <!--  -->
            <div class="p-3 p-md-4 p-xl-5 vh-100">
                <div class="">
                    <div class="row d-flex mb-3">
                        <div class="col text-end align-bottom">
                            <p style="font-size: 0.8em"><b style="color:red">*</b>필수입력사항</p>
                        </div>
                    </div>
                    <!-- 회원정보수정 테이블 -->
                    <table class="table">
                        <tbody class="align-middle">
                            <!-- 아이디 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center" style="width: 300px; ">아이디</th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mid" id="mid"
                                        v-model.trim="store.state.member.mid" style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <!-- 이름 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이름
                                </th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mname" id="mname"
                                        v-model.trim="store.state.member.mname" style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <!-- 비밀번호 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호
                                </th>
                                <td class="p-3">
                                    <div v-if="pwChangeCheck">
                                        <button class="btn btn-dark" @click="pwChange()">비밀번호 변경</button>
                                    </div>
                                    <div v-if="!pwChangeCheck">
                                        <div class="form-floating d-flex mb-1">
                                            <input type="password" class="form-control" name="mpassword1"
                                                id="mpassword1" v-model.trim="member.mpassword"
                                                @input="passwordPatternCheck()" placeholder="비밀번호"
                                                style="width: 300px;">
                                            <label for="password" class="form-label">Password</label>
                                        </div>
                                        <span v-if="mpasswordCheck === false"
                                            class="d-flex justify-content-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            ※ 영어 대/소문자, 숫자, 특수문자를 포함하여야 합니다. (길이 5 ~ 12 공백 X)
                                        </span>
                                    </div>
                                </td>
                            </tr>
                            <tr v-if="!pwChangeCheck" style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호 확인
                                </th>
                                <td class="p-3">
                                    <div class="form-floating d-flex mb-1">
                                        <input type="password" class="form-control" name="mpassword2" id="mpassword2"
                                            v-model.trim="mpasswordDoubleCheck" @input="passwordDoubleCheck()"
                                            placeholder="비밀번호 확인" style="width: 300px;">
                                        <label for="password" class="form-label">Password Check</label>
                                    </div>
                                    <button class="btn btn-danger" @click="pwChange()">변경 취소</button>
                                    <span v-if="mpasswordCheck2 === false" class="text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        비밀번호를 다시 한번 확인해주세요.
                                    </span>
                                </td>
                            </tr>
                            <!-- 이메일 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이메일</th>
                                <td class="p-3">
                                    <div v-if="emailChangeCheck" class="d-flex align-items-center mb-1">
                                        <input type="text" class="form-control p-3 me-2" name="memail" id="memail"
                                            value="" v-model.trim="store.state.member.memail" style="width: 250px;"
                                            readonly>
                                        <button class="btn btn-dark" @click="emailChangeBtn()">변경</button>
                                    </div>
                                    <div v-if="!emailChangeCheck" class="d-flex align-items-center mb-1">
                                        <input type="text" class="form-control p-3 me-2" name="emailFront"
                                            id="emailFront" v-model.trim="memailFront" style="width: 150px;" />
                                        <span> @ </span>
                                        <input type="text" class="form-control p-3 ms-2" name="emailBack" id="emailBack"
                                            v-model.trim="memailBack" @input="emailPatternCheck()"
                                            style="width: 150px;" />
                                    </div>
                                    <span v-if="memailCheck === false" class="text-danger"
                                        style="font-size: 0.9em; height: 4px;">
                                        ※ 이메일 형식이 올바르지 않습니다. (ex. kosaspace@naver.com)
                                    </span>
                                </td>
                            </tr>
                            <!-- 휴대폰 번호 -->
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">휴대폰번호
                                </th>
                                <td class="p-3">
                                    <div v-if="phoneChangeCheck">
                                        <button class="btn btn-dark" @click="phoneChange()">휴대폰 번호 변경</button>
                                    </div>
                                    <div v-if="!phoneChangeCheck">
                                        <div class="d-flex align-items-center mb-1">
                                            <!-- 휴대폰 앞 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber1"
                                                id="mphonenumber1" value="010" style="width: 80px;" readonly>
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 중간 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber2"
                                                id="mphonenumber2" value="1234" style="width: 100px;"
                                                v-model.trim="mphonenummiddle" @input="phonePatternmiddleCheck()"
                                                placeholder="Mid Number">
                                            <span class="ms-2 me-2">-</span>
                                            <!-- 휴대폰 뒷 번호 -->
                                            <input type="text" class="form-control p-3" name="mphonenumber3"
                                                id="mphonenumber3" value="1234" style="width: 100px;"
                                                v-model.trim="mphonenumend" @input="phonePatternendCheck()"
                                                placeholder="End Number" required>
                                            <button class="btn btn-danger" @click="phoneChange()">취소</button>
                                        </div>
                                        <p v-if="mphoneMiddleCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            휴대폰 중간번호 4자리를 입력해주세요.
                                        </p>
                                        <p v-if="mphoneEndCheck === false" class="text-center text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            휴대폰 끝번호 4자리를 입력해주세요.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="btn_big_wrap align-content-center">
                            <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                            <BaseButtonSubmit @click="handleCheck">완료</BaseButtonSubmit>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-dark me-4" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">회원탈퇴</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 회원탈퇴에 대한 모달 -->
    <!-- Vertically centered modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">회원 탈퇴</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    정말 탈퇴하시겠습니까?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger">탈퇴</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ref } from 'vue';

const router = useRouter();
const store = useStore();

const member = ref({
    mid: "",
    mname: "",
    mphone: "",
    mpassword: "",
    memail: "",
    mrole: "",
    menable: "",
    mcreatedat: "",
    mupdatedat: ""
});

// input 태그에서 값을 확인할 변수 선언
let mpasswordDoubleCheck = ref(""); // 비밀번호 2차 입력 받을 변수
let memailFront = ref("");          // 이메일 아이디 입력 받을 변수
let memailBack = ref("");           // 이메일 주소 입력 받을 변수
let mphonenummiddle = ref(store.state.member.mphone.substring(4, 8));  // 휴대폰 중간 번호 입력 받을 변수
let mphonenumend = ref(store.state.member.mphone.substring(9, 13));    // 휴대폰 끝 번호 입력 받을 변수

// v-if를 사용하여 DOM 생성 여부를 위한 변수 선언
let pwChangeCheck = ref(true);      // 비밀번호 변경 여부 버튼 (v-if)
let mpasswordCheck = ref(null);     // 비밀번호 유효성 (v-if)
let mpasswordCheck2 = ref(null);    // 비밀번호 2차 확인 (v-if)
let emailChangeCheck = ref(true);  // 이메일 변경 여부 버튼 (v-if)
let memailCheck = ref(null);        // 이메일 유효성 (v-if)
let phoneChangeCheck = ref(true);   // 휴대폰 변경 여부 버튼 (v-if)
let mphoneMiddleCheck = ref(null);  // 휴대폰 중간 번호 유효성 (v-if)
let mphoneEndCheck = ref(null);     // 휴대폰 끝 번호 유효성 (v-if)
let mphoneTotalCheck = ref(null);   // 휴대폰 전체 유효성

// 비밀번호 유효성 검사
const mpasswordPattern = /^[a-zA-Z0-9]{5,12}$/;
function passwordPatternCheck() {
    if (mpasswordPattern.test(member.value.mpassword)) {
        mpasswordCheck.value = true;
    } else {
        mpasswordCheck.value = false;
    }
}
// 비밀번호 두 입력값 일치 확인
function passwordDoubleCheck() {
    if (member.value.mpassword === mpasswordDoubleCheck.value) {
        mpasswordCheck2.value = true;
    } else {
        mpasswordCheck2.value = false;
    }
}
// 이메일 유효성 검사
const memailPattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i; // 정규식 틀림
function emailPatternCheck() {
    member.value.memail = memailFront.value + "@" + memailBack.value;
    console.log(member.value.memail);
    if (memailPattern.test(member.value.memail)) {
        memailCheck.value = true;
    } else {
        memailCheck.value = false;
    }
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

// 비밀번호 변경 버튼
function pwChange() {
    pwChangeCheck.value = !pwChangeCheck.value;
}

// 이메일 변경 버튼
function emailChangeBtn() {
    emailChangeCheck.value = !emailChangeCheck.value;
}

// 휴대폰 변경 버튼
function phoneChange() {
    phoneChangeCheck.value = !phoneChangeCheck.value
}

// 수정 취소 버튼
function handleCancle() {
    router.push(`/admin/dashboard`);
}

// 회원정보수정 날짜 세팅
// 계정 생성 일시와 일자까지만 포맷
const date = new Date();
let dateFormatVal = date.getFullYear() + '년' + (date.getMonth() + 1) + '월' + date.getDate() + '일';
member.value.mupdatedat = dateFormatVal;

// 수정 버튼
function handleCheck() {
    // 비밀번호 변경 버튼 여부에 따라 member 객체 값 저장
    if(pwChangeCheck.value === true) {
        member.value.mpassword = store.state.member.mpassword;
    }
    // 이메일 변경 버튼 여부에 따라 member 객체 값 저장
    if(emailChangeCheck.value === true) {
        member.value.memail = store.state.member.memail;
    } else {
        member.value.memail = memailFront.value + "@" + memailBack.value;
    }
    // 휴대폰 변경 버튼 여부에 따라 member 객체 값 저장
    if(phoneChangeCheck.value === true) {
        member.value.mphone = store.state.member.mphone;
    } else {
        member.value.mphone = "010-" + mphonenummiddle.value + "-" + mphonenumend.value;
    }

    member.value.mid = store.state.member.mid;
    member.value.mname = store.state.member.mname;
    member.value.mrole = store.state.member.mrole;
    member.value.menable = store.state.member.menable;
    member.value.mcreatedat = store.state.member.mcreatedat;

    console.log(JSON.stringify(member.value));
    // router.push(`/admin/dashboard`);
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