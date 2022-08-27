let myForm = document.querySelector("#formulario-contacto");

myForm.addEventListener("submit", enviar);

function enviar(e) {
  e.preventDefault();
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      let elementoEnvioExitoso = document.querySelector("#envioExitoso");
      elementoEnvioExitoso.classList.remove("hidden");
    	let temporizador = setTimeout(() => {
        elementoEnvioExitoso.classList.add("hidden");
      }, 3000);
      clearTimeout(temporizador);
      console.log("se envio");
    })
    .catch((error) => alert(error));
};