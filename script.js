let resposta;
let textArea;

function btnCriptografar() {criptografar()}
function btnDescriptografar() {descriptografar()}
function btnCopiar() {copiar()}

function limparCampo() {
    textArea = document.querySelector("textarea")
    textArea.value = "";
}
function limparDiv(){
    document.getElementById('desaparece').style.display = 'none';
    document.getElementById('aparece').style.display = 'block';
}

function criptografar() {

    textArea = document.querySelector("textarea").value
    const resultado = textArea
        .replaceAll("a", "ai")
        .replaceAll("e", "enter")
        .replaceAll("i", "imes")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");

resposta = resultado;
limparCampo();
document.getElementById("resultado").value = resultado;
}


function descriptografar(){

    textArea = document.querySelector("textarea").value
    const resultado = textArea
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");

resposta = resultado;
limparCampo();
document.getElementById("resultado").value = resultado;
}

function copiar() {
   let copiar = resposta
    navigator.clipboard.writeText(resposta)
}
