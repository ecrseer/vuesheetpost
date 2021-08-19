<template>
  <v-card
      max-width="225"
      class="mx-auto"
  >Time:
    <v-list-item-content>
      <v-btn
          v-on:click="editaTime(timeprop)">editar</v-btn>
      <section v-if="editando === timeprop">
          edt
        <FormularioCadastro v-bind:timeprop="timeprop" v-bind:salvarprop="editarcardfunction"></FormularioCadastro>
      </section>
      <div v-else>
        <v-list-item-title >{{timeprop.nome}}</v-list-item-title>
        <v-list-item-subtitle>{{ timeprop.torcida }} torcedores</v-list-item-subtitle>
        <v-list-item-subtitle> Nasceu em {{ timeprop.estado }} </v-list-item-subtitle>
        <v-list-item-subtitle>Tecnico: {{ timeprop.tecnico }} </v-list-item-subtitle>
        <v-list-item-subtitle>{{ timeprop.fundacao_ano }} foi fundado</v-list-item-subtitle>
        <v-list-item-subtitle>{{ timeprop.info }} </v-list-item-subtitle>

      </div>
    </v-list-item-content>
  </v-card>
</template>

<script>
import FormularioCadastro from "./FormularioCadastro.vue";
export default {
  name: 'CardTime',
  components:{FormularioCadastro},
  props: {
    timeprop: Object,
    editarcardfunction:Function
  },
  data: () => {
    return {
      time: { 'nome': 'nada',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''
      },
      editando:null,
    }
  },
  methods:{
    editaTime(time){
      if(time!==this.editando){
        this.editando=time;
      }else{
        this.editando=null;
      }
    }
  }
}
</script>

<style  >
input{
  background-color: #552828;
}
</style>