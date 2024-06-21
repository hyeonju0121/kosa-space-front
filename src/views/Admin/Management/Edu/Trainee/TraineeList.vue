<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육생 관리 > 교육생 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 목록</h1>
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
                <span>
                    (교육과정 클릭시 교육과정명 활성화 되는부분)
                </span>
                <div class="mb-3" style="text-align:right">
                    <router-link><button class="btn btn-dark btn-sm">교육생 등록</button></router-link>
                </div>

                <div class="container">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>교육생 번호</th>
                                <th>사진</th>
                                <th>이름</th>
                                <th>전화번호</th>
                                <th>이메일</th>
                                <th>상태</th>
                                <th>관리</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td>010-xxxx-xxxx</td>
                                <td>kosa@kosa.com</td>
                                <td></td>
                                <td>
                                    <span class="me-2">
                                        <button class="btn btn-info btn-sm">수정</button>
                                    </span>
                                    <button class="btn btn-danger btn-sm">삭제</button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td>010-xxxx-xxxx</td>
                                <td>kosa@kosa.com</td>
                                <td></td>
                                <td>
                                    <span class="me-2">
                                        <button class="btn btn-info btn-sm">수정</button>
                                    </span>
                                    <button class="btn btn-danger btn-sm">삭제</button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td><img src="@/assets/kyungseob.jpg" width="110" height="150"></td>
                                <td>이경섭</td>
                                <td>010-xxxx-xxxx</td>
                                <td>kosa@kosa.com</td>
                                <td></td>
                                <td>
                                    <span class="me-2">
                                        <button class="btn btn-info btn-sm">수정</button>
                                    </span>
                                    <button class="btn btn-danger btn-sm">삭제</button>
                                </td>

                            </tr>
                        </tbody>

                    </table>

                </div>



                <router-link to="@/components/UIComponents/TableDefaultContents.vue">공용 컴포넌트</router-link>
            </div>




            <div>
                <BaseButtonCreate class="mt-3" @click="handleCreateBtn">교육생 등록</BaseButtonCreate>

                <div class="btn_big_wrap">
                    <BaseButtonUpdate @click="handleUpdateBtn">수정</BaseButtonUpdate>
                    <BaseButtonCancle style="margin-left: 10px;">삭제</BaseButtonCancle>
                    <router-link to="./detail"><button class="btn btn-info btn-sm">교육생 상세조회</button></router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/trainee/register');
}

function handleUpdateBtn() {
    router.push('/admin/trainee/update');
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

table {
    text-align: center;
    vertical-align: middle;
}</style>
