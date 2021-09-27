/* 
Se abre un curso nuevo y va a costar cero pesos para personas menores a 21 años pero
solo si se anotan dentro de los primeros 7 dias de comenzar la inscripcion. 
A los que se anotan desde el dia 8 inclusive hasta  el 14 va a costar el 50% y despues de esa fecha el 100%.
*/
alert("Inscripción Curso Simulador");
// datos personales


let nom = prompt("Ingrese su nombre").toUpperCase();
let edad = Number(prompt("Ingrese su edad"));
let dia = Number(prompt("Que dia de Septiembre se anotó"));


// valor curso
const valorCurso = 100;

function datoAlumno() {
  alert(
    `Estos son sus datos: Su nombre es ${nom}, tiene ${edad} años y se anoto el día ${dia} `
  );
}
datoAlumno();


function validarEdad() {
  if (edad <= 21 && dia <= 7) {
    alert(`Estas en la promo, tu precio a pagar es ${valorCurso - valorCurso}`);
  } else if (edad <= 21 && dia >= 8 && dia <= 14 ) {
    alert(`Estas en la promo, tu precio a pagar es ${valorCurso / 2}`);
  } else {
    alert(`No estas en la promo, tu precio a pagar es de ${valorCurso}`)
  }
}
validarEdad();




