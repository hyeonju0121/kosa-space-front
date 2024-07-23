<template>
    <div>
        <div class="row">
            <div class="content">
                <div class="box">
                    <div class="box-header">
                        <!-- <h2><b style="color:#22C55E">| </b>공지사항</h2> -->
                        <!-- <RouterLink to="/admin/notice/list" class="btn btn-outline-info btn-sm">자세히 보기
                        </RouterLink> -->
                    </div>
  
                    <ul class="list">
                        <li class="list-item" v-for="item in notice.noticeInfo" :key="item">
                            <span class="d-flex">
                                <span class="new_mark2">{{ item.ecname.substring(0,2) }}</span>
                                <span class="new_mark_complete ms-2">{{ item.ncategory }}</span>
                            </span>
                            <span>
                                <span @click="goNoticeDetail(item.nno, goNoticeDetail)"
                                    style="text-decoration-line: none; color:black; cursor: pointer;">{{ item.ntitle }}</span>
                            </span>
                            <span>{{ item.ncreatedat.substring(0, 10) }}</span>
                        </li>
                    </ul>

                    <div class="mt-2" style="display: flex; justify-content: center;">
                        <div>
                            <button class="btn btn-outline-primary btn-sm me-1" @click="changePageNo(1)">처음</button>
                            <button v-if="notice.pager.groupNo > 1" class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(notice.pager.startPageNo - 1)">이전</button>
                            <button v-for="pageNo in notice.pager.pageArray" :key="pageNo"
                                :class="(notice.pager.pageNo === pageNo) ? 'btn-danger' : 'btn-outline-success'"
                                class="btn btn-sm me-1" @click="changePageNo(pageNo)">
                                {{ pageNo }}
                            </button>
                            <button v-if="notice.pager.groupNo < notice.pager.totalGroupNo"
                                class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(notice.pager.endPageNo + 1)">다음</button>
                            <button class="btn btn-outline-info btn-sm me-1"
                                @click="changePageNo(notice.pager.totalPageNo)">맨끝</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { defineProps, defineEmits } from "vue";
import noticeAPI from '@/apis/noticeAPI';
import { useRoute } from 'vue-router';

import { defineExpose, onBeforeMount} from 'vue';
import router from '@/router';

const route = useRoute();

// 자식 컴포넌트의 함수를 부모 컴포넌트로 전달 가능
defineExpose({ submit })

const educenter = defineProps(["ecname"]);

const nPageNo = ref(1);


onBeforeMount(() => {
    console.group("CourseInfo 컴포넌트 마운트 직전");
    totalNoticeInfo(educenter.ecname, 1);
    console.groupEnd();
});

let notice = ref({
    noticeInfo: "",
    pager: ""
})

// ecname 기준으로 공지사항 조회
async function totalNoticeInfo(ecname, pageNo) {
    try {
        console.group("totalNoticeInfo 검사");
        const response = await noticeAPI.getEcnameTraineeNoticeList("송파교육센터", pageNo);
        console.log("response.date = " + response.data);
        notice.value = response.data;
        console.log("교육과정 공지사항 정보(페이지) 리스트 가져오기 성공");
        console.log("notice.value.noticeInfo =" + JSON.stringify(notice.value.noticeInfo));
        console.log("notice.value.pager =" + JSON.stringify(notice.value.pager));
    } catch (error) {
        console.log("교육과정 공지사항 정보(페이지) 리스트 가져오기 실패");
        console.log(error);
    }
    console.groupEnd();
}

function submit() {
    totalNoticeInfo(educenter.ecname, nPageNo.value);
}

// -- 페이징 처리 --
function changePageNo(argPageNo) {
    console.log("changePageNo 함수 실행");
    console.log("argPageNo = " + argPageNo);
    nPageNo.value = argPageNo;
    totalNoticeInfo(educenter.ecname, argPageNo);
}

function goNoticeDetail(nno) {
    router.push({
        path: "/admin/notice/detail",
        query: {
            nno: nno,
            nPageNo: nPageNo.value,
            // ecname: filter.value.ecname,
            // cname: filter.value.cname,
            // ncategory: filter.value.ncategory,
            // mid: noticeList.value.notice.mid
        }
    })
}

watch(
    () => nPageNo.value, 
    (nv, ov) => {
        console.log("nPageNo 값 변경 nPageNo.value nv = " + nv);
        console.log("nPageNo 값 변경 nPageNo.value ov = " + ov);
        nPageNo.value = nv;
        totalNoticeInfo(educenter.ecname, nPageNo.value);
})
</script>

<style scoped>
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

/* tag */
.new_mark_complete {
    display: block;
    width: 38px;
    height: 24px;
    border-radius: 4px;
    color: rgb(235, 25, 39);
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: rgb(254, 239, 238);
}

.new_mark2 {
    display: block;
    width: 50px;
    height: 24px;
    border-radius: 4px;
    color: #2a7c6d;
    font-size: 13px;
    font-weight: bold;
    line-height: 24px;
    text-align: center;
    background-color: #defaf6;
}

.content {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
}

.box {
    flex: 1;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-right: 10px;
}

.box:last-child {
    margin-right: 0;
}

.box-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.box-header h2 {
    margin: 0;
    font-size: 1.2em;
}

.box-header button {
    padding: 5px 10px;
    border: 1px solid #ccc;
    background-color: #f0f0f0;
    border-radius: 5px;
    cursor: pointer;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid #e0e0e0;
}

.list-item:last-child {
    border-bottom: none;
}

.badge {
    display: inline-block;
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border-radius: 5px;
    font-size: 0.8em;
    margin-right: 10px;
}

.badge.green {
    background-color: #28a745;
}

.badge.purple {
    background-color: #6f42c1;
}
</style>
