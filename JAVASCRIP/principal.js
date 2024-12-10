document.addEventListener('DOMContentLoaded', function() {
    // Mostrar el pie de página cuando se llega al final de la página
    window.onscroll = function() {
        if (document.documentElement.scrollTop + window.innerHeight >= document.documentElement.scrollHeight) {
            document.querySelector('footer').classList.add('show');
        } else {
            document.querySelector('footer').classList.remove('show');
        }
    }

    // Abrir la ventana de Citas Médicas al hacer clic en "Citas Médicas"
    document.getElementById('citas-medicas').addEventListener('click', function() {
        document.getElementById('ventana-citas').classList.add('active');
        document.body.classList.add('modal-active');
    });

    // Cerrar la ventana de Citas Médicas
    document.getElementById('cerrar-ventana').addEventListener('click', function() {
        document.getElementById('ventana-citas').classList.remove('active');
        document.body.classList.remove('modal-active');
    });

    // Abrir la ventana de Historial Clínico al hacer clic en "Historial Clínico"
    document.getElementById('historial-clinico').addEventListener('click', function() {
        document.getElementById('ventana-historial').classList.add('active');
        document.body.classList.add('modal-active');
    });

    // Cerrar la ventana de Historial Clínico
    document.getElementById('cerrar-ventana-historial').addEventListener('click', function() {
        document.getElementById('ventana-historial').classList.remove('active');
        document.body.classList.remove('modal-active');
    });

    // Abrir la ventana de Perfil al hacer clic en "Ver Perfil"
    document.getElementById('ver-perfil').addEventListener('click', function(event) {
        event.preventDefault(); // Evitar la acción del enlace
        document.getElementById('ventana-perfil').classList.add('active');
        document.body.classList.add('modal-active');
    });

    // Cerrar la ventana de Perfil
    document.getElementById('cerrar-ventana-perfil').addEventListener('click', function() {
        document.getElementById('ventana-perfil').classList.remove('active');
        document.body.classList.remove('modal-active');
    });
});
