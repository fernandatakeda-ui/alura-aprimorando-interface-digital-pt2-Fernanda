const botoes = document.querySelectorAll("button");

    botoes.forEach(function(botao) {
        let curtiu = false;
        botao.addEventListener("click", botaoClicado);

        function botaoClicado() {
            console.log("fui clicado");
            // Mudado para querySelector (singular) para pegar a tag span correta
            let texto = botao.querySelector("span"); 
            let quantidadeAtual = Number(texto.textContent);

            if (curtiu === false) {
                texto.textContent = quantidadeAtual + 1;
                curtiu = true;
            } else {
                texto.textContent = quantidadeAtual - 1;
                curtiu = false;
            }
        }
    });