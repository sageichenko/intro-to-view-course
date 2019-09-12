<template>
    <div class="films">
        <div class="description">
            Для сортировки используются обычные методы, для поиска вычисляемые значения.
            <br/>
            <a href="https://codepen.io/sageichenko/pen/gVvqxo" class="description__link" target="_blank">Код на codeopen</a>
        </div>
        <p class="films__row films__text">
            Search: <input class="films__search films__text" v-model="searchText" type="text">
        </p>
        <p class="films__row">
            <span class="films__text">You can sort by </span>
            <button class="films__sort-button films__text" @click="sortHighest">Heghest rating</button>
            <button class="films__sort-button films__text" @click="sortLowest">Lowest rating</button>
        </p>
        <table class="films__table table">
            <thead class="table__head films__text">
            <tr class="table__row">
                <th  class="table__item films__text" v-for="key in keys" :key="key">{{key}}</th>
            </tr>
            </thead>
            <tbody class="table__body">
            <tr class="table__row films__text" v-for="entry in filteredFilms" :key="entry">
                <td class="table__item films__text" v-for="key in keys" :key="key">
                    {{entry[key]}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
           return {
                searchText: '',
                    keys:['title', 'rating'],
                    ratingsInfo:[
                    {title: `White Chicks`, rating: 82},
                    {title: `Grey's Anatomy`, rating: 98},
                    {title: `Prison Break`, rating: 98},
                    {title: `How I Met Your Mother`, rating: 94},
                    {title: `Supernatural`, rating: 95},
                    {title: `Breaking Bad`, rating: 97},
                    {title: `The Vampire Diaries`, rating: 91},
                    {title: `The Walking Dead`, rating: 98},
                    {title: `Pretty Little Liars`, rating: 96},
                    {title: `Once Upon a Time`, rating: 98},
                    {title: `Sherlock`, rating: 95},
                    {title: `Death Note`, rating: 77},
                    {title: `Naruto`, rating: 88},
                    {title: `Arrow`, rating: 96},
                    {title: `Black Mirror`, rating: 80},
                    {title: `The Originals`, rating: 74},
                    {title: `The 100`, rating: 97},
                    {title: `Masha and the Bear`, rating: 81},
                    {title: `Hunter X Hunter`, rating: 57},
                    {title: `Marvel's Luke Cage`, rating: 95},
                    {title: `Marvel's Iron Fist`, rating: 98}
                ]
            }
        },

        methods: {
            sortLowest() {
                this.ratingsInfo.sort((a, b) => a.rating > b.rating ? 1 : -1)
            },

            sortHighest() {
                this.ratingsInfo.sort((a, b) => a.rating < b.rating ? 1 : -1)
            }
        },

        computed: {
            filteredFilms() {
                let filter = new RegExp(this.searchText, 'i');
                return this.ratingsInfo.filter(el => el.title.match(filter));
            }
        }
    }
</script>

<style scoped lang="less">
    .films {
        padding: 3rem;
        width: 60rem;
        margin: 0 auto;

        &__sort-button {
            background: orangered;
            border: none;
            padding: .5rem .8rem;
            border-radius: .4rem;
            cursor: pointer;
        }

        &__text {
            font-size: 1.6rem;
        }
    }

    .table {
        width: 100%;
        background: #444;
        color: white;

        &__head {
            background: #333;
            text-transform: capitalize;
            text-align: left;
        }

        &__item {
            padding: 1rem;
            border-bottom: .1rem solid #888;
        }
    }
</style>