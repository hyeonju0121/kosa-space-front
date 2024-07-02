import { createStore } from 'vuex'
import userDailyInfo from './userDailyInfo';
import member from './member.js';
import traineeinfo from './traineeinfo';
import axiosConfig from '../apis/axiosConfig.js';

const store = createStore({
  // 루트 상태 정의
  state: {
    userId: "",
    accessToken: ""
  },
  // 루트 상태 값을 읽는 메소드(게터) 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },
    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },
  // 루트 상태 값을 변화시키는 메소드(세터) 정의 --> 동기 방식
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },
  // 비동기 작업을 실행하고 결과에 따라 상태 값을 변화시키는 메소드를 정의
  // 서버와 통신 작업을 할 때 사용
  actions: {
    // 로그인. payload에는 아이디와 비밀번호의 값을 가져옴
    // context는 state의 값을 가져올 수 있음
    loginAction(context, payload) {
      // Promise의 개념 알고 사용하기
      new Promise((resolve, reject) => {
        // 서버 통신 코드
        if(true) {
          // 로그인 성공의 경우
          resolve ({result:"success", userId: payload.userId});
        } else {
          // 로그인 실패의 경우
          resolve ({result:"fail", reason:"password is wrong"});
        }
      })
      .then((data) => {
        console.log("login 성공");
        context.commit("setUserId", data.userId);
      })
      .catch((error) => {
        console.log("login 실패");
      })
    },
    // 브라우저가 재실행될 때 인증 정보를 전역상태로 복구
    // 브라우저를 껐다가 다시 킬 때 or 브라우저에서 새로고침을 클릭할 때
    loadAuth(context, payload) {
      context.commit("setUserId", localStorage.getItem("userId") || "");
      // accessToken 전연 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);

      // Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken != "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },
    // 로그인 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리지에 파일로 저장
    saveAuth(context, payload) {
      // 전역 상태값을 변경
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      // 로컬 파일에 저장
      localStorage.setItem("userId", payload.userId);
      localStorage.setItem("accessToken", payload.accessToken);
      // Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
    },
    // 로그아웃할 때 인증 정보를 모두 삭제한다.
    deleteAuth(context, payload) {
      // 전역 상태 값 변경
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      // 로컬 파일에서 삭제
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      // Axios 요청 공통 해더에 인증 정보 삭제
      axiosConfig.removeAuthHeader();
    }
  },
  // 루트 하위 상태 모듈 추가
  modules: {
    // 루트 하위 상태 모듈 추가
    member,
    userDailyInfo,
    traineeinfo
  }
});


// store 객체 내보내기
export default store;