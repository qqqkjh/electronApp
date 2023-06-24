<template>
  

    <button v-on:click="onClickButton">시작</button>
  </template>
  
  <script>
  import { onMounted } from 'vue';

  export default {
 
      setup(){
          const generateClassFile= ()=> {           
            ipcRenderer.send('message-hello-main');
            
            ipcRenderer.send(API.GENERATE_CLASS_FILE);
            
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
  
  
  
  