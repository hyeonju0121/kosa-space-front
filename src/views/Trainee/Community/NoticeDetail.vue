<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h4 id="itemTitle">공지사항 상세 조회</h4>
        </div>

        <!-- 테이블 -->
        <!-- contents -->
        <form>
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
                                <textarea name="notice_content" rows=15 cols=100% style="resize: none;" readonly>강의장 깔끔하게 사용해주세요!
                                </textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="btn_big_wrap" style="text-align:center">

                </div>
            </div>
        </form>



        <!-- 버튼부분 -->
        <div style="text-align:center;">
            <BaseButtonSubmit @click="handleListBtn" style="margin-top: 10px;">공지사항 목록</BaseButtonSubmit>
        </div>

    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleListBtn() {
    router.push('/trainee/community/');
}
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

/* 테이블 크기 고정 */
table {
    width: 100%;
}
</style>
