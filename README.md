# Aplicação de Previsão do Tempo

Esta é uma aplicação web simples que fornece previsões do tempo com base no nome da cidade. A aplicação consome a API de previsão do tempo do [GoWeather](https://goweather.herokuapp.com/weather). Foi desenvolvida utilizando jQuery, HTML, CSS e JavaScript.

## Funcionalidades

- Busca pela previsão do tempo atual de qualquer cidade.
- Exibe informações como temperatura, vento e previsão.
- Interface fácil de usar para os usuários.

## Tecnologias Utilizadas

- **HTML**: Linguagem de marcação para criar a estrutura da página.
- **CSS**: Estiliza a aplicação para melhorar a experiência do usuário.
- **JavaScript (jQuery)**: Manipula requisições à API e manipula o DOM para atualizações dinâmicas.
- **API**: Utilizamos a [GoWeather](https://goweather.herokuapp.com/weather) para obter dados meteorológicos em tempo real.

## Como Funciona

1. O usuário insere o nome da cidade para a qual deseja obter a previsão do tempo.
2. Uma requisição é feita para a API GoWeather utilizando o método `$.ajax()` do jQuery.
3. A aplicação processa a resposta e exibe as informações de temperatura, vento e previsão na página.

## Configuração

Para executar este projeto localmente:

1. Clone este repositório:
    ```sh
    git clone https://github.com/seuusuario/aplicacao-previsao-tempo.git
    ```

2. Abra o arquivo `index.html` no seu navegador para ver a aplicação em funcionamento.

## Uso

1. Digite o nome da cidade no campo de entrada.
2. Clique no botão "Obter Previsão".
3. Veja os detalhes do tempo para a cidade escolhida.
