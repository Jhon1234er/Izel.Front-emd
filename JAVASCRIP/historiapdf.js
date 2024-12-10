document.getElementById('continuar-btn').addEventListener('click', () => {
    abrirVentana('contenedor-dos');
});

document.getElementById('radicar-btn').addEventListener('click', () => {
    cerrarVentana('contenedor-dos');
    abrirVentana('contenedor-tres');
});

document.getElementById('finalizar-btn').addEventListener('click', () => {
    window.location.href = '/HTML/Usuario/principal.html';
});

function abrirVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.classList.add('active');
    }
}

function cerrarVentana(id) {
    const ventana = document.getElementById(id);
    if (ventana) {
        ventana.classList.remove('active');
    }
}
