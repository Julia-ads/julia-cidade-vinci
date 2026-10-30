<script setup></script>

<template>
    <div class="mega-features">
        <p class="title">
            Tecnologia Aliada ao Futuro
        </p>

        <div class="features">
            <div class="feature-item">
                <p>500 km</p>
                <span>Com 1 carga</span>
            </div>

            <div class="feature-item-line"></div>

            <div class="feature-item">
                <p>2800 rpm</p>
                <span>De torque</span>
            </div>

            <div class="feature-item-line"></div>

            <div class="feature-item">
                <p>10 anos</p>
                <span>Garantia</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');

.mega-features {
    padding: 60px 10%;
    font-family: 'Genos', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

.title {
    font-size: 24px;
    color: #666666;
    font-weight: 300;
    text-transform: uppercase;
}

.features {
    display: flex;
    gap: 100px;
}

.feature-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-transform: uppercase;
    font-weight: 300;
    color: #000;
}

.feature-item p {
    font-size: 72px;
}

.feature-item span {
    font-size: 24px;
}

.feature-item-line {
    border-right: 1px solid #D3D0D0;
    border-left: 1px solid #D3D0D0;
}

</style>