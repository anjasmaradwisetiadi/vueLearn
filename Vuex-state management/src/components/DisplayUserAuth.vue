<template>
    <section>
        <h3>login status :  {{displayAuthStatus}}</h3>
    </section>

</template>
<script>
    export default {
        computed:{
            displayAuthStatus(){
                return this.$store.getters.displayIsAuth
            }
        }
    }
</script>