let passwordInput = document.getElementById('password');
let toggleButton = document.querySelector('.toggle-password-button');
let passwordVisible = false;

toggleButton.addEventListener('click', function () {
  passwordVisible = !passwordVisible;
  passwordInput.type = passwordVisible ? 'text' : 'password';
  toggleButton.textContent = passwordVisible ? 'Ocultar' : 'Mostrar';
});
