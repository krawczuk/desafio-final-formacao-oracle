//lista de nomes dos amigos
let amigos = [];

//função que adiciona o nome do amigo na lista de sorteio
function adicionarAmigo(){
    let nomeAmigo = document.getElementById('amigo').value;

    if(nomeAmigo == ""){
        alert("Por favor, insira um nome válido.");
    }else{
        amigos.push(nomeAmigo);
        atualizarListaAmigos(amigos);
        console.log(amigos);
        document.getElementById('amigo').value = "";
    }
}


function atualizarListaAmigos(amigos) {
    // Seleciona o elemento <ul> pelo ID
    let lista = document.getElementById("listaAmigos");
    
    // Limpa o conteúdo da lista e do array
    lista.innerHTML = "";
    
    // Adiciona cada amigo como um <li> na lista
    amigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    // Seleciona o elemento <ul> onde será exibido o sorteado
    let resultado = document.getElementById("resultado");
    
    // Limpa a lista antes de adicionar o novo sorteado
    resultado.innerHTML = "";
    
    // Verifica se há amigos disponíveis
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para sorteio.");
    }
    
    // Gera um índice aleatório
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtém o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    
    // Mostra o resultado como um item da lista
    let li = document.createElement("li");
    li.textContent = amigoSorteado;
    resultado.appendChild(li);
    //Esvazia o array
    atualizarListaAmigos([]);
}