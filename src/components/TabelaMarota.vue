<template>
  <table class="table table-hover table-responsive-lg"  >
    
    <thead>
      
    <tr >
      <th  scope="col"
      v-for="(atributo,key) in lista[0]" v-bind:key="key">
        {{ key }}</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in lista" v-bind:key="item">
      <td v-for="(atributo,key) in item" v-bind:key="key">
        {{ atributo }}
      </td>
      <!-- iterou por todos atributos de um item só -->
       <td>
          <button
          class="btn btn-primary"
           @click="handleItemSelecionado('edicao',item)">editar</button>
        </td>
        <td>
          <div 
          class="alert alert-primary" 
          v-if="carregando">carregando</div>
          <button v-else 
          class="btn btn-danger"
          @click="handleItemSelecionado('deletar',{time, index})">apagar</button>
        </td>
    </tr>
    </tbody>
  </table>
  <!--
   -->
</template>

<script>
export default {
  name: 'TabelaMarota',
  props:['lista','carregando'],
  methods:{
    handleItemSelecionado(acao,params){
        if(acao==='edicao'){
          this.$emit('edicao',params)
        }
        if(acao==='apagar'){
          this.$emit('deletar',params)
        }
    }
  }
}
</script>

<style scoped>
table{
  max-width: 200px;
}
</style>
