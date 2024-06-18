<template>
    <div class="main p-3" style="margin-left: 25px;">
        <div class="item-section mt-2 mb-2" style="font-size: 12px">
            <span>과제 관리 > 개인별 데일리 과제 상세 조회</span>
        </div>
        <!-- contents -->
        <div class="headingArea">
            <div class="title d-flex">
                <h1 id="itemTitle">개인별 데일리 과제 상세 조회</h1>
            </div>

        </div>
        <!--  -->
        <PersonalProfileHeader class="mt-2 mb-3" />
        <div class="table">
            <table class="" style="width: 1000px;">
                <thead class="text-center align-middle" style="height: 70px;">
                    <th style="width: 50%">과제 제목</th>
                    <th style="width: 8%">용량</th>
                    <th style="width: 12%">작성일</th>
                    <th style="width: 15%">주차별 태그</th>
                    <th style="width: 15%">-</th>
                </thead>
                <tbody class="text-center align-middle">
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td><a href="https://opalescent-sternum-860.notion.site/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4"
                                target="_blank" style="text-decoration-line: none; color:black; ">Day 70. 2024-06-18
                                컴포넌트 설계작업</a></td>
                        <td>40KB</td>
                        <td>2024.06.18</td>
                        <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        <td>
                            <div class="d-flex">
                                <BaseButtonUpdate class="updatebtn me-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">수정</BaseButtonUpdate>
                                <BaseButtonCancle class="canclebtn" data-bs-toggle="modal" data-bs-target="#delete">삭제
                                </BaseButtonCancle>
                            </div>
                        </td>
                    </tr>
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td>
                            <a href="https://opalescent-sternum-860.notion.site/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4"
                                target="_blank" style="text-decoration-line: none; color:black; ">
                                Day 69. 2024-06-17 시각화 자료 추가 보충작업
                            </a>
                        </td>
                        <td>13MB</td>
                        <td>2024.06.17</td>
                        <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        <td>
                            <div class="d-flex">
                                <BaseButtonUpdate class="updatebtn me-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">수정</BaseButtonUpdate>
                                <BaseButtonCancle class="canclebtn" data-bs-toggle="modal" data-bs-target="#delete">삭제
                                </BaseButtonCancle>
                            </div>
                        </td>
                    </tr>
                    <tr style="border-bottom:1px solid #dcdcdc; height: 50px">
                        <td><a href="https://opalescent-sternum-860.notion.site/Vue-31b721d5b54141e1b092f759fbae295a?pvs=4"
                                target="_blank" style="text-decoration-line: none; color:black; ">Day 68. 2024-06-16
                                Rest API 구조 설계</a></td>
                        <td>56KB</td>
                        <td>2024.06.16</td>
                        <td><span class="btn btn-dark btn-sm">10주차</span></td>
                        <td>
                            <div class="d-flex">
                                <BaseButtonUpdate class="updatebtn me-2" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">수정</BaseButtonUpdate>
                                <BaseButtonCancle class="canclebtn" data-bs-toggle="modal" data-bs-target="#delete">삭제
                                </BaseButtonCancle>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <td colspan="5" class="text-center" style="height: 50px">
                        <b class="text-danger">페이지네이션 추가</b>
                    </td>
                </tfoot>
            </table>
            <div class="mt-3">
                <RouterLink to="/trainee/dailynote/list" class="btn btn-dark">목록으로</RouterLink>
            </div>

        </div>
    </div>

    <!-- 과제 수정에 대한 모달 -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">과제 수정</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="mb-3">
                            <label for="recipient-name" class="col-form-label">과제 제목</label>
                            <input type="text" class="form-control" id="recipient-name">
                        </div>
                        <div class="mb-3">
                            <label for="message-text" class="col-form-label">Notion URL</label>
                            <textarea class="form-control" id="message-text"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-primary">수정</button>
                </div>
            </div>
        </div>
    </div>

    <!-- 과제 삭제에 대한 모달 -->
    <!-- Vertically centered modal -->
    <div class="modal fade" id="delete" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">과제 삭제</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    정말 삭제하시겠습니까?
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    <button type="button" class="btn btn-danger">삭제</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseButtonUpdate from '@/components/UIComponents/BaseButtonUpdate.vue';
import BaseButtonCancle from '@/components/UIComponents/BaseButtonCancle.vue';
import PersonalProfileHeader from '@/components/UIComponents/PersonalProfileHeader.vue'
import { RouterLink } from 'vue-router';
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

.updatebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 31px;
    line-height: 0px;
    text-align: center;
    border-radius: 3px;
    width: 46px;
    flex: 0 0 46px;
    color: white;
    background-color: #22C55E;
    border: 1px solid white;
}

.canclebtn {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    font-size: 12px;
    height: 31px;
    line-height: 0px;
    text-align: center;
    border-radius: 3px;
    width: 46px;
    flex: 0 0 46px;
    color: white;
    background-color: #232323;
    border: 1px solid black;
}
</style>
