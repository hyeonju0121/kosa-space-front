<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 상세 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 상세 조회</h1>
            </div>

            <div class="mt-5"></div>

            <!-- 테이블 -->
            <!-- contents -->
            <div class="container" style="text-align: left;">
                <!-- 테이블 -->
                <table class="table" style="text-align:center">
                    <tbody>
                        <tr>
                            <td>
                                제목
                            </td>
                            <td colspan="3" style="text-align:left">
                                <input type="text" value="강의장 청결 유지">
                            </td>
                        </tr>
                        <tr>
                            <td>작성날짜</td>
                            <td style="text-align:left">
                                <input value="2024.06.19">
                            </td>
                            <td>작성자</td>
                            <td><input value="운영진"></td>
                        </tr>
                        <tr>
                            <td>공지사항 유형</td>
                            <td colspan="3" style="text-align: left;">
                                <input value="강의장">
                            </td>
                        </tr>
                        <tr>
                            <td>교육장 명</td>
                            <td style="text-align:left">
                                <input value="송파 교육장">
                            </td>
                            <td>교육과정</td>
                            <td><input value="MSA 2차"></td>
                        </tr>
                        <tr>
                            <td>첨부파일</td>
                            <td colspan="3" style="text-align:left">
                                <input type="file">
                            </td>
                        </tr>

                        <tr>
                            <td colspan="4">
                                <textarea rows=15 cols=100% style="width:200px;">강의장 깔끔하게 사용해주세요!
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn_big_wrap" style="text-align:center">
                   
                </div>
            </div>
          
            <!-- 버튼부분 -->
            <div>
                <span style="margin-left:100px;">
                    <BaseButtonUpdate @click="handleUpdateBtn">공지사항 수정</BaseButtonUpdate>
                </span>
                <span>
                    <BaseButtonCancle style="margin-left: 10px;">공지사항 삭제</BaseButtonCancle>
                </span>
                <BaseButtonSubmit @click="handleListBtn">공지사항 목록</BaseButtonSubmit>
            </div>




        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleListBtn() {
    router.push('/admin/notice/list');
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



/* 표테두리 간격없애고 겹치는 부분은 1개만 적용 */
table,


#detailcontent {
    resize: none;
}
</style>
