import Vue from 'vue';

export class directiveBlink {

    Vue.directive('local-highlight', {
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
    })
}

// export default directiveBlink