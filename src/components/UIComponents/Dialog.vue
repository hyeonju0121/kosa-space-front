<template>
    <div class="modal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">
                        <!-- slot ---------------------- -->
                        <slot name="header">제목</slot>
                    </h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- slot------------------------- -->
                    <slot name="body">
                        <p>다이얼로그 내용</p>
                    </slot>
                </div>
                <div class="modal-footer">
                    <slot name="footer">
                        <!-- slot----------------------- -->
                        <button type="button" class="btn btn-info btn-sm" data-bs-dismiss="modal">확인</button>
                        <button type="button" class="btn btn-secondary btn-sm" data-bs-dismiss="modal">닫기</button>
                    </slot>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
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

.modal-footer {
    text-align: center;
    display: inline-block;
}
</style>