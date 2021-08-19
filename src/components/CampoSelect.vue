<template>
  selct
  <div class="form-group">
    <label v-bind:for="nomecampo" class="form-label"></label>
    <select v-bind:id="nomecampo"
        class="form-select" @input="$emit('input', $event.target.value)">
      <option v-for="estado in estados" :value="estado"
              v-on:click="setDropDownNoTexto($event.target.value)"
      >{{ estado }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CampoSelect",
  props:{
    nomecampo:String,
    value:String,
    estados:{type:Array,
      default:()=>['um','dois']},

  },
  data:()=>{
    return{
      valores:['d','a']
    }
  },
  methods:{
    setDropDownNoTexto(valor){
      console.log(valor)
    }
  }
}
</script>

<style >
select{
  border: 1px solid;
}

</style>