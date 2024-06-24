<template>
    <!-- contents -->
    <div class="headingArea">
        <!-- seongmin -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="shadow col-12 col-md-6" style="height: 800px;">
                <div class="p-3 p-md-4 p-xl-5" style="height: 90%;">
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
                                    <b class="text-decoration-underline">Log in</b>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <!-- 로그인 폼 -->
                    <form @submit.prevent="handleSubmit">
                        <div class="row gy-3 overflow-hidden">
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-3" style="width: 500px">
                                    <input type="text" class="form-control" name="mid" id="mid" v-model="mid"
                                        placeholder="아이디" required>
                                    <label for="mid" class="form-label">ID</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12">
                                <div class="form-floating mb-1" style="width: 500px">
                                    <input type="password" class="form-control" name="mpassword" id="mpassword"
                                        v-model="mpassword" placeholder="비밀번호" required>
                                    <label for="password" class="form-label">Password</label>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center col-12 mb-3">
                                <div class="form-check" style="width: 500px">
                                    <input class="form-check-input" type="checkbox" value="" name="remember_me"
                                        id="remember_me">
                                    <label class="form-check-label text-secondary" for="remember_me">
                                        아이디 저장
                                    </label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-grid d-flex justify-content-center" v-if="checkIdPassword">
                                    <p class="text-center" style="font-size: 1rem">
                                        <b class="text-danger">아이디(로그인 전용 아이디) 또는 비밀번호를 잘못 입력했습니다.
                                            입력하신 내용을 다시 확인해주세요.</b>
                                    </p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="d-grid d-flex justify-content-center">
                                    <button class="btn btn-outline-dark btn-lg" type="submit"
                                        style="width: 500px"><b>로그인</b></button>
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

const store = useStore();
const router = useRouter();

const mid = ref("");
const mpassword = ref("");

const member = ref({
    mid: "",
    mname: "",
    mphone: "",
    mpassword: "",
    memail: "",
    mrole: "",
    menable: "",
    mcreatedat: "",
    mupdatedat: ""
});

// const midVal = store.state.mid;
// const mpasswordVal = store.state.mpassword;
const midVal = store.state.member.mid;
const mpasswordVal = store.state.member.mpassword;

// 아이디 비밀번호 불일치시 나오는 메시지 DOM 생성 조건
const checkIdPassword = ref(false);

// 로그인 했을 때
function handleSubmit() {
    console.log("mid : ", mid.value);
    console.log("mpassword : ", mpassword.value);
    if (mid.value === midVal && mpassword.value === mpasswordVal) {
        if (mid.value.substring(0, 4) === "kosa") {
            router.push("/admin");
            member.value.mrole = "ROLE_ADMIN";
            member.value.menable = 1;
        } else {
            router.push("/trainee");
            member.value.mrole = "ROLE_USER";
            member.value.menable = 1;
        }
    } else {
        checkIdPassword.value = true;
    }
    console.log("member 객체 값 확인하기 (JSON 형태) : " + JSON.stringify(member.value));
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
    font-size: 1.6rem;
}
</style>
