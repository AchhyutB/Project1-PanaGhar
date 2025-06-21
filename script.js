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

const menuItems = document.querySelectorAll("a.button_upload");

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

//password-matching

function validatePassword() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword");
  const errorText = document.getElementById("confirm-error");

  if (password !== confirmPassword.value) {
    confirmPassword.classList.add("border-red-500");
    errorText.classList.remove("hidden");
    return false;
  } else {
    confirmPassword.classList.remove("border-red-500");
    errorText.classList.add("hidden");
    window.location.href = "sign_in.html";
    return true;
  }
}

// for the landing page nav bar

const navDialog = document.getElementById("nav-dialog");

function handleMenu() {
  navDialog.classList.toggle("hidden");
}

// delete from the add to cart
const deleteItems = document.querySelectorAll(".delete-items");
deleteItems.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("div.flex.items-center").remove();
  });
});

//Payment change if delete or add to cart

// Get references to all required DOM elements
const itemCountEl = document.getElementById("item-count");
const orderSubtotalEl = document.getElementById("order-subtotal");
const orderShippingEl = document.getElementById("order-shipping");
const orderTotalEl = document.getElementById("order-total");
const remainingAmountEl = document.getElementById("remaining-amount");
const cartWrapper = document.getElementById("cart-wrapper");
const emptyCartMsg = document.getElementById("empty-cart-msg");

// Define shipping and free shipping threshold
const freeShippingThreshold = 1000;
const fixedShipping = 80;

// Function to update the order summary
function updateOrderSummary() {
  // Get all cart items
  const items = document.querySelectorAll(".cart-item");
  let subtotal = 0;

  // Calculate subtotal by adding up item prices
  items.forEach((item) => {
    const price = parseFloat(item.getAttribute("data-price"));
    subtotal += price;
  });

  // Check if cart is empty
  const isEmpty = items.length === 0;

  // Calculate shipping using if...else
  let shipping;

  if (isEmpty) {
    shipping = 0; // No shipping for empty cart
  } else if (subtotal >= freeShippingThreshold) {
    shipping = 0; // Free shipping condition met
  } else {
    shipping = fixedShipping; // Flat shipping rate
  }

  // Calculate remaining amount to get free shipping
  let remaining;

  if (isEmpty) {
    remaining = freeShippingThreshold;
  } else {
    if (freeShippingThreshold - subtotal > 0) {
      remaining = freeShippingThreshold - subtotal;
    } else {
      remaining = 0;
    }
  }

  // Calculate total = subtotal + shipping
  const total = subtotal + shipping;

  // Update values in the order summary UI
  itemCountEl.textContent = items.length;
  orderSubtotalEl.textContent = subtotal;
  orderShippingEl.textContent = shipping;
  orderTotalEl.textContent = total;
  remainingAmountEl.textContent = remaining;

  // If cart is empty, center everything and show empty cart message
  if (isEmpty) {
    cartWrapper.classList.remove("justify-evenly");
    cartWrapper.classList.add("flex-col", "items-center");
    emptyCartMsg.classList.remove("hidden");
  } else {
    // If cart has items, go back to normal layout and hide empty message
    cartWrapper.classList.add("justify-evenly");
    cartWrapper.classList.remove("flex-col", "items-center");
    emptyCartMsg.classList.add("hidden");
  }
}

// Run summary update on page load
updateOrderSummary();

// When delete icon is clicked, remove item and update summary
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-items")) {
    e.target.closest(".cart-item").remove();
    updateOrderSummary();
  }
});
