<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <button v-on:click="onClickButton">시작</button>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<script>
import { onMounted } from 'vue';
import HelloWorld from './components/HelloWorld.vue'

export default {
    components : {
      HelloWorld
    },

    setup(){
        const generateClassFile= ()=> {           
          ipcRenderer.send('message-hello-main');
          ipcRenderer.send('generate-class-file');
          
        }
        
        const onClickButton = () =>{
          generateClassFile()
        } 


        onMounted(()=>{
          ipcRenderer.receive('message-hello-render', (event, ...arg) => {
            console.log(event, arg)
        });
        })
        return {
          onClickButton
        }
    },


}
</script>



