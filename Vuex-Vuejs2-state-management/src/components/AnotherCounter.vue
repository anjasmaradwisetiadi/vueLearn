<template>
    <div>
        <hr>
        <h3>Simple Counter use Action</h3>
        <button class="btn btn-primary" @click="asynSetIncrement({value:10, duration: 2000})">Increment</button>
        <button class="btn btn-primary" @click="asynSetDecrement({value:10, duration: 1000})">Decrement</button>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    methods:{
        ...mapActions(['asynSetIncrement', 'asynSetDecrement'])
    }
}
</script>