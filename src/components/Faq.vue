<script setup></script>

<template>
    <div class="faq line">
        <div class="header-group">
            <h2>FAQ</h2>
            <h3>Perguntas Frequentes</h3>
        </div>

        <div class="questions">
            <details>
                <summary>Qual é a autonomia real da bateria em diferentes condições de condução?</summary>
            </details>

            <details>
                <summary>Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?</summary>
            </details>

            <details>
                <summary>Como funciona a infraestrutura de recarga para viagens de longa distância?</summary>
            </details>

            <details>
                <summary>Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?</summary>
            </details>

            <details>
                <summary>Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?</summary>
            </details>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Genos:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');

.faq {
    padding: 70px 0 60px 0;
    display: flex;
    flex-direction: column;
    gap: 48px;
}

details {
    padding: 0 13%;
}

.line {
    border-bottom: 1px solid #BCBCBC;
}

.header-group {
    font-family: 'Genos', sans-serif;
    text-transform: uppercase;
    line-height: 32px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.header-group h2 {
    font-size: 42px;
    color: #000;
}

.header-group h3 {
    font-size: 22px;
    color: #979797;
    letter-spacing: 1px;
}

summary {
    font-family: 'Genos', sans-serif;
    font-size: 26px;
    line-height: 32px;
    color: #1A1A1A;
    text-transform: uppercase;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.questions {
    display: flex;
    flex-direction: column;
    gap: 48px;
}

summary::after {
    content: url('@/assets/icons/arrow-icon-right.svg');
}

details[open] summary::after {
    content: url('@/assets/icons/arrow-icon-bottom.svg');
}

</style>