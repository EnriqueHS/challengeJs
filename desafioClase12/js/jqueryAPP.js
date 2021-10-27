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