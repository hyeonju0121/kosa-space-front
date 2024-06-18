<template>
    <!-- contents -->
    <div class="headingArea">
        <div class="title">
            <h1 id="itemTitle">비밀번호 찾기</h1>
        </div>
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <div class="card-body p-3 p-md-4 p-xl-5" style="height: 90%;">
                    <div class="row mb-5">
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
                                    <b class="text-decoration-underline">Find Password</b>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <!-- 비밀번호 찾기 폼 -->
                    <form action="#!">
                        <div class="row gy-3 overflow-hidden">
                            <div class="d-flex justify-content-center col-12 mb-1">
                                <div class="form-floating mb-3" style="width: 500px">
                                    <input type="text" class="form-control" name="mname" id="mname" placeholder="이름"
                                        required>
                                    <label for="mname" class="form-label">Name</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-3" style="width: 500px">
                                    <input type="text" class="form-control" name="mid" id="mid" placeholder="아이디">
                                    <label for="mid" class="form-label">ID</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12 mb-5">
                                <div class="form-floating mb-1" style="width: 500px">
                                    <input type="email" class="form-control" name="memail" id="memail" value=""
                                        placeholder="이메일" required>
                                    <label for="email" class="form-label">email</label>
                                </div>
                            </div>
                            <!-- 유효성 검사를 넣을지 생각 -->

                            <!-- 아이디와 이메일이 일치하는지 보여주는 div 만들기? -->
                            <div class="d-flex justify-content-center col-12">
                                <div class="d-grid">
                                    <button class="btn btn-outline-dark btn-lg" type="submit"
                                        style="width: 500px"><b>비밀번호
                                            찾기</b></button>
                                </div>
                            </div>
                            <!-- 아이디와 이메일이 서로 일치한다면 보여주는 div 만들기 -->
                            <div class="col-12">
                                <p class="text-center">
                                    <b style="color:red">'김성민'</b> 회원님께서 <b style="color:red">'2024-06-05 17:20:48'</b>에
                                    회원가입 시 기재 해주신
                                    <b style="color:red">E-mail</b>로 정보를 발송하였습니다.
                                </p>
                            </div>
                        </div>
                    </form>

                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-3">
                                <RouterLink to="/login" class="link-secondary text-decoration-none">
                                    로그인</RouterLink>
                                <span> | </span>
                                <RouterLink to="/find/id" class="link-secondary text-decoration-none">아이디
                                    찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/signUp" class="link-secondary text-decoration-none">
                                    회원가입</RouterLink>
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
