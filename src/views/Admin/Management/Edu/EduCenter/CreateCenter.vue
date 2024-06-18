<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육장 관리 > 교육장 등록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육장 등록</h1>
            </div>
        </div>

        <div class="form_table no_line">
        <form>
            <!--
            <di class="tr">
                <div class="th">
                    <p class="form_label required">분류 </p>
                </div>
                <div class="td">
                    <select name="bsubcategory" id="bsubcategory">
                        <option value="general" selected>일반</option>
                        <option value="product">상품</option>
                        <option value="delivery">배송</option>
                    </select>
                </div>
            </di>-->

            <div class="tr">
                <div class="th">
                    <p class="form_label required">교육장 명</p>
                </div>
                <div class="td">
                    <div class="textarea_group_title sm">
                        <textarea id="btitle" name="btitle" title="교육장 명 입력" placeholder="교육장 명을 입력해주세요."
                            maxlength="100"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/100</p>
                    </div>
                </div>
            </div>
            <div class="tr">
                <div class="th">
                    <p class="form_label required">주소 들어가는 부분 </p>
                </div>
                <div class="td">
                    <div class="textarea_group_content lg">
                        <textarea id="bcontent" name="bcontent" placeholder="주소 들어가는 부분" title="주소 들어가는 부분"
                            maxlength="1000"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/1,000</p>
                    </div>
                    <div class="attach_wrap">
                        <div class="attach_top">
                            <input type="hidden" name="uploadType" value="notice">
                            <label class="attach_img" for="battach">사진 첨부</label>
                            <p class="guide_txt">파일 1개당 10MB까지 첨부 가능합니다. (JPG, JPEG, PNG, GIF만 첨부 가능)</p>
                            <input class="input_file" id="battach" name="battach" type="file">
                        </div>
                        <div class="attached" data-file="battach" id="inputUploadFile"></div>
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
    router.push('/admin/educenter/list');
}

function handleSubmit() {
    router.push('/admin/educenter/list');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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

.writeNoticeForm {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.writeNoticeForm input {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-weight: 500;
    vertical-align: middle;
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
    font-size: 14px;
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

.custom_select_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0 14px;
    border: 1px solid #999999;
    border-radius: 3px;
    padding-left: 0;
    padding-right: 0;
    width: 400px;
}

.option_selected {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-left: 14px;
    padding-right: 34px;
}

.option_list {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid #f2f2f2;
    overflow: auto;
    max-height: 289px;
    border-color: #ccc;
    display: none;
}

.option_list li {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    padding: 0 14px;
}

.option_list .option {
    border-collapse: collapse;
    list-style: none;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    width: 100%;
    height: 48px;
    line-height: 48px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}

/* 게시글 제목 입력 폼 ----------------------------*/
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
    background: white;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    resize: none;
    padding: 0 10px 0 5px;
    border: 0;
    min-height: 42px;
}

/* 게시글 내용 입력 폼 ----------------------------*/
.textarea_group_content {
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
    min-height: 250px;
}

.textarea_group_content textarea {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    font-weight: 500;
    width: 100%;
    height: 280px;
    font-size: 14px;
    background: white;
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

.attach_wrap {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

.attach_top {
    line-height: normal;
    font-size: 14px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: flex-start;
    margin-top: 16px;
}

.attach_img {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    vertical-align: middle;
    flex: 0 0 auto;
    height: 22px;
    padding: 3px 10px;
    background-color: black;
    border-radius: 2px;
    font-size: 12px;
    cursor: pointer;
    color: white;
}

.guide_txt {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 10px;
    padding-top: 2px;
    font-size: 12px;
    color: #999999;
}

.input_file {
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    font-weight: 500;
    width: 100%;
    height: 48px;
    padding: 0 15px;
    font-size: 14px;
    color: #333333;
    border: 1px solid #cccccc;
    background: white;
    border-radius: 3px;
    transition: all 0.5s;
    vertical-align: middle;
    display: none;
}

.list_type1 {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 30px;
}

.list_type1 li {
    line-height: normal;
    font-weight: 500;
    box-sizing: border-box;
    margin: 0;
    list-style: none;
    position: relative;
    padding: 0 0 10px 8px;
    font-size: 13px;
    color: #999999;
    word-break: keep-all;
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

.white {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    background-color: white;
    border: 1px solid black;
}

.btnInsert {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    font-weight: 500;
    vertical-align: middle;
    background: transparent;
    cursor: pointer;
    font-size: 16px;
    height: 52px;
    line-height: 50px;
    text-align: center;
    border-radius: 3px;
    width: 200px;
    flex: 0 0 200px;
    margin-left: 10px;
    background-color: #ccc;
    color: #fff;
}
</style>
