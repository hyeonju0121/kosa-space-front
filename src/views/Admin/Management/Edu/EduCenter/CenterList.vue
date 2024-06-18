<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>교육관리 > 교육장 관리 > 교육장 목록</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">교육장 목록</h1>
            </div>
            <div>
                <BaseButtonCreate class="mt-3" @click="handleCreateBtn">교육장 등록</BaseButtonCreate>
            </div>
        </div>

        <div class="educenter-wrap">
            <div class="card" style="width: 25rem; margin-right: 13px;">
                <img src="@/assets/educenter/educenter_1.png" class="educenter-img">
                <div class="card-body">
                    <h5 class="educenter-name">송파 교육장</h5>
                    <p class="educenter-text">
                        (05717) 서울특별시 송파구 중대로 135, <br>
                        서관 12층 (가락동) 한국소프트웨어산업협회
                    </p>
                </div>
                <div class="card-footer">
                    <span class="educenter-createdat">[등록일시] 2024-06-17 20:24</span>
                    <div class="btn-wrap" style="margin-left: 12px;">
                        <button type="button" class="updatebtn" @click="handleUpdateBtn">수정</button>
                        <button type="button" class="deletebtn">삭제</button>
                    </div>
                </div>
            </div>

            <div class="card" style="width: 25rem; margin-right: 13px;">
                <img src="@/assets/educenter/educenter_2.png" class="educenter-img">
                <div class="card-body">
                    <h5 class="educenter-name">가산 교육장</h5>
                    <p class="educenter-text">
                        서울시 금천구 가산동 378-28, <br>
                        우림라이온스벨리 B동 1207호
                    </p>
                </div>
                <div class="card-footer">
                    <span class="educenter-createdat">[등록일시] 2024-06-17 20:24</span>
                    <div class="btn-wrap" style="margin-left: 12px;">
                        <button type="button" class="updatebtn" @click="handleUpdateBtn">수정</button>
                        <button type="button" class="deletebtn">삭제</button>
                    </div>
                </div>
            </div>

            <div class="card" style="width: 25rem; margin-right: 13px;">
                <img src="@/assets/educenter/educenter_3.png" class="educenter-img">
                <div class="card-body">
                    <h5 class="educenter-name">혜화 교육장</h5>
                    <p class="educenter-text">
                        서울특별시 종로구 창경궁로 254 동원빌딩 7층
                    </p>
                </div>
                <div class="card-footer">
                    <span class="educenter-createdat">[등록일시] 2024-06-17 20:34</span>
                    <div class="btn_wrap" style="margin-left: 12px;">
                        <button type="button" class="updatebtn" @click="handleUpdateBtn">수정</button>
                        <button type="button" class="deletebtn">삭제</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonCreate from '@/components/UIComponents/BaseButtonCreate.vue';
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleCreateBtn() {
    router.push('/admin/educenter/create');
}

function handleUpdateBtn() {
    router.push('/admin/educenter/update');
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

.educenter-wrap {
    display: flex;
}

.card-footer {
    display: flex;
}

.updatebtn {
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
}

.deletebtn {
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

</style>
