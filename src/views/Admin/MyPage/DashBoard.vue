<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>마이페이지 > 대시보드</span>
        </div>

        <div>
            <!-- contents -->
            <div class="headingArea" style="width: 1100px;">
                <div class="title mb-4">
                    <h1 id="itemTitle">대시보드</h1>
                </div>
                <!--  -->
                <div class="row d-flex">
                    <!-- 왼쪽 부분 -->
                    <div class="col-7 d-flex flex-column p-3">
                        <div class="row mb-3">
                            <h4>| 교육과정 대시보드</h4>
                        </div>
                        <!--  -->
                        <div class="row d-flex mb-3">

                            <div class="card d-flex flex-column" style="max-width: 240px;">
                                <div class="card-title">
                                    <span>현재 진행중인 교육과정</span>
                                </div>
                                <div class="">
                                    <div class="card-body">
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>

                            <div class="card d-flex flex-column ms-5" style="max-width: 240px;">
                                <div class="card-title">
                                    <span>현재 진행중인 교육과정</span>
                                </div>
                                <div class="">
                                    <div class="card-body">
                                        <span>3</span>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div class="row mb-3">
                            <h4>| 각 교육과정 과정 진행 현황</h4>
                        </div>
                        <div class="row">
                            <table class="table align-middle" style="width: 100%;">
                                <tr>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">2024.02.26 ~ 2024.07.28</td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 8px;">2024.06.19 기준</span>
                                            <span style="font-size: 8px;">70% (84 / 105)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">70%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">2024.02.26 ~ 2024.07.28</td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 8px;">2024.06.19 기준</span>
                                            <span style="font-size: 8px;">70% (84 / 105)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">70%</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">2024.02.26 ~ 2024.07.28</td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row justify-content-between">
                                            <span style="font-size: 8px;">2024.06.19 기준</span>
                                            <span style="font-size: 8px;">70% (84일 / 105일)</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress-bar bg-success" style="width:70%">70%</div>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <div class="row mb-3">
                            <h4>| 각 교육과정 현재 출결 진행 현황</h4>
                        </div>
                        <div class="row">
                            <table class="table align-middle" style="width: 100%;">
                                <tr>
                                    <td style="width: 5%;"><img src="@/assets/dashboardimages/admindashboardimg1.png"
                                            alt=""></td>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row">
                                            <span class="btn btn-dark btn-sm me-2">입실 : 20명</span>
                                            <span class="btn btn-dark btn-sm me-2">퇴실 : 0명</span>
                                            <span class="btn btn-dark btn-sm me-2">결석 : 4명</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 5%;"><img src="@/assets/dashboardimages/admindashboardimg1.png"
                                            alt=""></td>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row">
                                            <span class="btn btn-dark btn-sm me-2">입실 : 20명</span>
                                            <span class="btn btn-dark btn-sm me-2">퇴실 : 0명</span>
                                            <span class="btn btn-dark btn-sm me-2">결석 : 4명</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="width: 5%;"><img src="@/assets/dashboardimages/admindashboardimg1.png"
                                            alt=""></td>
                                    <td style="width: 30%;"><b>MSA 2차 채용연계과정</b></td>
                                    <td style="width: 35%;">
                                        <div class="d-flex flex-row">
                                            <span class="btn btn-dark btn-sm me-2">입실 : 20명</span>
                                            <span class="btn btn-dark btn-sm me-2">퇴실 : 0명</span>
                                            <span class="btn btn-dark btn-sm me-2">결석 : 4명</span>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>

                    </div>
                    <!-- 오른쪽 부분 -->
                    <div class="col-5 p-3">
                        <div class="row">
                            <table class="table">
                                <thead>
                                    <th style="width: 70%;">
                                        공지사항
                                    </th>
                                    <th style="text-align: end;">
                                        <button class="btn btn-outline-info btn-sm">더보기</button>
                                    </th>
                                </thead>
                                <tbody class="align-middle">
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="d-flex">
                                                <span class="btn btn-info btn-sm me-2">공지</span>
                                                <span>모바일에서 첨부파일/공지글 등록</span>
                                            </div>
                                        </td>
                                        <td style="text-align: end;">
                                            2024.06.18
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
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