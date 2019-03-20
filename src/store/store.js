import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        something: 3
    },

    getters: {
        plus: state => {
            return state.something + 5;
        },
        minus: state => {
            return state.something - 2;
        } 
    }
});