let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint")

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {

    let index = listaObjetos.indexOf(element)

    imprimirDatos.innerHTML +=`

        
    <div class="card">
    <div class="card-img" id="designer-CP">
      <a href="#" class="brand">
      
      </a>
    </div>
    <div class="card-main">
      <div class="card-txt">
        <h3>${element.nombre}</h3>
        <p>${element.categoria}</p>
      </div>
      <div class="card-footer card-footer--light">
        <a href="#" class="btn btn-txt">$ ${element.precio}</a>
        
        <button id="btn" class="btn btn-pri" onclick="comprar(${index})">Comprar</button>
      </div>
    </div>
  </div>     
	
	`
});
	



const comprar = (index) => {

    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }


    carrito.push(listaObjetos[index])
    localStorage.setItem("carrito", JSON.stringify(carrito))
}




/* 
const guardarDato = () => {

    let variable = document.getElementById("nombre").value
    console.log(variable)
}

document.getElementById("save").addEventListener("nombre", () => {
    guardarDato()
}) */