import { createRouter,createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dupa from '../components/Dupa.vue'
import Bomba from '../components/Bomba.vue'
import OjciecPijo from '../components/OjciecPijo.vue'
import KapitanDupa from '../components/Animation/KapitanDupa.vue'
import Intro from '../components/Animation/Intro.vue'
import KapitanDupaMenu from '../components/Animation/KapitanDupaMenu.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/AboutView.vue')
    },
    {
      path: '/Dupa',
      name: 'Dupa',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Dupa
    },
    {
      path: '/Bomba',
      component: Bomba
    },
    {
      path:'/OjciecPijo',
      component: OjciecPijo
    },
    {
      
      path:'/KapitanDupaMenu',
      component: KapitanDupaMenu,
      name:KapitanDupaMenu,
      children: [
        {
          path:'/KapitanDupaMenu/KapitanDupa',
          component:KapitanDupa
        },
        {
          path:'/KapitanDupaMenu/Intro',
          component:Intro
        }
      ]
    }
  
  ]
})

export default router
/*<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
*/


//maincss

/*
@import './base.css';
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
*/