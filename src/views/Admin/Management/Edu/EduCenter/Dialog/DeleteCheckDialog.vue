<template>
    <div class="modal fade" id="deleteCheckDialog" tabindex="-1" aria-labelledby="deleteCheckDialogLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="deleteCheckDialogLabel">삭제여부</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <p class="title_mark">정말 삭제 하시겠습니까?</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger" @click="confirmDelete">삭제</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from 'vue';

const emits = defineEmits(['confirmDelete']);

function confirmDelete() {
    emits('confirmDelete');
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

.title_mark {
    color: rgb(127, 127, 127);
    font-size: 16px;
    text-align: center;
    margin: 20px 0;
}
</style>