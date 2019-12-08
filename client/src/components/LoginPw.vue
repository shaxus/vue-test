<template>
    <div>
      <button>{{name}}</button>
      <button>{{age}}</button>
      <button>{{email}}</button>
      <button>{{sure}}</button>
      <slot>reset</slot>
    </div>
</template>

<script>
    export default {
      name: "LoginPw",
      props:{
        name:{
          type:String,
          required: true
        },
        age: Number,
        email:String,
        sure:{
          type:String,
          default:'提交'
        }
      }
    }
</script>

<style scoped>

</style>
