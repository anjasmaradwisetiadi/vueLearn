<template>
    <div>
        <div class="row">
            <div>
                <hr>
                <input v-model="filterText">
                <ul>
                    <li v-for="fruit in filteredFruits" :key="fruit">{{ fruit }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import {MixinFruits } from './mixins/MixinFruits'
    export default {
        mixins:[MixinFruits]
    }
</script>
<style scoped>

</style>