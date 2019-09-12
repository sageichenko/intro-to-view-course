<template>
    <div class="app">
        <div class="description">
            Задание в котором нужно было реализовать блог с использованием Vuex, справа отображается содержимое $store.state.
            <br/>
            <a href="https://github.com/sageichenko/intro-to-view-course/blob/master/pages/challenges/comment-form.vue" class="description__link" target="_blank">Компонент</a>
            <br/>
            <a href="https://github.com/sageichenko/intro-to-view-course/blob/master/store/index.js" class="description__link" target="_blank">Хранилище</a>
        </div>
        <div class="blog">
            <div class="blog__post">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-post-photo.jpg"
                     class="blog__main-photo">
                <div class="blog__profile-info">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-main-profile.jpg"
                         class="blog__profile-photo">
                    <span class="blog__name">Julianne Delfina</span>
                </div>
                <p class="blog__post-text">"It's lovely after it rains"</p>
            </div>
            <hr class="separator">
            <ul class="blog__comment-list">
                <li v-for="comment in $store.state.comments" :key="comment" class="blog__comment comment">
                    <img class="comment__img" :src="comment.authorImg" />
                    <span class="comment__author">{{ comment.author }}</span>
                    <p class="comment__text">"{{ comment.text }}"</p>
                </li>
            </ul>
            <input
                    v-model="newComment"
                    v-on:keyup.enter="addComment"
                    placeholder="Add a comment"
                    class="blog__new-comment"
            />
        </div>
        <div class="store">
             <pre class="store__state">
                {{$store.state}}
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newComment: ''
            }
        },

        computed: {
            comments() {
                return this.$store.state.comments;
            }
        },

        methods: {
            addComment() {
                this.$store.dispatch('addComment', this.newComment);
                this.newComment = '';
            }
        }
    }
</script>

<style scoped lang="less">
    .store {
        display: inline-block;
        vertical-align: top;

        &__state {
            font-size: 1.4rem;
        }
    }

    .blog {
        display: inline-block;
        width: 50rem;
        margin: 0 auto;
        padding: 2rem;
        font-family: 'Playfair Display', serif;
        color: #fff;
        letter-spacing: 0.04rem;
        line-height: 1.4rem;
        text-align: center;
        background: #212222;

        &__post {
            position: relative;
            margin-bottom: 1.5rem;
            padding: 1rem 2rem;
            text-align: left;
        }

        &__main-photo {
            width: 100%;
            margin-bottom: 5rem;
        }

        &__profile-info {
            position: absolute;
            bottom: 5rem;
            left: 1rem;
        }

        &__profile-photo {
            border: .3rem solid white;
            width: 8rem;
        }

        &__name {
            font-size: 1.6rem;
            color: #ccc;
        }

        &__post-text {
            margin: .5rem 0 .4rem;
            font-size: 1.4rem;
        }

        &__comment-list {
            margin: 0;
            padding: 0 3.5rem;
            list-style: none;
        }

        &__new-comment {
            width: 100%;
            margin: 3rem 0;
            padding: .8rem 1rem;
            font-family: 'Playfair Display', serif;
            font-size: 1.4rem;
            outline: 0;
        }
    }

    .comment {
        padding: 1rem 0;
        text-align: left;
        border-bottom: .1rem solid #555;

        &__author {
            font-size: 1.5rem;
            color: #bbb;
        }

        &_img {
            margin: 0 1.5rem 0 0;
            border: .3rem solid white;
            transition: 0.3s all ease;
        }

        &__text {
            margin: .7rem .5rem;
            font-size: 1.4rem;
            line-height: 2rem;
        }
    }

    .separator {
        width: 100%;
        border-top: 0;
        border-bottom: .1rem solid #555;
    }
</style>