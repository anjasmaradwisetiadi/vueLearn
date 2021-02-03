<template>
    <section class="stepper">
        <keep-alive>
            <component :is="selectedStepper"></component>
        </keep-alive>
        <div class="mt-4">
            <button v-if="stepByStep<3" @click="nextSteps()">Next Step</button>
            <button v-if="stepByStep>1" @click="prevSteps()">Previous Step</button>
            <button v-if="stepByStep===3" @click="Submit()">Submit</button>
        </div>
    </section>
</template>
<script>
    import One from './Stepper/One.vue'
    import Two from './Stepper/Two.vue'
    import Three from './Stepper/Three.vue'
    import Finally from './Stepper/Finally.vue'

    export default {
        components: {
            one: One,
            two: Two,
            three: Three,
            finally: Finally
        },
        data() {
            return {
                stepByStep: 1,
                maxStep: 4,
                selectedStepper: 'one'
            }
        },

        methods: {
            nextSteps() {
                this.stepByStep++;
                this.logicStepper();
            },
            prevSteps() {
                this.stepByStep--;
                this.logicStepper();
            },
            Submit() {
                this.stepByStep++;
                this.logicStepper();
                this.$store.commit('finally');
            },
            logicStepper() {
                if (this.stepByStep === 1) return this.selectedStepper = 'one';
                else if (this.stepByStep === 2) return this.selectedStepper = 'two';
                else if (this.stepByStep === 3) return this.selectedStepper = 'three';
                else return this.selectedStepper = 'finally';

            }
        }
    }
</script>
<style scoped>

</style>