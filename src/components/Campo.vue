<template>
  <div class="col-11">
    <label :for="nome" class="form-label">{{ nome }}</label>
    <input v-bind:type="tipocampo"
           class="form-control"
           :id="nome"
           :placeholder="nome"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)">
  </div>
</template>

<script>
export default {
  name: 'Campo',
  emits: ['update:modelValue'],
  props: ['tipocampo' ,'nome', 'modelValue'],
  methods: {
    atualizar(){
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>
</style>