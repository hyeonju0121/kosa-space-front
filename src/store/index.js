import { createStore } from 'vuex'
import userDailyInfo from './userDailyInfo';
import member from './member.js';
import traineeinfo from './traineeinfo';
import axiosConfig from '../apis/axiosConfig.js';

const store = createStore({
  // 루트 상태 정의
  state: {
    userId: "",
    accessToken: "",
    mrole:""
  },
  // 루트 상태 값을 읽는 메소드(게터) 정의
  getters: {
    getMid(state, getters, rootState, rootGetters) {
      return state.mid;
    },
    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    },
    getMrole(state, getters, rootState, rootGetters) {
      return state.mrole;
    }
  },
  // 루트 상태 값을 변화시키는 메소드(세터) 정의 --> 동기 방식
  mutations: {
    setMid(state, payload) {
      state.mid = payload;
    },
    setAccessToken(state, payload) {
      state.accessToken = payload;
    },
    setMrole(state, payload) {
      state.mrole = payload;
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
          resolve ({result:"success", mid: payload.mid, mrole: payload.mrole});
        } else {
          // 로그인 실패의 경우
          resolve ({result:"fail", reason:"password is wrong"});
        }
      })
      .then((data) => {
        console.log("login 성공");
        context.commit("setMid", data.mid);
        context.commit("setMrole", data.mrole);
      })
      .catch((error) => {
        console.log("login 실패");
      })
    },
    // 브라우저가 재실행될 때 인증 정보를 전역상태로 복구
    // 브라우저를 껐다가 다시 킬 때 or 브라우저에서 새로고침을 클릭할 때
    loadAuth(context, payload) {
      context.commit("setMid", localStorage.getItem("mid") || "");
      // accessToken 전역 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);
      // 권한 전역 상태 설정?
      context.commit("setMrole", localStorage.getItem("mrole") || "");

      // Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken != "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },
    // 로그인 성공했을 때 인증 정보를 전역 상태 및 로컬 스토리지에 파일로 저장
    saveAuth(context, payload) {
      // 전역 상태값을 변경
      context.commit("setMid", payload.mid);
      context.commit("setAccessToken", payload.accessToken);
      context.commit("setMrole", payload.mrole);

      // 로컬 파일에 저장
      localStorage.setItem("mid", payload.mid);
      localStorage.setItem("accessToken", payload.accessToken);
      localStorage.setItem("mrole", payload.mrole);
      // Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
      //
      console.log("인증 정보를 전역 상태 및 로컬 스토리지에 파일로 저장");
    },
    // 로그아웃할 때 인증 정보를 모두 삭제한다.
    deleteAuth(context, payload) {
      // 전역 상태 값 변경
      context.commit("setMid", "");
      context.commit("setAccessToken", "");
      context.commit("setMrole", "");
      // 로컬 파일에서 삭제
      localStorage.removeItem("mid");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("mrole");
      // Axios 요청 공통 해더에 인증 정보 삭제
      axiosConfig.removeAuthHeader();
      //
      console.log("인증 정보 삭제");
    }
  },
  // 루트 하위 상태 모듈 추가
  modules: {
    member,
    userDailyInfo
  }
});


// store 객체 내보내기
export default store;