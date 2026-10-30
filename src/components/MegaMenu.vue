<script setup>
import { inject } from 'vue'

const isMegamenuOpen = inject('megamenuState')

const cars = [
  {
    id: 1,
    name: 'MODELO V1',
    imgName: 'carro1.png', 
    path: '/carro'
  },
  {
    id: 2,
    name: 'MODELO V2',
    imgName: 'carro2.png',
    path: '/carro'
  },
  {
    id: 3,
    name: 'MODELO V3',
    imgName: 'carro3.png',
    path: '/carro'
  }
]

const getImageUrl = (name) => {
  return new URL(`../assets/imgs/${name}`, import.meta.url).href
}
</script>

<template>
  <Transition name="fade">
    <div 
      v-if="isMegamenuOpen" 
      class="megamenu-overlay"
    >
      <div class="megamenu-content">
        
        <div class="car-mega-grid">
            <div class="cars-grid">
                <div 
                    v-for="car in cars" 
                    :key="car.id" 
                    class="car-item"
                >
                    <img :src="getImageUrl(car.imgName)" :alt="car.name">
                    <h3>{{ car.name }}</h3>
                    <div class="car-links">
                    <router-link :to="car.path" @click="isMegamenuOpen = false">
                        Ver mais
                    </router-link>

                    <router-link :to="car.path" @click="isMegamenuOpen = false">
                        Comprar
                    </router-link>
                    </div>
                </div>
                </div>

                <div class="cars-grid">
                <div 
                    v-for="car in cars" 
                    :key="car.id" 
                    class="car-item"
                >
                    <img :src="getImageUrl(car.imgName)" :alt="car.name">
                    <h3>{{ car.name }}</h3>
                <div class="car-links">
                    <router-link :to="car.path" @click="isMegamenuOpen = false">
                        Ver mais
                    </router-link>

                    <router-link :to="car.path" @click="isMegamenuOpen = false">
                        Comprar
                    </router-link>
                </div>
            </div>
        </div>
        </div>

        <div class="sidebar-menu">
          <span class="sidebar-title">NAVEGUE</span>
          <ul>
            <li><router-link to="/carro" @click="isMegamenuOpen = false">OFERTAS</router-link></li>
            <li><a href="#" class="highlight">TEST DRIVE</a></li>
            <li><a href="#">LOJAS</a></li>
            <li><a href="#">SERVIÇOS</a></li>
            <li><a href="#">SAC</a></li>
            <li><a href="#">PRIVACIDADE</a></li>
          </ul>
        </div>

      </div>
    </div>
  </Transition>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.megamenu-overlay {
    position: absolute;
    top: 80px; 
    left: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.08);
    border: 1px solide #D8D8D8;
    z-index: 999;
}

.megamenu-content {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px 60px 20px;
    gap: 60px;
}

.car-mega-grid {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.cars-grid {
    flex: 3;
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 40px;
}

.car-item {
    text-align: center;
}

.car-item img {
    width: 100%;
    max-width: 240px;
    height: auto;
    object-fit: contain;
}

.car-item h3 {
    font-family: "Genos", sans-serif;
    font-size: 18px;
    margin: 15px 0 5px;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #1A1A1A;
}

.car-links {
    display: flex;
    gap: 20px;
    justify-content: center;
}

.car-links a {
    font-family: "Genos", sans-serif;
    font-size: 14px;
    color: #777;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s ease;
}

.car-links a:hover {
    color: #1f1e1e;
}

.sidebar-menu {
    flex: 1;
    border-left: 1px solid #D8D8D8;
    padding-left: 50px;
}

.sidebar-title {
    font-family: "Genos", sans-serif;
    font-size: 14px;
    color: #999;
    display: block;
    padding-bottom: 20px;
    letter-spacing: 2px;
    border-bottom: 1px solid #D8D8D8;
}

.sidebar-menu ul {
    list-style: none;
    padding: 0;
}

.sidebar-menu li {
    font-size: 14px;
    line-height: 52px;
    letter-spacing: 2px;
}

.sidebar-menu a {
    font-family: "Genos", sans-serif;
    text-decoration: none;
    color: #000;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.2s ease;
}

.sidebar-menu a:hover {
    color: #b81d24;
}

.fade-enter-active, 
.fade-leave-active { 
  transition: opacity 0.2s ease, transform 0.2s ease; 
}

.fade-enter-from, 
.fade-leave-to { 
    opacity: 0; 
    transform: translateY(-10px); 
}

</style>
