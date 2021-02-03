<template>
    <div>
        <h3>New Your Member</h3>
        <button @click="counter++">tambah</button>
        <p>{{counter}}</p>
    </div>
</template> 

<script>
export default {
    data(){
        return{
            counter:0
        }
    },
    destroyed(){
        console.log('destroyed');
    },
    //deactivated dan activated lifecycle hook untuk  
    deactivated(){
        console.log('deactivated');
    },
    activated(){
        console.log('activated');
    }
}
</script>

<style scoped>

</style>