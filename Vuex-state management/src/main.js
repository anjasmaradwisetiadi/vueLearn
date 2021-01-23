import {
    createApp
} from 'vue';
import {
    createStore
} from 'vuex';

import App from './App.vue';

// const counterModule = {
//     state() {
//         return {}
//     },
//     mutations: {

//     },
//     actions: {

//     },
//     getters: {

//     }
// }

const store = createStore({
    state() {
        return {
            counter: 0,
            isLoggin: false,
            message:'data message'
        };
    },
    // syncronous
    mutations: {
        // logic counter sharing for app.vue dan ButtonCounterAnother.vue
        incrementSharing(state) {
            state.counter = state.counter + 2;
            state.message = "data message bermutasi increment Sharing";


        },
        incrementSharingSignificant(state, payload) {
            state.counter = state.counter + payload.value;
            state.message = "data message bermutasi increment Sharing Significant";
        },

        isAuth(state, payload) {
            state.isLoggin = payload.status
        }
    },
    // asyncronous
    actions: {
        increment(context) {
            setTimeout(function () {
                context.commit('incrementSharing')
            }, 2000)
        },

        incrementSignificant(context, payload) {
            console.log(context);
            context.commit('incrementSharingSignificant', payload)
        },

        isLogginAuth(context, payload) {
            context.commit('isAuth', payload)
        },
        isLogoutAuth(context, payload) {
            context.commit('isAuth', payload)
        }
    },

    getters: {
        displayCounter(state) {
            return state.counter * 2
        },

        displayCounterCondition(state, getters) {
            let finalCounter = getters.displayCounter
            // dataState=dataState>100? 100 :  0
            if (finalCounter < 0) return 0;
            if (finalCounter > 100) return 100;

            return finalCounter
        },

        displayIsAuth(state) {
            return state.isLoggin;
        }
    }
})


const app = createApp(App);

app.use(store);

app.mount('#app');