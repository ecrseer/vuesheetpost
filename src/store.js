import {createStore} from 'vuex'
import axios from 'axios'

let timeNovo = () => {
  return {
    'id': 'INCREMENT',
    'nome': '',
    'estado': '',
    'tecnico': '',
    'torcida': '',
    'fundacao_ano': '',
    'info': ''
  }
}

const store = createStore({
  state() {  // equivalente ao data de um componente
    return {
      times: [],
      time:timeNovo(),
      carregando: false,
      editando:false,
      estados: [
        'RJ',
        'SP',
        'RS',
        'PA'
      ]
    }
  },
  getters: { // equivalente ao computed de um componente

  },
  mutations: { // altera o state
    time_carregado(state, times){
      state.times = times
    },
    alterna_loading(){
      state.carregando = !state.carregando;
    },
    renovar_time(){
      state.time = timeNovo();
    }

  },//
  actions: { // equivalente ao methods de um componente
    carregar({commit}) {

      console.log('dbg')
      axios.get('https://sheetdb.io/api/v1/cuyfdc2x1vwf4').then(({data}) => {
        commit('time_carregado', data)
      })
    },
    alternar_carregamento({commit}){
      commit('alterna_loading')
    } 
  }
})

export default store
