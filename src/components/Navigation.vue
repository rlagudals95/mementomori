<template>
  <div class = "nav-contaier">
     <router-link class="link" :to="{ name: 'Home' }">mementomori</router-link>
     {{this.$store.state.count.menus}}
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {mapState} from 'vuex'

export default {
  name: "navigation",
  created() {
        //this.countDownTimer();
        this.$store.dispatch('getLife', /*100*/);
  },
  methods: {
    ...mapActions(['getLife','test'])
  },
  state: {
    ...mapState(['menus'])
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
