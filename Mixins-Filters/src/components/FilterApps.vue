<template>
    <div>
        <br>
        <br>
        <hr>
        <h4 class="font-semibold">Filters</h4>
        <p class="bg-green-300">{{text | toUpperCase | toLowerCase}}</p>
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
        <app-another-filters-apps></app-another-filters-apps>
        <hr>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    import AnotherFiltersApps from './AnotherFiltersApps.vue'

    export default Vue.extend({
        data() {
            return {
                text: 'hello world',
                fruits: ['Apple', 'Banana', 'Strawberry', 'Mango', 'Melon'],
                filterText: ''
            }
        },
        components:{
            appAnotherFiltersApps: AnotherFiltersApps
        },
        filters: {
            toUpperCase: function (value: string) {
                return value.toUpperCase();
            }
        },
        computed: {
            filteredFruits(): string[] {
                const data = this.fruits;
                return data.filter((element: string) => {
                    return element.match(this.filterText)
                })
            }
        },
    })
</script>
<style lang="scss" scoped>

</style>1