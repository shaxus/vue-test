<template>
   <div>
     <header>
       <slot name="header"></slot>
     </header>
     <main>
       <slot name="default"></slot>
     </main>
     <footer>
       <slot name="footer"></slot>
     </footer>
     <span>
    <slot name="siji" v-bind:user="user">
      {{ user.lastName }}
    </slot>
    </span>
   </div>
</template>

<script>
    export default {
        name: "Check",
        data(){
         return{
           user:{
             lastName:'dd',
             firstName:'cc'
           }
         }
        },
        props:{
          // user:{
          //   lastName:{
          //     Type:String,
          //     default:'ninin'
          //   },
          //   firstName:{
          //     Type:String,
          //     default:'xufei'
          //   }
          // }
        },
      methods:{
        sum(){
          console.log('这是子组件的方法');
        }
      }
    }
</script>

<style scoped>

</style>
