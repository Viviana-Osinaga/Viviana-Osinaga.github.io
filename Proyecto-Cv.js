const formulario = document.getElementById('formulario');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const mail = document.getElementById('mail');
const phone = document.getElementById('phone');
const descripcion = document.getElementById('descripcion');
const warnings = document.getElementById('warnings');

formulario.addEventListener("submit", e => {
    e.preventDefault()
    let warnings = ''
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if(/^[a-zA-ZÀ-ÿ\s]{3,15}$/) {
    warnings +=`El nombre no es valido <br>`
    }
})


// const expresiones = {
// 	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
//     apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
// 	phone: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// 	telefono: /^\d{7,14}$/, // 7 a 14 numeros.
//     descripcion: /^[a-zA-Z0-9\_\-]{4,140}$/
// }

