<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h4 id="itemTitle">공지사항 목록</h4>
        </div>

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
                                <td>1</td>
                                <td>강의장 청결유지</td>
                                <td>송파 교육장</td>
                                <td>MSA 2차</td>
                                <td>강의장</td>
                                <td>운영진</td>
                                <td>2024-06-14</td>    
                                <td></td>
                            </tr>
                            <tr>
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
                            </tr>                            
                        </tbody>
                    </table>
                </div>

    
</div>







        <div>
            <BaseButtonSubmit @click="handleDetailBtn" style="margin-top: 10px;">게시글 보기</BaseButtonSubmit>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleDetailBtn() {
    router.push('/trainee/community/notice/detail');
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

.btn_big_wrap {
    box-sizing: border-box;
    margin: 0;
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0;
    margin-top: 60px;
}

table{
    text-align: center;
}

</style>
