<script setup></script>

<template>
    <div class="menu">
        <div class="menu-item">
            <p>Agende um Test Drive</p>
            <img src="@/assets/imgs/arrow.svg" alt="arrow-icon">
        </div>

        <div class="menu-item">
            <p>Veja Ofertas</p>
            <img src="@/assets/imgs/arrow.svg" alt="arrow-icon">
        </div>

        <div class="menu-item">
            <p>Encontre uma Loja</p>
            <img src="@/assets/imgs/arrow.svg" alt="arrow-icon">
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');

.menu {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 60px 4%;
    font-family: 'Genos', sans-serif;
}

.menu-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.menu-item p {
    font-size: 72px;
    text-transform: uppercase;
}

</style>