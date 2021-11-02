$(document).ready(function(){

  $("#formDatos").submit(function(e){

    let name = $("#name").val();
    let email = $("#email").val();
    let comment = $("#comment").val();

    e.preventDefault();
    $("#form").append(`
    
    <ul><li><b>Nombre:</b> ${name}</li>
    <li><b>Correo:</b> ${email}</li>
    <li><b>Comentario:</b> ${comment}</li>
    </ul>
        
    `);

  })

})



 //menu
$("#menu-sm").on("click", () => {
  $(".menu-md").slideToggle(1000);
})


//Desafio 13

  $("#cont-pictures").prepend('<div class="box-picture">Picture 1</div><div class="box-picture">Picture 2</div><div class="box-picture">Picture 3</div>');


  //Animamos sus propiedades CSS con animate
  $(".box-picture").animate({
          height: '250px',
          opacity: '0.9',
          width: '300px',
          color: '#FFFFFF'
      }, 
      1000, 
      function() { 
          console.log("final de animación");
      });



$(".box-picture").css("background", "rgb(190,87,108)")
.slideUp(1600)
.slideDown(300)


//Llamada ajax

const url = "https://hp-api.herokuapp.com/api/characters";

$("#busqueda").prepend('<button id="btnBuscqueda">Mostrar Dato de llamada</button>');

$("#btnBuscqueda").click(()=> {
  
  $.get(url, (respuesta, estado) => {
    
    if(estado == "success"){
      alert("Se envío");


      console.log(respuesta[0].name)
      $("#respuesta").prepend(`<img src="${respuesta[2].image}"> <p>${respuesta[2].name}</p>`)
    }

  })

})


