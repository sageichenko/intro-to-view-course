<template>
  <div>
    <Header/>
    <Content>
      <nuxt/>
    </Content>
  </div>
</template>

<script>
  import Header from './../components/Header.vue';
  import Content from './../components/Content.vue';

  export default {
    components: {
      Header,
      Content
    }
  }
</script>
