<template>
  <table class="table table-hover" v-bind:class="table-hover">
    
    <thead>
      
    <tr >
      <th  scope="col"
      v-for="(atributo,key) in lista[0]" v-bind:key="key">
        {{ key }}</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="item in lista" v-bind:key="item">
      <td v-for="(atributo,key) in item" v-bind:key="key">
        {{ atributo }}
      </td>
      <!-- iterou por todos atributos de um item só -->
       <td>
          <button @click="editar(time)">editar</button>
        </td>
        <td>
          <span v-if="carregando">carregando</span>
          <button v-else @click="apagar(time, index)">apagar</button>
        </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TabelaMarota',
  props:['lista']
}
</script>
