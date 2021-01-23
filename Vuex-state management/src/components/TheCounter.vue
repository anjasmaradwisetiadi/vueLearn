<template>
    <section>
        <h3>{{ displayCounter }}</h3>
    </section>

</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        computed: {
            // counter() {
            //     // use getters vuex for share data on computed in vuex
            //     return this.$store.getters.displayCounter
            // }

            // use mapGetters for calling getters more than one getters
            ...mapGetters(['displayCounter'])
        },
    }
</script>