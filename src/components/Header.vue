<template>
  <header class = "nav-contaier">
     <router-link class="link" :to="{ name: 'Home' }">mementomori</router-link>
  </header>
</template>

<script>
export default {
  name: "header",

}
</script>

<style  scoped>
.nav-contaier {
  padding: 20px;
}

.link {
  text-decoration: none;
  color: rgba(0, 0, 0, 0.7);
  font-weight: bold;
  font-size: 1.7rem;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
}



</style>
