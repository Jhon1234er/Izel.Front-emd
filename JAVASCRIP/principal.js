// Función genérica para abrir una ventana modal
function abrirVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.add('active');
        document.body.classList.add('modal-active');
    }
}

// Función genérica para cerrar una ventana modal
function cerrarVentana(idVentana) {
    const ventana = document.getElementById(idVentana);
    if (ventana) {
        ventana.classList.remove('active');
        document.body.classList.remove('modal-active');
    }
}

// Abrir la ventana de Citas Médicas al hacer clic en "Citas Médicas"
const citasMedicasBtn = document.getElementById('citas-medicas');
if (citasMedicasBtn) {
    citasMedicasBtn.addEventListener('click', function () {
        abrirVentana('ventana-citas');
    });
}

// Cerrar la ventana de Citas Médicas
const cerrarCitasBtn = document.getElementById('cerrar-ventana');
if (cerrarCitasBtn) {
    cerrarCitasBtn.addEventListener('click', function () {
        cerrarVentana('ventana-citas');
    });
}

// Abrir la ventana de Historial Clínico al hacer clic en "Historial Clínico"
const historialClinicoBtn = document.getElementById('historial-clinico');
if (historialClinicoBtn) {
    historialClinicoBtn.addEventListener('click', function () {
        abrirVentana('ventana-historial');
    });
}

// Cerrar la ventana de Historial Clínico
const cerrarHistorialBtn = document.getElementById('cerrar-ventana-historial');
if (cerrarHistorialBtn) {
    cerrarHistorialBtn.addEventListener('click', function () {
        cerrarVentana('ventana-historial');
    });
}

// Abrir la ventana de Perfil al hacer clic en "Ver Perfil"
const verPerfilBtn = document.getElementById('ver-perfil');
if (verPerfilBtn) {
    verPerfilBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Evitar la acción del enlace
        abrirVentana('ventana-perfil');
    });
}

// Cerrar la ventana de Perfil
const cerrarPerfilBtn = document.getElementById('cerrar-ventana-perfil');
if (cerrarPerfilBtn) {
    cerrarPerfilBtn.addEventListener('click', function () {
        cerrarVentana('ventana-perfil');
    });
}
