function login() {
  const role = document.getElementById('userRole').value;
  localStorage.setItem('userRole', role);
  window.location.href = 'dashboard/dashboard.html';
}
