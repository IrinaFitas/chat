import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        showContactList: false,
        myMessages: []
    },
    getters: {},
    mutations: {
        sendMessage: (state, payload) => {
            state.myMessages.push(payload);
        }
    },
    actions: {
        sendMessage: ({ commit }, payload) => {
            commit("sendMessage", payload);
        }
    }
});