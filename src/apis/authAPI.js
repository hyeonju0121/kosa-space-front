// REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

// axios함수를 사용하면 Promise 형태로 값을 반환함 ★

// 회원가입
function signup(member) { // form-data 형식으로 데이터를 전송
    console.log("authAPI signup 메소드 실행");
    console.log(member);
    return axios.post("/auth/signup", member);
}

// 로그인
function login(member) {
    return axios.post("/auth/login", member);
}

// 아이디 찾기
function findId(mphone, memail) {
    console.log("authAPI findId 메소드 실행");
    return axios.get("/auth/find/id", {
        params: {
            "mphone": mphone,
            "memail": memail
        }});
}

// 비밀번호 찾기
function findPassword(mname, mid, memail) {
    console.log("authAPI findPassword 메소드 실행");
    return axios.get("/auth/find/password", {
        params: {
            "mname": mname,
            "mid": mid,
            "memail": memail
        }
    });
}

// (운영진) 회원정보수정


// 아이디 중복 검사
function checkId(mid) {
    return axios.get("/auth/idcheck?mid=" + mid);
}

// 이메일 중복 검사
function checkEmail(memail) {
    return axios.get("/auth/emailcheck?memail=" + memail);
}

// 휴대폰 번호 중복 검사
function checkPhone(mphone) {
    return axios.get("/auth/phonecheck?mphone=" + mphone);
}

export default {
    signup,
    login,
    findId,
    findPassword,
    checkId,
    checkEmail,
    checkPhone

}