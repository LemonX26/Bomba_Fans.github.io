<script>
import {collapsed,toggleSidebar,sidebarWidth } from './state.js'
import SidebarLink from './SidebarLink.vue';

export default {
    props: {},
    components: { SidebarLink },
    setup() {
        return { collapsed, toggleSidebar, sidebarWidth };
    },
   
}
</script>
<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">  <!-- v-bind = : --> <!-- v-on = @ -->
      <h1>
        <span v-if="collapsed">
        <div>S</div>
        <div>B</div>
        </span><span v-else>Sidebar</span>
      </h1>
      <div>
        <SidebarLink to="/" icon="fas fa home" class="SidebarLink">Home </SidebarLink>
      </div>
      <div>
        <SidebarLink to="/Dupa" icon="fas fa home" class="SidebarLink">Dupa </SidebarLink>
      </div>
      <div>
        <SidebarLink to="/Bomba" icon="fas fa home" class="SidebarLink icon">Bomba </SidebarLink>
        <div class="logo-image_bomba">
            <img src="@/assets/bomba_head.png" class="img-fluid">
      </div>

      </div>
      <div>
        <SidebarLink to="/OjciecPijo" icon="fas fa home" class="SidebarLink">Pijo </SidebarLink>
        <div class="logo-image_pijo">
            <img src="@/assets/pijo_head2.png" class="img-fluid">
      </div>
      </div>

      <div>
        <SidebarLink to="/KapitanDupaMenu/Intro" icon="fas fa home" class="SidebarLink">Kapitan Dupa </SidebarLink>
        <div class="logo-image_KapitanDupa">
            <img src="https://res.cloudinary.com/drqyi2izy/image/upload/v1668629818/Kapitan_Bomba/kapitan_dupa_cut_zhwiao.png" class="img-fluid">
      </div>
      </div>

      
     
     
     
     
      <span
       class="collapse-icon" 
       :class="{'rotate-180': collapsed}"     
       @click = "toggleSidebar"                           
       >
       <i class="fas fa-angle-double-left" />
       </span>
    </div>
</template>
<style>
:root {
  --sidebar-bg-color: rgb(26, 25, 25);
  --sidebar-item-hover:rgb(26, 25, 25);
  --sidebar-item-active: rgb(26, 25, 25);
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding-bottom: -4px;
  padding: 0.5em;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
}
.sidebar h1 {
  height: 2.5em;
}
.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;
  color: rgba(238, 228, 228, 0.852);
  transition: 0.2s linear;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.SidebarLink
{
  padding-left: 7px;
  text-align: left;
 font-size: 23px;
 padding-top:20px;
}
.bgc
{
  height: 70px;
  width: 70px;
}
.icon{
  border-radius: 50%;
  width: 20px;
  height: 20px;
}
.logo-image_pijo{
    width:52px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    
}
.logo-image_bomba{
  
    width:47px;
    height: 47px;
    border-radius: 55%;
    overflow: hidden;
    
}
.logo-image_KapitanDupa{
  
  width:47px;
  height: 47px;
  border-radius: 55%;
  overflow: hidden;
  
}
</style>