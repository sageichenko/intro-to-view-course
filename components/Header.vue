<template>
    <div class="header-container">
        <div class="header-home">
            <nuxt-link class="header-home__link header-item__text" exact to="/">
                <h1 class="header-home__text header-item__text" >Home</h1>
            </nuxt-link>
        </div>
        <div class="header-item" v-for="header in headerItems" :key="header">
            <h1 class="header-item__text" >{{header.title}}</h1>
            <ul v-if="header.menuItems" class="menu header-item__menu">
                <li class="menu__item header-item__menu-item" v-for="item in header.menuItems" :key="item">
                    <nuxt-link :to="item.link" class="menu__link">{{item.title}}</nuxt-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                headerItems: [
                    {
                        title: 'Challenges',
                        menuItems:[
                            {title: 'Destinations', link:'/challenges/destinations'},
                            {title: 'Directives Exercise Start', link:'/challenges/directives'},
                            {title: 'Blog Posts', link:'/challenges/blog'},
                            {title: 'Ball Bouncing using Vue transition', link:'/challenges/bouncing-ball'},
                            {title: 'Custom Directives', link:'/challenges/custom-directive'},
                            {title: 'Comment form with Vuex', link:'/challenges/comment-form'},
                        ]
                    },
                    {
                        title: 'Exercises',
                        menuItems:[
                            {title: 'Showing simple event handling', link:'/exercises/simple-event-handling'},
                            {title: 'Beginning methods', link:'/exercises/beginning-methods'},
                            {title: 'Filtered Data with Methods & Computed', link:'/exercises/methods-and-computed'},
                            {title: 'Add more info on scroll', link:'/exercises/add-more'},
                            {title: 'Emitting events from child', link:'/exercises/ball'},
                        ]
                    }
                ]
            }
        }
    }
</script>

<style lang="less">
    .header-home {
        position: absolute;
        left: 0;
        top: 0;
        padding: 1rem 2rem;
        color: #c00;
        transition: all .3s;

        &:hover {
            color: black;
        }

        &__link {
            color: inherit;
            text-decoration: none;
        }
    }

    .header-container {
        position: relative;
        display: flex;
        justify-content: center;
        font-family: 'Yanone Kaffeesatz', sans-serif;
        z-index: 10;
    }

    .menu {
        padding: 0;
        font-weight: lighter;
        list-style: none;
        border-bottom: .5rem solid #ccc;

        &__item {
            margin: .5rem;
            color: black;
        }

        &__link {
            color: inherit;
            font-size: 2rem;
            text-decoration: none;
        }
    }

    .header-item {
        position: relative;
        margin: 1rem 2rem;
        color: black;
        text-decoration: none;
        cursor: pointer;
        transition: all .2s;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 0;
            height: 0;
            border-width: 0;
            border-top-width: 1rem;
            border-style: solid;
            border-color: black;
            /*top: 0;*/
            /*left: 0;*/
            /*height: 0;*/
            /*width: 0;*/
            /*border-width: 1rem;*/
            /*border-style: solid;*/
            /*z-index: -1;*/
            /*border-color: transparent;*/
            transition: all .5s;
        }

        &:hover {
            color: #c00;

            &::before {
                //height: 90%;
                width: 100%;
                //border-color: black;
            }
        }

        &__text {
            font-size: 3rem;
        }

        &__menu {
            position: absolute;
            left: 0;
            width: 0;
            overflow: hidden;
            background-color: white;
            transition: all .3s;
        }

        &__menu-item {
            /*height: 0;*/
            /*margin: 0;*/
            width: 40rem;
            margin-bottom: 1rem;
            padding: 0 1rem;
            //transition: all .3s;

            &:hover {
                color: #c00;
            }
        }

        &:hover &__menu-item {
            /*height: 2rem;*/
            margin-bottom: 1rem;
        }

        &:hover &__menu {
            width: 40rem;
        }
    }
</style>