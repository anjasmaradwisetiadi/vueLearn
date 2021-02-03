<template>
    <p>login status : {{statusDisplayIsAuth}}</p>
    <button @click="Login" v-if="!statusDisplayIsAuth">Login</button>
    <button @click="Logout" v-if="statusDisplayIsAuth">Logout</button>
</template>

<script>
    export default {
        methods: {
            Login() {
                this.$store.dispatch({
                    type: 'isLogginAuth',
                    status: true
                })
            },
            Logout() {
                this.$store.dispatch({
                    type: 'isLogoutAuth',
                    status: false
                })
            }
        },
        computed: {
            statusDisplayIsAuth() {
                return this.$store.getters.displayIsAuth
            }
        }
    }
</script>