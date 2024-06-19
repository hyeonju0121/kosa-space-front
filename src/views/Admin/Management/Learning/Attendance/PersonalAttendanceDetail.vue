<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>학습관리 > 출결 관리 > 개인별 출결 현황 조회</span>
        </div>

        <!-- contents -->
        <div class="headingArea">
            <div class="title">
                <h1 id="itemTitle">개인별 출결 현황 조회</h1>
            </div>

            <div>
                <div class="mb-3">
                    <PersonalProfileHeader/>        
                </div>

                <div class="mb-3">
                    <VueDatePicker v-model="date" range />
                </div>
        

                <div class="container">
                    <table class="table table-hover" style="text-align:center">
                        <thead>
                            <tr>
                                <th>날짜</th>
                                <th>입실 시간</th>
                                <th>퇴실 시간</th>
                                <th>상태</th>
                                <th>비고</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2024.06.17</td>
                                <td>08:30</td>
                                <td>17:55</td>
                                <td>정상 출결</td>
                                <td></td> 
                            </tr>
                            <tr>
                                <td>2024.06.18</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <td><router-link class="btn btn-info btn-sm">사유</router-link></td>
                            </tr>
                            <tr>
                                <td>2024.06.18</td>
                                <td>08:45</td>
                                <td>17:58</td>
                                <td>결석</td>
                                <td><router-link class="btn btn-info btn-sm">사유</router-link></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import { ref, onMounted } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();


onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 7));
  date.value = [startDate, endDate];
})


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

body, h1, h2, h3, h4, h5, h6, input,
p, span, small, textarea, select {
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



</style>
