<template>
<div>
  <!-- <h1>Sample01 : 내일까지</h1>
  <h2 id="sample01"></h2>
  <br/>
  <h1>Sample02 : 2024년 4월 1일까지
  </h1>
    <h2 id="sample02"></h2>
    <h2 id="sample03"></h2>
  <br/>
  <h1>Sample03 : 종료 케이스
  </h1>
  <h2 id="sample04"></h2> -->
  <div ref="countTest">
      {{this.day}}
      <br>
      {{this.hours}}
      <br>
      {{this.minutes}}
      <br>
      {{this.seconds}}
      <br>
      {{this.message}}
  </div>
</div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'countDown',
  data () {
    return {
      day: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      message: '메세지'
    }
  },
  created () {

  },
  mounted () {
    setInterval(() => {
      this.countDownTimer('04/01/2080 00:00 AM')
    }, 1000)
  },

  computed: {
    ...mapGetters(['menus']),
    menus: {
      get () {
        return this.$store.getters.getTime
      }
    }
  },
  methods: {
    test () {
      console.log('hh')
    },
    countDownTimer (date) {
      console.log('실행', date)
      const _vDate = new Date(date) // 전달 받은 일자
      const _second = 1000
      const _minute = _second * 60
      const _hour = _minute * 60
      const _day = _hour * 24
      console.log('_vDate', _vDate)
      let timer

      const now = new Date()
      const distDt = _vDate - now
      if (distDt < 0) {
        clearInterval(timer)
        this.message = '해당 이벤트가 종료 되었습니다!'
        return
      }

      const days = Math.floor(distDt / _day)
      const hours = Math.floor((distDt % _day) / _hour)
      const minutes = Math.floor((distDt % _hour) / _minute)
      const seconds = Math.floor((distDt % _minute) / _second)

      console.log('days', days)

      this.day = days + '일'
      this.hours = hours + '시간 '
      this.minutes = minutes + '분'
      this.seconds = seconds + '초'

      // setInterval(this.showRemaining(_vDate, ), 1000)
    }

  }

}
</script>
