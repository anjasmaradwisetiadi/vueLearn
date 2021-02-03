<template>
    <div>
        <hr>
        <h3>Simple Counter use State</h3>
        <button class="btn btn-primary" @click="increment">Increment</button>
        <button class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.dispatch('setIncrement')
            },
            decrement() {
                this.$store.dispatch('setDecrement')
            }
        }
    }
</script>