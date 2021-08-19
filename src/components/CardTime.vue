<template>
  <v-card
      max-width="225"
      class="mx-auto"
      v-on:click="editaTime(timeprop)"
  >
    <v-list-item-content>
      <h5 v-if="editando === timeprop">to editando esse</h5>
      <h6 v-else>n to editando</h6>
      <v-list-item-title >{{timeprop.nome}}</v-list-item-title>
      <v-list-item-subtitle>{{ timeprop.torcida }} torcedores</v-list-item-subtitle>
    </v-list-item-content>
  </v-card>
</template>

<script>
export default {
  name: 'CardTime',
  props: {
    timeprop: Object,

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

<style scoped>

</style>