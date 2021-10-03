import Vue from "vue";
import Vuex from "vuex";
import { count } from '@/store/count'



Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    test: "test"
  },
  mutations: {},
  actions: {},
  modules: {
    count
  }
});
