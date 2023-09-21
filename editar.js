
//limpar
function limpar() {

    let livros = document.getElementById('livros');
    let autor = document.getElementById('autor');
    let editora = document.getElementById('editora');
    let checkSim = document.querySelector("#Sim");
    let checkNao = document.querySelector("#Não");
    livros.value = "";
    autor.value = "";
    editora.value = "";
    checkSim.checked = false;
    checkNao.checked = false;
}
//checkbox
function checkbox(clique){
    let checkSim = document.getElementById("Sim");
    let checkNao = document.getElementById("Não");
    if(clique==="Sim" && checkSim.checked){
        checkNao.checked=false;
    } else if( clique==="Não" && checkNao.checked){
        checkSim.checked=false;
    }
}

// salvar
function salvarDados2(){
    let livros = document.getElementById('livros').value;
    let autor = document.getElementById('autor').value;
    let editora = document.getElementById('editora').value;
    let checkSim = document.querySelector("#Sim").checked;
    let checkNao = document.querySelector("#Não").checked;
    
    let dados = JSON.parse(localStorage.getItem("livros1"))||{};
    
    dados.Livros=livros;
    dados.Autor=autor;
    dados.Editora=editora;
    dados.ContinuaçãoSim = checkSim.toString();
    dados.ContinuaçãoNão = checkNao.toString();

localStorage.setItem("livros1", JSON.stringify(dados));
    alert("Dados salvos com sucesso!")
}


//preencher

function preencher() {
    
    const urlParams = new URLSearchParams(window.location.search);
    const book = urlParams.get("livro_a_editar");
    let dados = JSON.parse(localStorage.getItem("livros1"));
    let arrayLivroEditar="";
    for(var i = 0; i < dados.length; i++) {
        if(dados[i].Livros === book) {
           arrayLivroEditar = dados[i];
        }
    }
    let livros = arrayLivroEditar.Livros;
    let autor = arrayLivroEditar.Autor;
    let editora = arrayLivroEditar.Editora;
    let continuaçãoSim = arrayLivroEditar.ContinuaçãoSim;
    let continuaçãoNão = arrayLivroEditar.ContinuaçãoNão;
    
    document.getElementById("livros2").value = livros;
    document.getElementById("autores2").value = autor;
    document.getElementById("editores2").value = editora;
    document.getElementById("Sim").checked = continuaçãoSim; 
    document.getElementById("Não").checked = continuaçãoNão;
    
}