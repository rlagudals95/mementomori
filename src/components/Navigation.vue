<template>
  <div class = "nav-contaier">
     <router-link class="link" :to="{ name: 'Home' }">mementomori</router-link>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'navigation',
  created () {
    this.$store.dispatch('getLife')
  },
  methods: {
    ...mapActions(['getLife', 'test'])
  },
  state: {
    ...mapState(['count'])
  }
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
