let listaNumerosSorteados = [];
let numeroLimiteDeTentativas = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
    //responsiveVoice.speak(texto, 'Brazilian Portuguese female', {rate:1.2})
}
function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Numero Secreto');
    exibirTextoNaTela('p.texto__paragrafo', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        exibirTextoNaTela('h1', 'Errou! Tente novamente');
        document.querySelector('h1').innerHTML = 'Errou!<br> tente novamente.';
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O número  secreto é menor');
        }else{
            exibirTextoNaTela('p', 'O número secreto é maior')
        }
        limparInput();
        tentativas++;
    }
    //console.log(chute == numeroSecreto);
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimiteDeTentativas + 1);
    let quantidadeDeElementosNaLista = listaNumerosSorteados.length;
    
    if(quantidadeDeElementosNaLista == numeroLimiteDeTentativas){
        listaNumerosSorteados = [];
    }

    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparInput(){
    let chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparInput();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do Numero Secreto';

// let paragrafoInfo =  document.querySelector('p.texto__paragrafo');
// paragrafoInfo.innerHTML = 'Escolha um número entre 1 e 10';
