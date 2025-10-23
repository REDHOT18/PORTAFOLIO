/* ====================== NAV MENU ====================== */
const btnOpen = document.querySelector('.btn--open');
const btnClose = document.querySelector('.btn--close');
const navMenu = document.querySelector('.nav__menu');

btnOpen.onclick = () => navMenu.classList.toggle('show--menu');
btnClose.onclick = () => navMenu.classList.remove('show--menu');
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('show--menu'));
});

/* ====================== TYPING EFFECT ====================== */
new Typed('#typing', {
  strings: ['Ingeniería De Sistemas y Computación'],
  typeSpeed: 65,
  loop: true,
  cursorChar: '__'
});

/* ====================== CONFIGURACIÓN DE SEMANAS ====================== */
// Aquí defines el PDF y descripción de cada semana
const semanasInfo = {
  1: {
    titulo: 'Semana #1',
    descripcion: 'Manual de Cuenta de GitHub',
    pdf: 'assets/pdf/Cuenta_GitHub.pdf'
  },
  2: {
    titulo: 'Semana #2',
    descripcion: 'Instalación de SQL Server 2022',
    pdf: 'assets/pdf/Manual_Sql_Server.pdf'
  },
  3: {
    titulo: 'Semana #3',
    descripcion: 'Bases de Datos y Tablas',
    pdf: 'assets/pdf/Cuadro comprativo_BD.pdf'
  },
  4: {
    titulo: 'Semana #4',
    descripcion: 'Consultas SQL Básicas',
    pdf: 'assets/pdf/Simulacion de caso de fallas.pdf'
  },
  5: {
    titulo: 'Semana #5',
    descripcion: 'Procedimientos Almacenados',
    pdf: 'assets/pdf/Creación de cuenta en AZURE.pdf'
  },
  6: {
    titulo: 'Semana #6',
    descripcion: 'Triggers y Vistas',
    pdf: 'assets/pdf/Triggers_Vistas.pdf'
  },
  7: {
    titulo: 'Semana #7',
    descripcion: 'Optimización y Seguridad',
    pdf: 'assets/pdf/Optimizacion.pdf'
  }
};

/* ====================== GENERAR SEMANAS ====================== */
const worksContainer = document.querySelector('.works__content');

// Generar tarjetas de semanas dinámicamente
for (let i = 1; i <= 7; i++) {
  const weekCard = `
    <div class='works__item'>
      <div class='works__image'>
        <img src='assets/img/work-bg.png' alt='Semana ${i}' class='works_img'>
      </div>
      <div class='works__body'>
        <div class='works__head'>
          <h3 class='works__title'>${semanasInfo[i].titulo}</h3>
          <div class='works__links'>
            <a href='#' class='semana-link' data-semana='${i}' aria-label="Abrir modal">
              <i class='bx bx-link-external'></i>
            </a>
          </div>
        </div>
        <p style="margin: 10px 0; color: #666; font-size: 14px;">${semanasInfo[i].descripcion}</p>
        <div class='works__skills'>
          <span class='works__skill'><i class='bx bxs-file-pdf'></i> PDF</span>
          <span class='works__skill'><i class='bx bxs-book-content'></i> Manual</span>
          <span class='works__skill'><i class='bx bxs-data'></i> SQL</span>
        </div>
      </div>
    </div>`;
  worksContainer.innerHTML += weekCard;
}

/* ====================== MODAL MANUAL SQL ====================== */
const modalManual = document.getElementById('modalManual');
const closeManual = document.getElementById('closeManual');

// Abrir modal con el PDF correspondiente a cada semana
document.addEventListener('click', e => {
  if (e.target.closest('.semana-link')) {
    e.preventDefault();
    
    // Obtener el número de semana
    const semanaNum = e.target.closest('.semana-link').dataset.semana;
    const info = semanasInfo[semanaNum];
    
    // Actualizar el contenido del modal
    const modalTitle = document.querySelector('#modalManual .modal__title');
    const modalDescription = document.querySelector('#modalManual p');
    const pdfLink = document.querySelector('#modalManual .btn--login');
    
    modalTitle.textContent = `📘 ${info.titulo}`;
    modalDescription.textContent = `${info.descripcion} - Revisa el manual paso a paso.`;
    pdfLink.href = info.pdf;
    
    // Mostrar el modal
    modalManual.classList.add('show-modal');
  }
});

// Cerrar modal
closeManual.onclick = () => modalManual.classList.remove('show-modal');
window.onclick = e => { 
  if (e.target === modalManual) {
    modalManual.classList.remove('show-modal');
  }
};