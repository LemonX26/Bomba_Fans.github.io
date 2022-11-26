
<script >
//import {Motion, Presence} from 'motion/vue'
import { onMounted, getCurrentInstance} from 'vue';
import {ref,reactive,computed} from 'vue'
import {animate,spring,timeline,stagger} from "motion"
//import { computed } from '@vue/reactivity';
export default {
  data(){
    return{
      blocks_first_character:
      [
     
      ],
      blocks_second_character:
      [

      ],
      lives:
      [

      ],
      images_lives:
      [
      'https://res.cloudinary.com/drqyi2izy/image/upload/v1668451581/Kapitan_Bomba/kutas_czerwony_ajmsan.jpg',
      "https://res.cloudinary.com/drqyi2izy/image/upload/v1668451581/Kapitan_Bomba/kutas_zielony_muvzkm.jpg"
      ],
      current_image_lives: 0,
     final_score:0,
     audiopaths:
     [
      'https://res.cloudinary.com/drqyi2izy/video/upload/v1668545457/Kapitan_Bomba/Kapitan_dupa_intro_awllx1.mp3'
     ]
    }
  },
  methods:{
    //first character (fucker)
    generate_character_fucker() {
    const length_columns =9
    const length_row =4
      for(let row = 0; row < length_columns; row++){  
        for(let columns = 1; columns <= length_row; columns++){  
           this.blocks_first_character.push({
          id:(length_row*row+ columns),
          value: (length_row*row+ columns)
        })
      
       // check_id=columns*10 + row

        //console.log(this.blocks[check_id].id)
        }
       
        console.log('work')
      }
      for(var i=0;i<length_columns*length_row;i++){
      //  console.log(this.blocks_first_character[i])
      }
      
  },
  make_shape_fucker(){
    const tab = [1,3,4,6,8,9,11,12,20,24,25,27,28,29,31,32,33,36]
    for(var i=0;i<36;i++){
     // console.log(document.getElementById(this.blocks_first_character[i].id))
      for(var j=0;j<tab.length;j++){
        if(this.blocks_first_character[i].id===tab[j]){
        var div = document.getElementById(this.blocks_first_character[i].id)
        //console.log(document.getElementById(this.blocks_first_character[i].id))
      ////  div.classList.add("empty_div")
       // div.classList.remove("box")
        div.style.width=0
        div.style.height=0
      }
      }
     
      }
      //this.play_intro()
  },
  lost_life(){
    const number_of_lives =9
    var lost_lifes = ref(0)
    //let multiply = ref(3)
    this.current_image_lives = 1
    const round_score = 500 //minimum score to unlock higher multiply (500-1round, 1000-2round etc)
      if(this.score>=(round_score*this.multiply)){
        document.getElementById(this.lives[this.lives.length-this.multiply].id).src = this.images_lives[this.current_image_lives]
        this.multiply++
      }

  },
  add_life(){
    const number_of_lives =9
    var lost_lifes = ref(0)
    //let multiply = ref(3)
    this.current_image_lives = 0
     //minimum score to unlock higher multiply (500-1round, 1000-2round etc)
      //if(this.score>=(round_score*this.multiply)){
        for(var i=0;i<number_of_lives;i++){
          document.getElementById(this.lives[i].id).src = this.images_lives[this.current_image_lives]

        }
      //  this.multiply++
      //}

  },
  translate(){
    var character = document.getElementById("container_fucker");
    var x_value = 70 + 'px'
    var y_value = 0 + 'px'
    var transform = `${x_value} ${y_value}`
    character.style.translate = transform
    const went_back = setTimeout(()=>{
     x_value = 0 + 'px' //going back to relative beginning posistion 
     y_value = 0 + 'px'
     transform = `${x_value} ${y_value}`
    character.style.translate = transform
    },100)
    this.lost_life()
  },

reset(){
  this.add_life()
  this.game();

},
  //second character
  generate_character_second() {
    const length_columns =5
    const length_row =7
      for(let row = 0; row < length_columns; row++){  
        for(let columns = 1; columns <= length_row; columns++){  
           this.blocks_second_character.push({
          id:(length_row*row+ columns +50),
          value: (length_row*row+ columns +50)
        })
      
       // check_id=columns*10 + row

        //console.log(this.blocks[check_id].id)
        }
       
       
      }
      for(var i=0;i<length_columns*length_row;i++){
        //console.log(this.blocks_second_character[i])
      }
      console.log('character-second')
      this.create_lives()

  },
  create_lives(){
    const number_of_lives =9
    for(var i=0;i<number_of_lives;i++){
      this.lives.push({
        id:('img')+i,
        src:this.images_lives[this.current_image_lives]
        
    })
    }
   
  },
  make_shape_second (){
    const tab = [1,2,3,4,5,7,8,13,15,19,21,22,24,26,27,28,31,34,35]
    for(var i=0;i<35;i++){
      //console.log(document.getElementById(this.blocks_second_character[i].id))
      for(var j=0;j<tab.length;j++){
        if(this.blocks_second_character[i].id===(tab[j]+50)){
        var div = document.getElementById(this.blocks_second_character[i].id)
       // console.log(document.getElementById(this.blocks_second_character[i].id))
  
       // div.classList.add("empty_div")
      //  div.classList.remove("box")
        div.style.width=0
        div.style.height=0
      }
      }
     
      }
      
  },
game_over(){
  console.log('game over')
  alert('your final score is: '+this.score)
},


  
 /* make_score(){
    let score = ref(0)
   var playing_div = document.getElementById("btn_playing");
   playing_div.addEventListener('click',function(){
    score.value+=20;
    console.log(score.value)
   })
   if(score>100){
  this.lost_life(1);
  }
  //this.score = score;
  }
*/
  },




  setup(){ //make_score nie moze sie wykonywac przy click w START trzeba tto zmienic
    let score = ref(0);
    let multiply = ref(1)
    let  playable= ref(1)
    const play_intro = ()=>{
  var audio = new Audio('https://res.cloudinary.com/drqyi2izy/video/upload/v1668545457/Kapitan_Bomba/Kapitan_dupa_intro_awllx1.mp3')
audio.play()
console.log('play')

}
    const game = ()=>{
      //let playable = 1;
      //play_intro();
     // setTimeout(()=>{
        if(playable.value==1){
        make_score() 
      }
      else if(playable.value!=1){
        make_score() 
        score.value=0
        multiply.value=1
        playable.value=1
        this.add_life()
       
      }
  // },2000)
    
   // if(score.value<6000){ make_score()}
   // else if(score.value>6000){game_over() }
    }
  
  const make_score = ()=>{
   
    setTimeout(()=>{ //playtime
   // console.log('chuj')
   playable.value=0
     game_over()
     return score.value
   },10000)
   if(score.value==0){
    var playing_div = document.getElementById("btn_playing");
    playing_div.addEventListener('click', function e(){
    if(playable.value==1){
      score.value+=(20*multiply.value);
   console.log(score.value)
    }
   
   })
   }
   
  }
  const game_over = ()=>{
    console.log('game over')
    if(score.value==0) //when player clicked start but didnt play and got final score equals 0 event listener multiply and after next start 'click' function execution multiply (2,3,4) times
    score.value=null
  alert('your final score is: '+ score.value)
  }
 
  return{make_score,score,multiply,game_over,game}
},

mounted(){ //Instance: This hook is called after the component/instance has been mounted.
  this.generate_character_second()
  this.generate_character_fucker()
  this.lost_life()
},
beforeUpdate(){ //Instance: This hook is called right before the component is about to update its DOM tree due to a reactive state change.
  this.make_shape_second()
  this.make_shape_fucker()
  
 // this.lost_life()
},

  /*
  setup(){
    const move = ()=>{
     
      }
      onMounted(()=>{
    const animation = animate(".chuj", { translateX: 50 , opacity:0.5,easing:"ease-out"}, { duration: 6 })
    
    const currentTime = animation.currentTime
    animation.currentTime = 1
    const currentPlaybackRate = animation.playbackRate
    animation.playbackRate = currentPlaybackRate *1 //Get/set the current playback rate (speed of animation) of the animation.
      
    })

  }
  */
}


