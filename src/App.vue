/* eslint-disable*/
<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>
<script>
import Header from './components/Header.vue';
import axios from 'axios'

export default {
  name: "app",
  components: { Header },
  created() {
      //console.log('hi');
      //console.log('blogPostsFeed');
      //this.getTime();
  },

  actions : {

  }
}
</script>

<style>

*{
  margin: 0;
}

@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap');

#app {
 font-family: 'Noto Sans KR', 'NanumSquare', sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
  background: url('https://images.unsplash.com/photo-1566041510632-30055e21a9cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  object-fit: fit;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
/* eslint-enable*/
