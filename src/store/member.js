export default {
    namespaced: true,

    state: {
        mid: "M2001",
        mpassword: "12345",
        mname: "김성민",
        mphone: "010-1234-1234",
        memail: "znznfltm@gmail.com",
        mrole: "ROLE_USER",
        menable: 1,
        mcreatedat: "2024년6월23일",
        mupdatedat: ""
    },
    getters: {
        getMid(state, getters, rootState, rootGetters) {
            return state.mid;
        },
        getMpassword(state, getters, rootState, rooteGetters) {
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