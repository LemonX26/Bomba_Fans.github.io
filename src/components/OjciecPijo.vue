<template>
  <Sidebar/>
   <Logo/>
   <div :style="{'margin-left': sidebarWidth}"></div>

  
<div class="basic_data">
    <p class="title_Of_Box">OJCIEC PIJO</p>
    <img src="../assets/pijo_bgc.jpg" width="384" height="216">
    <div  v-for="feature in features" :key="feature.id">
        <p class="info">Imie i nazwisko: {{feature.name}}</p>
        <p class="info">Miejsce zamieszkania: {{feature.living_space}}</p>
        <p class="info">Gatunek: {{feature.species}}</p>
        <p class="info">Zawód: {{feature.occupation}}</p>
        <p class="info">Stopień: {{feature.rank}}</p>
        <p class="info">
            Hobby:
            <li v-for="hobby in feature.hobbies" :key="hobby.hobbies"> {{hobby.hobby}}</li>
        </p>
        <p class="info">Rodzina:
            <li v-for="members in feature.family" :key="members.id"> {{members.id}} </li>
        </p>
        <p class="info">
            Przyjaciele:
            <li v-for="friend in feature.friends" :key="friend.name"> {{friend.name}}</li>
        </p>
       <p class="info">
        Wrogowie:
        <li v-for="enemy in feature.enemies" :key="enemy.name"> {{enemy.name}}</li>
       </p>
        
    </div>

</div>
<div class="life_memoir" @click="animate">
<h1 class="title_Of_Box">ŻYCIORYS</h1>
<p>
Franz Pijo, najpierw Ojciec Pijo, potem samo Pijo, ostatnio już nawet nie pijo. to były egzorcysta gwiezdnej floty. Jednak po pewnym czasie odszedł i wstąpił w szeregi elitarnej grupy zwanej menelami.
    Wóda jest jego jedyną motywacją, bez niej zdechnie prędzej niż z głodu. Żeby powstrzymać apetyt wszył sobie esperal. Jego ulubionym drinkiem jest podwójna wóda zmieszana z potrójną wódą inaczej zwany spirytusem. Niezwykle doświadczony i ceniony. Jedna z niewielu postaci 
    do której Kapitan Bomba czuje respekt.
    Jego atrybuty to butelka wódki i Magiczna flet. Proponowano mu posade Kapelana w gwiezdnej flocie, lecz odmówił, jak sam stwierdził, "Nie ma już ojca, jest tylko Pijo"

<br>
<h2 class="title_Of_Box">SUKCESY</h2>
<li>egzorcyzmowanie Sebka z postaci Nadesrała. Warto dodać, że dokonał tego trudniejszą, ale bardziej widowiskową metodą tzn. Z płonącym ostrokrzewem w dupei</li>
<li>Pokonanie całego stada Kutołaków. Tak naprawde to Bomba ich rozpierdolił, ale to chuj</li>

   
</p>


</div>
<div class="comments_box">
<h1 class="title_Of_Box">CYTATY</h1>
<div v-for="item in comments" :key="item.describe">
<p class="comment">
"{{item.comment}}"
<span class="comment_audio audio" ref="audio_element" id="{{item.comment}}"  @click="AUDIO_PLAY(item.audiopath)" >
    
    <i class="fa-solid fa-play"></i>
</span>
<br>
</p>
<p class="describe_comment">{{item.describe}}</p>
<br>
</div>
</div>
<RouterView />

