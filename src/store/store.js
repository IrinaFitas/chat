import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        something: 3,
        show: true
    },

    getters: {
        show: state => {
            return state.show;
        },
        plus: state => {
            return state.something + 5;
        },
        minus: state => {
            return state.something - 2;
        } 
    },

    mutations: {
        increment: function(state, payload) {
            state.something += payload;
        },
        changeShow: state => {
            state.show = !state.show;
        }
    },

    actions: {
        // increment: context => {
        //     context.commit("increment");
        // }
        asyncIncrement: (context, payload) => {
            console.log(context);
            setTimeout(function() {
                context.commit("increment", payload.by);
                console.log(context);
            }, payload.duration);
        }
    }
});