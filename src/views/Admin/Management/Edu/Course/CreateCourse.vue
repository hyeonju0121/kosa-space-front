<template>
    <div class="main p-3" style="margin-left: 25px;">
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
                                    <div id="defaultImg">
                                        <PhImage :size="32" color="#636462" weight="duotone" />
                                    </div>
                                </div>
                                <div class="center_edit">
                                    <p class="tit">교육과정 이미지를 등록해주세요.</p>
                                    <div class="attach_wrap">
                                        <p class="guide_txt">파일 1개당 10MB까지 첨부 가능합니다. (JPG, JPEG, PNG, GIF만 첨부 가능)</p>
                                        <div>
                                            <input id="cattach" type="file" class="form-control-file mt-3" ref="cattach" />
                                        </div>
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
                        <input @input="checkECname" v-model="courseInfo.ecname" id="ecname" type="text" 
                            title="교육장 명 입력" placeholder="교육장 명을 입력해주세요." maxlength="50">
                        <p v-show="!isEcname" style="color: rgb(247, 78, 27);">한글만 입력해주세요.</p>
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
                        <input @input="checkCcode" v-model="courseInfo.ccode" id="ccode" type="text" title="교육과정 번호 입력" placeholder="교육과정 번호를 입력해주세요." maxlength="50">
                        <p style="margin-top: 1%;">해당연도 + 교육과정 코드 로 입력해주세요. </p>
                        <p>[예시] 해당연도(2024) + 교육과정 코드(M2) : 2024M2</p>
                        <p v-show="!isCcode" style="color: rgb(247, 78, 27);">앞에 숫자 4글자와 대문자 1자, 숫자 1자로 작성해주세요.</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 기간</p>
                    </div>
                    <VueDatePicker class="mt-4" style="width:50%; margin-left: 20px" v-model="date" range/>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">훈련일수</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.crequireddate" id="crequireddate" type="text" title="훈련일수 입력" placeholder="훈련일수를 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">총 수강인원</p>
                    </div>
                    <div class="td">
                        <input v-model="courseInfo.ctotalnum" id="ctotalnum" type="text" title="총 수강인원" placeholder="총 수강인원을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 운영진</p>
                    </div>
                    <div class="td">
                        <input @input="checkCmanager" v-model="courseInfo.cmanager" id="cmanager" type="text" title="담당 운영진" placeholder="담당 운영진을 입력해주세요." maxlength="50">
                        <p v-show="!isCmanager" style="color: rgb(247, 78, 27);">한글 2자 이상 4자 이하로만 입력해주세요. </p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 강사진</p>
                    </div>
                    <div class="td">
                        <input @input="checkCprofessor" v-model="courseInfo.cprofessor" id="cprofessor" type="text" title="담당 강사진" placeholder="담당 강사진을 입력해주세요." maxlength="50">
                        <p v-show="!isCprofessor" style="color: rgb(247, 78, 27);">한글 2자 이상 4자 이하로만 입력해주세요. </p>
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
import { useRouter } from 'vue-router';
import { ref, onMounted, watch } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import courseAPI from "@/apis/courseAPI";

const date = ref();

//시작일 종료일 세팅
onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})

const courseInfo = ref({   
    ecname: "",
    cname: "",
    ccode: "",
    cstartdate: "",
    cenddate: "",
    crequireddate: "",
    ctotalnum: "",
    cmanager: "",
    cprofessor: ""


})



const router = useRouter();

let isEcname = ref(true);
let isCcode = ref(true);
let isCmanager = ref(true);
let isCprofessor = ref(true);

const cattach = ref(null);

function handleCancle() {
    router.push('/admin/course/list');
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

    //파일 파트 넣기
    let elCattach = cattach.value;

    if(elCattach.files.length != 0) {
        formData.append("cattachdata", elCattach.files[0]);
    }

    //교육과정 등록 요청
    try{
        await courseAPI.create(formData);
        router.push('/admin/course/list');
    } catch(error) {
        console.log(error);
    }    
    
}

// 교육장 유효성 검증 (한글만 입력)
function checkECname() {
    var ecnamePattern = /^[가-힣]*$/;
    var checkEcname = ecnamePattern.test(courseInfo.value.ecname);
    
    if(!checkEcname) {
        isEcname.value = false;
    } else {
        isEcname.value = true;
    }
}

// 교육과정 유효성 검증
function checkCcode() {
    var ccodePattern = /^\d{4}[A-Z]\d$/;
    var checkCcode = ccodePattern.test(courseInfo.value.ccode);

    if(!checkCcode) {
        isCcode.value = false;
    } else {
        isCcode.value = true;
    }
}

// 운영진 이름 유효성 검증
function checkCmanager() {
    var namePattern = /^[ㄱ-ㅎ가-힣]{2,4}$/;
    var checkManager = namePattern.test(courseInfo.value.cmanager);

    if(!checkManager) {
        isCmanager.value = false;
    } else {
        isCmanager.value = true;
    }
}

// 강사진 이름 유효성 검증
function checkCprofessor() {
    var namePattern = /^[ㄱ-ㅎ가-힣]{2,4}$/;
    var checkProfessor = namePattern.test(courseInfo.value.cprofessor);

    if(!checkProfessor) {
        isCprofessor.value = false;
    } else {
        isCprofessor.value = true;
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
    width: 100px;
    height: 100px;
    padding-bottom: 0;
    /* border-radius: 50%; */
    background: #F2F2F2;
    color: #b1b1b1;
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
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

</style>
