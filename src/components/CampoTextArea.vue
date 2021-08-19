<template>
  <div class="col-6">
    <label :for="nome" class="form-label">{{ nome }}</label>
    <textarea
           class="form-control"
           :id="nome"
           :placeholder="nome"
           :value="modelValue"
           @input="$emit('update:modelValue', $event.target.value)">
    </textarea>

  </div>
</template>

<script>
export default {
  name: 'CampoTextArea',
  emits: ['update:modelValue'],
  props: [ 'nome', 'modelValue'],
  methods: {
    atualizar(){
      this.$emit('bombom')
    }
  }
}
</script>

<style scoped>
</style>