import { createStore } from 'vuex'
import userDailyInfo from './userDailyInfo';

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
  }
});

// store 객체 내보내기
export default store;