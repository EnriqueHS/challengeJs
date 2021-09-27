//alert("Desafio Algoritmo Funciones COMPLEMENTARIO");

function entrarAlEdificio() {

  let pregunta = prompt("¿Cual es tu nombre?");
  alert(validar(pregunta))

}

function validar(nombre) {


  let verifica = nombre.toLowerCase()

  if (verifica == "enrique") {

    return `Podes entrar, te tengo en la lista ${nombre}`

  } else {
    return "No podes entrar, no sos de este edificio."
  }

}

function cuerpoEdificio() {
  let cuerpo = Number(prompt("Vas al cuerpo 1 o al 2?"))

  if (cuerpo == 1) {

    alert("Tienes suerte, te queda mas cerca.")

  } else if (cuerpo == 2) {
    alert("Tienes que caminar unos metros más.")
  }

}



entrarAlEdificio();
cuerpoEdificio();




