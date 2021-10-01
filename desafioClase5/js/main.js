alert("Objetos");

class Productos {
  constructor(nombre, categoria, precio, stock, valido){
    this.nombre = nombre,
    this.categoria = categoria,
    this.precio = precio,
    this.stock = stock,
    this.disponible = valido
  }

  compra (cantidad){

    if (this.stock <= 0){
      console.log("Lo lamento falta de stock")
      this.disponible = false
    }else {
      
      this.stock = this.stock - cantidad
      console.log(`Compraste un ${this.nombre}, marca ${this.categoria} y te salio ${this.precio * cantidad}`)

    }
  }
  cuotas(cuotas){

    if(this.precio / cuotas){

      console.log(`El producto te salen cuotas de ${this.precio / cuotas} pesos`)

    }
  
    
  }    
  

}

const producto1 = new Productos ("Mat Yoga", "Pepito", "5000", 5, true )
const producto2 = new Productos ("Zafu", "Sass", "3200", 3, true )
const producto3 = new Productos ("Almhoadillas", "lala", "1000", 5, true )



