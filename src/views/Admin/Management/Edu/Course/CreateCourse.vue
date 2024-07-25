<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육과정 등록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육과정 등록</h1>
            </div>
        </div>

        <div class="form_table no_line">
            <form @submit.prevent="handleSubmit">
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 이미지 </p>
                    </div>
                    <div class="td">
                        <div class="course_wrap">
                            <div class="course_attach">
                                <div class="img_box d-flex">
                                    <div id="defaultImg" style="object-fit: cover;">
                                        <img v-if="imgCheck === true" :src="src" width="200" height="150">
                                        <PhImage v-if="imgCheck === false" :size="32" color="#636462"
                                            weight="duotone" />
                                    </div>
                                </div>
                                <div class="center_edit">
                                    <p class="tit">교육과정 이미지를 등록해주세요.</p>
                                    <div class="attach_wrap">
                                        <p class="guide_txt">파일 1개당 10MB까지 첨부 가능합니다. (JPG, JPEG, PNG, GIF만 첨부 가능)</p>
                                        <div>
                                            <input ref="cattach" type="file" class="form-control p-3 mt-2"
                                                name="cattach" id="cattach" accept="image/*" @change="addImage"
                                                style="width: 300px;" required>
                                        </div>
                                        <p v-if="imgCheck === false" class="text-danger"
                                            style="font-size: 0.9em; height: 4px;">
                                            교육과정 이미지는 필수입력사항입니다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육장 명</p>
                    </div>
                    <div class="td">
                        <div class="InpBox">
                            <select id="room" title="교육장 선택" v-model="courseInfo.ecname">
                                <option :value="courseInfo.ecname" selected>{{ courseInfo.ecname }}</option>
                                <option v-for="name in ecnames" :value="name" :key="name">{{ name }}</option>
                            </select>
                            <p v-show="!isEcname" style="color: rgb(247, 78, 27);">교육장 선택은 필수입니다.</p>
                        </div>
                    </div>
                </div>
                <div class="tr">


                    <div class="th">
                        <p class="form_label required">강의실 명</p>
                    </div>
                    <div class="td">
                        <div class="InpBox">
                            <select id="room" title="강의실 선택" v-model="courseInfo.trname">
                                <option :value="courseInfo.trname" disabled selected>{{ courseInfo.trname }}</option>
                                <option v-for="name in trainingRooms" :value="name" :key="name">{{ name }}</option>
                            </select>
                            <p v-show="!isTrainingRoom" style="color: rgb(247, 78, 27);">강의실 선택은 필수입니다.</p>
                        </div>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 명</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.cname" id="cname" type="text" title="교육과정 명 입력"
                            placeholder="교육과정 명을 입력해주세요." maxlength="50" style="width:300px;">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 번호</p>
                    </div>
                    <div class="td">
                        <input @input="checkCcode" v-model="courseInfo.ccode" id="ccode" type="text" title="교육과정 번호 입력"
                            placeholder="교육과정 번호를 입력해주세요." maxlength="50">
                        <p style="margin-top: 1%;">해당연도 + 교육과정 코드 로 입력해주세요. </p>
                        <p>[예시] 해당연도(2024) + 교육과정 코드(M2) : 2024M2</p>
                        <p v-show="!isCcode" style="color: rgb(247, 78, 27);">앞에 숫자 4글자와 대문자 1자, 숫자 1자로 작성해주세요.</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 기간</p>
                    </div>
                    <VueDatePicker class="mt-4" style="width:50%; margin-left: 20px" v-model="date" range />
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">훈련일수</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.crequireddate" id="crequireddate" type="text" title="훈련일수 입력"
                            placeholder="훈련일수를 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">훈련날짜</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.ctrainingdate" id="ctrainingdate" type="text" title="훈련날짜 입력"
                            placeholder="훈련날짜를 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">훈련시간</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.ctrainingtime" id="ctrainingtime" type="text" title="훈련시간 입력"
                            placeholder="훈련시간을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">총 수강인원</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.ctotalnum" id="ctotalnum" type="text" title="총 수강인원"
                            placeholder="총 수강인원을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 운영진</p>
                    </div>
                    <div class="td">
                        <input @input="checkCmanager" v-model="courseInfo.cmanager" id="cmanager" type="text"
                            title="담당 운영진" placeholder="담당 운영진을 입력해주세요." maxlength="50">
                        <p v-show="!isCmanager" style="color: rgb(247, 78, 27);">한글 2자 이상 4자 이하로만 입력해주세요. </p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 강사진</p>
                    </div>
                    <div class="td">
                        <div class="InpBox">
                            <select id="room" title="강사진 선택" v-model="courseInfo.cprofessor" @change="checkCprofessor">
                                <option :value="courseInfo.cprofessor" selected>{{ courseInfo.cprofessor }}</option>
                                <option v-for="name in professors" :value="name" :key="name">{{ name }}</option>
                            </select>
                            <p v-show="!isEcname" style="color: rgb(247, 78, 27);">
                                교육장을 먼저 선택해주세요.
                            </p>
                            <p v-show="!isCprofessor" style="color: rgb(247, 78, 27);">
                                강사진 선택은 필수입니다.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="btn_big_wrap">
                    <RouterLink to="/admin/course/list">
                        <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                    </RouterLink>
                    <BaseButtonSubmit type="submit">완료</BaseButtonSubmit>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import courseAPI from "@/apis/courseAPI";
