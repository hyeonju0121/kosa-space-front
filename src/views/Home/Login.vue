<template>
    <!-- contents -->
    <div class="headingArea">
        <!-- seongmin -->
        <div class="row d-flex justify-content-center align-items-center p-3 p-md-4 p-xl-5 vh-100">
            <div class="d-flex" style="height: 90%; width: 80%;">
                <div class="shadow col-12 col-md-6" style="height: 100%;">
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
                                        <b class="text-decoration-underline">Log in</b>
                                    </h1>
                                </div>
                            </div>
                        </div>

                        <!-- 로그인 폼 -->
                        <form @submit.prevent="handleLogin()">
                            <div class="row gy-3 overflow-hidden">
                                <div class="d-flex justify-content-center col-12">
                                    <div class="form-floating mb-3" style="width: 80%">
                                        <input type="text" class="form-control" name="mid" id="mid"
                                            v-model.trim="member.mid" placeholder="아이디" required>
                                        <label for="mid" class="form-label">ID</label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center col-12">
                                    <div class="form-floating mb-1" style="width: 80%">
                                        <input type="password" class="form-control" name="mpassword" id="mpassword"
                                            v-model.trim="member.mpassword" placeholder="비밀번호" required>
                                        <label for="password" class="form-label">Password</label>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center col-12 mb-3">
                                    <div class="form-check" style="width: 80%">
                                        <input class="form-check-input" type="checkbox" value="" name="remember_me"
                                            id="remember_me">
                                        <label class="form-check-label text-secondary" for="remember_me">
                                            아이디 저장
                                        </label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="d-grid d-flex justify-content-center" v-if="checkIdPassword === true">
                                        <p class="text-center" style="font-size: 1rem">
                                            <b class="text-danger">아이디(로그인 전용 아이디) 또는 비밀번호를 다시 확인해주세요.</b>
                                        </p>
                                    </div>
                                </div>
                                <div class="col-12 mb-3">
                                    <div class="d-grid d-flex justify-content-center">
                                        <button class="btn btn-outline-dark btn-lg" type="submit"
                                            style="width: 80%"><b>로그인</b></button>
                                    </div>
                                </div>
                                <div class="d-flex justify-content-center col-12 mb-3">
                                    <div class="" style="width: 80%">
                                        <div class="d-grid d-flex justify-content-center">
                                            <RouterLink to="/find/id" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">아이디
                                                찾기</RouterLink>
                                            <span class="ms-2 me-2" style="font-size: 0.8rem;"> | </span>
                                            <RouterLink to="/find/password" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">
                                                비밀번호 찾기</RouterLink>
                                            <span class="ms-2 me-2" style="font-size: 0.8rem"> | </span>
                                            <RouterLink to="/signUp" class="link-secondary text-decoration-none"
                                                style="font-size: 0.8rem">
                                                회원가입</RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="shadow col-12 col-md-6" style="height: 100%; border: 2px solid red">
                    <img class="img-fluid rounded-start w-100 h-100 object-fit-cover" loading="lazy"
                        src="https://cdn.dribbble.com/users/3578290/screenshots/16190754/media/24bf4cc8a0b3bfddd2bcdfb2c4d12e73.jpg?resize=1000x750&vertical=center"
                        alt="Welcome back you've been missed!" height="100%">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import authAPI from '@/apis/authAPI';

const store = useStore();
const router = useRouter();

const member = ref({
    mid: "",
    mpassword: "",
    mrole: ""
});

// const midVal = store.state.member.mid;
// const mpasswordVal = store.state.member.mpassword;

// 아이디 비밀번호 불일치시 나오는 메시지 DOM 생성 조건
const checkIdPassword = ref(false);

// 로그인 했을 때
async function handleLogin() {
    console.log("mid : ", member.value.mid);
    console.log("mpassword : ", member.value.mpassword);
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        console.log("member 객체 확인" + data);
        const response = await authAPI.login(data);
        // response는 Rest API에서 map을 반환받는다.
        // Keys: {"result", "mid", "accessToken"}, values: {"success / fail", mid, accessToken}
        if (response.data.result === "success") {
            const payload = {
                mid: response.data.mid,
                accessToken: response.data.accessToken,
                mrole: response.data.mrole
            };

            // 스토어에 저장
            store.dispatch("saveAuth", payload);

            // 권한에 따른 라우터 이동
            if (payload.mrole === "ROLE_ADMIN") {
                router.push("/admin");
            } else if (payload.mrole === "ROLE_USER") {
                router.push("/trainee");
            } else {
                alert("인증 정보를 확인해주세요.");
                router.push("/");
            }
        }
    } catch (error) {
        console.log(error);
        checkIdPassword.value = true;
    }
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
