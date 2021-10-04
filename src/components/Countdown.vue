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
  <div ref="counttest">ddddd</div>
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
        this.countTimer();
        //console.log('hi')
        //console.log('refs', this.$refs.counttest.focus() );
    },
    mounted(){
         this.countDownTimer('04/01/2024 00:00 AM', this.$refs.counttest.innerText);
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
        },


         // this.$refs.counttest.innerText = "hi"

          countDownTimer (date) {
                let _vDate = new Date(date, id); // 전달 받은 일자
                let _second = 1000;
                let _minute = _second * 60;
                let _hour = _minute * 60;
                let _day = _hour * 24;
                let timer;
                function showRemaining() {
                    let now = new Date();
                    let distDt = _vDate - now;
                    if (distDt < 0) {
                      clearInterval(timer);
                      this.$refs.countTest.innerText = '해당 이벤트가 종료 되었습니다!';
                      return;
                      }
                    let days = Math.floor(distDt / _day);
                    let hours = Math.floor((distDt % _day) / _hour);
                    let minutes = Math.floor((distDt % _hour) / _minute);
                    let seconds = Math.floor((distDt % _minute) / _second); //document.getElementById(id).textContent = date.toLocaleString() + "까지 : ";

                    id = days + '일 ';
                    //this.$refs.counttest.innerText += hours + '시간 ';
                    //this.$refs.counttest.innerText += minutes + '분 ';
                    //this.$refs.counttest.innerText += seconds + '초';
                  }
                timer = setInterval(showRemaining, 1000);

            }
    },

}
</script>
