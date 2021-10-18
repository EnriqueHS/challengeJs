
//linea 33 product.html
console.log(document.getElementById ("tituloProducto"));

document.getElementById("tituloProducto").textContent = "¡PRODUCTOS!"

document.getElementById("tituloProducto").style.fontSize = "50px"



//linea 85 product.html
const mod = document.createElement("h2")
mod.setAttribute("id", "elementoAgregado")
mod.textContent = "Contenido Creado por JS"
document.getElementById("tarjeta").appendChild(mod)

console.log(mod)




class pre{
  constructor({nombre, categoria, color, precio, stock}){
    this.nombre = nombre;
    this.categoria = categoria;
    this.color = color;
    this.precio = precio;
    this.stock = stock;
  }
}

const guardarDatos = () => {

  const producto = new pre({
      nombre: document.getElementById("nombre").value,
      categoria: document.getElementById("categoria").value,
      color: document.getElementById("color").value,
      precio: document.getElementById("precio").value,
      stock: document.getElementById("stock").value
    })
    


    const modPadre = document.createElement ("div")

    const mod = document.createElement ("h2")
    mod.textContent = producto.nombre
    modPadre.appendChild(mod)

    const mod1 = document.createElement ("p")
    mod1.textContent = producto.categoria
    modPadre.appendChild(mod1)

    const mod2 = document.createElement ("p")
    mod2.textContent = producto.color
    modPadre.appendChild(mod2)

    const mod3 = document.createElement ("p")
    mod3.textContent = producto.precio
    modPadre.appendChild(mod3)

    const mod4 = document.createElement ("p")
    mod4.textContent = producto.stock
    modPadre.appendChild(mod4)
    
    document.getElementById("tarjeta").appendChild(modPadre)
    
    

    return producto

}

