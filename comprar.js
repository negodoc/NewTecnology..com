document.addEventListener("DOMContentLoaded", () => {
    const buyButtons = document.querySelectorAll(".buy-button");

    buyButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            const product = event.target.getAttribute("data-product");
            const price = event.target.getAttribute("data-price");

            // Simulação de uma compra
            const confirmed = confirm(`Você deseja comprar o ${product} por R$ ${price}?`);
            if (confirmed) {
                alert(`Compra do ${product} realizada com sucesso!`);
            } else {
                alert("Compra cancelada.");
            }
        });
    });
});
