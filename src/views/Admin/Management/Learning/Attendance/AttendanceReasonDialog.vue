<template>
    <Dialog>
        <template v-slot:header>
            <p class="title" style="margin-top: 5%;">조퇴 및 결석 사유</p>
        </template>

        <template v-slot:body>
            <p class="title_mark">출결 유형</p>
            <p class="contents">{{ reasonInfo.ancategory }}</p>
            <p class="title_mark">사유</p>
            <p class="contents">{{ reasonInfo.anreason }}</p>
            <p class="title_mark">인증 서류</p>
            <p class="contents">인증 서류 : {{ reasonInfo.anattach }}</p>
        </template>

        <template v-slot:footer>
            <div class="footer" style="display: flex; margin-left: 3%;">
                <BaseButtonUpdate type="button" data-bs-dismiss="modal" style="margin-right: 1%;">닫기</BaseButtonUpdate>
                <BaseButtonUpdate type="button" data-bs-dismiss="modal">승인</BaseButtonUpdate>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import { ref } from 'vue';

const reasonInfo = ref({
    ancategory: "결석",
    anreason: "새벽부터 몸이 좋지 않아서 오늘 아침에 병원을 갔다와야 할 것 같습니다.",
    anattach: null
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
select {
    font-family: 'Noto Sans KR', sans-serif;
}

.title {
    font-weight: 600;
}

.contents {
    font-weight: 400;
    font-size: 1.0rem;
    margin-left: 3%;
}

.title_mark {
    width: 90px;
    height: 24px;
    border-radius: 4px;
    color: rgb(127, 127, 127);
    font-size: 13px;
    line-height: 24px;
    text-align: center;
    background-color: rgba(226, 229, 231, 0.69);
}
</style>
