<template>
    <div class="main p-3" style="margin-left: 25px; width: 1200px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육생 관리 > 교육생 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 목록</h1>
            </div>

            <!--필터 (현주 추가)-->
            <div class="align mt-3" style="display: flex;">
                <div class="InpBox">
                    <select id="educenter" title="교육장 선택" v-model.trim="educenter.ecname" @change="centerChange()">
                        <option value="교육장 선택" disabled selected>교육장 선택</option>
                        <option v-for="ecname in ecname" :key="ecname" :value="ecname"> {{ ecname }}
                        </option>
                    </select>
                </div>

                <div class="InpBox" style="margin-left: 1%; width: 370px;">
                    <select :class="courseShow" id="course" title="교육과정 선택" v-model.trim="course.cname"
                        @change="courseChange()">
                        <option value="교육과정 선택" disabled selected>교육과정 선택</option>
                        <option v-for="cname in cname" :key="cname" :value="cname"> {{ cname }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- 교육과정 선택했을때 교육과정에 따라 나오는 문구 -->
            <div class="d-flex justify-content-between mt-3">
                <div style="font-weight:bold; font-size: 1.2em;" v-if="course.cname !== '교육과정 선택'">
                    | {{ course.cname }} ({{ course.cstartdate }} ~ {{ course.cenddate }})
                </div>
                <!-- 교육생 등록 버튼 -->
                <div class="mb-3" style="text-align:right">
                    <button v-if="course.cname !== '교육과정 선택'" class="btn btn-dark btn-sm" @click="handleCreateBtn">교육생
                        등록</button>
                </div>
            </div>

            <!-- 테이블 부분 -->
            <form v-if="course.cname !== '교육과정 선택'">
                <div class="container-fluid mt-3">
                    <!-- 필터 선택에 따른 보임 여부 (테이블) -->
                    <table class="styled-table" style="width: 100%;">
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
                            <tr v-for="items in responseList" :key="items">
                                <td>pager 사용</td>
                                <td>
                                    <router-link :to="`/admin/trainee/detail?mid=${items.mid}`">{{ items.mid
                                        }}</router-link>

                                </td>
                                <td><img :src="`${axios.defaults.baseURL}/edu/download/traineeattach/${items.mid}`"
                                        width="110" height="150">
                                </td>
                                <td>{{ items.mname }}</td>
                                <td>{{ items.mphone }}</td>
                                <td>{{ items.memail }}</td>
                                <td>과정진행중 {{ items.tstate }}</td>
                                <td>
                                    <span class="me-2">
                                        <RouterLink :to="`./update?`"><button type="button" class="btn btn-outline-dark"
                                                @click="handleUpdateBtn">수정</button>
                                        </RouterLink>
                                    </span>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </form>

            <!-- 조회 안했을 때 ---------------------------------------------------------->
            <div class="interview_list" v-if="course.cname === '교육과정 선택'">
                <!-- 면접 요청 리스트 없을 경우 -->
                <div class="empty_data">
                    <img src="//www.saraminimage.co.kr/sri/person/resume/img_empty_announce.png">
                    <strong class="tit">교육장이 선택되지 않았습니다.</strong>
                    <div class="txt">교육장을 선택하고 강의실 조회를 눌러주세요!</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, computed, onMounted } from 'vue';
import educenterAPI from '@/apis/educenterAPI';
import courseAPI from '@/apis/courseAPI';
import traineeInfoAPI from '@/apis/traineeInfoAPI';
import axios from 'axios';

/* 
    교육생 목록에 현재 DB에 등록되어있는 교육장들과 
    그에 따른 교육과정들의 정보가 마운트되어야 함.
*/

onMounted(() => {
    console.log("화면 랜더링 완료");
    listCenterSet();
});

let educenter = ref({
    ecname: "교육장 선택"
});

const course = ref({
    cname: "교육과정 선택"
});

// 필터 옵션 값을 위한 상태 변수 선언
let ecname = ref("");
let cname = ref("");
let responseList = ref([]);

