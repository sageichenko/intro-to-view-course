<template>
    <div class="app">
        <div class="description">
            Задание в котором нужно было реализовать используя один дочерний компонент отобразить информацию о разных городах.
            <br/>
            <a href="https://codepen.io/sageichenko/pen/wVYZyx" class="description__link" target="_blank">Код на codeopen</a>
        </div>
        <div class="location-contain">
            <div class="location" v-for="location in locations" :key="location">
                <Location :location="location"></Location>
            </div>
        </div>
    </div>
</template>

<script>
    import Location from '../../components/destination/Location.vue';

    export default {
        components: {
            Location
        },

        data() {
            return {
                locations: [
                    {
                        name: 'moscow',
                        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
                        desc: `Moscow is the capital and most populous city of Russia, with 13.2 million residents within the city limits and 17.8 million within the urban area. Moscow has the status of a Russian federal city.`
                    },
                    {
                        name: 'paris',
                            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
                        desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
                    },
                    {
                        name: 'rome',
                            img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
                        desc: `Rome's history spans more than 2,500 years. While Roman mythology dates the founding of Rome at around 753 BC, the site has been inhabited for much longer, making it one of the oldest continuously occupied sites in Europe.`
                    },
                    {
                        name: 'paris',
                        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris2.svg',
                        desc: `Paris is the capital and most populous city of France. By the 17th century, Paris was one of Europe's major centres of finance, commerce, fashion, science, and the arts, and it retains that position still today.`
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    .location-contain {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: stretch;
        font-family: 'NTR', sans-serif;
    }
</style>
