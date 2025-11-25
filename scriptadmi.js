document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logout-btn");
  logoutBtn.addEventListener("click", () => {
    alert("Sesión cerrada correctamente.");
    window.location.href = "index.html"; 
  });

  const navLinks = document.querySelectorAll("nav a");
  const formSection = document.getElementById("form-section");
  const listSection = document.getElementById("list-section");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);

      formSection.classList.add("hidden");
      listSection.classList.add("hidden");

      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.classList.remove("hidden");
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const families = []; 
  const familyForm = document.getElementById("family-form");
  const familiesTableBody = document.querySelector("#families-table tbody");

  familyForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("family-name").value.trim();
    const phone = document.getElementById("family-phone").value.trim();
    const street = document.getElementById("family-street").value.trim();
    const zone = document.getElementById("family-zone").value;
    const admin = document.getElementById("family-admin").value.trim();

    if (!name || !phone || !street || !zone || !admin) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const newFamily = { name, phone, street, zone, admin };
    families.push(newFamily);

    renderFamilies(families);

    familyForm.reset();
    alert("Familia registrada correctamente.");
  });

  function renderFamilies(list) {
    familiesTableBody.innerHTML = "";
    list.forEach(family => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${family.name}</td>
        <td>${family.phone}</td>
        <td>${family.street}</td>
        <td>${family.zone}</td>
        <td>${family.admin}</td>
      `;
      familiesTableBody.appendChild(row);
    });
  }

  const mapTitle = document.getElementById("map-title");
  const mapImages = document.querySelectorAll(".map-images img");

  function showMap(zone) {
    mapImages.forEach(img => img.classList.remove("active"));
    if (zone === "1") {
      document.getElementById("map-zone1").classList.add("active");
      mapTitle.textContent = "Zona 1";
    } else if (zone === "2") {
      document.getElementById("map-zone2").classList.add("active");
      mapTitle.textContent = "Zona 2";
    } else if (zone === "3") {
      document.getElementById("map-zone3").classList.add("active");
      mapTitle.textContent = "Zona 3";
    } else if (zone === "4") {
      document.getElementById("map-zone4").classList.add("active");
      mapTitle.textContent = "Zona 4";
    } else {
      document.getElementById("map-general").classList.add("active");
      mapTitle.textContent = "Zangarro Nuevo";
    }
  }

  document.getElementById("filter-zone-1").addEventListener("click", () => {
    const filtered = families.filter(f => f.zone === "1");
    renderFamilies(filtered);
    showMap("1");
  });

  document.getElementById("filter-zone-2").addEventListener("click", () => {
    const filtered = families.filter(f => f.zone === "2");
    renderFamilies(filtered);
    showMap("2");
  });

  document.getElementById("filter-zone-3").addEventListener("click", () => {
    const filtered = families.filter(f => f.zone === "3");
    renderFamilies(filtered);
    showMap("3");
  });

  document.getElementById("filter-zone-4").addEventListener("click", () => {
    const filtered = families.filter(f => f.zone === "4");
    renderFamilies(filtered);
    showMap("4");
  });

  document.getElementById("filter-clear").addEventListener("click", () => {
    renderFamilies(families);
    showMap(null);
  });

  document.getElementById("filter-debt").addEventListener("click", () => {
    alert("El filtro por adeudos aún no está disponible.");
  });

  const searchBox = document.getElementById("search-box");
  searchBox.addEventListener("input", () => {
    const query = searchBox.value.toLowerCase();
    const filtered = families.filter(f => f.name.toLowerCase().includes(query));
    renderFamilies(filtered);
  });

  showMap(null);
});

