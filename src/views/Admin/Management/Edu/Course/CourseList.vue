<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육과정 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육과정 목록</h1>
            </div>
        </div>

        <div>
            <select id="room">
                <option value="option1">송파 교육장</option>
                <option value="option2">가산 교육장</option>
                <option value="option3">혜화 교육장</option>
            </select>

            <BaseButtonSubmit class="mt-3" @click="handleCreateBtn">교육과정 등록</BaseButtonSubmit>
        </div>

        <div class="container mt-3">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col"></th>
                        <th scope="col">교육과정명</th>
                        <th scope="col">기간</th>
                        <th scope="col">수강인원</th>
                        <th scope="col">강사진</th>
                        <th scope="col">비고</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>1</td>
                        <td>
                            <div class="course-img">
                                <img src="@/assets/course1.png" class="course-img-detail">
                            </div>
                        </td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024.02.26 ~ 2024.07.26</td>
                        <td>34 명</td>
                        <td>신용권 교수</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>
                            <div class="course-img">
                                <img src="@/assets/course1.png" class="course-img-detail">
                            </div>
                        </td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024.02.26 ~ 2024.07.26</td>
                        <td>34 명</td>
                        <td>신용권 교수</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>
                            <div class="course-img">
                                <img src="@/assets/course1.png" class="course-img-detail">
                            </div>
                        </td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024.02.26 ~ 2024.07.26</td>
                        <td>34 명</td>
                        <td>신용권 교수</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>
                            <div class="course-img">
                                <img src="@/assets/course1.png" class="course-img-detail">
                            </div>
                        </td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td>
                        <td>2024.02.26 ~ 2024.07.26</td>
                        <td>34 명</td>
                        <td>신용권 교수</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/course/create');
}

function handleUpdateBtn() {
    router.push('/admin/course/update');
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
select, th, td {
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

/*교육과정 이미지 틀 (원형)*/
.course-img {
    width: 90px;
    height: 90px;
    border-radius: 25px;
    margin-left: 10px;
    overflow: hidden;
}

/*교육과정 이미지 사이즈 조정*/
.course-img img {
    width: 100%;
    object-fit: cover;
}

/* table */
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #22C55E;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.createbtn {
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
}
</style>
