<template>

<div>

  <section>
    <TabelaTimes v-bind:timesprop="times"></TabelaTimes>
  </section>
  <section>

    <Campo nome="nome" v-model="time.nome"></Campo>
    <Campo nome="estado" v-model="time.estado"></Campo>
    <Campo nome="tecnico" v-model="time.tecnico"></Campo>
    <Campo nome="torcida" v-model="time.torcida"></Campo>
    <Campo nome="fundacao" v-model="time.fundacao_ano"></Campo>
    <Campo nome="info" v-model="time.info"></Campo>
    <CampoSelect
        v-bind:estados="estadodropdown"
        nomecampo="estadoD"
        v-model="estadodropdown"></CampoSelect>
    <v-btn block  color="secondary" @click="salvar">salvar</v-btn>
  </section>
</div>

</template>


<script>
// todo:
// x atualizar lista superior
// x limpar campos depois de salvar

// estados como drop-down
// torcida tem q ser do tipo number
// fundacao do tipo number
// info tem q ser um textarea

// transformar a listagem de times em uma tabela

// editar um time

import Campo from '../components/Campo.vue'
import axios from 'axios'

import TabelaTimes from "../components/TabelaTimes.vue";
import CampoSelect from "../components/CampoSelect.vue";

export default {
  name:'index',
  components: {CampoSelect, TabelaTimes, Campo},
  data() {
    return {
      time: {
        'id': 'INCREMENT',
        'nome': '',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''
      },
      estadodropdown:['RH','RJ'],
      times: []
    }
  },
  methods: {

    buscarDados() {
      axios.get(import.meta.env.VITE_TABELA_GJ).then(({data}) => {
        this.times = data
      })
    },
    limparCampos() {
      this.time = {
        'id': 'INCREMENT',
        'nome': '',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''
      }
    },

    salvar() {
      axios.post(
          import.meta.env.VITE_TABELA_GJ,
          {data: [this.time]}
      ).then(() =>
          this.limparCampos()
      ).then(() =>
          this.buscarDados())

    }
  },
  beforeUpdated() {

  },
  mounted() {
    console.log('')
    this.buscarDados();

  }
}
</script>

<style>

@import "../styles/global.css";

</style>
