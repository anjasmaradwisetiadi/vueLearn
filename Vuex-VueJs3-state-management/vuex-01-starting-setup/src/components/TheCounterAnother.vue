<template>
    <section>
        <h3>{{ counterAnother }}</h3>
        <p> condition Counter </p>
    </section>

</template>
<script>
    export default {
        computed: {
            counterAnother() {
                return this.$store.getters.displayCounterCondition
            }
        }
    }
</script>