</script>

<template>
  <div class="body">
  <!---->  <router-link 
   to="/KapitanDupa/WelcomeItem"
   
    ></router-link>
    <router-view></router-view>
  
<div class="main_container">
  <!--first_character-->
  
  <button id="btn_playing" class="btn" @click="translate">TRANSFORM</button>
  <div id="container_fucker" class="container_fucker" >
    
    <div 
    v-for="divs in blocks_first_character " 
    :key="divs.id" 
    :id="divs.id" 
    class="box">
  </div>
  </div>
<!--second_character-->
  <div id="container_second" class="container_second" >
    <div
    v-for="dives in blocks_second_character " 
    :key="dives.id" 
    :id="dives.id" 
    class="box">
    </div>
  </div>
</div>

<div class="menu">
 <!-- <div>
    <button class="menu-text" @click="game">START</button>
  </div>
-->
  <div @click="reset"  class="start" >
    <a >START</a>
  </div>
  <div class="score">
    <a class="menu-text">SCORE
                        {{score}}
    </a>
  </div>

  <div id="lives_menu" class="menu_lives">
    
     <p class="menu-text" >HIT</p>  
    <img  alt="" class="lives"
    
    :src="images_lives[0]" 
    v-for="image in lives" 
    :key="image.id" 
    :id="image.id" >
  </div>
  <div class="shot">
    <a class="menu-text">SHOT
                {{multiply}}/SEK
    </a>
  </div>
  
    </div>
      </div>
    <!--
  
  <div class="chuj container rotate" >CHUJJ</div>
  <div class="chuj container rotate" >CHUJ</div>
  <div class="chuj container rotate" >CHUJJ</div>
  <div class="chuj rotate" >CHUJJ</div>
  <div class="chuj container rotate" >CHUJJ</div>
  <div class="chuj container rotate" >CHUJJ</div>
  <div class="chuj container rotate" >CHUJJ</div>
  <div class="chuj rotate" >CHUJJ</div>
  
