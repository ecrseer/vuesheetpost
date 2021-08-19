<template>
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
        v-on:update:modelValue="estado=$event.target.value"
    ></CampoSelect>
    <v-btn block  color="secondary" @click="salvar">salvar</v-btn>
  </section>
</template>

<script>

import Campo from "../components/Campo.vue";
import CampoSelect from "../components/CampoSelect.vue";
import CampoTextArea from "../components/CampoTextArea.vue";

export default {
  name: "FormularioCadastro",
  components:{Campo, CampoTextArea, CampoSelect}
}
</script>

<style scoped>

</style>