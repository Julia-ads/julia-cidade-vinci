<script setup></script>

<template>
    <div class="details">
        <div class="details-content">
            <div class="description">
                <h2>Vinci Model V2</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.</p>
            </div>

            <div class="features">
                <div class="feature-slot">
                    <div class="feature-items">
                        <img src="@/assets/icons/a.svg" alt="icon-a">
                        <p>Retrovisores Inteligentes</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/b.svg" alt="icon-b">
                        <p>Rodas de Liga Leve</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/c.svg" alt="icon-c">
                        <p>Reconhecimento de Digital</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/d.svg" alt="icon-d">
                        <p>Sensor de Proximidade</p>
                    </div>
                </div>

                <div class="feature-slot">
                    <div class="feature-items">
                        <img src="@/assets/icons/a.svg" alt="icon-a">
                        <p>Antena 5G</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/b.svg" alt="icon-b">
                        <p>Design Sofisticado</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/c.svg" alt="icon-c">
                        <p>Abertura Automática</p>
                    </div>

                    <div class="feature-items">
                        <img src="@/assets/icons/d.svg" alt="icon-d">
                        <p>Câmera de Estacionamento</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="image">
            <img src="@/assets/imgs/vinci.png" alt="vinci">
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.details {
    padding: 0 4%;
    display: flex;
    flex-direction: column;
}

.details-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.features {
    display: flex;
    gap: 100px;
}

.description {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.description h2 {
    font-size: 42px;
    font-family: 'Genos', sans-serif;
    text-transform: uppercase;
}

.description p {
    font-family: 'Host Grotesk', sans-serif;
    font-size: 16px;
    color: #666666;
    line-height: 32px;
    max-width: 380px;
}

.feature-items p {
    font-family: 'Genos', sans-serif;
    font-size: 16px;
    color: #666666;
    text-transform: uppercase;
}

.feature-slot {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.feature-items {
    display: flex;
    align-items: center;gap: 10px;
}

.image {
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>