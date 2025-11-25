document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", () => {
    alert("Sesión cerrada correctamente.");
    window.location.href = "index.html"; 
  });

  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  const consumoGeneralBox = document.querySelector("#consumo-general .data-box strong");
  if (consumoGeneralBox) {
    const consumoSimulado = Math.floor(Math.random() * 2000) + 800; 
    consumoGeneralBox.textContent = `${consumoSimulado} kWh`;
  }

  const recibosBody = document.querySelector("#historial-recibos tbody");
  if (recibosBody) {
    const recibosSimulados = [
      { fecha: "Septiembre 2025", monto: "$240 MXN", estado: "Pagado" },
      { fecha: "Octubre 2025", monto: "$250 MXN", estado: "Pagado" },
      { fecha: "Noviembre 2025", monto: "$270 MXN", estado: "Pendiente" }
    ];

    recibosBody.innerHTML = ""; 
    recibosSimulados.forEach(recibo => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${recibo.fecha}</td>
        <td>${recibo.monto}</td>
        <td>${recibo.estado}</td>
      `;
      recibosBody.appendChild(row);
    });
  }
});
