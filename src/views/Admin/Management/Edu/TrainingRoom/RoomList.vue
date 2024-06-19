<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 강의실 관리 > 강의실 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">강의실 목록</h1>
            </div>
        </div>

        <div>
            <select id="room">
                <option value="option1">송파 교육장</option>
                <option value="option2">가산 교육장</option>
                <option value="option3">혜화 교육장</option>
            </select>

            <BaseButtonSubmit class="mt-3" @click="handleCreateBtn">강의실 등록</BaseButtonSubmit>
        </div>

        <div class="container mt-3">
            <table class="styled-table">
                <thead>
                    <tr>
                        <th scope="col" >No</th>
                        <th scope="col" >강의실 명</th>
                        <th scope="col">수용 가능 인원</th>
                        <th scope="col">사용 가능 여부</th>
                        <th scope="col">현재 진행중인 교육과정</th>
                        <th scope="col">등록일</th>
                        <th scope="col">비고</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr>
                        <td>1</td>
                        <td>L1</td>
                        <td>34 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td> 
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>L2</td>
                        <td>30 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td> 
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>L3</td>
                        <td>25 명</td>
                        <td>불가능</td>
                        <td>MSA 기반 Full Stack 개발 전문가 양성과정 2차</td> 
                        <td>2024-06-18 19:26</td>
                        <td>
                            <button type="button" class="btn btn-outline-dark" @click="handleUpdateBtn">수정</button>
                            <button type="button" class="btn btn-outline-dark">삭제</button>
                        </td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>L4</td>
                        <td>34 명</td>
                        <td>가능</td>
                        <td></td> 
                        <td>2024-06-18 19:26</td>
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
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/room/create');
}

function handleUpdateBtn() {
    router.push('/admin/room/update');
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

/* th, td 
{
  text-align: center; 
  vertical-align: middle;
} */

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
