function comprar() {
     let tipo = document.getElementById('tipo-ingresso').value;
     let quantidade = parseInt(document.getElementById('qtd').value);

     //1.Adicione uma verificação para garantir que a quantidade inserida pelo usuário seja um número positivo. Se o valor não for válido, exiba uma mensagem de erro adequada.
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    if(tipo == 'pista') {
        comprarPista(quantidade);
    } else if (tipo == 'superior') {
        comprarSuperior(quantidade);
    } else if (tipo == 'inferior') {
        comprarInferior(quantidade);
    }
}

function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (quantidade > qtdPista)  {
        alert ('Quantidade indisponivel para tipo pista');
    } else {
        qtdPista = qtdPista - quantidade;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert ('Compra realizada com sucesso!!');
    }
}
function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (quantidade > qtdSuperior)  {
        alert ('Quantidade indisponivel para tipo superior');
    } else {
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = qtdSuperior;
        alert ('Compra realizada com sucesso!!');
    }
}
function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (quantidade > qtdInferior)  {
        alert ('Quantidade indisponivel para tipo inferior');
    } else {
        qtdInferior = qtdInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = qtdInferior;
        alert ('Compra realizada com sucesso!!');
    }
}