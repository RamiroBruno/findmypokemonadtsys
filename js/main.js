//Consumindo as API cidade
$("#pesquisa_pokemon").click(enviaCidade);

//Funcao para ativar a pesquisa com o ENTER
$(".cid_consul").keypress(function (e) {
    if (e.keyCode == 13) {
        enviaCidade()
    }
});

function enviaCidade() {
    $("#spinner").show();

    /*Pegando o valor digitado no campo cidade */
    var cidade = $(".cid_consul").val();
    ///CONSUMIR A API da cidade
    var link_cidade = "https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=5284343519f54738f3c208bf5ac33bc7";
    $.get(link_cidade, retornoCidade)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){
            $("#erro").toggle();
        },5000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}
function enviaTipoPokemon(tipo_pok) {
    var link_tipo_pok = "https://pokeapi.co/api/v2/type/";
    $.get(link_tipo_pok + tipo_pok, retornoPokemon);
}


function retornoCidade(data) {
    //console.log(data);
    //console.log((data["main"].temp - 273));
    var climaCidade = data["weather"];
    
    /*Pegando a temperatura da cidade digitada */
    $("#temp_cidade").text(Math.round(data["main"].temp - 273) + "ºC");
    $("#chuva_cidade").text("sem chuva!");
    


    if (climaCidade[0].main == "Rain") {
        $("#chuva_cidade").text("chuva");
        enviaTipoPokemon("electric");
    }
    else if ((data["main"].temp - 273) < 5) {
        enviaTipoPokemon("ice");
        //("POKEMON gelo (ice)
    }
    else if ((data["main"].temp - 273) >= 5 && (data["main"].temp - 273) < 10) {
        enviaTipoPokemon("water");
        //POKEMON água (water)
    }
    else if ((data["main"].temp - 273) >= 12 && (data["main"].temp - 273) < 15) {
        enviaTipoPokemon("grass");
        //POKEMON grama (grass).
    }
    else if ((data["main"].temp - 273) >= 15 && (data["main"].temp - 273) < 21) {
        enviaTipoPokemon("ground");
        //POKEMON terra (ground) 
    }
    else if ((data["main"].temp - 273) >= 23 && (data["main"].temp - 273) < 27) {
        enviaTipoPokemon("bug");
        //POKEMON inseto (bug)
    }
    else if ((data["main"].temp - 273) >= 27 && (data["main"].temp - 273) < 33) {
        enviaTipoPokemon("rock");
        //POKEMON pedra (rock)
    }
    else if ((data["main"].temp - 273) >= 33) {
        enviaTipoPokemon("fire");
        //POKEMON fogo (fire)
    }

    else {
        enviaTipoPokemon("normal");
        //POKEMON normal."
    }
}


function retornoPokemon(data) {
    $("#spinner").show();
    var pokemon = data["pokemon"];
    var numPokemon = Math.floor(Math.random() * data["pokemon"].length);
    //console.log(pokemon[numPokemon].pokemon.name);
    $("#pok_escolhido").text(pokemon[numPokemon].pokemon.name);
   // console.log(data);

    $.get(pokemon[numPokemon].pokemon.url, retornoImagemPokemon)
    .fail(function(){
        $("#erro").show();
        setTimeout(function(){

            ///COLOCAR ERRO DO POKEMON
            $("#erro").toggle();
        },5000);
    })
    .always(function(){
        $("#spinner").toggle();
    });
}

function retornoImagemPokemon(data){
    var imgPokemonFront = data["sprites"].front_default;
    var imgPokemonBack = data["sprites"].back_default;

    //////TRATAR SE POSSIVEL IMAGEM EM BRANCO = default
    if (imgPokemonFront == null){
        $("#img_pok_front").attr("hidden", true);
    }else{
        $("#img_pok_front").attr("hidden", false);
        $("#img_pok_front").attr("src", imgPokemonFront);
    }
    
    if (imgPokemonBack == null){
        $("#img_pok_back").attr("hidden", true);
    }else{
        $("#img_pok_back").attr("hidden", false);
        $("#img_pok_back").attr("src", imgPokemonBack);
    }
    
    $(".conteudo").show();
    //console.log(data);
}