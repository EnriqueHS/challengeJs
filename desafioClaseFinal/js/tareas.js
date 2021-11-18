//Tareas

class Agenda {
  constructor({ dia, horaInicio, horaFinalizacion, tarea, codigo}) {
    this.dia = dia;
    this.horaInicio = horaInicio;
    this.horaFinalizacion = horaFinalizacion;
    this.tarea = tarea;
    this.codigo = codigo;
  }
}

const listaTareas = [];


const crearAgenda = () => {
  const agenda = new Agenda({
    dia: document.getElementById("dia").value,
    horaInicio: document.getElementById("horaInicio").value,
    horaFinalizacion: document.getElementById("horaFinalizacion").value,
    tarea: document.getElementById("tarea").value,
    codigo: document.getElementById("codigo").value,
  });

  let lista;
  if (localStorage.getItem("listaTareas") != null) {
    lista = JSON.parse(localStorage.getItem("listaTareas"));
    lista.push(agenda);
    localStorage.setItem("listaTareas", JSON.stringify(lista));
  }
  listaTareas.push(agenda);

  return agenda;
};

//Guardar
const guardarEnBase = () => {
  crearAgenda();

  if (verificarStorage() != undefined) {
    localStorage.setItem("listaTareas", JSON.stringify(verificarStorage()));
  } else {
    localStorage.setItem("listaTareas", JSON.stringify(listaTareas));
  }
};


const agregarUsuarioLista = (object) => {
  listaPersonas.push(crearAgenda());
  
};

//Verificar
const verificarStorage = () =>{
  let dato = [];
  if (localStorage.getItem("listaTareas") != null){
    dato = JSON.parse(localStorage.getItem("listaTareas"))
    return dato
  }
}

//Imprimir
const imprimirDatos = () => {
  let indice = 0

  verificarStorage().forEach(obj => {

    indice += 1
    document.getElementById("contenidoTareas").innerHTML += `
    
    <div class="cont-tareas">
      <p>Tarea N° <span>${indice}</span></p>
      <p>Día: <span>${obj.dia}</span></p>
      <p>Hora de inicio: <span>${obj.horaInicio}</span></p>
      <p>Hora de finalización: <span>${obj.horaFinalizacion}</span></p>
      <p>Tarea a realizar: <span>${obj.tarea}</span></p>
      <p>codigo: <span>${obj.codigo}</span></p>
      <p><button  onclick=eliminarDeLaLista(${obj.codigo})><span class="iconify" data-icon="fa-regular:window-close" style="color: orange;" data-width="25" data-height="25"></span></button></p>
    </div>
    
    `
  })  
}

//Eliminar item
const eliminarDeLaLista = (codigo) => {
  let listaVieja = JSON.parse(localStorage.getItem("listaTareas"))
  let listaNueva = listaVieja.filter(e => e.codigo !=codigo)

  localStorage.setItem("listaTareas" , JSON.stringify(listaNueva))
  location.reload()
}


document.getElementById("btnSave").addEventListener("click", () => {
  guardarEnBase()

});

if(localStorage.getItem("listaTareas") !=null){
  imprimirDatos()
}

console.log(verificarStorage());
