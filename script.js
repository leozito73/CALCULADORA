const resutado = document.querySelector(" .result");
const confirmar = document.querySelector(" .igual");


function insert(valor){
    resutado.innerHTML += valor;
}

function clean(){
    resutado.innerHTML = "";
}