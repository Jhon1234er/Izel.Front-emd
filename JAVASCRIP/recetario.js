document.addEventListener('DOMContentLoaded', () => {
    const imprimir = document.getElementById('imprimir');
    const modal = document.getElementById('modal');
    const finalizar = document.getElementById('finalizar');

    imprimir.addEventListener('click', () => {
        modal.classList.add('modal--active');
    });
    
    finalizar.addEventListener('click', () => {
        modal.classList.remove('modal--active');
    });
});
