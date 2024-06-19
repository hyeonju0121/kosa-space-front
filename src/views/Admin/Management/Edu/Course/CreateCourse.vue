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
            <form>
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
                                            <input id="battach" type="file" class="form-control-file mt-3" ref="battach" />
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
                        <input type="text" title="교육장 명 입력" placeholder="교육장 명을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 명</p>
                    </div>
                    <div class="td">
                        <input type="text" title="교육과정 명 입력" placeholder="교육과정 명을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육과정 번호</p>
                    </div>
                    <div class="td">
                        <input type="text" title="교육과정 번호 입력" placeholder="교육과정 번호를 입력해주세요." maxlength="50">
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
                        <input type="text" title="훈련일수 입력" placeholder="훈련일수를 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">총 수강인원</p>
                    </div>
                    <div class="td">
                        <input type="text" title="총 수강인원" placeholder="총 수강인원을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 운영진</p>
                    </div>
                    <div class="td">
                        <input type="text" title="담당 운영진" placeholder="담당 운영진을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">담당 강사진</p>
                    </div>
                    <div class="td">
                        <input type="text" title="담당 강사진" placeholder="담당 강사진을 입력해주세요." maxlength="50">
                    </div>
                </div>
                <div class="btn_big_wrap">
                    <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                    <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})

const router = useRouter();

function handleCancle() {
    router.push('/admin/course/list');
}

function handleSubmit() {
    router.push('/admin/course/list');
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
