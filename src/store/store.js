import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        currentDialogUserId: null,
        messages: []
    },
    getters: {
        receiveMessages: state => {
            return state.messages;
        }
    },
    mutations: {
        sendMessage: (state, payload) => {
            state.messages.push(payload);
        }
    },
    actions: {
        sendMessage: ({ commit }, payload) => {
            commit("sendMessage", payload);
        }
    }
});