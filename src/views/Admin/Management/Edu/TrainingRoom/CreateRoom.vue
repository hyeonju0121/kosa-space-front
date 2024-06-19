<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 강의실 관리 > 강의실 등록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">강의실 등록</h1>
            </div>
        </div>

        <div class="form_table no_line">
            <form>
                <div class="tr">
                    <div class="th" style="width: 20%;">
                        <p class="form_label">교육장 명</p>
                    </div>
                    <div class="td">
                        <select id="room" style="margin-top: 10px;">
                            <option value="option1">송파 교육장</option>
                            <option value="option2">가산 교육장</option>
                            <option value="option3">혜화 교육장</option>
                        </select>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label">강의실 명 </p>
                    </div>
                    <div class="textarea_group_title sm">
                        <textarea id="tname" title="강의실 명 입력" placeholder="강의실 명을 입력해주세요." maxlength="50"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/100</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label">수용 가능 인원</p>
                    </div>
                    <div class="textarea_group_title sm">
                        <textarea id="tcapacity" title="수용 가능 인원 입력" placeholder="수용 가능 인원을 입력해주세요."
                            maxlength="50"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/100</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th" style="width:30%">
                        <p class="form_label">사용 가능 여부 </p>
                    </div>
                    <div style="margin-top: 34px; display: flex;">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="tenable" id="tenable1">
                            <label class="form-check-label" for="tenable1">
                                가능
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" name="tenable" id="tenable2" checked>
                            <label class="form-check-label" for="tenable2">
                                불가능
                            </label>
                        </div>
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

const router = useRouter();

function handleCancle() {
    router.push('/admin/room/list');
}

function handleSubmit() {
    router.push('/admin/room/list');
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

.form_bytes {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    width: 100%;
    text-align: right;
    font-size: 12px;
    color: #cccccc;
    margin-top: 10px;
    padding: 0px 5px;
}

.form_bytes .byte {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    text-align: right;
    font-size: 12px;
    color: #cccccc;
    box-sizing: border-box;
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
