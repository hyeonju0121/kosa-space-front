<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 목록</h1>
            </div>

            <!-- 제목과 내용을 떨어뜨리기위해 사용함 -->
            <div class="mb-3"></div>


            <!--조회,등록,검색 부분 -->
            <div class="mb-3">
                <!-- 조회,등록 -->
                <span class="mb-5">
                    <span class="me-1">
                        교육장
                        <select>
                            <option value="1">전체</option>
                            <option value="2">송파 교육장</option>
                            <option value="3">혜화 교육장</option>
                        </select>
                    </span>

                    <span class="me-1">
                        교육과정
                        <select>
                            <option value="1">전체</option>
                            <option value="2">MSA 1차</option>
                            <option value="3">MSA 2차</option>
                            <option value="4">클라우드</option>
                        </select>
                    </span>

                    <span class="me-1">
                        작성자
                        <select>
                            <option value="1">운영진</option>
                            <option value="2">강사진</option>
                        </select>
                    </span>

                    <span>
                        유형
                        <select>
                            <option value="1">출결</option>
                            <option value="2">수업</option>
                            <option value="3">강의장</option>
                            <option value="4">취업</option>
                            <option value="5">행사</option>
                        </select>
                    </span>

                    <span class="ms-3">
                        <button class="btn btn-dark btn-sm">조회</button>
                    </span>

                    <span class="ms-5" style="text-align:right">
                        <BaseButtonCreate class="mt-3" @click="handleCreateBtn">공지사항 등록</BaseButtonCreate>
                    </span>
                </span>

                <!-- 검색 부분  -->
                <div class="mb-3" style="text-align:right">

                    <div class="mt-3">
                        <span class="me-3">
                            <input type="search" name="search" placeholder="입력해주세요" />
                        </span>
                        <button id="searchBtn" class="btn btn-dark btn-sm">검색</button>
                    </div>
                </div>
            </div>

            <!-- 테이블 -->
            <div class="container">
                <table class="table table-hover" style="text-align:center">
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
                            <th>수정, 삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>강의장 청결 유지</td>
                            <td>송파 교육장</td>
                            <td>MSA 2차</td>
                            <td>강의장</td>
                            <td>운영진</td>
                            <td>2024-06-18</td>
                            <td></td>
                            <td>
                                <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                                <router-link to="./list" class="btn btn-danger btn-sm">삭제</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>강의장 청결 유지</td>
                            <td>송파 교육장</td>
                            <td>MSA 2차</td>
                            <td>강의장</td>
                            <td>운영진</td>
                            <td>2024-06-18</td>
                            <td></td>
                            <td>
                                <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                                <router-link to="./list" class="btn btn-danger btn-sm">삭제</router-link>
                            </td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>강의장 청결 유지</td>
                            <td>송파 교육장</td>
                            <td>MSA 2차</td>
                            <td>강의장</td>
                            <td>운영진</td>
                            <td>2024-06-18</td>
                            <td></td>
                            <td>
                                <router-link to="./update" class="btn btn-info btn-sm me-2">수정</router-link>
                                <router-link to="./list" class="btn btn-danger btn-sm">삭제</router-link>

                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


            <div>
                <div class="btn_big_wrap">
                    <BaseButtonSubmit @click="handleDetailBtn">게시글 보기</BaseButtonSubmit>

                </div>
            </div>
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

function handleDetailBtn() {
    router.push('/admin/notice/detail');
}

function handleCreateBtn() {
    router.push('/admin/notice/create');
}

function handleUpdateBtn() {
    router.push('/admin/notice/update');
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

/* 테이블 가운데 정렬 */
table {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}

/* 표테두리 간격없애고 겹치는 부분은 1개만 적용 */
/* table, td, th {
    border-collapse : collapse; 
    border : 1px solid black;
};  */
</style>
