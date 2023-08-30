function validarNombre(nombre) {
  return /^[a-zA-Z ]+$/.test(nombre);
}

// Función para validar el correo electrónico
function validarCorreo(correo) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);
}



// Función para validar el número
function validarNumero(numero) {
  return /^(?!.*(.)\1{4})\d{10}$/.test(numero);
}

const signupForm = document.querySelector('#contactoForm');
contactoForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phoneNumber = document.querySelector('#phoneNumber').value;

  // Validar el nombre antes de continuar
  if (!validarNombre(name)) {
      await Swal.fire({
          icon: 'error',
          title: 'Nombre no válido',
          text: 'Por favor, ingresa un nombre válido.',
      });
      return;
  }

  // Validar el número antes de continuar
  if (!validarNumero(phoneNumber)) {
      await Swal.fire({
          icon: 'error',
          title: 'Número no válido',
          text: 'Por favor, ingresa un número de 10 dígitos sin más de 4 dígitos repetidos consecutivamente.',
      });
      return;
  }

 



  Users.push({ name: name, email: email, password: password, phoneNumber: phoneNumber });
  localStorage.setItem('users', JSON.stringify(Users));

  await Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'tu menaje fue enviado con exito',
    showConfirmButton: false,
    timer: 1500
  })

  window.location.href = '#containernom';
});


