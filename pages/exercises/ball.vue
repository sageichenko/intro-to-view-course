<template>
    <div class="ball-app">
        <div class="button-group">
            <button @click="animateBall" v-if="!running">Start</button>
            <button @click="cancelAnimate" v-else>Reset</button>
            <height-counter @bottomincrease="incrementBottom"
                            @bottomdecrease="decrementBottom"
                            @topincrease="incrementTop"
                            @topdecrease="decrementTop">
            </height-counter>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" class="bounce">
            <line x1="400" x2="400" :y1="top+radius" :y2="bottom-radius" stroke="#555" stroke-width="4" stroke-dasharray="5, 5"/>
            <line x1="390" x2="410" :y1="top+radius" :y2="top+radius" stroke="#555" stroke-width="4"/>
            <line x1="390" x2="410" :y1="bottom-radius" :y2="bottom-radius" stroke="#555" stroke-width="4"/>
            <circle :style="{ transform: `translate3d(${x1}px, ${y1}px, 0)` }" :r="radius" cx="0" cy="0" fill="teal"/>
        </svg>
    </div>
</template>

<script>
    import HeightCounter from '../../components/ball/HeightCounter';

    export default {
        components: {
            HeightCounter
        },

        data() {
            return {
                top: 200,
                bottom: 400,
                radius: 15,
                x1: 15,
                y1: 300,
                g: 0.1,
                vx: 2,
                vy: 0,
                req: null,
                running: false
            }
        },

        methods: {
            incrementBottom() {
                this.bottom += 100
            },
            decrementBottom() {
                this.bottom -= 100
            },
            incrementTop() {
                this.top -= 100
            },
            decrementTop() {
                this.top += 100
            },
            bounceBall() {
                this.vy += this.g; // gravity increases the vertical speed
                this.x1 += this.vx; // horizontal speed inccrements horizontal position
                this.y1 += this.vy; // vertical speed increases vertical position

                if (this.y1 > this.bottom - this.radius) { // if ball hits the ground
                    this.y1 = this.bottom - this.radius; // reposition it at the ground
                    this.vy *= -0.8; // then reverse and reduce its speed
                } else if (this.y1 < this.top + this.radius) {
                    this.y1 = this.top + this.radius; // reposition it at the ground
                    this.vy *= -1; // then reverse and reduce its speed
                }
            },
            animateBall() {
                //use rAF to animate but put a boundary on it so it doesn't run forever
                let start,
                    vueThis = this;
                this.running = true;

                function step(timestamp) {
                    if (!start) start = timestamp;
                    var progress = timestamp - start;
                    if (progress < 13000) {
                        vueThis.bounceBall();
                        vueThis.req = window.requestAnimationFrame(step);
                    } else {
                        vueThis.x1 = this.radius;
                        vueThis.y1 = this.radius;
                        vueThis.running = false;
                    }
                }
                this.req = window.requestAnimationFrame(step);
            },
            cancelAnimate() {
                cancelAnimationFrame(this.req);
                this.running = false;
                this.radius = 15;
                this.top = 200;
                this.bottom = 400;
                this.x1 = this.radius;
                this.y1 = this.top + this.radius;
                this.g = 0.1;
                this.vx = 2;
                this.vy = 0;
            }
        }
    }
</script>

<style lang="less">
    .ball-app {
        background: #222;
    }

    .bounce {
        width: 100vw;
        height: 80vh;
    }

    .button-group {
        width: 800px;
        margin: 0 auto;
        text-align: center;
        button {
            font-family: 'Montserrat', sans-serif;
            min-width: 80px;
            border: none;
            padding: 8px 16px;
            background: #444;
            font-size: 1.5rem;
            color: white;
            border-radius: 3px;
            outline: 0;
            cursor: pointer;
        }
    }
</style>