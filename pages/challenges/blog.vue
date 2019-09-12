<template>
    <div class="blog">
        <h2 class="blog__header">Blog Posts</h2>

        <div class="blog__new new-post">
            <h3 class="new-post__header">Add a New Post</h3>
            <form class="new-post__form" @submit.prevent="addPost">
                <input class="new-post__text-input" v-model="newTitle" placeholder="title" required/>
                <input class="new-post__text-input" v-model="newAuthor" placeholder="author name" required/>
                <select class="new-post__label-select label-select" v-model="newLabel" required>
                    <option class="label-select__option" disabled value="">Add a New label</option>
                    <option class="label-select__option" v-for="label in labels" :key="label">{{label}}</option>
                </select>
                <button class="new-post__submit" type="submit">Add New Blog Post</button>
            </form>
        </div>

        <select class="blog__label-select label-select" v-model="selectedLabel">
            <option class="label-select__option" disabled value="">Filter with a label</option>
            <option class="label-select__option" v-for="label in labels" :key="label">{{label}}</option>
        </select>

        <div class="blog__post" v-for="post in filteredPost" :key="post">
            <span class="post__label">{{ post.label }}</span>
            <p class="post__title">{{ post.title }}</p>
            <small class="post__author">{{ post.author }}</small>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                labels: ['science','math','poetry','history'],
                selectedLabel: '',
                posts: [
                    {
                        author: '@vFitzgerald',
                        title: 'Quod Ducimus Omnis',
                        label: 'science'
                    },
                    {
                        author: '@mPalmer',
                        title: 'Vero Eius Laboriosam Ex Repudiandae',
                        label: 'math'
                    },
                    {
                        author: '@mDean',
                        title: 'Magnam Odit',
                        label: 'science'
                    },
                    {
                        author: '@tCole',
                        title: 'Velit Mollitia Voluptates Assumenda',
                        label: 'science'
                    },
                    {
                        author: '@jCooper',
                        title: 'Eum Commodi Cupiditate',
                        label: 'poetry'
                    },
                    {
                        author: '@lLamb',
                        title: 'Amet',
                        label: 'history'
                    },
                    {
                        author: '@fMartin',
                        title: 'Voluptatem Fuga Cum Asperiores Error',
                        label: 'science'
                    },
                    {
                        author: '@eHayes',
                        title: 'Ipsa Consectetur Rerum Repellat Quia',
                        label: 'math'
                    },
                    {
                        author: '@cCollier',
                        title: 'Dolor Nihil Delectus',
                        label: 'science'
                    },
                    {
                        author: '@cBenson',
                        title: 'Labore Ipsum Ad Pariatur',
                        label: 'poetry'
                    }
                ],
                newTitle: '',
                newAuthor: '',
                newLabel: '',
            }
        },

        methods: {
            addPost() {
                this.posts.push({
                    author: this.newAuthor,
                    title: this.newTitle,
                    label: this.newLabel
                });
                this.newAuthor = this.newTitle = this.newLabel = '';
            }
        },

        computed: {
            filteredPost() {
                if (!this.selectedLabel) return this.posts;
                let filter = this.selectedLabel;
                return this.posts.filter( (item) => { if (item.label === filter) return item });
            }
        }
    }
</script>

<style scoped lang="less">
    .blog {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 40rem;
        margin: 0 auto;
        padding: 1rem 4rem;
        font-family: 'Work Sans', sans-serif;

        &__header {
            text-transform: uppercase;
            letter-spacing: 0.08em;
            text-align: center;
            font-size: 2rem;
        }
    }

    .new-post {
        background: #666;
        border: #222;
        margin-bottom: 4rem;
        padding: .5rem;
        text-align: center;

        &__submit {
            width: 97.5%;
            margin-bottom: 1.5rem;
            padding: 1rem 1rem;
            font-size: 1.4rem;
            color: white;
            font-family: 'Work Sans', sans-serif;
            font-weight: 300;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.08rem;
            border: none;
            border-radius: .3rem;
            cursor: pointer;
            background: #222;
            transition: 0.25s all ease;

            &:hover {
                transform: translateY(.1rem);
            }
        }

        &__text-input {
            margin: 0 0 1rem;
            font-size: 1.5rem;
        }

        &__label-select {
            width: 97.5%;
            margin-bottom: 1rem;
        }

        &__header {
            margin: 1rem 0;
            color: white;
            font-size: 1.8rem;
            text-transform: uppercase;
            font-weight: 300;
            letter-spacing: 0.05rem;
        }
    }

    .post {
        margin: .5rem 0 1rem;
        padding: 1rem 2rem;
        background: #eee;
        border: .1rem solid #ddd;
        border-radius: .3rem;

        &__title {
            margin: 1rem 0 .5rem;
            font-size: 1.5rem;
            font-weight: bold;
        }

        &__label {
            float: right;
            margin-top: 1rem;
            padding: .5rem 1rem;
            color: black;
            font-size: 1.5rem;
            border: .1rem solid black;
            background: white;
            border-radius: .3rem;
        }
    }

    .label-select {
        cursor: pointer;

        &,
        &__option {
            font-size: 1.4rem;
        }
    }
</style>