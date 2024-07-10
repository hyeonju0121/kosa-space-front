<template>
    <div>
        <!-- 교육과정 선택했을때 교육과정에 따라 나오는 문구 -->
        <div class="d-flex justify-content-between mt-1" style="height: 30px;">
            <div class="d-flex" style="font-weight:bold; font-size: 1.2em;" v-show="educenter.ecname">
                <p class="" v-show="educenter.ecname">|</p>
                <p class="ms-3 me-3" v-show="educenter.ecname">{{ educenter.ecname }}</p>
                <p class="ms-3 me-3" v-show="educenter.cname">></p>
                <p class="ms-3" v-show="educenter.cname">{{ educenter.cname }}</p>
                <!-- responseList는 객체들의 배열 값.. (수정할 필요가 있음) -->
                <!-- <p v-if="responseList[0].cname === course.cname">
                    ({{ responseList[0].cstartdate }} ~ {{ responseList[0].cenddate }})
                </p> -->
            </div>
        </div>
        <div class="mt-3">
            <!-- 필터 선택에 따른 보임 여부 (테이블) -->
            <table class="styled-table" style="width: 100%;" v-if="length >= 1">
                <thead>
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col">교육생 번호</th>
                        <th scope="col">사진</th>
                        <th scope="col">이름</th>
                        <th scope="col">전화번호</th>
                        <th scope="col">이메일</th>
                        <th scope="col">상태</th>
                        <th scope="col">수정</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="items in trainee" :key="items">
                        <td>{{ items.rnum }}</td>
                        <td>
                            <!-- <router-link :to="`/admin/trainee/detail?mid=${items.mid}`" @click="traineeDetail(items.mid)>{{ items.mid
                                        }}</router-link> -->
                            <span @click="traineeDetail(items.mid)">{{ items.mid
                                }}</span>

                        </td>
                        <td><img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${items.mid}`" width="110"
                                height="150">
                        </td>
                        <td>{{ items.mname }}</td>
                        <td>{{ items.mphone }}</td>
                        <td>{{ items.memail }}</td>
                        <td>과정진행중 {{ items.tstate }}</td>
                        <td>
                            <span class="me-2">
                                <button type="button" class="btn btn-outline-dark"
                                    @click="handleUpdateBtn(items.mid)">수정</button>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <!-- 교육장과 교육과정이 있는데, 교육생이 등록되어 있지 않은 경우 ---------------------------------------------------------->
            <div class="interview_list" v-if="length < 1">
                <!-- 면접 요청 리스트 없을 경우 -->
                <div class="empty_data">
                    <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                    <strong class="tit">해당 과정에 등록되어있는 교육생이 없습니다.</strong>
                    <div class="txt">교육생을 등록해주세요!</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import { ref, defineProps, defineExpose, onMounted } from 'vue';
import axios from 'axios';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

onMounted(() => {
    console.group("트레이니 리스트 onMounted() 함수 실행");
    traineeList(educenter.ecname, educenter.cname);
    console.log("라우트 이동간의 쿼리 스트링 확인");
    console.log("educenter.ecname = " + educenter.ecname);
    console.log("educenter.cname = " + educenter.cname);
    console.log("route.query.ecname = " + route.query.ecname);
    console.log("route.query.cname = " + route.query.cname);
    console.groupEnd();
})

// 부모 컴포넌트로 내보낼 메소드 정의
defineExpose({ submit });

// 부모 컴포넌트에서 ecname, cname 가져오기
const educenter = defineProps(["ecname", "cname"]);

// 교육생 등록, 수정, 상세 조회에서 전달 받는 ecname과 cname


// DB로부터 받아올 데이터를 저장할 변수
let trainee = ref();

// 받아오는 데이터의 길이 값을 받을 변수
let length = ref();

// 교육생 리스트 가져오기
async function traineeList(ecname, cname) {
    try {
        console.log("traineeList 실행");
        console.log("ecname = " + ecname);
        console.log("cname = " + cname);
        if (ecname === "undefined") ecname = "all";
        if (cname === "undefined") cname = "all";
        const response = await traineeInfoAPI.getTraineeList(ecname, cname);
        trainee.value = response.data;
        // console.log("response.data.rnum = " + JSON.stringify(response.data));
        console.log("trainee.value = " + trainee.value.length);
        length.value = trainee.value.length;
    } catch (error) {
        console.log("traineeList 메소드 실패");
        console.log(error);
    }
}

// 교육생 번호를 눌렀을때 교육생 상세조회가 된다.
function traineeDetail(e) {
    console.log("e : " + e);
    router.push({
        path: '/admin/trainee/detail',
        query: {
            mid: e,
            ecname: educenter.ecname,
            cname: educenter.cname
        }
    })
}

// 교육생 수정 버튼을 눌렀을 시 path와 쿼리 스트링 값 전달
function handleUpdateBtn(e) {
    console.log("e : " + e);
    router.push({
        path: '/admin/trainee/update?mid=' + e,
        query: {
            mid: e,
            ecname: educenter.ecname,
            cname: educenter.cname,
        }
    })
}

// 부모 컴포넌트에 내보낼 메소드
function submit() {
    traineeList(educenter.ecname, educenter.cname);
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
select,
strong,
th,
td {
    font-family: 'Noto Sans KR', sans-serif;
}

/* table (현주 추가) ------------------------------------*/
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.styled-table thead tr {
    background-color: #22C55E;
    color: #ffffff;
    text-align: left;
}

.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* 필터 적용 안할 때 리스트  */
.interview_list .empty_data {
    padding: 72px 0 80px;
    border-bottom: 1px solid #ebedf2;
    color: #575d6d;
    text-align: center;
}

.empty_data img {
    display: block;
    margin: 0 auto;
}

.empty_data .tit {
    display: block;
    margin: 24px auto 4px;
    color: #5c667b;
    font-size: 18px;
    line-height: 32px;
}

.empty_data .txt {
    margin: 0 auto 24px;
    color: #475067;
    font-size: 14px;
    line-height: 24px;
}
</style>
