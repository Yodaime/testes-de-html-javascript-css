function captura1(){
    alert("Obrigado");
}
function captura2(){
    var  nome;
    nome = prompt("Qual seu nome:");
}
function captura3(){
    var h1 = document.getElementsByTagName("h1");

    if (h1[0] == "Plataforma de Anuncios"){
        h1[0].innerText = "Plataforma de Cursos";
    }else{
        h1[0].innerText = "Plataforma de Anuncios";
    }
}