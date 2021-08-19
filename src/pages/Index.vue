<template>

<div>

  <section>
    <TabelaTimes v-bind:timesprop="times"></TabelaTimes>
  </section>
  <section>

    <Campo v-bind:tipocampo="'text'" nome="nome" v-model="time.nome"></Campo>
    <Campo v-bind:tipocampo="'text'" nome="estado" v-model="time.estado"></Campo>
    <Campo v-bind:tipocampo="'text'" nome="tecnico" v-model="time.tecnico"></Campo>
    <Campo v-bind:tipocampo="'number'" nome="torcida" v-model="time.torcida"></Campo>
    <Campo v-bind:tipocampo="'number'" nome="fundacao" v-model="time.fundacao_ano"></Campo>
    <CampoTextArea nome="info" v-model="time.info"></CampoTextArea>
    <CampoSelect
        v-bind:estados="estadodropdown"
        nomecampo="estadoD"
        v-model="estadodropdown"
        v-on:update:modelValue="time.estado=$event.target.value"
    ></CampoSelect>
    <v-btn block  color="secondary" @click="salvar">salvar</v-btn>
  </section>
</div>

</template>


<script>
// todo:
// x atualizar lista superior
// x limpar campos depois de salvar

//1/2 estados como drop-down
//x torcida tem q ser do tipo number
//x fundacao do tipo number
//x info tem q ser um textarea

//1/2 transformar a listagem de times em uma tabela

// editar um time

import Campo from '../components/Campo.vue'
import axios from 'axios'

import TabelaTimes from "../components/TabelaTimes.vue";
import CampoSelect from "../components/CampoSelect.vue";
import CampoTextArea from "../components/CampoTextArea.vue";

export default {
  name:'index',
  components: {CampoSelect, TabelaTimes,
    Campo, CampoTextArea},
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
