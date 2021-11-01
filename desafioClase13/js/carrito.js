let listaObjetos;
let imprimirDatos = document.getElementById("productosPrint");
let btn = document.getElementById("finalizarCompra")

if (localStorage.getItem("carrito") == null) {
  alert("Carrito Vacio");
} else {
  listaObjetos = JSON.parse(localStorage.getItem("carrito"));
}

listaObjetos.forEach((element) => {
  imprimirDatos.innerHTML += `
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
      
      
    </div>
  </div>
</div>     
  
      `;
});

const finalizarCompra = () => {
  let monto = 0;

  listaObjetos.forEach((e) => {
    monto += e.precio;
  });

  alert("Felicitaciones, tu compra fue aprobada, gastaste " + monto + " " + "pesos.");
  localStorage.removeItem("carrito");
};


btn.addEventListener("click", () => {

  finalizarCompra()
})