<template>
    <Dialog>
        <!--템플릿 <slot> 자리에 들어갈 내용 정의-->
        <template v-slot:header>
            <p class="title" style="margin-top: 5%;">KOSA SPACE 출결 알림</p>
        </template>
        
        <template v-slot:body>
            <p class="contents">IP 주소가 일치하지 않습니다.</p>
            <p class="contents">출결을 진행하려면,</p>
            <p class="contents">반드시 특정 교육장 IP에 접속하셔야 출석으로 인정됩니다.</p>
            <p class="contents">확인 바랍니다.</p>
        </template>

        <template v-slot:footer>
            <div class="footer">
                <BaseButtonUpdate type="button" data-bs-dismiss="modal" style="margin-right: 5%;">닫기</BaseButtonUpdate>
            </div>
        </template>

    </Dialog>
</template>

<script setup>
import Dialog from '@/components/UIComponents/Dialog.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';

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
    font-weight: 500;
    font-size: 1.1rem;
    text-align: center;
}

</style>