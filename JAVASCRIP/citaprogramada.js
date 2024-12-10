// Función genérica para abrir una ventana modal
function abrirVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.add('active');  // Agregar la clase 'active' al modal
        document.body.classList.add('modal-active');  // Opcional, si quieres cambiar el fondo
    }
}

// Función genérica para cerrar una ventana modal
function cerrarVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.remove('active');  // Eliminar la clase 'active' para cerrar el modal
        document.body.classList.remove('modal-active');  // Opcional, para restaurar el fondo
    }
}

// Abrir la ventana de la Cita 1 al hacer clic
const citaUno = document.getElementById('cita-uno');
if (citaUno) {
    citaUno.addEventListener('click', function () {
        abrirVentana('modal-cita-uno');
    });
}

// Cerrar la ventana de la Cita 1
const cerrarModalCitaUno = document.querySelector('#modal-cita-uno .cerrar');
if (cerrarModalCitaUno) {
    cerrarModalCitaUno.addEventListener('click', function () {
        cerrarVentana('modal-cita-uno');
    });
}

// Abrir la ventana de la Cita 2 al hacer clic
const citaDos = document.getElementById('cita-dos');
if (citaDos) {
    citaDos.addEventListener('click', function () {
        abrirVentana('modal-cita-dos');
    });
}

// Cerrar la ventana de la Cita 2
const cerrarModalCitaDos = document.querySelector('#modal-cita-dos .cerrar');
if (cerrarModalCitaDos) {
    cerrarModalCitaDos.addEventListener('click', function () {
        cerrarVentana('modal-cita-dos');
    });
}
