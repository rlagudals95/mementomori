<template>
<div>
  {{ countTest }}
  {{menus}}
</div>
</template>
<script>
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';

export default {
    name:"countDown",
    data() {
        return {
            countDown : 10,
            countTest: new Date()
        }
    },
    created() {
        //this.countDownTimer();
         this.$store.commit("getLife")
    },
    actions: {
       getLife({ commit }) {
        axios.request({method: 'GET',
          url: 'https://life-left.p.rapidapi.com/time-left',
          params: {birth: '14 April 1977', gender: 'male'},
          headers: {
            'x-rapidapi-host': 'life-left.p.rapidapi.com',
            'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
          }}).then(function (response) {
            console.log(response.data);
            commit("SET_LIFE",response.data);
        }).catch(function (error) {
          console.error(error);
        })
      }
    },
    computed: {
      ...mapGetters(['menus']),
      menus: {
        get() {
          return this.$store.getters.getTime;
        }
      }
    },
    methods: {
        countDownTimer() {
            if(this.countDown > 0) {
                setTimeout(()=> {
                    this.countDown -= 1
                    this.countDownTimer()
                }, 1000)
            }
        }
    },

}
</script>
