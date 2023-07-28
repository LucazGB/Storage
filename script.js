function cadastrarProdutos(){
    let nome = document.getElementById("nome").value;
    let valor = document.getElementById("valor").value;
    let descricao = document.getElementById("descricao").value;
    let imagem = document.getElementById("imagem").value;

    let produto = {
        nome,
        valor,
        descricao,
        imagem
    };

   
    
    if(localStorage.getItem("produtos")){
        dados = localStorage.getItem("produtos")
        dados = JSON.parse("dados")
        dados.push(obj);
        localStorage.setItem("produtos", JSON.stringify(dados));
        limpaCampos();
        listaProdutos();
    }else{
        localStorage.getItem("produtos", JSON.stringify ([produto]));
        limpaCampos();
        listaProdutos();
    }
}

function limpaCampos(){
    let nome = document.getElementById('nome').value = '';
    let valor = document.getElementById('valor').value = '';
    let descricao = document.getElementById('descricao').value = '';
    let imagem = document.getElementById('imagem').value = '';
}

function listaProdutos(){
    let dados = localStorage.getItem('produtos');
    let html = '';
    if(dados){
        dados = JSON.parse(dados);

        for (let i = 0; i < dados.length; i++) {
            const produtos = dados[i];
            let base_html = `
            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="${produto.imagem}" class="card-img-top" alt="${produto.imagem}">
                    <div class="card-body">
                      <h5 class="card-title">${produto.nome}</h5>
                      <p class="card-text">${produto.valor}</p>
                      <p class="card-text">${produto.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                     </div>
                 </div>
            </div>
            `;
            html = html+base_html;
        }  
    }else{
        html = "Cadastre seu produto"
    }

    document.getElementById('produtos').innerHTML = html;
}

listaProdutos()