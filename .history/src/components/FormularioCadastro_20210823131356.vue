<template>
  <section>
    
    <CampoDropDown nome="estado" v-model="timeprop.estado" :itens="estados"></CampoDropDown>
    <Campo v-bind:tipocampo="'text'" nome="nome" v-model="timeprop.nome"></Campo>
    <Campo v-bind:tipocampo="'text'" nome="estado" v-model="timeprop.estado"></Campo>
    <Campo v-bind:tipocampo="'text'" nome="tecnico" v-model="timeprop.tecnico"></Campo>
    <Campo v-bind:tipocampo="'number'" nome="torcida" v-model="timeprop.torcida"></Campo>
    <Campo v-bind:tipocampo="'number'" nome="fundacao" v-model="timeprop.fundacao_ano"></Campo>
    <CampoTextArea nome="info" v-model="timeprop.info"></CampoTextArea>
 <CampoSelect
        nomecampo="estadoD"
        v-model="timeprop.estado"
        v-bind:estados="estados"
    ></CampoSelect>
    <v-btn block  color="secondary" v-on:click="salvarprop">salvar</v-btn>
  </section>
</template>

<script>

import Campo from "../components/Campo.vue";
import CampoSelect from "../components/CampoSelect.vue";
import CampoTextArea from "../components/CampoTextArea.vue";
import CampoDropDown from "../components/CampoDropDown.vue";

export default {
  name: "FormularioCadastro",
  components:{Campo, CampoTextArea, CampoSelect, CampoDropDown},
  props:{
    timeprop:Object,
    salvarprop:Function
  },
  data: ()=> {
    return{
      estados:['SP','RJ']
    }
  }

}
</script>

<style scoped>

</style>