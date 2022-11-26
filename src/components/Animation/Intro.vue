<template>
  <div class="body"  >
  <!--  <button @click="go_to_bomba">CHUJGDJFG</button>-->
  <p @click="start_video" class="start" v-if="on==0">CLICK TO START</p>
  <p @click="skip_intro" class="start" v-if="on==2">SKIP</p>
  <p class="start" v-if="on==1"></p>
    <video @click="start_video" id="vid1" width="1920" height="1080" 
      src="https://res.cloudinary.com/drqyi2izy/video/upload/v1668803914/Kapitan_Bomba/intro_short_kwlvtk.mp4" type="video/mp4">
     
    
</video>
  </div>
</template>
<script>
 import {ref} from 'vue'
export default{
 
  name:'Intro',
  methods: {
    go_to_bomba ()  {
      window.location = "/KapitanDupaMenu/KapitanDupa"
  },
  start_video(){
      const vid1 = document.getElementById("vid1")
vid1.play()
console.log(this.on)
this.on = 1
vid1.onended = (()=>{
  this.go_to_bomba()
})
this.on = 2
  },
  skip_intro(){
    this.go_to_bomba()
    
  }
  },
  setup(){
    const on = ref(0)
    return {on}
  }
 
}
</script>
<style scoped>
.body {
  background-color: black;
  width: 2100px;
  height: 1130px;
}
.start{
  margin: 0;
  z-index: 1;
  color: white;
  font-size: 40px;
  
}

</style>
