// console.log('Hola desde el archivo index.js')

// console.log('Objeto Window:', window)

// console.log('Navigator:', navigator)
// console.log(navigator.userAgent)

// console.log('Location:', location)

// window.alert('Hola desde el navegador')
// window siempre regresa null cuando no se encuentra el elemento

// let nombre = window.prompt('Ingresa tu nombre')

// const nameEl = document.getElementById('nombre')

// nameEl.textContent = nombre || 'Invitado'

// const respuesta = window.confirm('¿Quieres ir a google.com?') // valor booleano true o false

// console.log('Respuesta:', respuesta)

// if (respuesta) {
//   window.location.href = 'https://google.com'
// }

// DOM - Document Object Model
/*
Window {...
document: {...}
...
}
*/

console.log('Document:', window.document)


console.log(document) // a la página web

// obtener un solo string con las clases del elemento.
// document.body.className = 'bg-red'
// reemplaza todas las clases del elemento.
console.log(document.body.className)

// obtener un arreglo con las clases del elemento.
console.log(document.body.classList[2])
console.log(document.body.classList.value)
document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)

// Métdos de búsqueda
// Malas prácticas
// pokebola.onclick = function () {
//   alert('Atrapaste un pokemon')
// }

// getElementById
// const btnPoke = document.getElementById('poke')
// buena práctica
// btnPoke.onclick = function () {
//   alert('Atrapaste un pokemon')
// }

// querySelector
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

// Agregar evento por propiedad
btnOpen.onclick = function () {
  // navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

// Método para manejar eventos
// addEventListener
// querySelectorAll
const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}

/* Usando la libreria typing.js */
var typed = new Typed('#typing', {
  strings: ['Ingenieria De Sistemas y Computacion'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
})
/* ======================
   LOGIN MODAL
====================== */
const loginModal = document.getElementById('loginModal');
const closeLogin = document.getElementById('closeLogin');

// Seleccionamos los links de las semanas
const semanaLinks = document.querySelectorAll('.works__links a');

// Cuando den clic en semana 1, 2, 3, 4 -> abrir login
semanaLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Evita que abra el enlace
    loginModal.classList.add('show-modal');
  });
});

// Cerrar modal
closeLogin.onclick = function() {
  loginModal.classList.remove('show-modal');
}

// Cerrar si clickea fuera del contenido
window.onclick = function(e) {
  if (e.target === loginModal) {
    loginModal.classList.remove('show-modal');
  }
}
/* ======================
   MANEJO DE SUBIDA DE PDF
====================== */
const uploadSection = document.getElementById('upload');
const pdfForm = document.getElementById("pdfForm");
const pdfList = document.getElementById("pdfList");

// ✅ Simulación de login correcto (puedes cambiar la validación con SQL/PHP más adelante)
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const user = document.getElementById("user").value;
  const pass = document.getElementById("password").value;

  if (user === "dennis" && pass === "12345") {
    alert("✅ Login exitoso");
    loginModal.classList.remove('show-modal');
    uploadSection.style.display = "block"; // Mostrar sección de PDFs
  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
});

// 📂 Subida de PDF
pdfForm.addEventListener("submit", function(e) {
  e.preventDefault();
  
  const fileInput = document.getElementById("pdfFile");
  const file = fileInput.files[0];

  if (file && file.type === "application/pdf") {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${URL.createObjectURL(file)}" target="_blank">${file.name}</a>`;
    pdfList.appendChild(li);
    fileInput.value = ""; // reset
  } else {
    alert("⚠️ Solo se permiten archivos PDF");
  }
});


// const document = {
//   doctype: {},
//   documentElement: { // html
//     body: {
//       firstChild: {},
//       lastChild: {},
//       classList: {
//         add: () => { },
//         remove: () => { },
//         toggle: () => { },
//       },
//       style: {
//         color: '',
//         backgroundColor: '',
//         // ...
//       },
//       children: []
//     }
//   },
//   head: {},
// },
//   body: {},
//   head: {},
//   //...
// }
