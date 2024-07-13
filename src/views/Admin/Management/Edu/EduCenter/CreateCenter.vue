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
            <form @submit.prevent="handleSubmit">
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육장 명</p>
                    </div>
                    <div class="td">
                        <div class="textarea_group_title sm">
                            <textarea v-model="centerInfo.ecname" id="ecname" title="교육장 명 입력" placeholder="교육장 명을 입력해주세요."
                                maxlength="50"></textarea>
                            <p class="form_bytes"><span class="byte">0</span>/100</p>
                        </div>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육장 주소 </p>
                    </div>
                    <div class="td">
                        <DaumPostCode3 @send-daumpostcode="postcodeinfo"/>
                        <input type="text" v-model="centerInfo.ecdetailaddress" placeholder="상세주소" style="width:500px; margin-top: 3%;">
                    </div>
                </div>

                <div class="tr">
                    <div class="th">
                        <p class="form_label required">교육장 사진 </p>
                    </div>
                    <div class="td">
                        <div class="center_wrap">
                            <div class="center_attach">                                
                                <input type="file" @change="addImage" multiple ref="ecattach"/>
                            </div>
                        </div>
                        <img v-for="(item, index) in src" :key="index" :src="item" width="80px" height="80px" />
                    </div>
                </div>

                <div class="btn_big_wrap">
                    
                    <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>                    
                    
                    <BaseButtonSubmit type="submit">완료</BaseButtonSubmit>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import DaumPostCode3 from './DaumPostCode3.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import educenterAPI from "@/apis/educenterAPI"

const router = useRouter();

// 교육장 상태 객체 정의
const centerInfo = ref({
    ecname: "",
    ecpostcode: "",
    ecaddress: "",
    ecdetailaddress: ""    
});

const ecattach = ref(null);

//완료 버튼 눌렀을때 실행
async function handleSubmit() {
    console.log(JSON.parse(JSON.stringify(centerInfo.value)));
    
    //multipart form-data 객체 생성
    const formData = new FormData();

    //문자 파트 넣기
    formData.append("ecname", centerInfo.value.ecname);
    formData.append("ecpostcode", centerInfo.value.ecpostcode);
    formData.append("ecaddress", centerInfo.value.ecaddress);
    formData.append("ecdetailaddress", centerInfo.value.ecdetailaddress);

    //파일 파트 넣기
    let elEcattach = ecattach.value;

    if(elEcattach.files.length != 0) {
        for (let i=0; i<elEcattach.files.length; i++){            
            formData.append("ecattachdata", elEcattach.files[i]);
        }
    }

    //교육장 등록 요청
    try {
        
        const response = await educenterAPI.create(formData);
        router.push('/admin/educenter/list');
    } catch(error) {
        
        console.log(error);
    }   
}


function handleCancle() {
    router.push('/admin/educenter/list');
}

function postcodeinfo(data1, data2) {
    centerInfo.value.ecpostcode = data1;
    centerInfo.value.ecaddress = data2;
}
//멀티파일 사진 미리보기
const src = ref([]);

function addImage(e) {
    const file = (e.target).files;
    const fileLength = file.length;
    let newList = [];
    for (let i = 0; i < fileLength; i++) {
        newList.push(URL.createObjectURL(file[i]));
    }
    src.value = newList;
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


/* educenter image -------------------------*/
.center_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background: white;
    min-height: 120px;
}

.center_attach {
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
