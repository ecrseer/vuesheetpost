<template>
  selct
  <div class="form-group">
    <label v-bind:for="nomecampo" class="form-label"></label>
    <select v-bind:id="nomecampo"
        class="form-select" 
        @input="$emit('update:modelValue', $event.target.value)">
      <option v-for="estado in estados" v-bind:key="estado"
       :value="estado"
             
      >{{ estado }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "CampoSelect",
  props:{
    nomecampo:String,
    modelValue:String,
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