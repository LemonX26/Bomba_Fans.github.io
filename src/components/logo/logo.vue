<template>
   
    <img class="logo" id="img" ref="picture" @click="change_picture" src="@/assets/bomba_bgc_short.png"  alt="">      
   
</template>

<script>
 import {ref,onMounted,onUpdated, getCurrentInstance} from 'vue';
export default {
    props:{
        logo: { type: String, required: true },
        
    },
    data(){
        return {
            img:'@/assets/bomba_bgc_short.png',
         /*  logo_images: 
           [
            {
             image1: '/assets/bomba_bgc_short.png', 

            },
            {
            image2: 'https://static.android.com.pl/uploads/2020/01/kapitan-bomba-3-960x539.jpg'
            }
           ],
          */
          
    currentUrl: this.logo_images[0],
        
             number: ref(null)
        }
   
    },
    methods: {
     //  const picture = ref('');
       change()
        {
           /* console.log(document.getElementById("img").src);
            var picture = ref('');
         //var name = this.$refs.picture.src;
        // name =  this.logo_images[this.numberOfImage];
       //onUpdated(()=>{
     //   i++;
      // })

     picture = this.logo_images;
     picture = picture[this.numberOfImage]
     this.$refs.picture.src = this.logo_images[this.numberOfImage];
     console.log(document.getElementById("img").src);
      console.log(this.$refs.picture.src);
      this.numberOfImage++;
      */
    //  console.log(this.numberOfImage);
     
        }
       
    ///  checknr(){
     //   console.log(this.logo_images[this.numberOfImage]);
     // }
     
    },
    props:{

    },
    setup(){
       const logo_images = [       
             'https://i.ytimg.com/vi/59G7JdX6ngk/maxresdefault.jpg' , 
             'https://www.wykop.pl/cdn/c3201142/comment_16105355465POFrsAJ13MUWny5b0MJYj.jpg',
             'https://static.android.com.pl/uploads/2020/01/kapitan-bomba-3-960x539.jpg',
           ];
        
      let numberOfImage = 0;
       function change_picture(){
        numberOfImage++;
        if(numberOfImage<logo_images.length&&numberOfImage!==0){
              setTimeout(()=>{
              document.getElementById("img").src = logo_images[numberOfImage];
              },1500)      
        }
        else if(numberOfImage===logo_images.length){
            setTimeout(()=>{
            document.getElementById("img").src = 'https://i.ytimg.com/vi/59G7JdX6ngk/maxresdefault.jpg';
        },1500) 
          numberOfImage = 0;
        }
        
       }
       return{change_picture,logo_images};
    }
}
</script>

<style scoped>
.logo{
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
padding-top: 0%;
height: 500px;
width:2050px;
border: 1px;
border-color: rgb(128, 125, 125);
border-style: solid;
-webkit-box-reflect: below 0px linear-gradient(to bottom, rgba(0,1,0,0.0), rgba(0,0,0,0.06));
}
</style>