<template>
    <div class="acc_cont">
        <div class="img-td">
            <div class="profile_wrap">
                <div class="profile profile_attach">
                    <div class="user-img">
                        <img src="@/assets/hyeonju.jpg" class="user-img-detail"/>
                    </div>
                    <div class="profile_info">
                        <h6 class="user-name">유현주 (M2001)</h6>
                        <div class="profile-info-contents">
                            <h5 class="user-course">MSA 기반 Full Stack 개발 전문가 양성과정 2차</h5>
                            <span class="user-course-requireddate">(2024.02.26 ~ 2024.07.26)</span>
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

body, h1, h2, h3, h4, h5, h6, input, span, textarea, select {
	font-family: 'Noto Sans KR', sans-serif;
}

/* img ------------*/
.profile_wrap {
    border-collapse: collapse;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 5px;
    padding: 0;
    background: white;
}

.profile_attach {
    line-height: normal;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    display: flex;
    align-items: center;
}

.profile_info {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    margin-left: 30px;
}

/*사용자 이미지 틀 (원형)*/
.user-img {
  width: 90px;
  height: 90px;
  border-radius: 25px;
  margin-left: 10px;
  overflow: hidden;
}

/*사용자 이미지 사이즈 조정*/
.user-img img {
  width: 100%;
  object-fit: cover;
}

.user-name {
    line-height: normal;
    font-size: 15px;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-top: 10px;
    padding: 0;
}

.user-course {
    line-height: normal;
    font-weight: 500;
    border-collapse: collapse;
    box-sizing: border-box;
    margin-top: 10px;
    color: #3d3d3d;
}

.profile_info {
    padding-right: 20px;
}

.profile-info-contents h5, 
profile-info-contents span {
    display: inline;
    color: #3d3d3d;
}

.profile-info-contents span {
    margin-left: 10px;
    color: #919191;
}

.img-td {
	color: var(--txt-color);
    border-collapse: collapse;
    box-sizing: border-box;
    display: table-cell;
    flex: 1;
    margin: 0;
    margin-left: 30px;
}
</style>