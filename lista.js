function enviarLivro() {
    let livro = document.getElementById('livro').value;
    let listaLivro = document.getElementById('lista');
    let mostrandoLivro = document.createElement("li")
    
    mostrandoLivro.textContent = livro;
    listaLivro.appendChild(mostrandoLivro);

    let livrosLer = [];
    if(localStorage.hasOwnProperty("livrosLer")){
        livrosLer = JSON.parse(localStorage.getItem("livrosLer"));
    }
    livrosLer.push({Leitura:livro});
    localStorage.setItem("livrosLer",JSON.stringify(livrosLer));
}
function limparLivro(){
    let livro = document.getElementById('livro');
    livro.value = "";
}
function apagarTudo(){
    localStorage.removeItem("livrosLer")
    let listaLivro=document.getElementById('lista')
    while(listaLivro.firstChild){
       listaLivro.removeChild(listaLivro.firstChild);
    }
}

function mostrar(){
  if (localStorage.length===0){
    alert("Não há dados no localStorage")
    return;
  }
  let mostrarLista = JSON.parse(localStorage.getItem('livrosLer'));
  if(!mostrarLista || mostrarLista.length === 0 ){
    alert('Nenhum arquivo válido encontrado')
    return;
  }
  let mostraLista = document.getElementById("lista");
  for(let item of mostrarLista) {
let mostraTexto = document.createElement('li');
mostraTexto.textContent=  item.Leitura;
mostraLista.appendChild(mostraTexto);
  }
  }