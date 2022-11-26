<script>
import { RouterLink, RouterView } from 'vue-router'
//import './assets/main.css'
import  Sidebar from './components/Sidebar/Sidebar.vue'
import { sidebarWidth } from './components/Sidebar/state'
import Logo from './components/logo/logo.vue'

export default {
  
  setup(){
    const paths = [
      {
        path:'/Bomba'
      },
      {
        path:'/Pijo'
      },
      {
        path:'/Lecina'
      },
      {
        path:'/KapitanDupaMenu/KapitanDupa'
      }
    ]
   const get_To_Bomba = () =>{

   }
  }
}
</script>

<template class="body">

  <!--
  <div class="container">
   
  <img src="./assets/bomba_bgc2.png" alt="" @click="">
   <p class="paragraph comment" >KAPITAN BOMBA</p>
  <img src="./assets/ojciec_pijo.jpg" alt="" @click="">
   <p class="paragraph comment" >OJCIEC PIJO</p>
  <img src="./assets/łęcina.jpg" alt="" @click=""> 
  <p class="paragraph comment">BOGUSŁAW ŁĘCINA</p>
  </div>
  
 
    <Logo/>
    <div :style="{'margin-left': sidebarWidth}"></div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/Bomba">Bomba</RouterLink>
      </nav>
-->
  <RouterView />
  
</template>
<style >
body{

 
  background-color: rgb(59, 59, 61);
  margin-top: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;

}

</style>
