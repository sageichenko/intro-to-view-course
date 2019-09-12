<template>
    <div class="app">
        <div class="description">
            Задание в котором нужно было создать директиву которая бы изменяла цвет текста и добавить фильтр для корректного отображения порядкого  номера.
            <br/>
            <a href="https://github.com/sageichenko/intro-to-view-course/blob/master/plugins/directives.js" class="description__link" target="_blank">Создание директивы</a>
            <br/>
            <a href="https://github.com/sageichenko/intro-to-view-course/blob/master/pages/challenges/custom-directive.vue" class="description__link" target="_blank">Компонент</a>
        </div>
        <div class="success">
            <small class="success__text">Your place here: </small>
            <input class="success__input" type="number" v-model="num"/>
            <div class="success__won">
                <h2 class="success__heading">Congratulations!</h2>
                <p class="success__text">You won <span class="success__place" v-color="'#c00'">{{ num | place }}</span> place!</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 5,
            }
        },

        watch: {
            num: function(value, oldValue) {
                if (value <= 0) {
                    this.num = oldValue;
                }
            }
        },

        filters: {
            place(value) {
                switch (value) {
                    case '1': return `${value}st`;
                            break;
                    case '2': return `${value}nd`;
                            break;
                    case '3': return `${value}rd`;
                            break;
                    default: return `${value}th`;
                            break;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .success {
        max-width: 50rem;
        margin: 5rem auto;
        padding: 1rem 4rem;
        font-family: 'Bitter', serif;
        text-align: center;
        border: .1rem solid black;

        &__heading {
            font-size: 2rem;
            border-bottom: .1rem solid #ed9909;
        }

        &__text {
            font-size: 1.6rem;
        }

        &__won {
            background: #ffc968;
            padding: 10px 20px;
            border-radius: 3px;
            margin: 10px;
        }

        &__input {
            font-size: 1.8rem;
        }

        &__place {
            font-size: 3rem;
        }
    }
</style>