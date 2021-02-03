<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <h3>Your Author is Anjasmara Dwi Setiadi</h3>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <form class="stepper">
                    <section v-if="step===1">
                        Step 1
                        <p>{{error}}</p>
                        <input v-model="form.name" type="text" placeholder="what your name ?"
                            class="form-control form-group-lg">
                    </section>
                    <section v-if="step===2">
                        Step 2
                        <p>{{error}}</p>
                        <input v-model="form.email" type="email" placeholder="what your Email ?"
                            class="form-control form-group-lg">
                        <input v-model="form.phone" type="tel" placeholder="what your Telephone ?"
                            class="form-control form-group-lg">
                    </section>
                    <section v-if="step===3">
                        Step 3
                        <p>{{error}}</p>
                        <textarea v-model="form.message" type="text" placeholder="what your Message ?"
                            class="form-control form-group-lg"></textarea>
                    </section>
                    <div class="mt-4">
                        <button v-if="step<totalsteps" @click.prevent="nextSteps()">Next Step</button>
                        <button v-if="step>1" @click.prevent="prevSteps()">Previous Step</button>
                        <button v-if="step===totalsteps" @click.prevent="quickMessage()">Quick Message</button>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                step: 1,
                totalsteps: 3,
                error: '',
                form: {
                    name: null,
                    email: null,
                    phone: null,
                    message: null,
                }

            }
        },
        mounted() {

        },

        methods: {
            nextSteps() {
                if (this.step === 1) {
                    if (!this.form.name) {
                        this.error = 'Please Fill out your name ';
                        return false;
                    }
                } 
                if (this.step === 2) {
                    if (!this.form.email || !this.form.phone) {
                        this.error = 'Please Fill out your email & phone ';
                        return false;
                    }
                } 

                this.step++;
            },
            prevSteps() {
                return this.step--;
            },
            quickMessage() {
                if(this.step === 3){
                    this.error = 'Please Fill out your message';
                    return false;
                }
                alert("quick message steps")
            }
        }

    }
</script>

<style scoped>

</style>