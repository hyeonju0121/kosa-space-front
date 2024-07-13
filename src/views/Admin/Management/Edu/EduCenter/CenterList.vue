<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육장 관리 > 교육장 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육장 목록</h1>
            </div>
            <div>
                <BaseButtonCreate class="mt-3" @click="handleCreateBtn">교육장 등록</BaseButtonCreate>
            </div>
        </div>
        <div class="container mt-3" style="margin-left: %;">
            <div class="educenter-wrap row">
                <div v-for="educenter in educenterlist" :key="educenter.ecno" class="card col-md-4 col-sm-6 mb-4"
                    style="width: 22rem; margin-right: 13px;">
                    <!-- 캐러셀 부분 -->
                    <div :id="`carouselExampleControls${educenter.ecno}`" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div v-for="(url, index) in educenter.attachments" :key="index" class="carousel-item active"
                                data-bs-interval="1000000">
                                <img :src="url" class="d-block w-100" alt="..." style="width: 150px; height: 200px;">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button"
                            :data-bs-target="`#carouselExampleControls${educenter.ecno}`" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button"
                            :data-bs-target="`#carouselExampleControls${educenter.ecno}`" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <!-- 교육장 목록 내용 -->
                    <div class="card-body">
                        <p class="educenter-name" style="font-size: 20px;"><b>{{ educenter.ecname }}</b></p>
                        <p class="educenter-text">
                            ({{ educenter.ecpostcode }}) {{ educenter.ecaddress }}<br>
                            ,{{ educenter.ecdetailaddress }}
                        </p>
                    </div>
                    <div class="card-footer">
                        <div class="educenter-createdat">[등록일시] {{ educenter.eccreatedat }}</div>
                        <div v-if="educenter.ecupdatedat" class="educneter-updatedat">[수정일시] {{ educenter.ecupdatedat }}
                        </div>
                        <div class="btn-wrap" style="margin-left: 12px;">
                            <RouterLink :to="`/admin/educenter/update?ecno=${educenter.ecno}`"><div class="btn btn-dark btn-sm me-2">수정</div></RouterLink>
                            <div @click="confirmRemove(educenter.ecno)" class="btn btn-danger btn-sm">삭제</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <DeleteCheckDialog @confirmDelete="handleRemove" />
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import { useRouter } from 'vue-router';
import educenterAPI from "@/apis/educenterAPI";
import { onMounted, ref } from 'vue';
import DeleteCheckDialog from './Dialog/DeleteCheckDialog.vue';
import { Modal } from 'bootstrap';


let deleteCheckDialog = null;



//상태 정의
const educenter = ref({
    ecno: "",
    ecname: "",
    ecaddress: "",
    ecpostcode: "",
    ecdetailaddress: "",
    eanoList: []
});


const router = useRouter();

//교육장 목록 상태정의
const educenterlist = ref([]);
let selectedEcno = null;

//교육장 목록을 가져오는 메소드
async function fetchEducenterList() {
    try {
        const response = await educenterAPI.getEducenterList();
        educenterlist.value = response.data;

        //각 교육장의 첨부파일 URL 가져오기
        for (const center of educenterlist.value) {
            if (center.eanoList && center.eanoList.length > 0) {
                center.attachments = [];
                for (const eano of center.eanoList) {
                    const url = await getAttach(eano);
                    center.attachments.push(url);
                }
            }
        }

    } catch (error) {
        console.log(error);
    }
}

//컴포넌트가 마운트 될 때 교육장 목록 가져오기
onMounted(() => {
    fetchEducenterList();
    // modal 객체 생성
    deleteCheckDialog = new Modal(document.querySelector("#deleteCheckDialog"));
});



//eano를 통해 해당 첨부파일을 가져오는 함수
async function getAttach(eano) {
    try {
        const response = await educenterAPI.getEducenterAttach(eano);
        const blob = response.data;
        return URL.createObjectURL(blob);
    }
    catch (error) {
        console.log(error);
    }
}


//등록버튼 누르면 실행되는
function handleCreateBtn() {
    router.push('/admin/educenter/create');
}

//삭제버튼 누를 때 확인 모달 표시
function confirmRemove(ecno) {
    selectedEcno = ecno;
    deleteCheckDialog.show();

}



//삭제버튼 눌렀을때 실행
async function handleRemove() {
    try {
        await educenterAPI.educenterDelete(selectedEcno);
        educenterlist.value = educenterlist.value.filter(item => item.ecno !== selectedEcno);
        deleteCheckDialog.hide();
    } catch (error) {
        console.log(error);
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




.educenter-wrap {
    display: grid;
    width: 100%;
    gap: 35px 60px;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    grid-auto-flow: row;
    padding-bottom: 72px;
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

.educenter-wrap {
    display: flex;
}

.card-footer {
    display: block;
}

.updatebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
}

.deletebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
    margin-left: 10px;
}</style>
