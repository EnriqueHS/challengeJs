class User {
  constructor(nombre, pass) {
    this.nombre = nombre;
    this.pass = pass;
  }
}

class Producto {
  constructor(nombre, categoria, precio, stock) {
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.stock = stock;
  }
}

const admin = new User("admin", "coder");

let listaProductos;

if (localStorage.getItem("lista") == null) {
  listaProductos = [];
} else {
  listaProductos = JSON.parse(localStorage.getItem("lista"));
}

const crearProducto = (nombre, categoria, precio, stock) => {
   const producto = new Producto(nombre, categoria, precio, stock);
  
    
  return producto; 





};

const confirmacionDeAcceso = () => {
  let bucle = true;
  
  

  while (bucle) {
    const nombre = prompt("Usuario:");
    const pass = prompt("Contraseña:");


    

    if (nombre === admin.nombre && pass === admin.pass) {
      bucle = false;

      let ciclo = true;

      while (ciclo) {
        const nombre = prompt("ingrese nombre del producto");
        const categoria = prompt("ingrese categoria del producto");
        const precio = Number(prompt("ingrese precio del producto"));
        const stock = parseInt(prompt("Ingrese la cantidad de productos"));

        listaProductos.push(crearProducto(nombre, categoria, precio, stock));

        localStorage.setItem("lista", JSON.stringify(listaProductos));

        ciclo = confirm("Deseas agregar otro mas?");
      }

      break;
    } else {
      alert("Usuario Incorrecto");
    }
  }
};
console.log(document.getElementById ("tituloH1"));
  document.getElementById("tituloH1").textContent = "Se agregaron productos, ve a Productos!"

confirmacionDeAcceso();
