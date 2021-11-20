

//login

function validar(){
		const usuario = document.getElementById("name").value;
		const contraseña = document.getElementById("passLogin").value;	

    //let datos = usuario + contraseña;

		if(usuario === "admin" && contraseña === "coder")
		{
				
      window.location = "tareas.html";
      
      
		}
		else
		{
			document.getElementById("errorLogin").textContent = "¡Error, verifique sus datos ingresados!"
		}
}


//contacto.html
console.log(document.getElementById ("st-c"));

document.getElementById("st-c").textContent = "Dejanos tu consulta"

document.getElementById("st-c").style.fontSize = "2em"




