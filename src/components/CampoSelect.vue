<template>
  selct
  <div class="form-group">
    <label v-bind:for="nomecampo" class="form-label"></label>
    <select v-bind:id="nomecampo"
        class="form-select" @input="$emit('input', $event.target.value)">
      <option v-for="valor in valores" :value="valor">{{ valor }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CampoSelect",
  props:{
    nomecampo:String,
  },
  data:()=>{
    return{
      valoresd:{type:Array,
        default:()=>['um','dois']},
      valores:['d','a']
    }
  }
}
</script>

<style >
select{
  border: 1px solid;
}

</style>