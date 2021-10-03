import axios from 'axios'

export const actions = {

  getLife({ commit }) {
    axios.request({method: 'GET',
      url: 'https://life-left.p.rapidapi.com/time-left',
      params: {birth: '14 April 1977', gender: 'male'},
      headers: {
        'x-rapidapi-host': 'life-left.p.rapidapi.com',
        'x-rapidapi-key': 'SIGN-UP-FOR-KEY'
      }}).then(function (response) {
        console.log(response.data);
        commit("SET_LIFT",response.data);
    }).catch(function (error) {
      console.error(error);
    })
  }
}
