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

const citasMedicas = document.getElementById('citas-medicas');
if (citasMedicas) {
    citasMedicas.addEventListener('click', function () {
        abrirVentana('ventana-citas');
    });
}

const cerrarCitas = document.getElementById('cerrar-ventana');
if (cerrarCitas) {
    cerrarCitas.addEventListener('click', function () {
        cerrarVentana('ventana-citas');
    });
}

const historialClinico = document.getElementById('historial-clinico');
if (historialClinico) {
    historialClinico.addEventListener('click', function () {
        abrirVentana('ventana-historial');
    });
}

const cerrarHistorial = document.getElementById('cerrar-ventana-historial');
if (cerrarHistorial) {
    cerrarHistorial.addEventListener('click', function () {
        cerrarVentana('ventana-historial');
    });
}

const verPerfil = document.getElementById('ver-perfil');
if (verPerfil) {
    verPerfil.addEventListener('click', function (event) {
        event.preventDefault(); 
        abrirVentana('ventana-perfil');
    });
}

const cerrarPerfil = document.getElementById('cerrar-ventana-perfil');
if (cerrarPerfil) {
    cerrarPerfil.addEventListener('click', function () {
        cerrarVentana('ventana-perfil');
    });
}
