document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');
    const btn = document.getElementById('loginBtn');

    function validarCampos() {
        btn.disabled = !(email.value.trim() && senha.value.trim());
    }

    email.addEventListener('input', validarCampos);
    senha.addEventListener('input', validarCampos);

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (email.value.trim() && senha.value.trim()) {
            window.location.href = "../pagina/home.html";
        }
    });
});