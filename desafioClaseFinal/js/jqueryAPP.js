$(document).ready(function(){

  $("#formDatos").submit(function(e){

    let name = $("#name").val();
    let email = $("#email").val();
    let comment = $("#comment").val();

    e.preventDefault();
    $("#form-impreso").append(`
    
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





//DARK MODE
const darkMode = () => {
  document.getElementById("linkTheme").href = "css/dark.css"
  localStorage.setItem("theme", "dark")
}

const lightMode = () => {
  document.getElementById("linkTheme").href = "css/main.css"
  localStorage.setItem("theme", "main")
}

document.getElementById("theme").addEventListener("click", () => {
  if (localStorage.getItem("theme") === "dark") {
      lightMode()
  } else {
      darkMode()
  }
})



