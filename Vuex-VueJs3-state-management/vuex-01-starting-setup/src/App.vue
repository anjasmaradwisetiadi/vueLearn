<template>
  <div>
    <br>
    <base-container title="Vuex" v-if="statusDisplayIsAuth">
      <the-counter></the-counter>
      <the-counter-another></the-counter-another>
      <button @click="addOne">Add Significant(5)</button>
      <button-counter-another></button-counter-another>
      <p>{{message}}</p>
    </base-container>

    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>

</template>

<script>
  import BaseContainer from './components/BaseContainer.vue';
  import ButtonCounterAnother from './components/ButtonCounterAnother.vue';
  import TheCounter from './components/TheCounter.vue';
  import TheCounterAnother from './components/TheCounterAnother.vue';
  import UserAuth from './components/UserAuth.vue';

  export default {
    components: {
      BaseContainer,
      TheCounter,
      ButtonCounterAnother,
      TheCounterAnother,
      UserAuth,
    },
    
    methods: {
      addOne() {
        // this.$store.state.counter=this.$store.state.counter+11;
        // example use commit-payload
        // this.$store.commit('incrementSharingSignificant',{value:5})

        // example use dispatch-payload
        this.$store.dispatch({
          type: "incrementSignificant",
          value: 5
        })
      }
    },

    computed: {
      statusDisplayIsAuth() {
        return this.$store.getters.displayIsAuth
      },
      message() {
        return this.$store.state.message
      }
    }
  };
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
  }

  body {
    margin: 0;
  }
</style>