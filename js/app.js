function validateForm() {
    // Validar el nombre (solo letras y espacios, sin números)
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('nameError');
    const namePattern = /^[A-Za-z\s]+$/;

    if (!namePattern.test(nameInput.value)) {
      nameError.style.display = 'block';
      nameInput.classList.add('is-invalid');
      return false;
    } else {
      nameError.style.display = 'none';
      nameInput.classList.remove('is-invalid');
    }

    // Validar el correo electrónico (formato de email válido)
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
      emailError.style.display = 'block';
      emailInput.classList.add('is-invalid');
      return false;
    } else {
      emailError.style.display = 'none';
      emailInput.classList.remove('is-invalid');
    }

    // Validar el número de teléfono (solo números, sin letras)
    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phonePattern = /^\d+$/;

    if (!phonePattern.test(phoneInput.value)) {
      phoneError.style.display = 'block';
      phoneInput.classList.add('is-invalid');
      return false;
    } else {
      phoneError.style.display = 'none';
      phoneInput.classList.remove('is-invalid');
    }

    // Validar el mensaje (no puede estar vacío)
    const messageInput = document.getElementById('message');
    const messageError = document.getElementById('messageError');

    if (messageInput.value.trim() === '') {
      messageError.style.display = 'block';
      messageInput.classList.add('is-invalid');
      return false;
    } else {
      messageError.style.display = 'none';
      messageInput.classList.remove('is-invalid');
    }

    // Si todas las validaciones pasan, se puede enviar el formulario
    return true;
  }




