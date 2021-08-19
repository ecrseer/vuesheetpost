<template>
  <v-card
      max-width="225"
      class="mx-auto"
  >
    <v-list-item-content>
      <v-list-item-title>{{timeprop.nome}}</v-list-item-title>
      <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
    </v-list-item-content>
  </v-card>
</template>

<script>
export default {
  name: 'CardTime',
  props: {
    timeprop: Object
  },
  data: () => {
    return {
      time: { 'nome': 'nada',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''
      }
    }
  }
}
</script>

<style scoped>

</style>