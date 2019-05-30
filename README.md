# Findmypokemonadtsys
## Introdução
A aplicação desenvolvida foi proposta pela empresa ADTSys como um desafio para o processo seletivo de novos funcionários. O desafio é criar uma aplicação que realize uma busca de qualquer cidade do mundo e retorne ao usuário as seguintes informações:
1. Temperatura atual da cidade em graus Celcius;
2. Se está chovendo ou não;
3. Nome do Pokémon de acordo com as regras.

**As condições para retornar o pokémon são as seguintes:**
* Lugares onde a temperatura for menor (<) que 5ºC, deve-se retornar um pokémon de gelo (ice).
* Lugares onde a temperatura estiver entre (>=) 5ºC e (<) 10ºC, deve-se retornar um pokémon do tipo água (water).
* Lugares onde a temperatura estiver entre 12ºC e 15ºC, deve-se retornar um pokémon do tipo grama (grass).
* Lugares onde a temperatura estiver entre 15ºC e 21ºC, deve-se retornar um pokémon do tipo terra (ground).
* Lugares onde a temperatura estiver entre 23ºC e 27ºC, deve-se retornar um pokémon do tipo inseto (bug).
* Lugares onde a temperatura estiver entre 27ºC e 33ºC inclusive, deve-se retornar um pokémon do tipo pedra (rock).
* Lugares onde a temperatura for maior que 33ºC, deve-se retornar um pokémon do tipo fogo (fire).
* Para qualquer outra temperatura, deve-se retornar um pokémon do tipo normal.
* E, no caso em que esteja chovendo na região um pokémon elétrico (electric) deve ser retornado, independente da temperatura.

## Executando a aplicação
Foi desenvolvido uma aplicação web para realizar o objetivo proposto.
Para executar a aplicação basta entrar no link: https://findmypokemonadtsys.herokuapp.com/index.html.

Sua forma de usar é bem simples, basta digitar a cidade que deseja consultar e ir no botão de pesquisa ou finalizar com a tecla Enter, e então será impresso em tela as informações de Temperatura, se está chovendo ou não, e também o pokémon de acordo com o clima da sua respectiva cidade consultada.

## Tecnologias utilizadas

As tecnologias utilizadas foram as seguintes:
* HTML
* CSS
* JS (JavaScript)
* Biblioteca jQuery
* Framework Materialize
* AJAX

### Observação
A aplicação foi disponibilizada na plataforma Heroku, para que dessa forma fique online e possa ser avaliada pela empresa ADTSys.
