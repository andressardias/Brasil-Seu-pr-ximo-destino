function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    const section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas
    const termoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (termoPesquisa === "") {
        // Exibe a mensagem de erro se o campo de pesquisa estiver vazio
        section.innerHTML = "<p class='mensagem-erro'>Por favor, digite um destino para pesquisar.</p>";
        return; // Encerra a função
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";

    // Itera sobre cada destino no array 'destinos'
    for (let dado of destinos) {
        // Converte o nome do destino para minúsculas para facilitar a comparação
        const destinoMinusculo = dado.destino.toLowerCase();

        // Verifica se o termo de pesquisa está incluído no nome do destino
        if (destinoMinusculo.includes(termoPesquisa)) {
            // Se o destino for encontrado, adiciona o HTML correspondente ao resultado
            resultados += `
                <div class="destino">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.destino}</a>
                    </h2>
                    <p class="descricao-meta">${dado.sobre}</p>
                    <a href="${dado.link}" target="_blank">Mais Informações</a>
                </div>
            `;
        }
    }

    // Verifica se a variável 'resultados' ainda está vazia, o que significa que nenhum destino foi encontrado
    if (resultados === "") {
        // Exibe uma mensagem de erro se nenhum destino for encontrado
        section.innerHTML = "<p class='mensagem-invalida'>Nenhum destino encontrado para o termo: '" + termoPesquisa + "'</p>";
    } else {
        // Caso contrário, exibe os resultados encontrados na seção
        section.innerHTML = resultados;
    }
}

