<template>
    <section class="step-1">
        <div>
            <h3>Step 1</h3>
            <p>{{error}}</p>
            <input v-model="name" @input="updateName" type="text" placeholder="what your name ?" class="form-control form-group-lg">
        </div>
    </section>
</template>
<script>
import { mapState } from 'vuex';
    export default {
        data() {
            return {
                error: '',
                name:''
            }
        },

        computed:{
            // ...mapState({
            //     name: state => state.name
            // })
            // name:{
            //     get (){
            //         return this.$store.state.pageForm.name
            //     },
            //     set (value){
            //         this.$store.commit('collectOne', value);
            //     }
            // }
        },
        methods:{
            updateName(e){
                e.preventDefault();
                this.$store.commit('collectOne', this.name);
            }
        }
    }
</script>
<style scoped>

</style>