</template>
<script>
import {ref, onMounted} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import SidebarLink from './Sidebar/SidebarLink.vue';
import  Sidebar from './Sidebar/Sidebar.vue'
import { sidebarWidth } from './Sidebar/state'
import Logo from './logo/logo.vue'
import anime from 'animejs/lib/anime.es.js';
export default {
   components:{Sidebar,Logo},
    data(){
        return {
    comments: [
        {
            comment: 'Nie ma już ojca, jest tylko Pijo...',
            describe: 'Pijo o powrocie do gwiezdnej floty',
            audiopath: 'comments_audio/Pijo/nie_ma_juz_ojca_jest_tylko_pijo.mp3'
        },
        {
            comment: 'Bredze',
            describe: 'Pijo bredzi',
            audiopath: 'comments_audio/Pijo/bredze.mp3'
        },
  
    ],
 
}
    },
    setup(){
        const features = ref([
        {
            id:1,
            name: 'Franz Pijo',
            living_space:'Galaktyka Kurvix',
            species: 'Człowiek',
            occupation: 'Egzorcysta',
            rank: 'Kapelan',
            hobbies:
            [
            {
                hobby:'Wóda'
            },
            {
                hobby:'Egzorcyzmy'
            }

            ],
            family: [
            {id:'-'}
             ] ,
            friends: [
                {
                name:'Tytus Bomba'
                },
                {
                name:'Wóda'
                }
            ],
            enemies: [
                {
                name:'Nadesrały'
                },
                {
                 name: 'Kutołaki'
                },
                {
                 name: 'Pierdoleni Kosmici'
                },
            ]

        }

         ]) 
        
       
           // const play = addEventListener('playing',play_audio);
           // const end =  addEventListener('ended',play_audio);
          /* const audio_element = ref('');
         onMounted(()=>{
            console.log(audio_element.value);
         })*/
         const btn = document.getElementById('btnaudio');
         const comment_voice = (id) =>{
       var audio_element = document.getElementsByClassName('audio');
       // audio_element = addEventListener('click',()=>{
            var audio = new Audio(id);
            audio.play();
            audio.addEventListener('playing',()=>{
                console.log('playing');
            });
            audio.addEventListener('ended',()=>{
                console.log('ended');
            })
       // })
       audio_element = addEventListener('playing',()=>{
        console.log('playing')
       });
       }

       var state = 0;

       function AUDIO_PLAY(id){
        if(state == 0){
            play_audio(id);
        }
        else{
          stop_audio();    
          play_audio(id);  
        }
       }
         var is_on_play=0;
         var audio;
         const play_audio = (id) =>{
           audio  = new Audio(id);
         
                audio.play();
                state =1;
                console.log('play');
            return audio;

         }
    var audio2=audio;
        /* audio_element = addEventListener('click',()=>{
            audio.stop();
         },1000);
         */
         const stop_audio = (id)=>{
            state=0;
            audio.pause();
            console.log('stop');
            
         }
         const animate = ()=>{
            const anime = require('animejs')
    anime({
    targets: '.staggering-axis-grid-demo .el',
    translateX: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'x'}),
    translateY: anime.stagger(10, {grid: [14, 5], from: 'center', axis: 'y'}),
    rotateZ: anime.stagger([0, 90], {grid: [14, 5], from: 'center', axis: 'x'}),
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
    easing: 'easeInOutQuad'
    });
        console.log('loaded')
      }


         return {features,play_audio,is_on_play,comment_voice,stop_audio,AUDIO_PLAY,animate};
    }
}
</script>
<style scoped>
.title_Of_Box{
    text-align: center;
    font-size: 35px;
    color:white;
    display: flex;
    justify-content: center;
}
.basic_data{
    margin-top: 100px;
    position: absolute;
    left: 70%;
    border:4px;
    border-style: solid;
    border-color: rgb(26, 25, 25);
    width:383px;
    font-weight:900;
}
.life_memoir {
    justify-content: center;
    position: absolute;
    left:10%;
    margin-top: 100px;
    width:800px;
    border: 2.8px;
    border-style: solid;
    border-color: rgb(26, 25, 25);
    text-shadow: 0 0 3px #FF0000;
   
    
}
.comments_box{
    justify-content: center;
    position:absolute;
    left:10%;
    margin-top: 600px;
    margin-bottom: 140px;
    border:2.8px;
    border-style: solid;
    width:800px;
    border-color: rgb(26, 25, 25);
    padding-left:3.5px;
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
.describe_comment{
    font-size: 13px;
    font-weight:50;
}
.comment_audio{
    width: 20px;
    height: 20px;
}
.info{
    text-align: left;
    border: 1px;
    border-style: solid;
    border-color: black;
}

</style>