
const state= {
    counter: 0
};

const getters = {
    doubleResult: (state) => {
        return state.counter * 2;
    },
    clickResult: (state) => {
        return state.counter;
    }
};

const mutations = {
    Increment(state){
        state.counter++;
    },
    Decrement(state){
        state.counter--;
    },
    asyncIncrement(state, payload){
        state.counter+=payload;
    },
    asynDecrement(state,payload){
        state.counter-=payload;
    }
};

const actions = {
    setIncrement({commit}){
        commit('Increment');
    },
    setDecrement({commit}){
        commit('Decrement');
    },
    // async proof
    asynSetIncrement({commit},payload){
        setTimeout(()=>{
            commit('asyncIncrement',payload.value)
        },payload.duration);
    },
    asynSetDecrement({commit},payload){
        setTimeout(()=>{
            commit('asynDecrement',payload.value)
        },payload.duration);
    }
};

export default {
    state,
    getters,
    mutations,
    actions
}