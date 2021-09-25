//alert("Desafio Algoritmo ciclos");



let per = prompt("Nombra a personajes de DC");

switch (per) {
  case "batman":
    alert(`El personaje ${per} era Team Buenos`);
    break

  case "guason":
    alert(`El personaje que nombraste: ${per} era Team Malos`);
    break

  case "aquaman":
    alert(`El personaje que nombraste: ${per} era Team Buenos`);
    break

  case "flash":
    alert(`El personaje que nombraste: ${per} era Team Buenos`);
    break

  default:
    alert(`El personaje ${per} No lo recuerdo... Mmmm.`);

    let team = prompt("¿Sera que sos Team Marvel?");

    let afirmativo = "si";


    if (team == afirmativo) {

      alert("Sos de Marvel entonces");

    } else {
      alert("Ok entonces sos de DC, bien.");
    }


}

