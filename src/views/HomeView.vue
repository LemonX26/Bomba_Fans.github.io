<template class="body">

  
    <div class="container" >
     <div> 
      <p class="paragraph comment" >KAPITAN BOMBA</p>
      <img src="../assets/bomba_bgc2.png" alt="" @click="get_To_Bomba">
     </div>

   <div>
    <p class="paragraph comment" >OJCIEC PIJO</p>
    <img src="../assets/ojciec_pijo.jpg" alt="" @click="get_To_Pijo">
    </div>

    <div>
      <p class="paragraph comment">BOGUSŁAW ŁĘCINA</p>
    <img src="../assets/łęcina.jpg" alt="" @click="">  
  </div>
  <div>
      <p class="paragraph comment">KAPITAN DUPA</p>
    <img src="https://res.cloudinary.com/drqyi2izy/image/upload/v1668451581/Kapitan_Bomba/kapitan_dupa_nhlrtc.png" alt="" @click="get_To_Dupa">  
  </div>
  
    </div>
    
   
     <!-- <Logo/>
      <div :style="{'margin-left': sidebarWidth}"></div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/Bomba">Bomba</RouterLink>
        </nav>
  -->
    <RouterView />
    
  </template>
<script>
export default {
  methods:{
    get_To_Dup(){
      window.location = window.location.href+paths[3];
    },
open(){
this.$emit("back_to_main_site",this.get_To_Dup())
}
  },
setup(){
    const paths = [
     'Bomba',
     'OjciecPijo',
     'Lecina',
     'KapitanDupaMenu/Intro'
    ]
const get_To_Bomba = () =>{
    console.log('done',window.location.href+paths[0]);
window.location = window.location.href+paths[0];
}
const get_To_Pijo = () =>{
    console.log('done',window.location.href+paths[1]);
window.location = window.location.href+paths[1];
}
const get_To_Dupa = () =>{
    console.log('done',window.location.href+paths[3]);
window.location = window.location.href+paths[3];
}
function dupa(){
    console.log('DUPA')
}
return{get_To_Bomba,paths,get_To_Pijo,get_To_Dupa}
}
}
</script>
  <style scoped >
  body{
    background-color: rgb(59, 59, 61);

  }
  .container {
    box-sizing: border-box;
    width: 1100px;
    display: flex;
    justify-content: space-between;
  }
  .container img{
margin-left: 5px;
    max-width: 350px ;
    max-height: 200px ;
    transform-origin: center;
    transform: perspective(800px) rotateY(0deg);
    transition: 0.3s;
    -webkit-box-reflect: below 1px linear-gradient(to bottom, rgba(0,1,0,0.0), rgba(0,0,0,0.05)); /*shadow*/
  }
  .container :hover img {
   opacity: 0.1  /*nieprzezroczystość */
  }
  .container img:hover { /*The :hover selector is used to select elements when you mouse over them. */
    transform: perspective(800px) rotateY(30deg); 
    opacity: 1;
  }
  .paragraph
  {
    position: relative;
    
   
  }
  .comment{
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
      font-size: 20px;
      font-weight: 400;
      font-display: flex;
      font-variant: inherit;
      text-rendering: geometricPrecision;
      font-style: italic;
  }
  </style>