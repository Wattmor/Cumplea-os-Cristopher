// Generar estrellas brillantes en el fondo
const numBrillos = 50;

for (let i = 0; i < numBrillos; i++) {
  const brillo = document.createElement('div');
  brillo.classList.add('brillo');
  brillo.style.left = Math.random() * 100 + '%';
  brillo.style.top = Math.random() * 100 + '%';
  brillo.style.animationDelay = (Math.random() * 3) + 's';
  document.body.appendChild(brillo);
}
// Botón de confirmación
const boton = document.getElementById('confirmar');
const mensaje = document.getElementById('mensaje');

if (boton) {
  boton.addEventListener('click', () => {
    mensaje.textContent = "🎉 ¡Gracias por confirmar, te esperamos en la fiesta! 🎂";
  });
}
