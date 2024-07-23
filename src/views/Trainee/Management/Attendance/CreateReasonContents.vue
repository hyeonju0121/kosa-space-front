<template>
    <div class="main p-3" style="margin-left: 25px; width: 800px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>출결 관리 > 출결 변경 신청</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">조퇴 및 결석 사유 등록</h1>
            </div>
        </div>

        <div class="form_table no_line">
            <form @submit.prevent="handleSubmit">
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">출결 유형</p>
                    </div>
                    <div class="td">
                        <select v-model="reasonInfo.ancategory" id="ancategory" class="mt-2">
                            <option value="지각">지각</option>
                            <option value="조최">조퇴</option>
                            <option value="외출">외출</option>
                            <option value="결석">결석</option>
                        </select>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">사유</p>
                    </div>
                    <div class="td">
                        <div class="textarea_group_title sm">
                            <textarea v-model="reasonInfo.anreason" id="anreason" title="사유 입력"
                                placeholder="사유를 입력해주세요." maxlength="100"></textarea>
                            <p class="form_bytes"><span class="byte">0</span>/100</p>
                        </div>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">인증 서류</p>
                    </div>
                    <div class="td">
                        <div class="attendance_wrap">
                            <div class="attendance_attach">
                                <div class="attendance_edit">
                                    <!-- v-if 사용하여 둘 중 하나 나오게 하기 -->
                                    <img v-if="imgCheck === true" :src="src" width="110" height="150" class="ms-5">
                                    <p class="tit">인증 서류 첨부파일을 업로드해주세요.</p>
                                    <div v-if="imgCheck === false" class="attach_wrap">
                                        <p class="guide_txt">파일 1개당 10MB까지 첨부 가능합니다. (JPG, JPEG, PNG, GIF만 첨부 가능)</p>
                                    </div>
                                    <input ref="reasonInfo.anattachdata" type="file" class="form-control p-3 mt-2"
                                        name="anattachdata" id="anattachdata" accept="image/*" @change="addImage"
                                        style="width: 300px;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="btn_big_wrap">
                    <RouterLink to="/trainee/attendance/detail">
                        <BaseButtonCancle>취소</BaseButtonCancle>
                    </RouterLink>
                    <button class="btn btn-dark btn-lg ms-3">등록</button>
                    <!-- <BaseButtonSubmit>완료</BaseButtonSubmit> -->
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref } from 'vue';
import attendanceAPI from '@/apis/attendanceAPI';
import { useStore } from 'vuex';

const router = useRouter();
const route = useRoute();
const store = useStore();

const mid = store.state.mid;

const reasonInfo = ref({
    adate: "2024-07-16",
    ancategory: "",
    anreason: "",
    anattachdata: null
});

// 이미지 파일 미리보기
const src = ref();
const imgCheck = ref(false);

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
        reasonInfo.value.anattachdata = file;
        console.log("reasonInfo.value.anattachdata = " + reasonInfo.value.anattachdata);
    } else {
        imgCheck.value = false;
    }
}

function handleSubmit() {
    const formData = new FormData();

    //입력값들 넣기
    formData.append("mid", mid);
    formData.append("adate", reasonInfo.value.adate);
    formData.append("ancategory", reasonInfo.value.ancategory);
    formData.append("anreason", reasonInfo.value.anreason);

    // 파일 넣기
    if (reasonInfo.value.anattachdata) {
        formData.append("anattachdata", reasonInfo.value.anattachdata);
    }

    for (let [key, value] of formData.entries()) {
        console.log(key, value);
    }

    console.log("formData = " + formData);

    // 사유 등록 요청
    try {
        console.log("createAttendanceCreate 실행 전");
        attendanceAPI.createAttendanceCreate(formData);
    } catch (error) {
        console.log(error);
    }


    router.push("/trainee/attendance/detail");
}


// 교육생 출결에 대한 사유 등록하기
// function attendanceReasonCreate(request) {
//     try {
//         console.log("");
//         attendanceAPI.createAttendanceCreate(request);

//     } catch (error) {
//         console.log(error);
//         console.log("교육생 퇴실 실패");
//     }
//     console.groupEnd();
// }

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
    width: 200%;
    height: 120px;
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


/* attendance attach -------------------------*/
.attendance_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: white;
    min-height: 120px;
}

.attendance_attach {
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


.attendance_edit {
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
