import Vue from 'vue';
import Vuex from 'vuex';
import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

const state = {
  menus: [],
  tt: "sdffff"
}

export const count = {
  state,
	getters,
  actions,
  mutations
}

// export default new Vuex.Store({
// 	state: {
// 		menus: [],
//     	},
// 	getters: {
// 		menuItems(state) {
// 			return state.menus;
// 		},
//         },
//     	mutations,
//     	actions,
// });


//  getTime (){
//         let options = {
//         method: 'GET',
//         url: 'https://life-left.p.rapidapi.com/time-left',
//         params: {birth: '14 April 1977', gender: 'male'},
//         headers: {
//           'x-rapidapi-host': 'life-left.p.rapidapi.com',
//           'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
//         }
//       };

//       axios.request(options).then(function (response) {
//         console.log('data',response.data);
//       }).catch(function (error) {
//         console.error(error);
//       })
//     }
