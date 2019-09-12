<template>
    <div class="app">
        <div class="description">
            Знакомство с обработкой событий, здесь отслеживаются события движения мыши и клики по контролам + и -
            <br/>
            <a href="https://codepen.io/sageichenko/pen/bXLMXa" class="description__link" target="_blank">Код на codeopen</a>
        </div>
        <div class="section"
             @mousemove="xyCoordinate"
             :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }">
            <p class="counter">
                <button class="counter__button" :disabled="counter <= 0" @click="decrement">-</button>
                <span class="counter__text">{{counter}}</span>
                <button class="counter__button" @click="increment">+</button>
            </p>
            <p class="coordinates">
                x-coordinate {{x}}
                y-coordinate {{y}}
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                counter: 0,
                    x:'',
                    y:''
            }
        },

        methods: {
            increment() {
                this.counter++;
            },

            decrement() {
                this.counter--;
            },

            xyCoordinate(ev) {
                this.x = ev.clientX;
                this.y = ev.clientY;
            }
        }
    }
</script>

<style scoped lang="less">
    .section {
        width: 100%;
        height: 100%;
        padding: 15vmin;
        transition: 0.2s background-color ease;
    }

    .counter {
        &__text, &__button {
            font-size: 3rem;
        }
    }

    .coordinates {
        font-size: 3rem;
    }
</style>