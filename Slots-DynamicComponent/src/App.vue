<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <button @click="selectedComponent = 'appQuote'"> Quote </button>
                <button @click="selectedComponent = 'appNew'"> New </button>
                <button @click="selectedComponent = 'appAuthor'"> Author </button>
                <button @click="selectedComponent = 'appStepper'"> Stepper </button>

                <!-- <quote>
                    <h3 slot="title">My Taqline</h3>
                    <p slot="quote">A wonderfull Quote</p>
                </quote> -->

                <!-- <keep-alive></keep-alive> menjaga agar data yang ada di component tidak destroyed -->
                <keep-alive>
                    <component :is="selectedComponent">
                        <h3 slot="title">My Taqline</h3>
                        <p slot="quote">A wonderfull Quote</p>
                    </component>
                </keep-alive>

            </div>
        </div>
    </div>
</template>

<script>
    import Quote from './component/Quote.vue';
    import New from './component/New.vue';
    import Author from './component/Author.vue';
    import Stepper from './component/Stepper.vue';


    export default {
        components: {
            appQuote: Quote,
            appNew: New,
            appAuthor: Author,
            appStepper: Stepper
        },
        data() {
            return {
                selectedComponent: 'appQuote'
            }
        }
    }
</script>

<style>
</style>