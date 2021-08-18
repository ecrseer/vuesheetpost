<template>
  <v-app>
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
    HelloWorld,
  },

  data: () => ({
    //
  }),
}
</script>
