<template>
    <div>
      <button @click="showText">{{msgs}}</button>
      <SocketVueChild v-bind="$attrs" v-on="$listeners"></SocketVueChild>
    </div>
</template>

<script>
  import SocketVueChild from '@/components/SocketVueChild'
    export default {
        name: "SocketVue",
        inheritAttrs: false,
        props:{
          msgs:{
            type: String,
            required: true
          }
        },
        components:{
          SocketVueChild
        },
        created(){
          console.log(this.$attrs);
        },
        methods:{
          showText(event){
            this.$emit('xianshi', 'ffffff');
          }
        }

    }
</script>

<style scoped>

</style>
