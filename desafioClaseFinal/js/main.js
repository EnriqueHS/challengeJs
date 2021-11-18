

//login
function validar()

		{
			const usuario = document.getElementById("name").value;
			const Contraseña = document.getElementById("passLogin").value;	

			if(usuario === "admin" && Contraseña === "coder")
			{
				alert("Usuario y Contraseña validos");
			}
			else
			{
				alert("Verifique sus credenciales");
			}
		}
 

//contacto.html
console.log(document.getElementById ("st-c"));

document.getElementById("st-c").textContent = "Dejanos tu consulta"

document.getElementById("st-c").style.fontSize = "2em"




