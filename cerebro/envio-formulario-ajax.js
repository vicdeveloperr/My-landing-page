let myForm = document.querySelector("#formulario-contacto");

myForm.addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault();
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
    	alert("Envio Éxitoso");
    })
    .catch((error) => alert(error));
};