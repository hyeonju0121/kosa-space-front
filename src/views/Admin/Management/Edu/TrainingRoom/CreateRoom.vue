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
            <form @submit.prevent="handleSubmit">
                <div class="tr">
                    <div class="th" style="width: 20%;">
                        <p class="form_label">교육장 명</p>
                    </div>
                    <div class="td">
                        <select @click="checkSelectedEcname" title="교육장 선택" v-model="trainingroom.ecname" id="room"
                            style="margin-top: 10px;">
                            <option value="none" selected disabled>교육장 선택</option>
                            <option v-for="educenter in educenterList" :value="educenter" :key="educenter.ecno">{{ educenter }}</option>
                            
                            
                        </select>
                        <p v-show="!isSelected" style="color: rgb(247, 78, 27); margin-top: 2%;">교육장을 선택해주세요.</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label">강의실 명 </p>
                    </div>
                    <div class="textarea_group_title sm">
                        <textarea v-model="trainingroom.trname" id="tname" title="강의실 명 입력" placeholder="강의실 명을 입력해주세요."
                            maxlength="10"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/10</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th">
                        <p class="form_label">수용 가능 인원</p>
                    </div>
                    <div class="textarea_group_title sm">
                        <textarea v-model="trainingroom.trcapacity" id="tcapacity" title="수용 가능 인원 입력"
                            placeholder="수용 가능 인원을 입력해주세요." maxlength="10"></textarea>
                        <p class="form_bytes"><span class="byte">0</span>/10</p>
                    </div>
                </div>
                <div class="tr">
                    <div class="th" style="width:30%">
                        <p class="form_label">사용 가능 여부 </p>
                    </div>
                    <div style="width: 200px; display: flex;">
                        <input type="radio" id="tenable1" value="0" v-model="trainingroom.trenable" />
                        <label for="tenable1" style="margin-top: 17%; margin-left: 5%; margin-right: 5%;">
                            <p>가능</p>
                        </label>

                        <input type="radio" id="tenable2" value="1" v-model="trainingroom.trenable" />
                        <label for="tenable2" style="margin-top: 17%; margin-left: 5%;">
                            <p>불가능</p>
                        </label>
                    </div>
                </div>

                <div class="tr">
                    <div class="th">
                        <p class="form_label required">강의실 사진 </p>
                    </div>
                    <div class="td">
                        <div class="center_wrap">
                            <div class="center_attach">
                                <div class="img_box d-flex">
                                    <div id="defaultImg">
                                        <PhImage :size="32" color="#636462" weight="duotone" />
                                    </div>
                                </div>
                                <input type="file" @change="addImage" multiple ref="trattach" />
                            </div>
                        </div>
                        <img v-for="(item, index) in src" :key="index" :src="item" width="80px" height="80px" />
                    </div>
                </div>

                <div class="btn_big_wrap">
                    <RouterLink to="/admin/room/list">
                        <BaseButtonCancle>취소</BaseButtonCancle>
                    </RouterLink>
                    <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import trainingroomAPI from '@/apis/trainingroomAPI';
import educenterAPI from '@/apis/educenterAPI';

const trattach = ref(null);

// 강의실 상태 정의
const trainingroom = ref({
    ecname: "",
    trname: "",
    trcapacity: "",
    trenable: ""
})



//교육장 이름 전체 목록 가져오는 메소드
const educenterList = ref([]);

async function educenterNameList() {
    try{
        const response = await educenterAPI.educenterNameList();
        educenterList.value = response.data;
    } catch(error) {
        console.log(error)
    }

}

onMounted(()=>{
    educenterNameList();
})


//교육장이 선택 안됐을 경우 문구가 나오는 부분
let isSelected = ref(true);

function checkSelectedEcname() {
    if (trainingroom.value.ecname === 'none') {
        isSelected.value = false;
    } else {
        isSelected.value = true;
    }
}

const router = useRouter();

//완료 버튼을 눌렀을때
async function handleSubmit() {
    console.log(JSON.parse(JSON.stringify(trainingroom)));

    //전송폼데이타 만들기
    const formData = new FormData();

    //문자 파트 넣기
    formData.append("ecname", trainingroom.value.ecname);
    formData.append("trname", trainingroom.value.trname);
    formData.append("trcapacity", trainingroom.value.trcapacity);
    formData.append("trenable", trainingroom.value.trenable);

    //파일 파트 넣기
    let elTrattach = trattach.value;

    if (elTrattach.files.length != 0) {
        for (let i = 0; i < elTrattach.files.length; i++) {
            formData.append("trattachdata", elTrattach.files[i]);
        }
    }

    //강의실 등록 요청
    try{
        const response = await trainingroomAPI.create(formData);
        router.push('/admin/room/list');
    } catch(error){
        console.log(error);
    }    
}

//멀티파일 사진 미리보기
const src = ref([]);

function addImage(e) {
    const file = (e.target).files;
    const fileLength= file.length;
    let newList = [];
    for(let i=0; i< fileLength; i++) {
        newList.push(URL.createObjectURL(file[i]));
    }
    src.value= newList
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
}</style>
