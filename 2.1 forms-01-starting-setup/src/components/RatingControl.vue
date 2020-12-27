<template>
    <ul>
        <li :class="{active: modelValue === 'poor'}"><button type="button" 
        @click="activated('poor')">Poor</button></li>
        <li :class="{active: modelValue === 'average'}"><button type="button" 
        @click="activated('average')">Average</button></li>
        <li  :class="{active: modelValue === 'great'}"><button type="button" 
        @click="activated('great')">Great</button></li>
    </ul>
</template>

<script>
    export default{
        props:['modelValue'],
        emits:['update:modelValue'],
        // karena ketika submit harusnya nilainya null maka kita coba computed
        // data(){
        //     return {
        //         activeOption: this.modelValue
        //     }
        // },

        //  dengan begini juga bisa atau langsung panggil propsnya aja untuk kondisi "active class template"
        // computed:{
        //     activeOption(){
        //         return this.modelValue;
        //     }
        // },

        methods:{
            activated(option){
                console.log(option)
                // this.activeOption = option;
                this.$emit('update:modelValue', option)
            }

        }
    }
</script>

<style scoped>
    .active{
        border-color:aqua  ;
    }
    .active button{
        color: aquamarine;
    }

    ul{
        list-style: none;
        margin :0.5rem 0;
        padding : 0;
        display :flex;
    }
    li{
        margin :0 1rem;
        border : 1px solid #ccc;
        padding :1rem;
        display : flex;
        justify-content: center;
        align-items: center;
    }
    button {
        font :inherit;
        border :none;
        background-color :transparent;
        cursor :pointer;
    }
</style>
