<template>
    <div>
        <div class="row mb-4">
            <div class="row mb-3">
                <div class="d-flex">
                    <h4><b style="color:#22C55E">|</b> 교육과정 진행 현황</h4>
                </div>
                <div class="d-flex justify-content-between ms-3 mt-3 mb-2">
                    <div class="d-flex">
                        <span class="me-3" style="" :style="style1" @click="status1()"><b>진행
                                중</b></span>
                        <span class="me-3" style="" :style="style2" @click="status2()"><b>진행
                                예정</b></span>
                        <span class="me-3" style="" :style="style3" @click="status3()"><b>진행
                                완료</b></span>
                    </div>
                    <div class="me-5">
                        <RouterLink to="/admin/course/list" class="btn btn-outline-info btn-sm d-flex justify-content-end">
                            더보기
                        </RouterLink>
                    </div>
                </div>
            </div>
            <table class="table align-middle" style="width: 95%;">
                <!-- 페이징 처리 4개씩 -->
                <tr v-for="item in infoData.course" :key="item" class="table align-middle"
                    style="width: 95%;">
                    <td style="width: 40%;"><b>{{ item.cname }}</b></td>
                    <td style="width: 30%;">{{ item.cstartdate.substring(0, 10) }} ~ {{
                        item.cenddate.substring(0, 10) }}</td>
                    <td style="width: 30%;">
                        <div class="d-flex flex-row justify-content-between">
                            <span style="font-size: 8px;">2024.06.19 기준</span>
                            <span style="font-size: 8px;">70% (84 / 105)</span>
                        </div>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-success" style="width:70%">70%</div>
                        </div>
                    </td>
                </tr>
               <tr v-if="infoData.course.length >= 1">
                <!-- <tr>-->
                    <td colspan="5" class="text-center">
                        <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                        <button v-if="infoData.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(infoData.pager.startPageNo - 1)">이전</button>
                        <button v-for="pageNo in infoData.pager.pageArray" :key="pageNo"
                            :class="(infoData.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                            class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                            {{ pageNo }}
                        </button>
                        <button
                            v-if="infoData.pager.groupNo < infoData.pager.totalGroupNo"
                            class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(infoData.pager.endPageNo + 1)">다음</button>
                        <button class="btn btn-outline-info btn-sm me-1"
                            @click="changePageNo(infoData.pager.totalPageNo)">맨끝</button>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from "vue";
import educenterAPI from '@/apis/educenterAPI';
import { useRoute } from 'vue-router';

import { defineExpose, onBeforeMount } from 'vue';

const route = useRoute();

// 자식 컴포넌트의 함수를 부모 컴포넌트로 전달 가능
defineExpose({totalCourseInfo, status1})

const educenter = defineProps(["ecname"]);

//const cstatus = defineProps(["cstatus"]);

const pPageNo = ref(route.query.pPageNo || 1);


// const resultCourseInfoData = ref({
//     ecname: "",
//     courseTotalInfo: [], // course : { ecno, ecname, cno, cname, cstatus, cstartdate, cenddate, crequireddate } // pager : { totalRows, ... } -> Pager DTO 참고
// });

const infoData = ref({
    course: "",
    pager: "",
});

onBeforeMount(() => {
    console.group("CourseInfo 컴포넌트 마운트 직전");
    console.log("educenter.ecname = " + educenter.ecname);
    console.groupEnd();
});

// ecname 기준으로 교육상태에 따른 '교육과정 진행 현황 조회'
async function totalCourseInfo(ecname, cstatus, pageNo) {
    try {
        console.log("totalCourseInfo 실행");
        const response = await educenterAPI.getTotalCourseInfo(ecname, cstatus, pageNo);
        infoData.value = response.data;
        console.log(infoData.value);
        
        console.log("교육과정 진행현황 정보(페이지) 리스트 가져오기 성공");
        // console.log("infoData.value.pager = " + JSON.stringify(infoData.value.infoData));
        // console.log("infoData.value.course = " + JSON.stringify(infoData.value.course));
    } catch (error) {
        console.log("교육과정 진행현황 정보(페이지) 리스트 가져오기 실패");
        console.log(error);
    }
}


let cstatus = ref("");

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    totalCourseInfo(educenter.ecname, cstatus.value, argPageNo);
}

// 교육과정 진행 현황 옵션 style변수
let style1 = ref("border-bottom: 4px solid #22C55E; color:#22C55E");
let style2 = ref("color: black");
let style3 = ref("color: black");


// ---------- 클릭하기전엔 절대 실행 안됨.
function status1() {
    console.log("status1 클릭");
    console.log(educenter.ecname);
    console.log(pPageNo.value);

    const status = "진행중";
    cstatus.value = status;

    totalCourseInfo(educenter.ecname, cstatus.value, pPageNo.value);
    //emit('responseCourseInfo', educenter.ecname, "진행중", pPageNo.value);

    style1.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
    style2.value = ref("color: black");
    style3.value = ref("color: black");
}

function status2() {
    console.log("status2 클릭");

    const status = "진행예정";
    cstatus.value = status;

    totalCourseInfo(educenter.ecname, cstatus.value, pPageNo.value);
    style1.value = "color: black";
    style2.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
    style3.value = "color: black";
}

function status3() {
    console.log("status3 클릭");

    const status = "진행완료";
    cstatus.value = status;

    totalCourseInfo(educenter.ecname, cstatus.value , pPageNo.value);
    style1.value = "color: black";
    style2.value = "color: black";
    style3.value = "border-bottom: 4px solid #22C55E; color:#22C55E";
}
</script>

<style scoped></style>
