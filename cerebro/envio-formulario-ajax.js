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
      elementoEnvioExitoso.classList.add("inline-block");
    	let temperozidor = setTimeout(() => {
        elementoEnvioExitoso.classList.remove("inline-block");
      }, 3000);
    })
    .catch((error) => alert(error));
};