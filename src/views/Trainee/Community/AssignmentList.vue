<template>
    <!-- contents -->
    <div class="headingArea">
        <!--  -->
        <table class="mt-1" style="width: 100%;">
            <thead class="text-center align-middle"
                style="height: 70px; font-size: 1.2rem; background-color: #22C55E; color:white;">
                <th style="width: 10%">유형</th>
                <th style="width: 25%">파일</th>
                <th style="width: 10%">작성자</th>
                <th style="width: 12%">업로드 일시</th>
                <th style="width: 12%">수정 일시</th>
                <th style="width: 9%">용량</th>
                <th style="width: 12%">다운로드</th>
                <th style="width: 10%">-</th>
            </thead>
            <tbody class="text-center align-middle">
                <tr style="border-bottom:1px solid #dcdcdc; height: 60px">
                    <td>
                        <PhFileArchive :size="32" />
                    </td>
                    <td class="text-start">
                        <!-- <img src="@/assets/fileimages/file-powerpoint-regular.svg"> -->
                        {{ referencedata.refattachoname }}.{{ referencedata.refattachtype }}
                    </td>
                    <td>{{ mname }}</td>
                    <td>{{ referencedata.refcreatedat }}</td>
                    <td>{{ referencedata.refupdatedat }}</td>
                    <td>{{ referencedata.refattachsize }}</td>
                    <td>
                        <!-- <a @click="downloadFile(referencedata.refno)"><PhDownload :size="32" /></a> -->
                        <PhDownload :size="32" />
                    </td>
                    <!-- 
                            파일 다운로드 REST API와 함께 사용하자.
                            <img v-if="battach != null"
                        :src="`${axios.defaults.baseURL}/board/battach/${board.bno}?accessToken=${$store.state.accessToken}`"
                        width="300">
                        -->
                    <td>
                        <button class="btn btn-primary btn-sm me-2" @click="assignUpdate()">수정</button>
                        <button class="btn btn-danger btn-sm" @click="assignDelete()">삭제</button>
                    </td>
                </tr>
                <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                    <td>
                        <PhFilePpt :size="32" />
                    </td>
                    <td class="text-start">
                        최종 프로젝트 시각화.pptx
                    </td>
                    <td>유현주</td>
                    <td>2024.06.18</td>
                    <td>-</td>
                    <td>4.37MB</td>
                    <td>
                        <PhDownload :size="32" />
                    </td>
                </tr>
                <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                    <td>
                        <PhFileArchive :size="32" />
                    </td>
                    <td class="text-start">
                        2주차 코테 과제.zip
                    </td>
                    <td>이경섭</td>
                    <td>2024.04.12</td>
                    <td>-</td>
                    <td>4.37MB</td>
                    <td>
                        <PhDownload :size="32" />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <td colspan="7" class="text-center" style="height: 50px">
                    <b class="text-danger">페이지네이션 추가</b>
                </td>
            </tfoot>
        </table>

        <div class="d-flex justify-content-end p-3 me-3">
            <button class="btn btn-outline-secondary me-3" @click="myBoard()">내가 쓴 글보기</button>
            <button class="btn btn-dark" @click="assignSubmit()">제출하기</button>
        </div>
    </div>

    <!-- 과제 제출 모달 -->
    <Dialog id="assignSubmitModal">
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <div style="background-color: #22C55E; color: white">
                과제 업로드
            </div>
        </template>

        <template v-slot:body>
            <form>
                <div class="mb-3">
                    <input id="attach" type="file" class="form-control p-3" ref="attach">
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <!-- 자식 컴포넌트에서 모달 안에 제출 버튼을 클릭했을 때 처리하는 이벤트 정의-->
            <button type="button" class="btn btn-primary" @click="modalSubmit()">제출</button>
        </template>
    </Dialog>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import { PhFileArchive, PhFilePpt } from '@phosphor-icons/vue';
// import axios from "axios";  // 다운?

const router = useRouter();

const referencedata = ref({
    refno: 1,
    cno: 1,
    mid: "M2001",
    refcategory: 0, // 0은 과제 // 1은 수업 자료를 나타냄
    reftitle: "",  // 새로 생성함
    refattach: "",
    refattachoname: "3주차 코테 과제",
    refattachtype: "zip",
    refattachsize: "4.82MB",
    refcreatedat: "2024.6.23",
    refupdatedat: "2024.6.24"
});

// 작성자 임시 변수 선언 (MemberAPI를 가져와서 사용할 것임)
const mname = "김성민"

// 과제 제출하기 버튼 모달로 구현
// 현주 -> 모달의 새로운 형식에 따라 새로운 Dialog.vue를 생성하였음.
// 그 Dialog.vue는 현재 컴포넌트의 자식 컴포넌트이기 때문에 그에 대한 정보를 emit으로 받아 정보를 처리함.
// 성민 -> 위의 방식대로하면 디자인 or 기능에 따라 자식 컴포넌트를 계속 생성해야된다고 생각이 듦.
// 따라서 모달을 여기에서 사용하는 방식으로 해봄.
import { Modal } from 'bootstrap';
import { useStore } from 'vuex';
import Dialog from '@/components/UIComponents/Dialog.vue';

let assignModal = null;
const attach = ref(null);   // 제출 파일 식별할 변수

onMounted(() => {
    console.log("AssignmentList 컴포넌트 마운트 완료");
    // modal 객체로 생성
    assignModal = new Modal(document.querySelector('#assignSubmitModal'));
});

// 내가 쓴 글 수정하기
function assignUpdate() {
    assignModal.show(); // 모달 활성화
    // 기존의 refno을 찾고 값 수정
}

// 내가 쓴 글 삭제하기
function assignDelete() {
    // function 앞에 async 붙여주기. REST API와 연동. 대략적인 코드
    /*try {
        await referencedataAPI.referencedataDelete(refno); // promise를 리턴
    } catch (error) {
        console.log(error)
    }*/
}

// 내가 쓴 글보기
function myBoard() {
    // memberAPI를 불러와 작성자의 아이디가 현재의 내 아이디와 같은 글 목록 나열
}

// 제출하기 버튼
function assignSubmit() {
    assignModal.show(); // 모달 활성화
}

function modalSubmit() {
    console.log(referencedata.value.reftitle); // 사용자가 입력한 제출 제목 출력
    // 첨부파일 확인 --> 실습자료 참고
    console.log(attach.value);  // ref="attach"가 쓰인 태그를 가리킴
    console.log(attach.value.value);    // ref="attach"가 쓰인 태그의 value값을 나타냄
}


// axios를 이용하여 파일 다운로드 구현 // 화면의 이미지 첨부파일 다운로드가 아님
/*export default {
    methods: {
        async downloadFile() {
            try{
                const response = await axios.get("/api/download", {
                    responseType: "blob"
                });

                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement("a");
                link.href = url;
                link.setAttribute("download", "file.pdf");
                document.body.appendChild(link);
                link.click();
            } catch(error) {
                console.error(error);
            }
        }
    }
};*/

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
    font-size: 1.2rem;
}
</style>
