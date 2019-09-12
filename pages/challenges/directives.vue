<template>
    <div id="app">
        <div class="row counter">
            <input class="counter__num"
                   v-model.number="num1"
                   type="number"/>
            <span class="counter__operation">+</span>
            <input class="counter__num" v-model.number="num2"
                   type="number"/>
            <span class="counter__operation">=</span>
            <span class="counter__num">{{num1 + num2}}</span>
        </div>
        <div class="row framework">
            <select class="framework__select framework__text" name="framework"
                    v-model="chosenName">
                <option class="framework__select-option framework__text" disabled value="">Select a framework</option>
                <option class="framework__select-option framework__text"
                        v-for="name in names"
                        :key="name"
                        :value="name">{{name}}</option>
            </select>
            <p class="framework__text" v-if="chosenName"> is my favorite kind of framework is {{chosenName}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num1: 0,
                num2: 0,
                names: ['React',
                    'Vue',
                    'Angular'],
                chosenName: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .row {
        display: flex;
        justify-content: center;
        margin: 50px;
        font-family: 'Work Sans', sans-serif;
    }

    .framework {
        &__select {
            margin-right: 1rem;
        }

        &__text {
            font-size: 1.6rem;
        }
    }

    .counter {
        &__num {
            padding: 1rem 2rem;
            font-size: 1.6rem;
        }

        &__operation {
            margin: 0 1rem;
            font-size: 1.8rem;
            line-height: 4rem;
        }
    }
</style>