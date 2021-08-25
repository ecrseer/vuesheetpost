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
    alterna_loading(state){
      state.carregando = !state.carregando;
    },
    novo_time(state){
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
    },
    salvarTime({commit},time){
      commit('alterna_loading');
      if (this.editando) {
        axios.put(
            `https://sheetdb.io/api/v1/cuyfdc2x1vwf4/id/${time.id}`,
            {data: [time]}
        ).then(() => {
          Object.assign(this.editando, time)
          this.time = timeNovo()
          this.carregando = false
          this.editando = false
        })
      } else {
        axios.post(
            'https://sheetdb.io/api/v1/cuyfdc2x1vwf4',
            {data: [time]}
        ).then(() => {
          this.times.push(time)
          this.time = timeNovo()
          this.carregando = false
        })
      }
    },
    editarTime({commit},time){

    }
  }

})

export default store
