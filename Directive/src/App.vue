<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Built on Directives</h1>
                <p v-text="'try directive'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
            <h1>Custom Directives</h1>
            <p v-highlight:background.delayed="'red'">higlights directive custom global</p>
            <p v-local-highlight:background.delayed.blink="'red'">highlight directive custom local </p>
        </div>
    </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-highlight': {
                bind(el, binding, vnode) {
                    // ude modifiers
                    let delay = 0;
                    if (binding.modifiers['delayed']) {
                        delay = 3000;
                    }
                    if (binding.modifiers['blink']) {
                        let mainColor = binding.value;
                        let secondColor = 'green';
                        let currentColor = mainColor;
                        setTimeout(() => {
                            setInterval(() => {
                                currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
                                if (binding.arg == 'background') {
                                    el.style.backgroundColor = currentColor;
                                    el.style.color = 'white'
                                } else {
                                    el.style.color = currentColor;
                                }
                            }, 1000)

                        }, delay)
                    } else {
                        setTimeout(() => {
                            if (binding.arg == 'background') {
                                el.style.backgroundColor = binding.value;
                                el.style.color = 'white'
                            } else {
                                el.style.color = binding.value;
                            }
                        }, delay)
                    }

                }
            }
        }
    }
</script>

<style>

</style>