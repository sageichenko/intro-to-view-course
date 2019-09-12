<template>
  <section class="home">
    <div class="home__message-box">
      <p class="home__message-text">
        Этот сайт создан с помощью Vue и Nuxt в процессе прохождения курса <a class="home__link" target="_blank" href="https://drive.google.com/drive/folders/126F3D_hzIHEWNuLmHrU9liQzL1S4IF5E">Intro to Vue</a>.
      </p>
      <p class="home__message-text">
        Исходный код находится <a class="home__link" target="_blank" href="https://github.com/sageichenko/intro-to-view-course">здесь</a>.
      </p>
      <p class="home__message-text">
        Здесь собраны челенджи и некоторые упражнения из лекций, которые я выполнила.
      </p>
      <p class="home__message-text">
        Код упражнений для удобства так же хранится на <a class="home__link" target="_blank" href="https://codepen.io/sageichenko/pens/public">codeopen</a>.
      </p>
      <p class="home__message-text">
        Краткий <a class="home__link" target="_blank" href="https://gist.github.com/sageichenko/ff07fe1bc0ec9541f9295f9439ca1866">конспект</a>, состоящий, по большей части, из примеров и заметок.
      </p>
    </div>
  </section>
</template>

<script>
  export default {
    transition: 'translate'
  }
</script>

<style lang="less">
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }

  body {
    max-width: 120rem;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 1rem;
  }

  a {
    font-size: inherit;
  }

  .home {
    &__message-text {
      font-size: 1.8rem;
    }

    &__link {
      color: #cc0000;
    }
  }

  .description {
    padding: 2rem;
    font-size: 1.8rem;
  }
</style>

