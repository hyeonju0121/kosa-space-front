<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h4 id="itemTitle">공지사항 목록</h4>
        </div>
        <!-- 테이블 -->
        <div>
            <div class="container">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>게시글 번호</th>
                            <th>공지사항 제목</th>
                            <th>교육장</th>
                            <th>교육 과정명</th>
                            <th>유형</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            <th>수정일</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- <tr v-for="notice in page.notices" :key="notice.nno"> -->
                            <td>{{ notice.nno }}</td>
                            <td>
                                <RouterLink :to="`/trainee/Community/Notice/Detail?nno=${notice.nno}&pageNo=${pageNo}`">{{
                                    notice.ntitle }}</RouterLink>
                            </td>
                            <td>{{ notice.ecname }}</td>
                            <td>{{ notice.cname }}</td>
                            <td>{{ notice.ncategory }}</td>
                            <td>({{ notice.role }}){{ notice.writer }}</td>
                            <td>{{ notice.ncreatedat }}</td>
                            <td>
                                {{ notice.nupdatedat }}
                            </td>
                        </tr>
                        <!-- v-for 사용으로 지워질 부분 -->
                        <!-- <tr>
                                <td>2</td>
                                <td>강의장 청결유지</td>
                                <td>송파 교육장</td>
                                <td>MSA 2차</td>
                                <td>강의장</td>
                                <td>운영진</td>
                                <td>2024-06-14</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>강의장 청결유지</td>
                                <td>송파 교육장</td>
                                <td>MSA 2차</td>
                                <td>강의장</td>
                                <td>운영진</td>
                                <td>2024-06-14</td>
                                <td></td>
                            </tr> -->
                    </tbody>
                </table>
            </div>
        </div>

        <!-- 위에 공지사항 제목을 클릭해서  공지사항을 조회하기 때문에 없어질부분-->
        <!-- <div>
            <div class="btn btn-dark btn-sm"></div>
            <BaseButtonSubmit @click="handleDetailBtn" style="margin-top: 10px;">게시글 보기</BaseButtonSubmit>
        </div> -->
    </div>
</template>

<script setup>
// import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter, useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
// import axios from 'axios';

const router = useRouter();

//상태 정의
let notice = ref({
    nno: "1",
    ecno: "",
    cno: "",
    mid: "",
    role: "운영진",
    writer: "홍길동",
    ncategory: "강의장",
    ntitle: "강의장 청결",
    ncontent: "",
    nhitcount: "",
    nattach: "",
    nattachoname: "",
    nattachtype: "",
    ncreatedat: "2024-06-14",
    nupdatedat: "2024-06-20",
    ecname: "송파 교육장",
    cname: "MSA 2차"
})

// function handleDetailBtn() {
//     router.push('/trainee/community/notice/detail');
// }

// 상태 정의
// let notices = ref([]);
// let pageNo = ref(1); // 페이지 번호를 상태로 추가

// 컴포넌트가 마운트될 때 데이터 가져오기
// onMounted(async () => {
//   try {
//     const response = await axios.get('https://api.example.com/notices');
//     notices.value = response.data;
//   } catch (error) {
//     console.error(error);
//   }
// });



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

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
    font-size: 1.2rem;
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

table {
    text-align: center;
}
</style>
