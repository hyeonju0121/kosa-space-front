<template>
    <div>
        <div class="row mt-3">
            <table class="table">
                <thead>
                    <th colspan="2">
                        <h4><b style="color:#22C55E">| </b>공지사항</h4>
                    </th>
                    <th style="text-align: end;">
                        <RouterLink to="/admin/notice/list" class="btn btn-outline-info btn-sm">자세히 보기
                        </RouterLink>
                    </th>
                </thead>
                <tbody class="align-middle">
                    <!-- 테이블의 수는 8개가 적당해보임. 페이징 처리해야함. -->
                    <tr v-for="item in notice.noticeInfo" :key="item">
                        <td>
                            <span class="btn btn-info btn-sm me-2">{{ item.ncategory }}</span>
                        </td>
                        <td>
                            <span>
                                <!-- 페이지네이션도 추가해야함. -->
                                <RouterLink :to="`/admin/notice/detail?nno=${item.nno}`"
                                    style="text-decoration-line: none; color:black">{{ item.ntitle }}</RouterLink>
                            </span>
                        </td>
                        <td style="text-align: end;">
                            {{ item.ncreatedat.substring(0, 10) }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { defineProps, defineEmits } from "vue";
import noticeAPI from '@/apis/noticeAPI';
import { useRoute } from 'vue-router';

import { defineExpose } from 'vue';

const route = useRoute();

// 자식 컴포넌트의 함수를 부모 컴포넌트로 전달 가능
defineExpose({ submit })

const educenter = defineProps(["ecname"]);

const nPageNo = ref(route.query.nPageNo || 1);

let notice = ref({
    noticeInfo: "",
    pager: ""
})

// ecname 기준으로 공지사항 조회
async function totalNoticeInfo(ecname, pageNo) {
    try {
        console.group("totalNoticeInfo 검사");
        const response = await noticeAPI.getEcnameNoticeList(ecname, pageNo);
        console.log("response.date = " + response.data);
        notice.value = response.data;
        console.log("교육과정 공지사항 정보(페이지) 리스트 가져오기 성공");
        console.log("notice.value.noticeInfo =" + JSON.stringify(notice.value.noticeInfo));
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
    // router.push(`/admin/dashboard/BoardList?pageNo=${argPageNo}`);
    totalNoticeInfo(educenter.ecname, argPageNo);
}
</script>

<style scoped></style>
