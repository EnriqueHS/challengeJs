alert("1ra Entrega final Y DESAFIOS");

let usuarioNombre = prompt("Ingrese su nombre");
let usuarioApellido = prompt("Ingrese su apellido");


alert(`Bienvenido ${usuarioNombre}  ${usuarioApellido}.`);

let productos =[]

//Fabrica 
class Producto {
  constructor(nombre, tamaño, precio){
    this.nombre = nombre;
    this.tamaño = tamaño;
    this.precio = precio;
  }
}

let listaProductos = [];

listaProductos.push(new Producto("zafu", "xxl", 2500))
listaProductos.push(new Producto("Zafu", "xl", 2500))
listaProductos.push(new Producto("Zafu", "m", 2500))
listaProductos.push(new Producto("Taza", "Extra Large", 1500))
listaProductos.push(new Producto("Taza", "Regular", 1100 ))
listaProductos.push(new Producto("Mat", "1.6 Metros", 6000))
listaProductos.push(new Producto("Mat", "Regular", 4200))



const agregarProductos = () => {

  let nombre = prompt("Nombre del producto");
  let tamaño = prompt("Tamaño...")
  let precio = Number( prompt("Precio del producto"));

  let producto = new Producto (nombre, tamaño, precio)
  listaProductos.push(producto)
}



//DESAFIO ORDENAR: de mayor a menor precio
listaProductos.sort((a,b) => {
  if (a.precio > b.precio){
    return -1
  }
  if(a.precio < b.precio){
    return 1
  }
  return 0

})


console.log(listaProductos);










