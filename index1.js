//Salvando e mostrando dados
function salvarDados() {
    let livros = document.getElementById("livros").value
    let autor = document.getElementById("autor").value
    let editora = document.getElementById("editora").value
    let checkSim = document.querySelector("#Sim");
    let checkNao = document.querySelector("#Não");
    let valorcheckSim = checkSim.checked ? "Sim" : ""; 
    let valorcheckNao = checkNao.checked ? "Não" : "";

    let livros1 = [];
    if(localStorage.hasOwnProperty("livros1")) {
        livros1= JSON.parse(localStorage.getItem("livros1"));
       } 
    livros1.push({
        Livros: livros, 
        Autor: autor, 
        Editora: editora, 
        ContinuaçãoSim: valorcheckSim, 
        ContinuaçãoNão: valorcheckNao
    });
    localStorage.setItem("livros1", JSON.stringify(livros1));
    location.reload();
}
//Deixando só um check
function checkbox(clique){
    let checkSim = document.getElementById("Sim")
    let checkNao = document.getElementById("Não")
    if(clique==="Sim" && checkSim.checked){
        checkNao.checked=false;
    } else if( clique==="Não" && checkNao.checked){
        checkSim.checked=false;
    }
}
//limpando dados
function limpar() {

    let livros = document.getElementById('livros');
    let autor = document.getElementById('autor');
    let editora = document.getElementById('editora');
    let checkSim = document.querySelector("#Sim")
    let checkNao = document.querySelector("#Não")
    livros.value = "";
    autor.value = "";
    editora.value = "";
    checkSim.checked = false;
    checkNao.checked = false;

}
//Carregando dados
function recuperandoDados() {
if(localStorage.length===0){
    alert("Não há dados no localStorage");
    return;
}
let dados = JSON.parse(localStorage.getItem('livros1'));
if(!dados|| dados.length === 0) {
    alert("Não há dados válidos armazenados no localStorage");
    return;
}

let tbody = document.getElementById("tabela").querySelector("tbody");

dados.forEach(function(dado) {
    let newRow = tbody.insertRow();
    newRow.innerHTML = `
    <td>${dado.Livros}</td>
    <td>${dado.Autor}</td>
    <td>${dado.Editora}</td>
    <td>${dado.ContinuaçãoSim ? 'Sim' : 'Não'}</td>
    <td><a href="./editarIndex.html?livro_a_editar=${dado.Livros}"><button class="edicao" >Editar</button></a></td>
  `;
});

}
//Apagando do localstorage
function  apagarTudo() {
    localStorage.removeItem("livros1");
    const elementosParaApagar = document.querySelectorAll('tbody'); // Substitua 'tag_desejada' pela tag que deseja apagar (por exemplo, 'div', 'p', 'span', etc.)

    elementosParaApagar.forEach(elemento => {
        elemento.remove(); // Remove cada elemento encontrado
    });
}

