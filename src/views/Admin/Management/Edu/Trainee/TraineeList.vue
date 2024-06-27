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
                <!-- 조회 부분 -->
                <form submit.prevent="handlecheck">
                    <div class="mb-3">
                        <span class="me-3">
                            <select v-model="trainee.ecname">                                
                                <option value="교육장" selected disabled>교육장 선택</option>
                                <option value="전체">전체</option>
                                <option value="송파 교육장">송파 교육장</option>
                                <option value="혜화 교육장">혜화 교육장</option>
                                <option value="가산 교육장">가산 교육장</option>
                            </select>
                        </span>

                        <span class="me-3">
                            <select v-model="trainee.cname">
                                <option value="교육과정" selected disabled>교육과정 선택</option>
                                <option v-for="course in availableCourses" :key="course" :value="course">{{ course }}</option>
                            </select>
                        </span>
                        <span>
                            <span class="btn btn-dark btn-sm mb-1" @click="handlecheck">교육생 조회</span>
                        </span>
                    </div>
                </form>

                <!-- 교육과정 선택했을때 교육과정에 따라 나오는 문구 -->
                <div>
                    <div style="font-weight:bold" v-if="trainee.cname === 'MSA 1차'">
                        |MSA 기반 Full Stack기반 전문가 양성과정 1차({{trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>
                    <div style="font-weight:bold" v-else-if="trainee.cname === 'MSA 2차'">
                        |MSA 기반 Full Stack기반 전문가 양성과정 2차({{trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>
                    <div style="font-weight:bold" v-else-if="trainee.cname === '클라우드'">
                        |클라우드 전문가 양성과정({{ trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>
                    <div style="font-weight:bold" v-else-if="trainee.cname === '보안컨설턴트'">
                        |보안컨설턴트 전문가 양성과정({{ trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>
                    <div style="font-weight:bold" v-else-if="trainee.cname === '도커'">
                        |도커 전문가 양성과정({{ trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>                    
                    <div style="font-weight:bold" v-else-if="trainee.cname === 'AI'">
                        |AI 전문가 양성과정({{ trainee.cstartdate }} ~ {{ trainee.cenddate }})
                    </div>
                    <div style="font-weight:bold" v-else-if="trainee.cname === '데이터분석'">
                        |데이터분석 전문가 양성과정({{ trainee.cstartdate }} ~ {{ trainee.cenddate }})</div>
                </div>

                <!-- 교육생 등록 버튼 -->
                <div class="mb-3" style="text-align:right">
                    <button v-if="!(trainee.cname==='전체' || trainee.ecname==='전체' || trainee.cname==='교육과정' || trainee.ecname==='교육장')" class="btn btn-dark btn-sm" @click="handleCreateBtn">교육생 등록</button>
                </div>
                <!-- 테이블 부분 -->
                <form>
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
                                    <th>수정/삭제</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <!-- <tr v-for="trainee in page.trainees" :key="trainee.tno"> -->
                                    <td>{{ trainee.tno }}</td>
                                    <td><img src="@/assets/kyungseob.jpg" width="110" height="150" ref="traineeImg"></td>
                                    <td> 
                                        <router-link :to="`/admin/trainee/detail?tno=${trainee.tno}&pageNo=${pageNo}`">{{
                                                trainee.mname }}</router-link></td>
                                    <td>010-xxxx-xxxx {{ trainee.mphone }}</td>
                                    <td>kosa@kosa.com {{ trainee.memail }}</td>
                                    <td>과정진행중 {{ trainee.tstate }}</td>
                                    <td>
                                        <span class="me-2">
                                            <RouterLink :to="`./update?`"><button class="btn btn-info btn-sm">수정</button>
                                            </RouterLink>
                                        </span>
                                        <button class="btn btn-danger btn-sm">삭제</button>
                                    </td>
                                </tr>

                                <!-- v-for를 사용하여 지워질 부분 -->
                                <!-- <tr>
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

                            </tr> -->
                            </tbody>
                        </table>
                    </div>
                </form>                
            </div>           
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref,computed } from 'vue';



// 교육장 및 교육과정 데이터
const educationCenters = ref([
    { name: '전체', courses: ['전체'] },
    { name: '송파 교육장', courses: ['전체','MSA 1차', 'MSA 2차', '클라우드'] },
    { name: '혜화 교육장', courses: ['전체','보안컨설턴트','도커'] },
    { name: '가산 교육장', courses: ['전체','AI','데이터분석'] }
]);


// 선택된 교육장에 따라 교육과정 옵션을 동적으로 변경
const availableCourses = computed(() => {
    const selectedCenter = educationCenters.value.find(center => center.name === trainee.value.ecname);
    return selectedCenter ? selectedCenter.courses : [];
});


//상태정의
let trainee = ref({
    ecname: "교육장",
    cname: "교육과정",
    mid: "",
    mname: "이경섭",
    mphone: "",
    memail: "",
    cno: "",
    cstartdate: "",
    cenddate: "",
    tno:"1",
    tsex: "",
    tage: "",
    taddress: "",
    tfield: "",
    tacademic: "",
    tschoolname: "",
    tmajor: "",
    tminor: "",
    tgrade: "",
    tstatus: "",
    tprofileimg: "",
    tprofileoname: "",
    tprofiletype: ""

});

//교육생 조회 눌렀을때
function handlecheck() {
    console.log(JSON.parse(JSON.stringify(trainee.value)));
}

const router = useRouter();

function handleCreateBtn() {
    router.push({
        path: '/admin/trainee/register',
        query: {
            ecname: trainee.value.ecname,
            cname: trainee.value.cname
        }
    })

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
}

</style>
