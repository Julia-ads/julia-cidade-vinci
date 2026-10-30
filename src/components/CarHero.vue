<script setup></script>

<template>
    <div class="hero">
        <img src="@/assets/imgs/vinci-model-v2-banner.png" alt="vinci-model-v2-banner">
        <div class="hero-content">
            <h1>Vinci Model V2</h1>
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
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.hero img {
    width: 940px;
}

.hero-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: center;
}

h1 {
    font-size: 72px;
    color: #000;
    font-family: 'Genos', sans-serif;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 4px;
}

p {
    font-size: 20px;
    color: #666666;
    font-family: 'Host Grotesk', sans-serif;
    line-height: 36px;
    max-width: 780px;
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
    justify-content: center;
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
    border: 1px solid #000;
    background-color: transparent;
    color: #000;
    transition: all 0.3s ease;
}

.transparent:hover {
    background-color: #000;
    color: #fff;
}

</style>