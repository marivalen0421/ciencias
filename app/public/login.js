// newsletter.js
document.getElementById('newsletter-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que el formulario se envíe de manera tradicional

  const emailInput = document.getElementById('newsletter-input');
  const email = emailInput.value;

  // Validación simple del correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return;
  }

  // Aquí puedes enviar el correo a tu servidor o API
  // Simulando el envío con un mensaje de éxito
  alert('¡Te has suscrito exitosamente!');

  // Limpiar el campo de entrada
  emailInput.value = '';
});
