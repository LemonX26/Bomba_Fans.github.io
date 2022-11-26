<script >
import {ref } from 'vue'
 //const change =  () => {collapsed.value = ! collapses.value}


 /*function zeros (n) {
  var digits = [];var result = ref(0);
for(var i=1;i<n;){
 i=(5*i);
  digits.push(i);
}
/*for(var i in digits){
console.log(digits[i]);
}//
for(var i = 0;i<digits.length;i++){
var k = Math.floor(n/digits[i]);
result = result + k;
return  result;
}
console.log(result);
//return  result;
return result;
}
*/

function b(d){
    console.log(d);
    return d;
}


export default {
    setup(){
        const newItem = ref(''); 
        function zeros (n) {
         var digits = [];var result = 0;
            for(var i=1;i<n;){
             i=(5*i);
             digits.push(i);
            }
        /*for(var i in digits){
            console.log(digits[i]);
            }*/
            for(var i = 0;i<digits.length;i++){
                var k = Math.floor(n/digits[i]);
            result = result + k;
        }
        console.log(result);
        return result;
        }

        //const dupa = document.getElementById("DUPA");
        var status=0;
        function rotate(){
            const dupa = document.getElementById("DUPA");
            status++;
            if(status==1){ 
            dupa.style.transform = 'rotate(180deg)';
            }
             if(status==2){ 
                   // const dupa = document.getElementById("DUPA");
                    dupa.style.transform = 'rotate(360deg)';
                    status=0;
                }     
        }
        
        return {zeros,status}
        
    },
    data() {
    return {
        newItem: '',
        position: (0)
    };
  }

 }
</script>

<template class="body">

    <p
    id="DUPA" 
    class="Dupa"
     @click="status"
    
     
    >DUPA</p>
    
    <div class="Dupa">
    <input id="n"  v-model="newItem" type="text" placeholder="KICK ME IN MY ASS" />
    <v-btn  disabled class="myButton" @click="zeros(newItem)">CLICK</v-btn>
    <br />
    <v-card-text class="textbox">
        "THE NUMBER OF ZEROS DIGITS IN THE END IS:  {{zeros(newItem)}}"
        </v-card-text>
   
    </div>
</template>
<style>
.body{
    background-color: rgb(59, 59, 61);
}

.Dupa{
    text-align: center;
    margin: auto;
    margin-left:50%;
    border: 3px solid #EF2D56;
    border-radius: 2px;
    width: 375px;
    background: rgb(229, 138, 11);
    
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.textbox {

font-family: 'Heebo', sans-serif;
font-size: 14px;
font-weight: 400;
letter-spacing: 0.025rem;
font-style: normal;
text-transform: capitalize;
color: #FFFFFF;
background-color: #EF2D56;
border-radius: 0.15rem;
-webkit-border-radius: 0.15rem;
-moz-border-radius: 0.15rem;
padding: 0.3rem 0.4rem;
border-style: none;
border-width: 0rem;
border-color: #EF2D56;


}

.myButton {
    width: 100px;
	-moz-box-shadow:inset 0px -3px 3px -4px #29bbff;
	-webkit-box-shadow:inset 0px -3px 3px -4px #29bbff;
	box-shadow:inset 0px -3px 3px -4px #29bbff;
	background-color:#2dabf9;
	-webkit-border-radius:18px;
	-moz-border-radius:18px;
	border-radius:18px;
	border:1px solid #0b0e07;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-family:Arial;
	font-size:15px;
	padding:9px 26px;
	text-decoration:none;
	text-shadow:0px 0px 0px #263666;
    margin-left:30px;
    margin-bottom: 5px;
}
.myButton:hover {
	background-color:#0688fa;
}
.myButton:active {
	position:relative;
	top:1px;
}

</style>
