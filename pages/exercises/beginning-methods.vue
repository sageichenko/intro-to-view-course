<template>
    <div class="app">
        <div class="description">
            Обычные методы, по нажатию кнопки новый коммент добавляется в массив.
            <br/>
            <a href="https://codepen.io/sageichenko/pen/EqQGzz" class="description__link" target="_blank">Код на codeopen</a>
        </div>
        <div class="blog">
            <div class="blog__comments">
                <ul class="blog__comment-list">
                    <li class="blog__comment" v-for="comment in comments" :key="comment">
                        {{comment}}
                    </li>
                </ul>
            </div>
            <input class="blog__new-comment"
                    v-model="newComment"
                   type="text"
                   placeholder="Add a new comment :)">
            <button class="blog__add-btn"
                    @click="addComment">Add a comment</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                comments: [
                    'Awesome!!!',
                    'This is pretty cool'
                ],
                    newComment: ''
            }
        },

        methods: {
            addComment () {
                if (this.newComment === '') return;
                this.comments.push(this.newComment);
                this.newComment = '';
            }
        }
    }
</script>

<style scoped lang="less">
    .blog {
        width: 37rem;
        margin: 0 auto;
        display: table;
        padding: 2rem;
        line-height: 1.4rem;
        color: #fff;
        letter-spacing: 0.04rem;
        background: #212222;

        &__comment-list {
            margin: 0;
            padding: 0 3.5rem;
        }

        &__comment {
            list-style: none outside none;
            text-align: left;
            padding: 1rem 0;
            border-bottom: .1rem solid #555;
            font-size: 1.6rem;
        }

        &__new-comment {
            display: block;
            width: 100%;
            margin: 3rem auto;
            padding: .8rem 1rem;
            outline: 0;
            font-size: 1.6rem;
        }

        &__add-btn {
            padding: .5rem 1rem;
            background: white;
            border: none;
            cursor: pointer;
            outline: none;
            font-size: 1.6rem;
            transition: all .2s;

            &:hover {
                background: #ccc;
            }
        }
    }
</style>