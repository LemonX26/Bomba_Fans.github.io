<template>
  <Sidebar/>
   <Logo/>
    <div :style="{'margin-left': sidebarWidth}"></div>

  
<div class="basic_data">
    <p class="title_Of_Box">KAPITAN BOMBA</p>
    <img src="../assets/bomba_bgc.jpeg" width="384" height="216">
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
            <li v-for="members in feature.family" :key="members.id"> {{members.id}} - {{members.name}}</li>
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
<div class="life_memoir">
<h1 class="title_Of_Box">ŻYCIORYS</h1>
<p>
    Warto też na początku nadmienić że kapitan bomba ma ponad 1332 lata. Jest tak ponieważ orbita planety na której żył Kapitan Bomba jest mniejsza niż orbita Ziemi, a czas liczony jest tak samo, co oznacza, że lata są krótsze niż ziemskie.

Kapitan wiele razy otarł się o śmierć realizując ekstremalnie niebezpieczne misje, zlecane mu najprawdopodobniej przez samego admirała. Zawsze wychodził obronną ręką dzięki ponadprzeciętnemu spirytusowi sprytowi, intelektowi oraz karabinowi.
   
     


<br>
<h2 class="title_Of_Box">SUKCESY</h2>
<br>
Na koncie Bomby jest wiele znaczących sukcesów dotyczących bezpieczeństwa międzygalaktycznego:
-odbicie księżniczki Gwiezdnej Republiki z rąk bezwzględnych Kurvinoksów;
<br>
<li>-zapierdolenie Kutanoida (a sam twierdził, że nie da się go pokonać);</li>
<li>-wpisał się do annałów misji badawczych będąc pierwszą osobą, która przepierdoliła się przez granicę wszechświata i poznała jego tajemnice;</li>
<li>-w zemście na Sułtanie kosmitów, (za próbę zabicia go poprzez powieszenie) rozpierdolił największy żywy obiekt kosmiczny we wszechświecie. Oczywiście mowa o matce Sułtana kosmitów.</li>

<br>

<br>

<h3 class="title_Of_Box">RELACJE Z TORPEDĄ</h3>
    <p>
        Jak powszechnie wiadomo, Kapitan Bomba ma odwiecznego wroga wśród żołnierzy Gwiezdnej Floty – jest nim Chorąży Torpeda. Kapitan Bomba od zawsze walczył z Chorążym Torpedą o prym wśród żołnierzy Gwiezdnej Floty. Na każdym kroku ta dwójka rywalizowała ze sobą o to, kto jest najzajebistszy.
     W końcu ustawili się na solówę na planecie Wpi-zdylia, leżącej na zadupiu wszechświata. Po krótkiej wymianie argumentów Kapitan wykorzystał swój spryt oraz sąsiedztwo granicy wszechświata i wypchnął za nią Torpedę, który natychmiastowo zamienił się w kutasa. Torpeda był zmuszony przyznać wyższość i tytuł Asa Gwiezdnej Floty Bombie.  
    </p>
    
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
export default {
   components:{Sidebar,Logo},
    data(){
        return {
    comments: [
        {
            comment: 'Tempe chuje',
            describe: 'Kapitan Bomba mile zwracający się do swoich podwładnych, oraz do wrogów i swoich widzów',
            audiopath: 'comments_audio/Bomba/tępe_chuje.mp3'
        },
        {
            comment: 'Donna mamma es chujoczita',
            describe: 'Kapitan Bomba o matce Sułtana Kosmitów',
            audiopath: 'comments_audio/Bomba/Donna _mama_es_huiochita.mp3'
        },
        {
            comment: 'Napierdalaćććććććć',
            describe: 'Kapitan Bomba jak widzi pierdolonego kosmite',
            audiopath:'comments_audio/Bomba/napierdalać.mp3'
        },
        
        {
            comment: 'Jeżeli sie kochają to chuj z nimi',
            describe: 'Kapitan Bomba o potencjalnej miłości swojej siostry z kosmitą',
            audiopath: 'comments_audio/Bomba/jezeli_sie_kochaja.mp3'
        },
  
    ],
 
}
    },
    setup(){
        const features = ref([
        {
            id:1,
            name: 'Tytus Bomba',
            living_space:'Galaktyka Kurvix',
            species: 'Człowiek',
            occupation: 'Żołnierz',
            rank: 'Kapitan',
            hobbies:
            [
            {
                hobby:'Strzelanie do kosmitów'
            },
            {
                hobby:'wyzywanie Torpedy od pedałów'
            }

            ],
            family: [
                {
                id:'Brat',
                name: 'Modest'
                },
                {
                 id: 'Ojciec',
                 name: 'Generał Lufa'
                },
                {
                 id: 'Matka',
                 name: 'Nieznany'
                }
             ] ,
            friends: [
                {
                name:'Janusz Sram'
                },
                {
                 name: 'Sebek Bąk'
                },
                {
                 name: 'Ojciec Pijo'
                }
            
            ],
            enemies: [
                {
                name:'Sułtan Kosmitów'
                },
                {
                 name: 'Torpeda'
                },
                {
                 name: 'Jachaś'
                },
                {
                 name: 'Pierdoleni Kosmici'
                }
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
         return {features,play_audio,is_on_play,comment_voice,stop_audio,AUDIO_PLAY};
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
    margin-top: 800px;
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