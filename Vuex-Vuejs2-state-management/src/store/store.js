import Vue from 'vue';
import Vuex from 'vuex';
import counters from './modules/counters';

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        valueInput:0
    },

    //like computed version store
    getters: {
        getFormInputValue: (state) => {
            return state.valueInput;
        }
    },

    mutations:{
        inputValue: (state,payload)=>{
            state.valueInput=payload;
        }   
    },

    actions:{
        setInputValue({commit},payload){
            commit('inputValue',payload)
        }
    },

    modules:{   
        counters
    }
})