<template>
  <v-app>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <v-main>
      <Index></Index>
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Index from "./pages/Index.vue";

export default {
  name: 'App',

  components: {
    Index,
  },

  data: () => ({
    //
  }),
}
</script>
