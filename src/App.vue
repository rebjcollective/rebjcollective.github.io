<template>
  <div id="app">
    <div class="section" v-for="(item, i) in sections" :key="i">
      <Title :title="item.title"/>
    </div>
    <Logo class="logo"/>
  </div>
</template>

<script>
import Logo from './components/Logo.vue'
import Title from './components/Title.vue'

export default {
  name: 'App',
  components: {
    Logo,
    Title
  },
  data() {
    return {
      sections: [
        {
          title: 'BASICS'
        },
        {
          title: 'TOP 5'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import './main.scss';
body {
  margin: 0;
  overscroll-behavior: none;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: $bg;
  height: 400vh;
}
.logo {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
}
.section {
  position: relative;
}
</style>
