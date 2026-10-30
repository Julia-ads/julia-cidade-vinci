<script setup></script>

<template>
    <div class="hero">
        <h1>Vinci Model V3</h1>
        <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.
        </p>
        <div class="buttons">
            <button class="btn-default red">
                Modelos
            </button>
            <button class="btn-default transparent">
                Test Drive
            </button>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.hero {
    background-image: url('@/assets/imgs/car-banner-1.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 20px 4%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: calc(100vh - 80px);
    justify-content: center;
}

h1 {
    padding-top: 100px;
    font-size: 72px;
    color: #fff;
    font-family: 'Genos', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 4px;
}

p {
    font-size: 20px;
    color: #fff;
    font-family: 'Host Grotesk', sans-serif;
    line-height: 36px;
    max-width: 700px;
    font-weight: 300;
}

.btn-default {
    font-family: 'Genos', sans-serif;
    padding: 14px 80px;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 400;
}

.buttons {
    display: flex;
    gap: 20px;
}

.red {
    background-color: #E51837;
    color: #fff;
    transition: all 0.3s ease;
}

.red:hover {
    background-color: #f3536b;
    cursor: pointer;
}

.transparent {
    border: 1px solid #fff;
    background-color: transparent;
    color: #fff;
    transition: all 0.3s ease;
}

.transparent:hover {
    background-color: #fff;
    color: #000;
}

</style>