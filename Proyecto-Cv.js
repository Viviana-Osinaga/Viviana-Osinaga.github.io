const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');
const descripcion = document.getElementById('descripcion');
const parrafo = document.getElementById('warnings');

formulario.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = '';
    let regexname = /^[a-zA-ZÀ-ÿ\s]{3,15}$/
    let regexlname = /^[a-zA-ZÀ-ÿ\s]{3,15}$/
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    let regexphone = /^\d{7,14}$/
    let regexdesc = /^([0-9A-ZÀ-ÖØ-Þa-zß-öø-ÿ .,?¿!¡_$#%&()=+{}_:;\-\s\n\r\t\/]+)$/ 
    let entrar = false;
    parrafo.innerHTML = "";
    if(!regexname.test(nombre.value)) {
        warnings +=`El nombre no es valido <br>`
        entrar = true;
    }
    if(!regexlname.test(apellido.value)) {
        warnings +=`El apellido no es valido <br>`
        entrar = true;
    }
    if(!regexEmail.test(mail.value)){
        warnings +=`El Email no es valido <br>`
        entrar = true;
    }
    if(!regexphone.test(phone.value)){
        warnings +=`El numero no es valido <br>`
        entrar = true;
    }
    if(!regexdesc.test(descripcion.value)){
        warnings +=`La descripcion no es valida`
        entrar = true;
    }
    if(entrar) {
        parrafo.innerHTML = warnings
        return
    }
    parrafo.innerHTML = "Enviando..."
    const formElement = document.getElementById('formulario');
    const formData = new FormData(formElement); // Crea un objeto FormData con los datos del formulario
    
    fetch("https://formsubmit.co/vivianasolizosinaga@gmail.com", {
        method: 'POST',
        body: formData
    })
    .then(data => {
        console.log(data); // Maneja la respuesta del servidor
        parrafo.innerHTML = "Enviado"
    })
    .catch(error => {
        console.error('Error:', error);
    });
})