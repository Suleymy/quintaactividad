function guardarDatos() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;

  if (nombre && apellido && email) {
    localStorage.setItem("nombre", nombre);
    localStorage.setItem("apellido", apellido);
    localStorage.setItem("email", email);
    alert("Datos guardados correctamente");
  } else {
    alert("Completa todos los campos.");
  }
}

function recuperarDatos() {
  const nombre = localStorage.getItem("nombre");
  const apellido = localStorage.getItem("apellido");
  const email = localStorage.getItem("email");

  if (nombre && apellido && email) {
    document.getElementById("datos").innerHTML = `
            Nombre: ${nombre}<br/>
            Apellido: ${apellido}<br/>
            Email: ${email}
        `;
  } else {
    document.getElementById("datos").innerHTML = "Completa tu información";
  }
}