import educenterAPI from '@/apis/educenterAPI';
import trainingroomAPI from '@/apis/trainingroomAPI';

const router = useRouter();
const route = useRoute();

const date = ref();
const ecname = ref(route.query.ecname || "송파교육센터");
const cstatus = ref(route.query.cstatus || "전체");
const cprofessor = ref(route.query.cprofessor || "전체");
const cPageNo = ref(route.query.cPageNo || 1);

const ecnames = ref();
const trainingRooms = ref();
const professors = ref();

//시작일 종료일 세팅
onMounted(() => {
    const startDate = new Date();
    const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
    date.value = [startDate, endDate];
    educenterNameList();
    trainingRoomList();
})

const courseInfo = ref({
    ecname: "교육장 선택",
    cname: "MSA 15차 Full Stack 개발자 양성과정",
    ccode: "2024M15",
    cstartdate: "",
    cenddate: "",
    crequireddate: "150",
    ctotalnum: "24",
    cmanager: "진승범",
    cprofessor: "강사진 선택",
    ctrainingdate: "월,화,수,목,금",
    ctrainingtime: "09:00 ~ 18:00",
    trname: "강의실 선택"
})

let isEcname = ref(false);
let isTrainingRoom = ref(false);
let isCcode = ref(true);
let isCmanager = ref(true);
let isCprofessor = ref(false);

const cattach = ref(null);

// 취소 버튼
function handleCancle() {
    router.push({
        path: "/admin/course/list",
        query: {
            ecname: courseInfo.value.ecname,
            cstatus: courseInfo.value.cstatus,
            cprofessor: courseInfo.value.cprofessor,
            cPageNo: cPageNo.value
        }
    });
}

//등록 버튼 누를때 실행
async function handleSubmit() {
    courseInfo.value.cstartdate = date.value[0];
    courseInfo.value.cenddate = date.value[1];

    console.log(JSON.parse(JSON.stringify(courseInfo)));

    //form data 객체 생성
    const formData = new FormData();

    //문자 파트 넣기
    formData.append("ecname", courseInfo.value.ecname);
    formData.append("cname", courseInfo.value.cname);
    formData.append("ccode", courseInfo.value.ccode);
    formData.append("cstartdate", courseInfo.value.cstartdate);
    formData.append("cenddate", courseInfo.value.cenddate);
    formData.append("crequireddate", courseInfo.value.crequireddate);
    formData.append("ctotalnum", courseInfo.value.ctotalnum);
    formData.append("cmanager", courseInfo.value.cmanager);
    formData.append("cprofessor", courseInfo.value.cprofessor);
    formData.append("ctrainingdate", courseInfo.value.ctrainingdate);
    formData.append("ctrainingtime", courseInfo.value.ctrainingtime);
    formData.append("trname", courseInfo.value.trname);

    //파일 파트 넣기
    let elCattach = cattach.value;

    if (elCattach.files.length != 0) {
        formData.append("cattachdata", elCattach.files[0]);
    }

    //교육과정 등록 요청
    try {
        await courseAPI.create(formData);
        router.push({
            path: "/admin/course/list",
            query: {
                ecname: ecname.value,
                cstatus: cstatus.value,
                cprofessor: cprofessor.value,
                cPageNo: cPageNo.value
            }
        });
    } catch (error) {
        console.log(error);
    }
}

