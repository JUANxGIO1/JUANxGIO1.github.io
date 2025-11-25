document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const registerBtn = document.getElementById("register-btn");
  const feedback = document.getElementById("feedback");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const userType = document.getElementById("user-type").value;
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!userType || !username || !password) {
      feedback.textContent = "Por favor, complete todos los campos antes de continuar.";
      feedback.classList.remove("hidden");
      return;
    }

    if (userType === "usuario") {
      console.log("Inicio de sesión como usuario:", username);
      window.location.href = "usuario.html";
    } else if (userType === "admin") {
      console.log("Inicio de sesión como administrador:", username);
      window.location.href = "admi.html";
    } else {
      feedback.textContent = "Seleccione un tipo de usuario válido.";
      feedback.classList.remove("hidden");
    }
  });

  registerBtn.addEventListener("click", () => {
  document.querySelector(".welcome-title").classList.add("hidden");

    feedback.innerHTML = `
      Para darte de alta en el servicio de agua, debes contactar directamente al comité:<br>
      Teléfono: 462-484-6830<br>
      Email: jc.gonzalez.gio1@gmail.com<br>
      Dirección: Calle Principal #45, Zangarro Nuevo, Guanajuato
    `;
    feedback.classList.remove("hidden");
  });
});



