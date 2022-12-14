
// formulario

var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = '<div class="enviadoOk">¡Gracias por tu mensaje, pronto nos pondremos en contacto! </div>';
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! Hay un error con la carga de tu mensaje"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Hay un error con la carga de tu mensaje"
    });
}
form.addEventListener("submit", handleSubmit);

// Validate name input
function validateNameLenght(character){
    if(character.length < 5){
        document.getElementById('js-validadorForm')
                .innerHTML = '<p class="mensaje-validador">Tu nombre completo debe contener al menos 5 letras.</p>';
    } else {
        document.getElementById('js-validadorForm')
                .innerHTML = '';
    }
}