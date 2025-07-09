function login() {
  const role = document.getElementById('userRole').value;
  localStorage.setItem('userRole', role);
  window.location.href = 'dashboard/dashboard.html';
}
function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  const usuarios = [
    { email: "sindico@exemplo.com", senha: "123", role: "sindico" },
    { email: "morador1@exemplo.com", senha: "123", role: "morador" },
    { email: "morador2@exemplo.com", senha: "456", role: "morador" }
  ];

  const usuario = usuarios.find(
    (u) => u.email === email && u.senha === senha
  );

  if (usuario) {
    localStorage.setItem("userRole", usuario.role);
    if (usuario.role === "sindico") {
      window.location.href = "dashboard/residentDash.html";
    } else {
      window.location.href = "dashboard/syndicDash.html";
    }
  } else {
    alert("Usuário ou senha inválidos.");
  }
}
