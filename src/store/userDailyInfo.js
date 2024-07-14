import attendanceAPI from '@/apis/attendanceAPI';

export default {
    namespaced: true,

    state: {
        // 입실 시간
        userCheckIn: "",

        // 퇴실 시간
        userCheckOut: "",

        // 과제 제출 여부
        userDailyNoteStatus: false,
        // 입실 여부
        userCheckInStatus: false,
        // 퇴실 여부
        userCheckOutStatus: false,
    },

    getters: {
        getUserCheckIn(state, getters, rootState, rootGetters) {
            return state.userCheckIn;
        },
        getUserCheckOut(state, getters, rootState, rootGetters) {
            return state.userCheckOut;
        },
        getUserDailyNoteStatus(state, getters, rootState, rootGetters) {
            return state.userDailyNoteStatus;
        },
        getUserCheckInStatus(state, getters, rootState, rootGetters) {
            return state.userCheckInStatus;
        },
        getUserCheckOutStatus(state, getters, rootState, rootGetters) {
            return state.userCheckOutStatus;
        },
    },

    mutations: {
        setUserCheckIn(state, payload) {
            state.userCheckIn = payload;
        },
        setUserCheckOut(state, payload) {
            state.userCheckOut = payload;
        },
        setUserDailyNoteStatus(state, payload) {
            state.userDailyNoteStatus = payload;
        },
        setUserCheckInStatus(state, payload) {
            state.userCheckInStatus = payload;
        },
        setUserCheckOutStatus(state, payload) {
            state.userCheckOutStatus = payload;
        },
    },

    actions: {
        // context 를 통해서 state 값 얻어옴
        // payload 에 userDailyNoteStatus 객체가 실려서 들어옴 
        submitDailyNote(context, payload) {
            new Promise((resolve, reject) => {
                // 과제 제출 성공
                if (true) {
                    resolve({result: "success", userDailyNoteStatus: payload.userDailyNoteStatus});
                } else {
                    // 과제 제출 실패
                    reject({result: "fail", message: "데일리 과제 제출을 실패했습니다."});
                }
            })
            //(작업이 성공적으로 처리가 됐을 경우)
            .then((data) => {
                console.log("과제 제출 성공");
                context.commit("setUserDailyNoteStatus", data.userDailyNoteStatus);
            })
            .catch((error) => {
                console.log("과제 제출 실패");
            })
        },

        handleCheckIn(context, payload) {
            new Promise((resolve, reject) => {
                // 입실 성공
                if (true) {
                    resolve({
                        result: "success", 
                        userCheckInStatus: payload.userCheckInStatus,
                        userCheckIn: payload.userCheckIn // 2024-07-14 추가
                })
                } else {
                    // 입실 실패
                    reject({result: "fail", message: "입실할 수 없습니다."});
                }
            })
            .then((data) => {
                console.log("입실 성공");
                context.commit("setUserCheckInStatus", data.userCheckInStatus);
                context.commit("setUserCheckIn", data.userCheckIn); // 2024-07-14 추가
            })
            .catch((error) => {
                console.log("입실 실패");
            })
        },

        handleCheckOut(context, payload) {
            new Promise((resolve, reject) => {
                // 퇴실 성공
                if (true) {
                    resolve({
                        result: "success", 
                        userCheckOutStatus: payload.userCheckOutStatus,
                        userCheckOut: payload.userCheckOut
                    })
                } else {
                    // 퇴실 실패
                    reject({result: "fail", message: "퇴실할 수 없습니다."});
                }
            })
            .then((data) => {
                console.log("퇴실 성공");
                context.commit("setUserCheckOutStatus", data.userCheckOutStatus);
                context.commit("setUserCheckOut", data.userCheckOut);
            })
            .catch((error) => {
                console.log("퇴실 실패");
            })
        },
    }
};