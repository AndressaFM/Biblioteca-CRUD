function enviarImagem(){
    let fileInput = window.document.getElementById("personagem");
    let nomes = window.document.getElementById("nomePersonagens").value;
    let mostrarTudo = window.document.getElementById("mostrarTudo");

    if(fileInput.files.length>0){
        let file = fileInput.files[0];
        let reader = new FileReader();
    
        reader.onload = function(event) {
    let imagemcarregada = event.target.result;
    let novaImagem = document.createElement("img");
    novaImagem.src = imagemcarregada;
    novaImagem.alt = nomes;

    
    let novaLegenda = document.createElement("figcaption");
    novaLegenda.textContent = nomes;


    const figureElement = document.createElement("figure");
    figureElement.appendChild(novaImagem)
    figureElement.appendChild(novaLegenda)

    mostrarTudo.appendChild(figureElement);

    let personagens = []; //Array
    if (localStorage.hasOwnProperty("personagens")) {
        personagens = JSON.parse(localStorage.getItem("personagens"))
    }
    personagens.push({
        Imagem:event.target.result,
        Nome:nomes
    })
    localStorage.setItem("personagens",JSON.stringify(personagens));
        };
    reader.readAsDataURL(file);
}else{
    alert("Por favor, selecione uma imagem antes de enviar.")
}
}

function Limpar(){
    let fileInput = window.document.getElementById("personagem");
    let nomes = window.document.getElementById("nomePersonagens");
    nomes.value = "";
    fileInput.value="";

}
function apagarTudo(){
    localStorage.removeItem("personagens");
    let mostrarTudo = document.getElementById("mostrarTudo");
    while (mostrarTudo.firstChild) {
        mostrarTudo.removeChild(mostrarTudo.firstChild);
    };
}

function carregarDados(){
    if(localStorage.length===0){
        alert("Não há dados no localStorage")
        return
    }
    let dados = JSON.parse(localStorage.getItem('personagens'));
    if(!dados||dados.length===0){
        alert("Nenhum arquivo válido encontrado")
        return
    }

    let mostrarTudo = document.getElementById("mostrarTudo");

    dados.forEach(function (dado){
        let figure = document.createElement('figure');
        
        let imgElement = document.createElement('img')
         imgElement.src = dado.Imagem;
         figure.appendChild(imgElement);

         let figcaptionElement = document.createElement('figcaption')
         figcaptionElement.textContent = dado.Nome;
         figure.appendChild(figcaptionElement);

         mostrarTudo.appendChild(figure);
         
    });
}