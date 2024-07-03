//REST API와 통신하는 모듈

import axios from "axios";
import qs from "qs";

//교육과정 등록
function create(FormData) {
    return axios.post("/edu/course/create", FormData);
}

export default {
    create
}