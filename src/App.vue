<script setup>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
import Megamenu from './components/MegaMenu.vue'

const isMegamenuOpen = ref(false)

provide('megamenuState', isMegamenuOpen)
</script>

<template>
  <div class="app-layout">
    <Header />
    
    <Megamenu />
    
    <main class="page-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app-layout {
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page-content {
  flex: 1;
  width: 100%;
}

</style>



