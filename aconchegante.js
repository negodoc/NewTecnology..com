document.addEventListener('DOMContentLoaded', () => {
    const btnComprar = document.getElementById('btn-comprar');
    const btnAlugar = document.getElementById('btn-alugar');

    btnComprar.addEventListener('click', () => {
        alert('Obrigado por se interessar em comprar esta casa! Entraremos em contato em breve.');
    });

    btnAlugar.addEventListener('click', () => {
        alert('Obrigado por se interessar em alugar esta casa! Entraremos em contato em breve.');
    });
});
