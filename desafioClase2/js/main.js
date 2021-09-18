//alert("Desafio Algoritmo Condicional");


const signoAries = "aries"; 
const signoTauro = "tauro"; 
const signoLibra = "libra"; 

const afirmativo = "si";
const negativo = "no";


let horoscopo = prompt("¿Crees en el Horóscopo?");
horoscopo = horoscopo.toLowerCase(); //con to.UpperCase me daba error, no se porque.


if(horoscopo === afirmativo){
  alert("Genial avancemos");

  let signo = prompt ("Elije entre estos tres Signos: Aries Tauro o Libra");

  signo = signo.toLowerCase();
  
  if(signo === signoAries) {
      console.log (`Excelente, ${signo}, es uno de los tres!`);
      alert("¡Excelente, el mejor signo para Septiembre!");
  } else if (signo === signoTauro){
      alert("a Tauro Le va a ir bien en el trabajo este mes.");
  } else if (signo === signoLibra){
      alert("a Libra le va a ir bien en lo economico este mes.");
  }
  else {
    console.log (`Lo siento, pusiste cualquiera`);
    alert(`Lo siento ${signo} no es una respuesta valida.`);
    } 

} else  {
    alert("Ok chau");
} 

