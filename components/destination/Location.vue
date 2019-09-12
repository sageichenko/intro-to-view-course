<template>
    <div class="place">
        <img class="place__img" :src="location.img" width="150" height="150"/>
        <div class="place__desc">
            <h2 class="place__name">{{location.name}}</h2>
            <p class="place__text">{{location.desc}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['location']
    }
</script>

<style scoped lang="less">
    .place {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        margin: 1rem;
        padding: 2rem ;
        background: white;
        border: .1rem solid #ddd;

        &__name {
            margin: 0;
            font-size: 2rem;
            text-transform: uppercase;
        }

        &__img {
            margin: 1rem;
            align-self: center;
        }

        &__text {
            margin: 0;
            font-size: 1.6rem;
        }
    }
</style>