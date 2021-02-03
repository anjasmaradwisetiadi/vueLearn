<template>
  <section>
    <h2>{{ title }}</h2>
    <display-user-auth></display-user-auth>
    <slot></slot>
  </section>
</template>

<script>
  import DisplayUserAuth from './DisplayUserAuth';

  export default {
    components: {
      DisplayUserAuth
    },
    props: ['title'],
  };
</script>

<style scoped>
  section {
    max-width: 30rem;
    margin: 2rem auto;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
  }

  h2 {
    text-align: center;
  }
</style>