document.addEventListener("DOMContentLoaded", () => {
  const role = localStorage.getItem("userRole");
  const titulo = document.getElementById("titulo");
  const app = document.getElementById("app");

  if (!role) {
    alert("Usuário não autenticado. Redirecionando para login...");
    window.location.href = "../index.html";
    return;
  }

  titulo.innerText = role === "sindico" ? "Painel do Síndico" : "Painel do Morador";

  // Carrega componentes padrão
  loadComponent("components/agendamento.html");
  loadComponent("components/ocorrencias.html");

  // Só o síndico vê o painel admin
  if (role === "sindico") {
    loadComponent("components/admin.html");
  }
});

function loadComponent(path) {
  fetch(path)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML += html;
    })
    .catch(err => {
      console.error("Erro ao carregar componente:", path, err);
    });
}