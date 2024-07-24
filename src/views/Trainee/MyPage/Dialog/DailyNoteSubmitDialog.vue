<template>
    <Dialog>
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            과제 제출
        </template>

        <template v-slot:body>
            <form>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">과제 제출일</label>
                    <textarea class="form-control" id="inputNotionUrl" v-model="noteData.refdate"></textarea>
                </div>
                <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">과제 제목</label>
                    <input type="text" class="form-control" id="inputTitle" v-model="noteData.reftitle">
                </div>
                <div class="mb-3">
                    <label for="message-text" class="col-form-label">Notion URL</label>
                    <textarea class="form-control" id="inputNotionUrl" v-model="noteData.refurl"></textarea>
                </div>
            </form>
        </template>

        <template v-slot:footer>
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <!-- 자식 컴포넌트에서 모달 안에 제출 버튼을 클릭했을 때 처리하는 이벤트 정의-->
            <button type="button" class="btn btn-primary" @click="handleDailyNoteSubmit">제출</button>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import { ref } from 'vue';

const emit = defineEmits(["clickHandler"]);

const noteData = ref({
    reftitle: "(프로젝트) DAY 93 2024-07-16 프로젝트 수정 필요",
    refurl: "https://www.notion.so/DAY-93-2024-07-15-eb02fee48a80429c9091ec117b538cd6?pvs=4",
    refdate: "2024-07-16"
});


function handleDailyNoteSubmit() {
    // 자식 컴포넌트 -> 부모 컴포넌트로 noteData 객체 데이터 보내기
    emit('clickHandler', noteData);
}

</script>

<style scoped></style>
