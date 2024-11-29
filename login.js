// Seleção de elementos
const loginForm = document.querySelector('.login-box');
const registerForm = document.querySelector('.register-box');
const showRegisterLink = document.querySelector('#show-register-form');
const showLoginLink = document.querySelector('#show-login-form');

// Mostrar o formulário de cadastro
showRegisterLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
});

// Voltar para o formulário de login
showLoginLink.addEventListener('click', (e) => {
    e.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'flex';
});
