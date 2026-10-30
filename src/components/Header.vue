<script setup>
import { inject } from 'vue'

const isMegamenuOpen = inject('megamenuState')

const toggleMegamenu = () => {
    isMegamenuOpen.value = !isMegamenuOpen.value
}
</script>

<template>
    <header>
        <div class="logo">
            <img src="@/assets/imgs/logo.svg" alt="logo-vinci">
            <p>Vinci</p>
        </div>

        <nav>
            <ul>
                <li> <router-link to="/home" @click="isMegamenuOpen = false">Home</router-link> </li>
                <li> <a href="#">Sobre</a> </li>
                
                <li> 
                    <a 
                        href="#" 
                        @click.prevent="toggleMegamenu"
                        :class="{ active: isMegamenuOpen }"
                    >
                        Veículos
                    </a> 
                </li>
                
                <li> <a href="#">Serviços</a> </li>
                <li> <a href="#">Test Drive</a> </li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');

header {
    display: flex;
    background-color: #fff;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
    font-family: "Genos", sans-serif;
    text-transform: uppercase;
    padding: 0 4%;
    height: 80px; 
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.logo p {
    font-size: 40px;
    letter-spacing: 20px;
}

nav ul {
    display: flex;
    gap: 90px;
    align-items: center;
}

ul li {
    list-style: none;
    font-size: 18px;
}

li a {
    text-decoration: none;
    color: #1A1A1A;
    transition: color 0.2s ease;
}

li a:hover,
li a.active {
    color: #b81d24; 
}
</style>
