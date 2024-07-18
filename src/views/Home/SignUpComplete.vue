<template>
    <!-- contents -->
    <div class="headingArea">
        <!-- seongmin -->
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
                                <p class="text-center mb-1" style="font-size: 60px">
                                    <b class="">
                                        <!-- Congratulations -->
                                        Welcome to
                                    </b>
                                </p>
                                <p class="text-center" style="font-size: 50px">
                                    <b class="text-decoration-underline" style="color: #22C55E">
                                        <!-- Signing Up ! -->
                                        KOSA SPACE
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- 회원가입 완료 폼 -->
                    <div class="row gy-3 overflow-hidden">
                        <div class="col-12 mb-5">
                            <p class="text-center" style="font-size: 1.2em">
                                <b class="text-info">{{ name }}</b>님 회원가입을 축하합니다.<br>
                                Kosa Space의 새로운 아이디는 <b style="color: red">'{{ id }}'</b>입니다.
                                <br><br>
                                소중한 개인정보는 암호화 처리 되어 보관되며<br>
                                비밀번호는 주기적으로 변경하시기 바랍니다.
                            </p>
                        </div>

                        <div class="col-12">
                            <div class="d-grid d-flex justify-content-center">
                                <RouterLink to="/" class="btn btn-outline-danger btn-lg me-4" type="submit"><b>홈 이동</b>
                                </RouterLink>
                                <button class="btn btn-outline-dark btn-lg" type="submit"><b>로그인</b></button>
                            </div>
                        </div>
                    </div>

                    <!-- 
                    <div class="row">
                        <div class="col-12">
                            <div class="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-center mt-3">
                                <RouterLink to="/find/id" class="link-secondary text-decoration-none">아이디
                                    찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/find/password" class="link-secondary text-decoration-none">
                                    비밀번호 찾기</RouterLink>
                                <span> | </span>
                                <RouterLink to="/signUp" class="link-secondary text-decoration-none">
                                    회원가입</RouterLink>
                            </div>
                        </div>
                    </div> -->

                </div>
            </div>

            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <!-- <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                    src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                    alt="Welcome back you've been missed!" height="100%"> -->
                <img src="@/assets/login_background.svg" class="img-fluid rounded-start w-100 h-100" height="100%">
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex';

const store = useStore();

const id = store.state.member.mid;
const name = store.state.member.mname;


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
