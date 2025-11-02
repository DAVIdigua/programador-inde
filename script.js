<form id="registroForm">
  <label>Usuario:</label>
  <input type="text" id="username" required>

  <label>Contraseña:</label>
  <input type="password" id="password" required>

  <button type="submit">Registrarse</button>
</form>

<script>
  document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Evita que recargue la página
    window.location.href = "inicio.html"; // Redirige a la página principal
  });
</script>
