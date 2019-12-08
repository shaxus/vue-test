<template>
    <div>
      <div >{{this.$attrs.foo}}</div>
      <button @click="updateText">{{this.$attrs.foo}}</button>
    </div>
</template>

<script>
    export default {
        name: "SocketVueChild",
        methods:{
          updateText(event){
            this.$emit('update-text','kkkkkkkkkkkkk');
          }
        }
    }
</script>

<style scoped>

</style>
