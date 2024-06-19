<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>공지사항 관리 > 공지사항 수정</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">공지사항 수정</h1>
            </div>

            <div class="mt-5"></div>


            <div class="ms-3">
                <div>
                    <form>
                        <div class="container" style="text-align: left;">
                            <!-- 테이블 -->
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>
                                            공지사항 유형
                                        </td>
                                        <td>
                                            <select>
                                                <option>취업</option>
                                                <option>행사</option>
                                                <option>강의장</option>
                                                <option>수업</option>
                                                <option>출석</option>
                                            </select>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>교육장</td>
                                        <td>
                                            <select>
                                                <option>송파 교육센터</option>
                                                <option>혜화 교육센터</option>
                                            </select>
                                        </td>
                                        <td>교육과정</td>
                                        <td>
                                            <select>
                                                <option>전체</option>
                                                <option>MSA 1차</option>
                                                <option>MSA 2차</option>
                                                <option>클라우드</option>
                                            </select>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>공지사항 제목</td>
                                        <td>
                                            <textarea name="ntitle" cols="53" rows="1" id="n"
                                                placeholder="공지사항 제목을 입력해주세요."></textarea>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>공지사항 내용</td>
                                        <td>
                                            <textarea name="ncontent" cols="53" rows="10" id="n"
                                                placeholder="공지사항 내용을 입력해주세요."></textarea>
                                        </td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>첨부파일</td>
                                        <td><input type="file"></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>
                            <!-- 버튼부분 -->
                            <div>
                                <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                                <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


            <!--             
        <div class="ms-3">
            <div>                
                <form>
                    <div style="margin-bottom: 10px;">
                        <span class="me-3">
                            공지사항 유형
                        </span>
                        <select style="width: 150px;">
                            <option value="1">출결</option>
                            <option value="2">수업</option>
                            <option value="3">강의장</option>
                            <option value="4">취업</option>
                            <option value="4">행사</option>
                        </select>
                    </div>
                    <div class="d-flex" style="margin-bottom: 10px;">
                        <div class="me-5">
                            <span class="me-3">
                                교육장
                            </span>
                            
                            <select style="width: 150px; margin-left: 53px;">
                                <option value="1">송파 교육센터</option>
                                <option value="2">혜화 교육센터</option>
                            </select>
                        </div>
                        <div >
                            교육과정
                            <select style="width: 150px;">
                                <option value="1">MSA 1차</option>
                                <option value="2">MSA 2차</option>
                                <option value="3">클라우드</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex" style="margin-bottom:10px;">
                        <div style="margin-right: 21px;">
                            공지사항 제목
                        </div>
                        <div>
                            <textarea name="title" cols="53" rows="1" id="n"></textarea>
                        </div>
                    </div>

                    <div class="d-flex" style="margin-bottom:10px;">
                        <div style="margin-right: 21px;">
                            공지사항 내용
                        </div>
                        <div>
                            <textarea name="content" cols="53" rows="10" id="n"></textarea>
                        </div>
                    </div>

                    <div class="form-group" style="margin-bottom:30px;">
                        <span style="margin-right:58px">
                            <label for="exampleTextarea" class="form-label">첨부파일</label>
                        </span>
                        <input type="file">
                    </div>

                    <div style="margin-left: 200px;">
                        <BaseButtonSubmit @click="handleSubmit">완료</BaseButtonSubmit>
                        <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                    </div>
                </form>

            </div>
        </div> -->
        </div>
    </div>
</template>

<script setup>
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCancle() {
    router.push('/admin/notice/list');
}

function handleSubmit() {
    router.push('/admin/notice/list');
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

.noticetitle {
    width: 100%;
    height: 6.25em;
    resize: none;
}

#n {
    resize: none;
}</style>
