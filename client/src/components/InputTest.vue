<template>
    <div>
      <input type="checkbox" :checked="checked" @change="checkValue" >
      <!--<input type="checkbox" :checked="checked" @change="$emit('input',$event.target.checked)" >-->
    </div>
</template>

<script>
    export default {
        name: "InputTest",
        model:{
          prop:'checked',
          event:'input'
        },
        props:{
          checked:{
            type:Boolean
          }
        },
      methods:{
        checkValue(event){
          this.$emit('input',event.target.checked)
        }
      }
    }
</script>

<style scoped>

</style>
