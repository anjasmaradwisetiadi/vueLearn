import Vue from 'vue';
import Vuex from 'vuex';
import 'es6-promise/auto'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        error:'',
        pageForm:{
            name:'',
            email:'',
            phone:'',
            message:''
        },
        containResult:{
            one:'',
            two:{
                email:'',
                phone:''
            },
        },
        resultAll:[]
    },

    mutations:{
        collectOne(state,payload){
            state.pageForm.name = payload;
            let dataOne={
                name : state.pageForm.name
            }
            state.containResult.one=dataOne;
            // const data=state.containResult;
            // console.log("0");
            // console.log(data);
            // state.resultAll.push(data);
            // console.log("1");
            // console.log(state.resultAll);
        },

        collectTwo(state,payload){
            console.log(payload)
            state.pageForm.email = payload.email;
            state.pageForm.phone = payload.phone;
            let dataTwo={
                email : state.pageForm.email,
                phone : state.pageForm.phone
            }
            state.containResult.two=dataTwo;
            // const data=state.containResult;
            // state.resultAll.push(data)
        },

        finally(state){
            state.resultAll.push(state.containResult)
        }
    },
    getters:{
        getResultAll(state){
            return JSON.stringify(state.resultAll,undefined,2);
        }
    }
})
