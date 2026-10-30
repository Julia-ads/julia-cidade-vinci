<script setup></script>

<template>
    <div class="features">
        <div class="feature-item">
            <div class="feature-content border">
                <h2>Recarga Rápida</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>

            <img src="@/assets/imgs/feature-image-1.png" alt="feature-image">
        </div>

        <div class="feature-item border">
            <div class="feature-content">
                <h2>Painel de Instrumentos</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>

            <img src="@/assets/imgs/feature-image-2.png" alt="feature-image">
        </div>

        <div class="feature-item border">
            <div class="feature-content">
                <h2>Pontos de Recarga</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>

            <img src="@/assets/imgs/feature-image-3.png" alt="feature-image">
        </div>

        <div class="feature-item">
            <div class="feature-content">
                <h2>Design Premiado</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
            </div>

            <img src="@/assets/imgs/feature-image-4.png" alt="feature-image">
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.features {
    padding: 70px 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.feature-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.feature-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 8%;
    justify-content: center;
}

.feature-content h2 {
    font-size: 26px;
    text-transform: uppercase;
    font-family: 'Genos', sans-serif;
}

.feature-content p {
    font-size: 16px;
    font-family: 'Host Grotesk', sans-serif;
    line-height: 28px;
    color: #979797;
    padding-bottom: 20px;
}

.imgs {
    display: flex;
}

img {
    width: 380px;
}

.border {
    border-right: 1px solid #E8E8E8;
}

</style>