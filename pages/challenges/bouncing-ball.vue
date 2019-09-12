<template>
<div class="bouncing-ball">
    <h3 class="bouncing-ball__header">Bounce the Ball!</h3>
    <button class="bouncing-ball__btn" @click="toggleShow">
        <span class="bouncing-ball__text" v-if="isShowing">Get it gone!</span>
        <span class="bouncing-ball__text" v-else>Here we go!</span>
    </button>
    <transition
            name="ballmove"
            enter-active-class="bouncein"
            leave-active-class="rollout">
        <div class="bouncing-ball__ball-wrap" v-if="isShowing">
            <div class="bouncing-ball__ball"></div>
        </div>
    </transition>
</div>
</template>

<script>
    export default {
        data() {
            return {
                isShowing: false
            }
        },
        methods: {
            toggleShow() {
                this.isShowing = !this.isShowing;
            }
        }
    }
</script>

<style scoped lang="less">
    .bouncing-ball {
        width: 100%;
        height: 35rem;
        font-family: 'Bitter', serif;
        text-align: center;
        background: linear-gradient(to bottom, #eee 0%,#ccc 65%,#eee 99%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        perspective-origin: center top;
        perspective: 10rem;

        &__btn {
            padding: .5rem 1.5rem;
            margin: 0 10px;
            font-family: 'Bitter', sans-serif;
            color: white;
            background: #c62735;
            border: 0;
            border-radius: .4rem;
            outline: 0;
            cursor: pointer;
        }

        &__header {
            margin: 0 0 1.5rem;
            font-size: 2rem;
        }

        &__ball {
            width: 6rem;
            height: 6rem;
            background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/soccerball.svg");
            transform-origin: 50% 50%;
        }

        &__ball-wrap {
            height: 100%;
        }

        &__text {
            font-size: 1.6rem;
        }
    }

    @keyframes bouncein {
        0% {transform: translate3d(0, 0, -30rem);}
        10% {transform: translate3d(0, -2rem, -27rem);}
        20% {transform: translate3d(0, -6rem, -24rem);}
        30% {transform: translate3d(0, -8rem, -21rem);}
        40% {transform: translate3d(0, -9.5rem, -18rem);}
        50% {transform: translate3d(0, -10rem, -15rem);}
        60% {transform: translate3d(0, -9.5rem, -12rem);}
        70% {transform: translate3d(0, -8rem, -9rem);}
        80% {transform: translate3d(0, -6rem, -6rem);}
        90% {transform: translate3d(0, -2rem, -3rem);}
        100% {transform: translate3d(0, 0, 0);}
    }

    @keyframes rollout {
        0% { transform: translate3d(0, 0, 0) }
        100% { transform: translate3d(150rem, 0, 10rem); }
    }

    @keyframes ballroll {
        0% { transform: rotate(0); }
        100% { transform: rotate(1000deg); }
    }

    .bouncein {
        animation: bouncein 1s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }

    .rollout {
        width: 60px;
        height: 60px;
        animation: rollout 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        div {
            animation: ballroll 1.5s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
        }
    }
</style>