<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h1 id="itemTitle">회원가입</h1>
        </div>
        <!--  -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <div class="p-3 p-md-4 p-xl-5" style="height: 90%;">
                    <div class="row">
                        <div class="col-12">
                            <div class="mb-5">
                                <div class="text-center mb-4">
                                    <a href="#!">
                                        <!-- <img src="./assets/img/bsb-logo.svg"
                                                                alt="BootstrapBrain Logo" width="175" height="57"> -->
                                    </a>
                                </div>
                                <h1 class="text-center">
                                    <b> </b>
                                    <b class="text-decoration-underline">Sign Up</b>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <!-- 회원가입 폼 -->
                    <form action="#!">
                        <div class="row gy-3 overflow-hidden">
                            <div class="col-12 mb-1">
                                <div class="d-flex justify-content-center">
                                    <div class="form-floating mb-1">
                                        <input type="text" class="form-control" name="mid" id="mid" placeholder="아이디"
                                            style="width: 400px;" required>
                                        <label for="mid" class="form-label ms-2">ID</label>
                                    </div>
                                    <div class="d-flex align-items-center ms-3">
                                        <button class="btn btn-secondary">중복체크</button>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12 mb-1">
                                <div class="form-floating mb-1">
                                    <input type="text" class="form-control" name="mname" id="mname" placeholder="이름"
                                        style="width: 510px;" required>
                                    <label for="mname" class="form-label">Name</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating">
                                    <input type="password" class="form-control" name="mpassword" id="mpassword" value=""
                                        placeholder="비밀번호" style="width: 510px;" required>
                                    <label for="password" class="form-label">Password</label>
                                    <p style="font-size: 0.7em; height: 4px;">※ 비밀번호는 6~12자리의 영문자와 숫자조합으로만 작성하실 수
                                        있습니다.</p>
                                </div>
                            </div>
                            <!-- 비밀번호 확인 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-1">
                                    <input type="password" class="form-control" name="mpassword" id="mpassword" value=""
                                        placeholder="비밀번호 확인" style="width: 510px;" required>
                                    <label for="password" class="form-label">Password Check</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-1">
                                    <input type="email" class="form-control" name="memail" id="memail" value=""
                                        placeholder="이메일" style="width: 510px;" required>
                                    <label for="email" class="form-label">email</label>
                                </div>
                            </div>

                            <!-- 휴대폰입력 -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="d-flex align-items-center mb-1">
                                    <span class="">Phone Number : </span>
                                    <!-- 휴대폰 앞 번호 -->
                                    <input type="text" class="form-control text-center ms-3" name="mphonenumber1"
                                        id="mphonenumber1" value="010" style="width: 80px; height: 45px" readonly>
                                    <span class="ms-2 me-2">-</span>
                                    <!-- 휴대폰 중간 번호 -->
                                    <input type="text" class="form-control text-center" name="mphonenumber2"
                                        id="mphonenumber2" value="" placeholder="Mid Number"
                                        style="width: 120px; height: 45px" required>
                                    <span class="ms-2 me-2">-</span>
                                    <!-- 휴대폰 뒷 번호 -->
                                    <input type="text" class="form-control text-center" name="mphonenumber3"
                                        id="mphonenumber3" value="" placeholder="End Number"
                                        style="width: 120px; height: 45px" required>
                                </div>
                            </div>
                            <div class="col-12 mt-4">
                                <div class="d-grid d-flex justify-content-center">
                                    <RouterLink to="/" class="btn btn-outline-danger btn-lg me-4" type="submit">
                                        <b>취소</b>
                                    </RouterLink>
                                    <!-- <button class="btn btn-outline-dark btn-lg"
                                                            type="submit"><b>회원가입</b></button> -->
                                    <RouterLink to="/signup/complete" class="btn btn-outline-dark btn-lg" type="submit">
                                        <b>회원가입</b>
                                    </RouterLink>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div class="row mt-3">
                        <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center">
                                <RouterLink to="/find/id" class="link-secondary text-decoration-none">아이디
                                    찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/find/password" class="link-secondary text-decoration-none">
                                    비밀번호 찾기</RouterLink>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="shadow col-12 col-md-6" style="height: 800px; border: 2px solid red">
                <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                    src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                    alt="Welcome back you've been missed!" height="100%">
            </div>
        </div>
    </div>
</template>

<script setup>
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
    font-size: 1.6rem;
}
</style>
