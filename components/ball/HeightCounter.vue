<template>
    <div class="height-counter">
        <button class="height-counter__button" @click="topIncrease">Increase top</button>
        <button class="height-counter__button" @click="topDecrease">Decrease top</button>
        <button class="height-counter__button" @click="bottomIncrease">Increase bottom</button>
        <button class="height-counter__button" @click="bottomDecrease">Decrease bottom</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },

        methods: {
            bottomIncrease: function () {
                this.$emit('bottomincrease');
            },
            bottomDecrease: function () {
                this.$emit('bottomdecrease');
            },
            topIncrease: function () {
                this.$emit('topincrease');
            },
            topDecrease: function () {
                this.$emit('topdecrease');
            }
        }
    }
</script>

<style scope lang="less">
    .height-counter {
        display: inline-block;
    }
</style>