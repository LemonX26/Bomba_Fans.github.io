import { createApp } from 'vue'
import App from './App.vue'
//import store from './store'
import Bomba from './components/Bomba.vue'
import router from './router'
import '@fortawesome/fontawesome-free/js/all'


//import vuetify from '@/plugins/vuetify'
const app = createApp(App)
app.config.errorHandler = (err,vm,info) => {

}


app.use(router),
///vuetify,
//app.use(store)
app.mount('#app')
/* <ul v-for="(feature, index) in features" :key="features.id">
        <li>Imie i nazwisko: {{feature.name}}</li>
        <li>Miejsce zamieszkania: {{feature.living_space}}</li>
        <li>Gatunek: {{feature.species}}</li>
        
        
        */
