<template>
    <div>
        <h1>Mixins & Filters</h1>
        <p>{{text | toUppercase}}</p>
    </div>
</template>
<script lang="ts">
    import Vue from 'vue'
    export default Vue.extend({
        data(){
            return{
                text:'hello world'
            }
        },
        filters:{
            toUppercase(value:any){
                return value.toUppercase();
            }
        }
    })
</script>
<style lang="scss" scoped>

</style>