// 등록된 교육과정 불러오기
async function listCenterSet() {
    try {
        const response = await educenterAPI.educenterNameList();
        ecname.value = response.data;
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 교육장에 따른 교육과정 불러오기
async function listCourseSet(ecname) {
    try {
        const response = await courseAPI.getCourseNameList(ecname);
        cname.value = response.data;
        console.log("center 리스트 가져오기 성공");
    } catch (error) {
        console.log("center 리스트 가져오기 실패");
    }
}

// 교육생 리스트 가져오기
async function traineeList(ecname, cname) {
    try {
        console.log("ecname = " + ecname);
        console.log("cname = " + cname);
        if (ecname === "undefined") ecname = "all";
        if (cname === "undefined") cname = "all";
        const response = await traineeInfoAPI.getTraineeList(ecname, cname);
        responseList.value = response.data;
        // console.log("traineeList 메소드 성공");
        // console.log("response.data = " + JSON.parse(JSON.stringify(response.data[1].trno)));
        // // mid에 맞는 이미지 파일
        // const url = await traineeImg(responseList.value.mid);
        // console.log(url);
        // responseList.value.tprofileimg.push(url);
        // console.log(responseList.value.tprofileimg);
    } catch (error) {
        console.log("traineeList 메소드 실패");
    }
}

// 교육생 이미지 파일 가져오기
// async function traineeImg(mid) {
//     // /download/traineeattach/{mid}
//     try {
//         console.log("tprofileimg 메소드 실행");
//         const response = await traineeInfoAPI.getTraineeAttach(mid);
//         const blob = response.data;
//         console.log("blob = " + blob);
//         return URL.createObjectURL(blob);
//     } catch (error) {
//         console.log(error);
//     }
// }

// 교육장 필터 선택에 따른 교육과정 select 태그 선택 여부
let courseShow = ref("btn disabled");

// 교육장 필터값 변경시
function centerChange() {
    console.log("cneterChange 실행");
    console.log("educter.ecname = " + educenter.value.ecname);
    course.value.cname = "교육과정 선택";
    listCourseSet(educenter.value.ecname);
    if (educenter.value.ecname === "교육장 선택" || educenter.value.ecname === "전체") {
        courseShow.value = "btn disabled";
    } else {
        courseShow.value = "";
    }
    traineeList(educenter.value.ecname, "all");
}

// 교육과정 필터 값 변경시
function courseChange() {
    console.log("course.value.cname = " + course.value.cname);
    traineeList(educenter.value.ecname, course.value.cname);
}


//교육생 조회 눌렀을때
function handlecheck() {
    // console.log(JSON.parse(JSON.stringify(trainee.value)));
}

const router = useRouter();

function handleCreateBtn() {
    router.push({
        path: '/admin/trainee/register',
        query: {
            // ecname: trainee.value.ecname,
            // cname: trainee.value.cname
        }
    })

}

function handleUpdateBtn() {
    router.push('/admin/trainee/update');
}


// ----------------------------------------

// 현주
// 필터 상태 객체 정의
const filter = ref({
    ecname: "",
    cname: "",
    approve: "",
    mname: "",
});


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

.createbtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 25px;
    line-height: 30px;
    text-align: center;
    border-radius: 3px;
    width: 50px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
    margin-left: 10px;
}


/* 테이블 크기 고정 */
table {
    text-align: center;
    vertical-align: middle;
}

/* 필터 */
/* select option css */
.InpBox {
    display: inline-block;
    vertical-align: top;
}

.InpBox select {
    padding: 0 28px 0 12px;
    width: 100%;
    height: 40px;
    border: 1px solid #232323;
    border-radius: 4px;
    box-sizing: border-box;
    color: #232323;
    font-size: 14px;
    line-height: 20px;
    text-align: left;
    vertical-align: top;
    background-color: #dbdbdb0e;
    cursor: pointer;
}

.BtnType {
    display: block;
    margin-bottom: 8px;
    width: 150px;
    position: relative;
    border: 1px solid black;
    border-radius: 4px;
    box-sizing: border-box;
    color: white;
    text-align: center;
    background-color: #22C55E;
    cursor: pointer;
}

.SizeM {
    padding: 6px 11px;
    height: 40px;
    font-size: 14px;
    line-height: 24px;
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
