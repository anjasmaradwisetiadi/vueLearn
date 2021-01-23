<template>
    <button @click="inc">Add 2</button>
    <button @click="incSign({value:11})">Add 11</button>

</template>
<script>
import { mapActions } from 'vuex'
    export default {
        methods: {
            // addOne() {
            //     this.$store.dispatch('increment')
            // }

            // use mapAction for calling Actions more than one Actions
            ...mapActions({
                inc: 'increment',
                incSign :'incrementSignificant'
                })
        }
    }
</script>