// 교육과정 유효성 검증
function checkCcode() {
    var ccodePattern = /^\d{4}[A-Z]\d$/;
    var checkCcode = ccodePattern.test(courseInfo.value.ccode);

    if (!checkCcode) {
        isCcode.value = false;
    } else {
        isCcode.value = true;
    }
}

// 운영진 이름 유효성 검증
function checkCmanager() {
    var namePattern = /^[ㄱ-ㅎ가-힣]{2,4}$/;
    var checkManager = namePattern.test(courseInfo.value.cmanager);

    if (!checkManager) {
        isCmanager.value = false;
    } else {
        isCmanager.value = true;
    }
}

// 강사진 이름 유효성 검증
function checkCprofessor() {
    isCprofessor.value = true;
}

// 이미지 파일 미리보기
const src = ref();
let attach = null;

let imgCheck = ref(false);

function addImage(e) {
    // const file = (e.target).files;
    // let preImg = [];
    // preImg.push(URL.createObjectURL(file[0]));
    // src.value = preImg;
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
}

// 등록된 교육장 목록 가져오기
async function educenterNameList() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecnames.value = response.data.splice(1); // 인덱스 0번째 요소 '전체'를 뺌
    } catch (error) {
        console.log(error);
    }
}

// 교육장에 따른 등록된 강의실 목록 가져오기
async function trainingRoomList(ecname) {
    try {
        const response = await trainingroomAPI.getTrainingRoomList(ecname);
        trainingRooms.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

// 교육장에 따른 강사진 목록 가져오기
async function courseProfessorList(ecname) {
    try {
        isCprofessor.value = false;
        const response = await courseAPI.getCourseProfessorList(ecname);
        professors.value = response.data;
    } catch (error) {
        console.log(error);
    }
}

watch(() => courseInfo.value.ecname,
    (nv, ov) => {
        isEcname.value = true;
        courseInfo.value.trname = "강의실 선택";
        courseInfo.value.cprofessor = "강사진 선택";
        trainingRoomList(nv);
        courseProfessorList(nv)
    }
)

watch(() => courseInfo.value.trname,
    (nv, ov) => {
        isTrainingRoom.value = true;

    }
)


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

.form_table {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: table;
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    border-top: none;
}

.writeNoticeForm .tr {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}

.tr .th {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    display: table-cell;
    padding: 20px 0;
    vertical-align: top;
    align-items: center;
    width: 160px;
}

.form_label {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 15px;
    font-weight: 500;
    height: 48px;
    margin-top: 0;
    display: flex;
    align-items: center;
}

.tr {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
}

.tr .td {
    color: var(--txt-color);
    border-collapse: collapse;
    box-sizing: border-box;
    display: table-cell;
    padding: 20px 0;
    vertical-align: top;
    flex: 1;
    margin: 0;
    margin-left: 30px;
}

.td>input {
    height: 40px;
}


/* 교육장 이름 입력 폼 ----------------------------*/
.textarea_group_title {
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding: 15px 10px;
    min-height: 102px;
}

.textarea_group_title textarea {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    font-weight: 500;
    width: 100%;
    height: 48px;
    font-size: 14px;
    background: #f0f4fd;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    resize: none;
    padding: 0 10px 0 5px;
    border: 0;
    min-height: 42px;
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


/* course image -------------------------*/
.course_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: white;
    min-height: 120px;
}

.course_attach {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;

    display: flex;
    align-items: center;
}

.img_box {
    line-height: normal;
    border-collapse: collapse;
    box-sizing: border-box;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 150px;
    padding-bottom: 0;
    /* border-radius: 50%; */
    background: #F2F2F2;
    color: #b1b1b1;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    overflow: hidden;
}


.center_edit {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 30px;
}

.tit {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

/* product img */
.attach_wrap {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.guide_txt {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 5px;
    padding-top: 2px;
    font-size: 12px;
    color: #999999;
}

/* select option css */
.InpBox {
    display: inline-block;
    vertical-align: top;
}

.InpBox select {
    padding: 0 28px 0 12px;
    width: 100%;
    height: 40px;
    border: 1px solid #232323;
    border-radius: 4px;
    box-sizing: border-box;
    color: #232323;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    background-color: #dbdbdb0e;
    cursor: pointer;
}
</style>
