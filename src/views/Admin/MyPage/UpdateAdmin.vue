<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>마이페이지 > 회원정보수정</span>
        </div>

        <div>
            <!-- contents -->
            <div class="headingArea">
                <div class="title">
                    <h1 id="itemTitle">회원정보수정</h1>
                </div>
            </div>
            <!--  -->
            <div class="p-3 p-md-4 p-xl-5 vh-100">
                <div class="">
                    <div class="row d-flex mb-3" >
                        <div class="col text-end align-bottom">
                            <p style="font-size: 0.8em"><b style="color:red">*</b>필수입력사항</p>
                        </div>
                    </div>
                    <!-- 회원정보수정 테이블 -->
                    <table class="table">
                        <tbody class="align-middle">
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center" style="width: 300px; ">아이디</th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mid" id="mid" value="kosa12345"
                                        style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이름
                                </th>
                                <td class="p-3">
                                    <input type="text" class="form-control p-3" name="mid" id="mid" value="김성민"
                                        style="width: 300px;" readonly />
                                </td>
                            </tr>
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호
                                </th>
                                <td class="p-3">
                                    <div class="form-floating mb-1">
                                        <input type="password" class="form-control" name="mpassword" id="mpassword"
                                            value="" placeholder="비밀번호" style="width: 300px;">
                                        <label for="password" class="form-label">Password</label>
                                    </div>
                                    <p style="font-size: 0.7em">※ 비밀번호는 6~12자리의 영문자와 숫자조합으로만 작성하실 수 있습니다.</p>
                                </td>
                            </tr>
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">비밀번호 확인
                                </th>
                                <td class="p-3">
                                    <div class="form-floating mb-1">
                                        <input type="password" class="form-control" name="mpassword" id="mpassword"
                                            value="" placeholder="비밀번호 확인" style="width: 300px;">
                                        <label for="password" class="form-label">Password Check</label>
                                    </div>
                                </td>
                            </tr>
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">이메일</th>
                                <td class="p-3">
                                    <div class="d-flex align-items-center mb-1">
                                        <input type="text" class="form-control p-3 me-2" name="emailFront"
                                            id="emailFront" value="kosaspace" style="width: 150px;" />
                                        <span> @ </span>
                                        <input type="text" class="form-control p-3 ms-2" name="emailBack" id="emailBack"
                                            value="gmail.com" style="width: 150px;" />
                                    </div>
                                </td>
                            </tr>
                            <tr style="height:90px; border-bottom:1px solid #dcdcdc;">
                                <th class="text-center">휴대폰번호
                                </th>
                                <td class="p-3">
                                    <div class="d-flex align-items-center mb-1">
                                        <!-- 휴대폰 앞 번호 -->
                                        <input type="text" class="form-control p-3" name="mphonenumber1"
                                            id="mphonenumber1" value="010" style="width: 80px;" readonly>
                                        <span class="ms-2 me-2">-</span>
                                        <!-- 휴대폰 중간 번호 -->
                                        <input type="text" class="form-control p-3" name="mphonenumber2"
                                            id="mphonenumber2" value="1234" style="width: 100px;"
                                            placeholder="Mid Number">
                                        <span class="ms-2 me-2">-</span>
                                        <!-- 휴대폰 뒷 번호 -->
                                        <input type="text" class="form-control p-3" name="mphonenumber3"
                                            id="mphonenumber3" value="1234" style="width: 100px;"
                                            placeholder="End Number" required>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
                        <div class="btn_big_wrap align-content-center">
                            <BaseButtonCancle @click="handleCancle">취소</BaseButtonCancle>
                            <BaseButtonSubmit @click="handleCheck">완료</BaseButtonSubmit>
                        </div>
                        <div class="d-flex justify-content-end">
                            <button type="button" class="btn btn-outline-dark me-4" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">회원탈퇴</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 회원탈퇴에 대한 모달 -->
    <!-- Vertically centered modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">회원 탈퇴</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    정말 탈퇴하시겠습니까?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger">탈퇴</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCancle() {
    router.push(`/admin/dashboard`);
}

function handleCheck() {
    router.push(`/admin/dashboard`);
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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
</style>