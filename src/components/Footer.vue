<script setup></script>

<template>
    <footer>
        <div class="footer-top">
            <div class="logo">
                <img src="@/assets/imgs/logo.svg" alt="logo-vinci">
                <p>Vinci</p>
            </div>

            <div class="footer-items">
                <div class="footer-item">
                    <h2>Sobre</h2>
                    <p> <a href="#">A Marca</a> </p>
                    <p> <a href="#">História</a> </p>
                    <p> <a href="#">Qualidade</a> </p>
                    <p> <a href="#">Onde estamos</a> </p>
                    <p> <a href="#">Investidores</a> </p>
                </div>

                <div class="footer-item">
                    <h2>Contato</h2>
                    <p> <a href="#">Fale Conosco</a> </p>
                    <p> <a href="#">Atendimento</a> </p>
                    <p> <a href="#">SAC</a> </p>
                </div>

                <div class="footer-item">
                    <h2>SAC</h2>
                    <p> <a href="#">Canais Oficiais</a> </p>
                    <p> <a href="#">Redes Socias</a> </p>
                    <p> <a href="#">Suporte</a> </p>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>©Copyright 2026.</p>
            <p>Todos os Direitos Reservados.</p>
        </div>
    </footer>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');

footer {
    padding: 60px 4%;
    font-family: "Genos", sans-serif;
    display: flex;
    flex-direction: column;
    gap: 60px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 20px;
}

.logo p {
    font-size: 40px;
    letter-spacing: 20px;
    text-transform: uppercase;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    align-items: start;
}

.footer-items {
    display: flex;
    gap: 100px;
}

.footer-item h2 {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
    line-height: 42px;
}

.footer-item p {
    font-size: 20px;
    color: #666666;
    letter-spacing: 4px;
    line-height: 42px;
    max-width: 180px;
}

.footer-bottom p{
    font-size: 16px;
    color: #666666;
    line-height: 24px;
    letter-spacing: 4px;
    text-transform: uppercase;
}

a {
    text-decoration: none;
    color: #666666;
}

a:hover {
    color: #939393;
}

</style>