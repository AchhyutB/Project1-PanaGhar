// password eye button
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
function toggleConfirmPassword() {
  const input = document.getElementById("confirmPassword");
  const icon = document.getElementById("eye-icon-confirm");
  if (input.type === "password") {
    input.type = "text";
    icon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    input.type = "password";
    icon.classList.replace("fa-eye", "fa-eye-slash");
  }
}

// To do list (button click)
const menuItems = document.querySelectorAll(".button_upload");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active classes from all
    menuItems.forEach((i) => {
      i.classList.remove("bg-[#88965E80]", "border", "border-[#88965E]");
    });

    // Add active classes to clicked
    item.classList.add("bg-[#88965E80]", "border", "border-[#88965E]");
  });
});

// delete from the managing books table
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("tr").remove();
  });
});

//clicking edit change into (make-change and cancel) removing the (edit and delete button)
