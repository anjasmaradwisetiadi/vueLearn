<template>
    <div>
        <br>
        <hr>
        <input
            class="border border-transparent border-2 border-blue-400 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            type="text" v-model="filterText">
        <ul class="text-black bg-red-300 list-decimal">
            <li v-for="(fruit) in filteredFruits" :key="fruit">
                {{fruit}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {mixinFruits} from '../mixins/fruitsMixin'
    export default Vue.extend({
        mixins:[mixinFruits]
    })
</script>
<style lang="scss" scoped>

</style>