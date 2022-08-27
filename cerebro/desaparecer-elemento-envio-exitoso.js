setTimeout( a => {
	$("#envioExitoso").fadeOut();
}, 4000);

document.querySelector("#formulario-contacto").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("#formulario-contacto");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
    	alert("Envio Éxitoso");
    });
    .catch((error) => alert(error));
};