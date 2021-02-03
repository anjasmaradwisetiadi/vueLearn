<template>
    <section class="finally">
        <h1>Finally Form</h1>
        <pre id="json">
            {{resultAll}}
        </pre>
    </section>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {


        mounted() {
            alert("finally form")
        },

        computed: {
            ...mapGetters({
                resultAll: 'getResultAll'
            }),
        },



    }
</script>
<style scoped>

</style>