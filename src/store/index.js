import { createStore } from 'vuex'
import userDailyInfo from './userDailyInfo';
import member from './member.js';
import traineeinfo from './traineeinfo';

const store = createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    // 루트 하위 상태 모듈 추가
    userDailyInfo,
    member,
    traineeinfo
  }
});

// store 객체 내보내기
export default store;