-->


  </template>
<style scoped>
.body {
  background-color: black;
  width: 2031px;
  height: 1080px;
}
.main_container{
  
  width:1090px;
  
  margin: auto;
 
  margin-bottom: 500px;
  
}
.container_fucker{ /* '*' - for all elements */
z-index: 1;
position: absolute;
padding-left: 400px;
  height: 360px;
  width: 160px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
 
}
.container_second{ 
  overflow: hidden;
  
  position: absolute;
padding-left: 540px;
padding-top:160px;
  height: 240px;
  width: 280px;
  display: grid;
  grid-template-rows: repeat(7,1fr);
  grid-template-columns: repeat(7,1fr);
}

.box {
  
  width:40px;
  height:40px;
  background: #43B883;
  
}
 .chuj{
  width:  25px;
  height:  25px;
  background: #43B883;
  
}
.empty_div{
  width:40px;
  height:40px;
  background: rgb(59, 59, 61);
}
.btn{
  margin-top: 130px;
  width:250px;
  height:50px;
  align-items:flex-start;
  border-style: solid;
  border-radius: 20%;
  border-color: #068f51;
  text-align: center;
  padding-right: 10px;
  margin-bottom: 30px;
  text-rendering: auto;
  color: #068f51;
  font-size: 33px;
  background-color: black;
}
.start{
  width: 190px;
  position: relative;
  margin-left: 50px;
  display: flex;
  margin-right: 50px;
  align-items:flex-start;
  border-style: solid;
  border-radius: 10%;
  border-color: #068f51;
  text-align: center;
 
  margin-top: 150px;
 
 height: 100px;
 padding-right: 10px;
 padding-left: 10px;
  text-rendering: auto;
  color: #068f51;
  font-size: 63px;
 justify-content: center;
}
.lives{
  width:49px;
  height: 59px;
}
.menu{
  position: absolute;
  display: inline;
 display: flex;
 height: 300px;
 width: 1500px;
 margin-left: 50px;

}
.menu_lives{
  position: relative;
  justify-content: center;
 height: 70px;
 display: inline;
 display: flex;
align-items: center;
background-color: black;
padding-right: 20px;
padding-left: 20px;

 height: 70px;
 display: inline;
 display: flex;
align-items: center;

border-style: solid;
border-radius: 8%;
border-color: #068f51;


}
.menu-text{
  padding-right: 10px;
  text-rendering: auto;
  color: #068f51;
  font-size: 33px;
}
.score{
  width: 130px;
  position: relative;
 
  display: flex;
  margin-right: 50px;
  align-items:flex-start;
  border-style: solid;
  border-radius: 8%;
  border-color: #068f51;
  text-align: center;
  padding-left: 10px;
  margin-left: 170px;
 height: 70px;
 justify-content: center;
 
}
.shot{
  position: relative;
align-items:flex-end;
  margin-left:20px;
  border-style: solid;
  border-radius: 8%;
  border-color: #068f51;
  height: 80px;
  width: 95px;
  
}


</style>