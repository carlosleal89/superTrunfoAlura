let cartas = [
    ironMan={nome:"Iron Man",atributos:{força:5,velocidade:4, habilidade:2}, imagem:'https://thumbs.dreamstime.com/b/iron-man-17900674.jpg'},
    odin={nome:"Odin",atributos:{força:5, velocidade:2,habilidade:1}, imagem:'http://fantasticursos.com/wp-content/uploads/2017/10/lobo-odin.jpg'},
    sif={nome:"Sif",atributos:{força:4, velocidade:2,habilidade:4}, imagem:'https://comicvine.gamespot.com/a/uploads/original/12/124259/7242290-rco020_1581537923.jpg'},
    destruidor={nome:"Destruidor",atributos:{força:6,velocidade:4, habilidade:3}, imagem:'https://orig00.deviantart.net/615e/f/2013/218/6/2/2013_08_07_the_destroyer_by_agata_j-d6gz6bg.jpg'},
    thor={nome:"Thor",atributos:{força:6,velocidade:5,habilidade:3}, imagem:'http://comicartcommunity.com/gallery/data/media/708/Thor.jpg'}
];
let cartaJogador;
let cartaMaquina;

function sortearCarta() {
    let tamCartas = cartas.length;
    cartaJogador = parseInt(Math.random()*tamCartas);
    cartaMaquina = parseInt(Math.random()*tamCartas);
        while (cartaJogador == cartaMaquina){
            cartaMaquina = parseInt(Math.random()*tamCartas);
        }
    document.getElementById('btnSortear').disabled=true; //desabilita o botão Sortear;
    document.getElementById('btnJogar').disabled=false; //habilita o botão jogar;
    exibirCartas(cartaJogador);
    //proximas linhas apagam a imagem da carta maquina
    document.getElementById('carta-maquina').innerHTML='<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let imgCartaMaquina = document.getElementById('carta-maquina');
    imgCartaMaquina.style.backgroundImage = ""; 
}

function exibirCartas(cartaJogador){ //aqui deve exibir o nome, imagem e atributos junto com um radio button para selecionar o atributo
    let divCartaJogador = document.getElementById('carta-jogador');
    let divCartaMaquina = document.getElementById('carta-maquina');    
        divCartaJogador.style.backgroundImage = `url(${cartas[cartaJogador].imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>";
    let atributosJogador="";
        for (let atributo in cartas[cartaJogador].atributos){
            atributosJogador += "<input type='radio' name='atributo' value='"+atributo+"'> " + atributo + " " + cartas[cartaJogador].atributos[atributo] + "<br>";
        } //cartas[cartaJogador].atributos[atributo] > .atributos[atributo] retorna o valor de cada atributo dentro do elemento atributos do objeto.
    nomeJogador = `<p class="carta-subtitle">${cartas[cartaJogador].nome}</p>`;
    divCartaJogador.innerHTML = moldura + nomeJogador + tagHtml + atributosJogador + "</div>";
}

function obtemAtributoSelecionado(){
    let radioAtributo = document.getElementsByName('atributo');
    for (let i=0;i<radioAtributo.length;i++){
        if(radioAtributo[i].checked==true){
            return radioAtributo[i].value;
        }
    }
}

function jogar(){
    let atributoSelecionado = obtemAtributoSelecionado();
        if(cartas[cartaJogador].atributos[atributoSelecionado]>cartas[cartaMaquina].atributos[atributoSelecionado]){
            document.getElementById('resultado').innerHTML="<font color='white'>Você ganhou.</font>";
        } else if (cartas[cartaJogador].atributos[atributoSelecionado]<cartas[cartaMaquina].atributos[atributoSelecionado]){
            document.getElementById('resultado').innerHTML="<font color='white'>Você perdeu.</font>";
        } else  {
            document.getElementById('resultado').innerHTML="<font color='white'>Empatou</font>";
        }
    let divCartaMaquina = document.getElementById('carta-maquina');
    divCartaMaquina.style.backgroundImage = `url(${cartas[cartaMaquina].imagem})`;
    let moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    let tagHtml = "<div id='opcoes' class='carta-status'>";
    let atributosMaquina="";
        for (let atributo in cartas[cartaMaquina].atributos){ //laço for each para mostrar os atributos da carta-maquina apos clicar em jogar
            atributosMaquina += "<p type='text' name='atributo' value='"+atributo+"'> " + atributo + " " + cartas[cartaMaquina].atributos[atributo]+"</p>";
        }
    nomeMaquina = `<p class="carta-subtitle">${cartas[cartaMaquina].nome}</p>`;
    divCartaMaquina.innerHTML = moldura + nomeMaquina + tagHtml + atributosMaquina + "</div>";
    document.getElementById('btnSortear').disabled=false; 
    document.getElementById('btnJogar').disabled=true; 
    

}