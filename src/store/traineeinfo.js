export default {
    namespaced: true,

    state: {
        mid: "M2001",
        cno: 1,
        tsex: "남자",
        tage: "32",
        taddress: "서울시 강동구 천호동",
        tfield: 0,
        tacademic: "대학교",
        tshcoolname: "(춘천)강원대학교",
        tmajor: "전기전자",
        tminor: "전자통신",
        tgrade: "3.98/4.5",
        tstatus: "졸업",
        tprofileimg: "",
        tprofileoname: "",
        tprofiletype: ""
    },
    getters: {
        getUserId(state, getters, rootState, rootGetters) {
            return state.mid;
        },
        getUserPassword(state, getters, rootState, rooteGetters) {
            return state.mpassword;
        },
        getUserInfo(state, getters, rootState, rooteGetters) {
            return state;
        }
    },
    mutations: {
        setUserId(state, payload) {
            state.mid = payload;
        },
        setUserPassword(state, payload) {
            state.mpassword = payload;
        }
    },
    actions: {
        loginAction(context, payload) {
            new Promise((resolve, reject) => {
                if (true) {
                    resolve({ result: "success", userId: payload.userId });
                } else {
                    reject({ result: "fail", message: "password is wrong" });
                }
            })
                .then((data) => {
                    console.log("로그인 성공");
                    context.commit("setUser", data.mid);
                })
                .catch((error) => {
                    console.log("로그인 실패");
                });
        }
    }
};