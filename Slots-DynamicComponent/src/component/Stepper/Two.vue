<template>
    <section class="step-2">
        <div>
            <h3>Step 2</h3>
            <p>{{error}}</p>
            <input v-model="email" type="email" placeholder="what your Email ?" class="form-control form-group-lg">
            <input v-model="phone" type="tel" placeholder="what your Telephone ?"
                class="form-control form-group-lg">
        </div>
    </section>
</template>
<script>
    export default {
        data() {
            return {
                error: '',
                emails:'',
                phones:''
            }
        },
        computed:{
            email:{
                get(){
                    return this.$store.state.pageForm.email;
                },
                set(value){
                    this.$store.commit('collectTwo',{email:value})
                }
            },
            phone:{
                get(){
                    return this.$store.state.pageForm.phone;
                },
                set(value){
                    this.$store.commit('collectTwo',{phone:value})
                }
            }
        }
        
    }
</script>
<style scoped>

</style>