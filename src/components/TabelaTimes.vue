<template>
  <div>
    <v-card
        max-width="475"
    >
      <CardTime v-for="timeobj in timesprop" v-bind:key="timeobj.id"
                v-bind:timeprop="timeobj"></CardTime>

    </v-card>
  </div>
</template>

<script>
import CardTime from "./CardTime.vue";
export default {
  name: 'TabelaTimes',
  components: {CardTime},
  props:{
    timesprop:Array,
  },
  data: ()=> {
    return {
      headers: [ ],

      times:[{'id':1432,
        'nome': 'nada',
        'estado': '',
        'tecnico': '',
        'torcida': '',
        'fundacao_ano': '',
        'info': ''}],

    }
  },
  mounted() {

  }

}
</script>

<style scoped>

</style>