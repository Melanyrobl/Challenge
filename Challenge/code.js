const input = document.querySelector("#input-texto");
const botonEncriptar = document.querySelector("#boton-encriptar");
const botonDesencriptar = document.querySelector("#boton-desencriptar");
const resultado = document.querySelector("#resultado");
const botonCopiar = document.querySelector("#boton-copiar");


/*botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const x = cambiarString(input.value);
    resultado.value = x;
    input.value = "";
});*/

botonEncriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const x = cambiarString(input.value);
    resultado.value = x;
    input.value = "";
});

botonDesencriptar.addEventListener("click", (e) => {
    e.preventDefault();
    const x = devolverString(input.value);
    resultado.value = x;
    input.value = "";
});

botonCopiar.addEventListener('click', (e) => {
    e.preventDefault();
    const resultado = document.querySelector("#resultado");
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
});


function cambiarString(stringCambio){
    let condicionCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringCambio = stringCambio.toLowerCase()
      for(let i = 0; i < condicionCodigo.length; i++){
        if(stringCambio.includes(condicionCodigo[i][0])){
          stringCambio = stringCambio.replaceAll(condicionCodigo[i][0],condicionCodigo[i][1])
        }
      }
    return stringCambio
  }
  
function devolverString(stringDevuelto){
    let condicionCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    stringDevuelto = stringDevuelto.toLowerCase()
    for(let i = 0; i < condicionCodigo.length; i++){
      if(stringDevuelto.includes(condicionCodigo[i][1])){
        stringDevuelto = stringDevuelto.replaceAll(condicionCodigo[i][1],condicionCodigo[i][0])
      }
    }
    return stringDevuelto
}

