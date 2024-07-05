// REST API와 통신하는 모듈
import axios from "axios";
import qs from "qs";

// axios함수를 사용하면 Promise 형태로 값을 반환함 ★

// 교육생 등록
// function traineeRegister(ecname, cname, request) { // form-data 형식으로 데이터를 전송
function traineeRegister(request) { // form-data 형식으로 데이터를 전송
    console.log("traineeInfoAPI traineeRegister 메소드 실행");
    // console.log("ecname = " + ecname);
    // console.log("cname = " + cname);
    // return axios.post("/admin/trainee/register?ecname="+ecname+"&cname="+cname , request);
    return axios.post("edu/admin/trainee/register", request, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}


export default {
    traineeRegister
}