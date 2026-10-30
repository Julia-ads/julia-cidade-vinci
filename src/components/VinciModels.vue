<script setup></script>

<template>
    <div class="vinci-models">
        <div class="vinci-model-v2">
            <div class="content">
                <h2>Vinci Model V2</h2>
                <div class="features">
                    <div class="features-p">
                        <p>Potência:</p>
                        <p>Autonomia:</p>
                        <p>Peso:</p>
                        <p>Tecnologia:</p>
                    </div>
                    <div class="features-span">
                        <span>300 cavalos</span>
                        <span>500km por carga</span>
                        <span>1.500 kg</span>
                        <span>GPS e Smartink</span>
                    </div>
                </div>
            </div>
            <img src="@/assets/imgs/vinci-model-v2.png" alt="vinci-model-v2">
            <div class="content content-bottom">
                <span>A SUV mais robusta da categoria</span>
                <a href="#">Conheça</a>
            </div>
        </div>

        <div class="vinci-model-v1">
            <div class="content">
                <h2>Vinci Model V1</h2>
                <div class="features">
                    <div class="features-p">
                        <p>Potência:</p>
                        <p>Autonomia:</p>
                        <p>Peso:</p>
                        <p>Tecnologia:</p>
                    </div>
                    <div class="features-span">
                        <span>300 cavalos</span>
                        <span>500km por carga</span>
                        <span>1.500 kg</span>
                        <span>GPS e Smartink</span>
                    </div>
                </div>
            </div>
            <img src="@/assets/imgs/vinci-model-v1.png" alt="vinci-model-v1">
            <div class="content content-bottom">
                <span>A SUV mais robusta da categoria</span>
                <a href="#">Conheça</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');

.vinci-models {
    padding: 60px 4%;
    display: flex;
    justify-content: space-between;
    font-family: 'Genos', sans-serif;
}

.content {
    display: flex;
    justify-content: space-between;
}

.features {
    display: flex;
    gap: 40px;
    justify-content: space-between;
}

.features-p {
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
}

.features-span span {
    color: #979797;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: 1px;
    display: flex;
    flex-direction: column;
}


.content-bottom span {
    font-size: 20px;
    letter-spacing: 2px;
    color: #979797;
}

img {
    width: 620px;
}

h2{
    font-size: 24px;
    color: #000;
    text-transform: uppercase;
    letter-spacing: 10px;
    max-width: 180px;
    line-height: 24px;
}

a {
    color: #1A1A1A;
    text-transform: uppercase;
    font-size: 20px;
}

a:hover {
    color: #575757;
}

</style>