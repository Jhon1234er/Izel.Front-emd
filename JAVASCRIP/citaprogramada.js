function abrirVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.add('active');  
        document.body.classList.add('modal-active'); 
    }
}

function cerrarVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.remove('active');  
        document.body.classList.remove('modal-active'); 
    }
}

const citaUno = document.getElementById('cita-uno');
if (citaUno) {
    citaUno.addEventListener('click', function () {
        abrirVentana('modal-cita-uno');
    });
}

const cerrarModalCitaUno = document.querySelector('#modal-cita-uno .cerrar');
if (cerrarModalCitaUno) {
    cerrarModalCitaUno.addEventListener('click', function () {
        cerrarVentana('modal-cita-uno');
    });
}

const citaDos = document.getElementById('cita-dos');
if (citaDos) {
    citaDos.addEventListener('click', function () {
        abrirVentana('modal-cita-dos');
    });
}

const cerrarModalCitaDos = document.querySelector('#modal-cita-dos .cerrar');
if (cerrarModalCitaDos) {
    cerrarModalCitaDos.addEventListener('click', function () {
        cerrarVentana('modal-cita-dos');
    });
}
