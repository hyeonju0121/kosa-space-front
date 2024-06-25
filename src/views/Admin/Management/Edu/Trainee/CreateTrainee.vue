<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육과정 관리 > 교육생 등록</span>
        </div>

        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육생 등록</h1>
            </div>

            <!-- 교육생 등록 폼 -->
            <form @submit.prevent="handleSubmit">
                <!-- 테이블 + 버튼 -->
                <div class="container" style="text-align: left;">
                    <!-- 테이블 -->
                    <table class="table">
                        <tbody>
                            <tr>
                                <td style="vertical-align: middle;">
                                    교육생 이미지
                                </td>
                                <td colspan="3">
                                    <div style="text-align:left">
                                        <img src="@/assets/kyungseob.jpg" width="110" height="150" class="ms-5">
                                        <input ref="trainee.tprofileimg" type="file" class="form-control p-3 mt-2"
                                            name="tprofileimg" id="tprofileimg" accept="image/*" onchange=""
                                            style="width: 300px;">
                                    </div>
                                </td>

                            </tr>
                            <tr>
                                <td>교육생 이름</td>
                                <td colspan="3">
                                    <input type="text" v-model="trainee.mname">
                                </td>
                            </tr>
                            <tr>
                                <td>학력</td>
                                <td colspan="3">
                                    <select class="form-control p-3" id="tacademic" name="tacademic" style="width: 150px;"
                                        v-model="trainee.tacademic" required>
                                        <option value="고등학교">고등학교</option>
                                        <option value="대학교">대학교</option>
                                    </select>

                                    <!-- 고등학교를 선택했을 시 -->
                                    <div v-if="trainee.tacademic === '고등학교'">
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model="trainee.academicName" type="text" class="form-control"
                                                name="tschoolname" id="" value="" placeholder="" style="width: 150px;">
                                            <label for="tschoolname" class="form-label">학교명</label>
                                        </div>
                                    </div>
                                    <!-- 대학교를 선택했을 시 -->
                                    <div v-if="trainee.tacademic === '대학교'">
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model="trainee.tschoolname" type="text" class="form-control"
                                                name="tschoolname" id="" value="" placeholder="" style="width: 150px;">
                                            <label for="tschoolname" class="form-label">학교명</label>
                                        </div>
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model="trainee.tmajor" type="text" class="form-control" name="tmajor"
                                                id="" value="" placeholder="" style="width: 150px;">
                                            <label for="tmajor" class="form-label">주전공</label>
                                        </div>
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model="trainee.tminor" type="text" class="form-control" name="tminor"
                                                id="" value="" placeholder="" style="width: 150px;">
                                            <label for="tminor" class="form-label">부전공</label>
                                        </div>
                                        <!-- 학점에 대한 유효성 검사 #.### ? -->
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <input v-model="trainee.tgrade" type="text" class="form-control" name="tgrade"
                                                id="" value="" placeholder="" style="width: 150px;">
                                            <label for="tgrade" class="form-label">평균학점</label>
                                        </div>
                                        <div class="form-floating mt-2" style="width: 150px">
                                            <select v-model="trainee.tfield" name="check" class="form-control"
                                                style="width: 150px;">
                                                <option value="전공">전공</option>
                                                <option value="비전공">비전공</option>
                                            </select>
                                            <label for="check" class="form-label">전공/비전공</label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>나이</td>
                                <td><input type="text" v-model="trainee.tage"></td>
                                <td>성별</td>
                                <td>
                                    <select v-model="trainee.tsex">
                                        <option value="성별" selected disabled>성별 선택</option>
                                        <option value="남자">남자</option>
                                        <option value="여자">여자</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td colspan="3">
                                    <div class="td">
                                        <DaumPostCode3 @send-daumpostcode="postcodeinfo"/>
                                    </div>                                    
                                </td>
                            </tr>
                            <tr>
                                <td>핸드폰 번호</td>
                                <td colspan="3"><input v-model="trainee.mphone"></td>
                            </tr>
                            <tr>
                                <td>교육상태</td>
                                <td colspan="3">
                                    <select v-model="trainee.tstatus" style="width: 150px;">
                                        <option value="교육상태" selected disabled>교육상태 선택</option>
                                        <option value="과정진행중">과정진행중</option>
                                        <option value="퇴소">퇴소</option>
                                        <option value="정상수료">정상수료</option>
                                    </select>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- 버튼부분 -->
                    <div style="text-align: center;">
                        <input class="btn btn-info btn-sm me-3" value="등록" @click="handleSubmit">
                        <input class="btn btn-danger btn-sm" value="취소" @click="handleCancle">
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
// import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
// import BaseButtonSubmit from '@/components/UIComponents/BaseButtonSubmit.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import DaumPostCode3 from './DaumPostCode3.vue';

//라우터 객체 얻기
const router = useRouter();

//취소버튼을 눌렀을때
function handleCancle() {
    router.push('/admin/trainee/list');
}

//상태정의
let trainee = ref({
    ecname: "교육장",
    cname: "교육과정",
    mid: "",
    mname: "",
    mphone: "",
    memail: "",
    cno: "",
    cstartdate: "",
    cenddate: "",
    tsex: "성별",
    taddress:"",
    tage: "",    
    tfield: "",
    tacademic: "",
    tschoolname: "",
    tmajor: "",
    tminor: "",
    tgrade: "",
    tstatus: "교육상태",
    tprofileimg: "",
    tprofileoname: "",
    tprofiletype: ""

});

//등록 버튼을 눌렀을때
function handleSubmit() {
    // const formData = new FormData();

    //입력값들 넣기
    // formData.append("tname", trainee.value.mname);
    // formData.append("academic", trainee.value.tacademic);
    // formData.append("tschoolname", trainee.value.tschoolname);
    // formData.append("tmajor", trainee.value.tmajor);
    // formData.append("tminor", trainee.value.tminor);
    // formData.append("tgrade", trainee.value.tgrade);
    // formData.append("tfield", trainee.value.tfield);    
    // formData.append("tage", trainee.value.tage);
    // formData.append("tsex", trainee.value.tsex);
    // formData.append("taddress", trainee.value.taddress);
    // formData.append("mphone", trainee.value.mphone);
    // formData.append("tstatus", trainee.value.tstatus);
   
    

    //파일넣기
    // const elAttach = tattach.value;
    // if(elAttach.files.length != 0) {
    //     formData.append("nattach", elAttach.files[0]);
    // }

    //교육생 등록 요청
    // try{
    //     const response = await traineeAPI.traineeCreate(formData);
    //     router.back();
    // } catch(error) {
    //     console.log(error);
    // }



    //교육생 등록 값 잘 넘어가는지 확인
    // console.log(formData);
    console.log(JSON.parse(JSON.stringify(trainee.value)));

    //교육생 등록 버튼 누른후 교육생 목록으로 이동
    router.push('/admin/trainee/list');
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

</style>
