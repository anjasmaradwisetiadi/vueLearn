<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Filters & Mixins</h1>
                <p>{{ text | toUppercase | to-lowercase }}</p>
                <hr>
                <button @click="fruits.push('Berries')"> Add Berries fruits</button>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
                <another-filter></another-filter>
            </div>
        </div>
    </div>
</template>

<script>
    import AnotherFilter from './AnotherFilter.vue';
    import { MixinFruits } from './mixins/MixinFruits';

    export default {
        components:{
            AnotherFilter
        },
        mixins:[MixinFruits],
        created(){
            console.log('Inside List Created Hook')
        },
        data() {
            return {
                text: 'Hello there!',
            }
        },
        filters: {
            toUppercase(value) {
                return value.toUpperCase();
            }
        },
    }
</script>

<style>
</style>
