function togglePassword() {
  const password = document.getElementById("password");
  const icon = document.getElementById("eye-icon");

  if (password.type === "password") {
    password.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    password.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}
