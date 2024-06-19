<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">출결 현황 조회</h1>
            </div>




            <!-- select + table 부분 -->
            <div class="mt-3">
                <!-- select부분 -->
                <div class="mb-3">
                    <span class="me-3">
                        <select>
                            <option>송파 교육장</option>
                            <option>혜화 교육장</option>
                        </select>
                    </span>

                    <span class="me-3">
                        <select>
                            <option>MSA 1차</option>
                            <option>MSA 2차</option>
                            <option>클라우드</option>
                        </select>
                    </span>

                    <span>
                        <span class="btn btn-dark btn-sm mb-1">교육생 조회</span>
                    </span>
                </div>
                <div class="container" >
                    <table class="table table-hover">

                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>사진</th>
                                <th>이름</th>
                                <th>입실시간</th>
                                <th>퇴실시간</th>
                                <th>상태</th>
                                <th>비고</th>
                                <th>상세보기</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td>08:45</td>
                                <td>17:55</td>
                                <td>정상 출결</td>
                                <td></td>
                                <td><router-link class="btn btn-dark btn-sm">출결현황 보기</router-link></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td></td>
                                <td></td>
                                <td>결석</td>
                                <td><router-link class="btn btn-info btn-sm">사유</router-link></td>
                                <td><router-link class="btn btn-dark btn-sm">출결현황 보기</router-link></td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td>9:20</td>
                                <td>17:55</td>
                                <td>지각</td>
                                <td><router-link class="btn btn-info btn-sm">사유</router-link></td>
                                <td><router-link class="btn btn-dark btn-sm">출결현황 보기</router-link></td>
                            </tr>
                        </tbody>

                    </table>

                </div>



                <router-link to="@/components/UIComponents/TableDefaultContents.vue">공용 컴포넌트</router-link>
            </div>


            <div>
                <BaseButtonUpdate class="mt-3" @click="handleAttendanceBtn">출결 현황 보기</BaseButtonUpdate>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleAttendanceBtn() {
    router.push('/admin/attendance/trainee/detail');
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


/* 테이블 크기 고정 */
table {

    text-align: center;
    vertical-align: middle;
}




</style>
