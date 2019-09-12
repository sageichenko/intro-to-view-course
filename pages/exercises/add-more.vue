<template>
    <div class="beer-section">
        <h1 class="header beer-section__header">🍺 Make yourself some Punk Beers 🍻</h1>
        <div class="loading" v-if="beers.length === 0">Waiting...</div>
        <div v-for="beer in beers" :key="beer" class="beer">
            <div class="beer__img">
                <img :src="beer.img" alt="">
            </div>
            <div class="beer__info">
                <h2 class="beer__name header">{{ beer.name }}</h2>
                <p class="beer__tagline beer__text bright">{{ beer.tagline }}</p>
                <p class="beer__desc beer__text"><span class="bright">Description: </span>{{ beer.desc }}</p>
                <p class="beer__text"><span class="bright">Tips: </span>{{ beer.tips }}</p>
                <h3 class="bright beer__food-heading header">Food pairings</h3>
                <ul class="food-list">
                    <li class="food-list__item  beer__text" v-for="item in beer.food" :key="item">{{ item }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                bottom: false,
                beers: []
            }
        },

        watch: {
            bottom(bottom) {
                if (bottom) {
                    this.addBeer();
                }
            }
        },

        created() {
            window.addEventListener('scroll', () => {
                this.bottom = this.bottomVisible();
            });
            this.addBeer();
        },

        methods: {
            bottomVisible() {
                const scrollY = window.scrollY;
                const visible = document.documentElement.clientHeight;
                const pageHeight = document.documentElement.scrollHeight;
                const bottomOfPage = visible + scrollY >= pageHeight;
                return bottomOfPage || pageHeight < visible;
            },
            addBeer() {
                axios.get('https://api.punkapi.com/v2/beers/random')
                    .then(response => {
                        let api = response.data[0];
                        let apiInfo = {
                            name : api.name,
                            desc : api.description,
                            img : api.image_url,
                            tips : api.brewers_tips,
                            tagline : api.tagline,
                            food : api.food_pairing
                        };
                        this.beers.push(apiInfo);

                        if (this.bottomVisible()) {
                            this.addBeer();
                        }
                    })
            }
        }
    }
</script>

<style scoped lang="less">
    .beer-section {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;
        font-family: 'Archivo Narrow', sans-serif;
        background: #25859a;

        &__header {
            margin-top: 4rem;
            font-size: 3rem;
            color: white;
            text-align: center;
        }
    }

    .header {
        font-family: 'Fjalla One', sans-serif;
    }

    .beer {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: stretch;
        box-shadow: 0 .2rem .3rem .1rem rgba(30, 0, 0, 0.1);

        &__name {
            margin-top: 4rem;
            font-size: 2rem;
            color: white;
        }

        &__img {
            display: flex;
            justify-content: center;
            align-content: center;
            padding: 3rem;
            max-height: 60rem;
            background: #FF6542;
            border: .1rem solid #88498F;
            border-right: .1rem solid #f44822;

            & > img {
                height: 100%;
            }
        }

        &__info {
            background: #564154;
            color: white;
            padding: 30px;
            border: 1px solid #88498F;

            .bright {
                color: #fcd7cf;
                font-family: 'Contrail One', sans-serif;
            }
        }

        &__text {
            font-size: 1.6rem;
        }

        &__food-heading {
            margin-bottom: 5px;
        }
    }

    .loading {
        color: white;
        text-align: center;
        font-size: 20px;
    }

    .food-list {
        margin-top: 5px;
    }
</style>