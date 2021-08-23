<template>
  <main cl>

  </main>

</template>


<script>
// todo:
// atualizar lista superior
// limpar campos depois de salvar
// estados como drop-down
// torcida tem q ser do tipo number
// fundacao do tipo number
// info tem q ser um textarea

// transformar a listagem de times em uma tabela
// excluir
// editar um time

import Campo from './components/Campo.vue'
import axios from 'axios'
import CampoDropDown from './components/CampoDropDown.vue'
import CampoText from './components/CampoText.vue'
import TabelaMarota from './components/TabelaMarota.vue'

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

export default {
  components: {TabelaMarota, CampoText, CampoDropDown, Campo},
  data() {
    return {
      time: timeNovo(),
      times: [],
      carregando: true,
      editando: false,
      estados: [
        'RJ',
        'SP',
        'RS',
      ]
    }
  },
  methods: {
    salvar() {
      this.carregando = true
      if (this.editando) {
        axios.put(
            `https://sheetdb.io/api/v1/${import.meta.env.VITE_TABELA_GJ}/id/${this.time.id}`,
            {data: [this.time]}
        ).then(() => {
          Object.assign(this.editando, this.time)
          this.time = timeNovo()
          this.carregando = false
          this.editando = false
        })
      } else {
        axios.post(
            `https://sheetdb.io/api/v1/${import.meta.env.VITE_TABELA_GJ}`,
            {data: [this.time]}
        ).then(() => {
          this.times.push(this.time)
          this.time = timeNovo()
          this.carregando = false
        })
      }
    },
    apagar(time, index) {
      console.log(time)
      console.log(index)
      this.carregando = true
      axios.delete(`https://sheetdb.io/api/v1/${import.meta.env.VITE_TABELA_GJ}/id/${time.id}`).then(() => {
        this.times.splice(index, 1)
        this.carregando = false
      })
    },
    editar(time) {
      this.editando = time
      this.time = {...time}
    }
  },
  mounted() {
    this.carregando = true
    axios.get(`https://sheetdb.io/api/v1/${import.meta.env.VITE_TABELA_GJ}`).then(({data}) => {
      this.times = data
      this.carregando = false
    })
  }
}
</script>

<style>
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";


</style>
