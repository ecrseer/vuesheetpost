<template>
  <table class="table table-hover" v-bind:class="table-hover">
    
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
           @click="handleItemSelecionado('editar',item)">editar</button>
        </td>
        <td>
          <div 
          class="alert alert-primary" 
          v-if="carregando">carregando</div>
          <button v-else 
          class="btn btn-danger"
          @click="$emit('apagar',[time, index])">apagar</button>
        </td>
    </tr>
    </tbody>
  </table>
  <!--
    as funcoes editar/apagar deveriam estar aqui?
     estado DropDown nao carrega ao editar no outro proj
   -->
</template>

<script>
export default {
  name: 'TabelaMarota',
  props:['lista'],
  methods:{
    handleItemSelecionado(acao,params){
        if(acao==='apagar'){
          this.$emit('editar',params)
        }
        if(acao==='editar'){

        }
    }
  }
}
</script>
