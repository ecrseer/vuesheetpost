<template>
  <table>
    <thead>
    <tr >
      <th v-for="(atributo,key) in lista[0]" v-bind:key="key">
        {{ key }}</th>

    </tr>
    </thead>
    <tbody>
    <tr v-for="item in lista" v-bind:key="key">
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
