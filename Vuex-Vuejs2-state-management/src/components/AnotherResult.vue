<template>
    <div>
        <p>Counter is: {{ doubleResult }}</p>
        <p>Counter when click event handler : {{ clickResult }} Clicks</p>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters([
                'doubleResult',
                'clickResult'
            ])
        }
    }
</script>