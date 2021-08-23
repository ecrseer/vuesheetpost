<template>
  <table class="table table-hover">
    <thead>
      AVE
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
