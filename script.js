// Login redirect(new-user after login)
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email && password) {
    window.location.href = "landing-page-user.html";
  } else {
    // show validation errors
  }
});

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

// manage-book (button click)

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
// If the user don't give the email or pw for signup error shows

document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Stop default submission

  // Get all field values
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirmPassword")
    .value.trim();
  const confirmError = document.getElementById("confirm-error");
  const confirmInput = document.getElementById("confirmPassword");

  // Reset error styles/messages
  confirmError.classList.add("hidden");
  confirmInput.classList.remove("border-red-500");

  let isValid = true;

  // Check required fields manually (they already have `required` but we'll be sure)
  const requiredFields = [
    "firstName",
    "lastName",
    "phone",
    "email",
    "password",
    "confirmPassword",
  ];
  for (const id of requiredFields) {
    const input = document.getElementById(id);
    if (!input.value.trim()) {
      input.classList.add("border-red-500");
      isValid = false;
    } else {
      input.classList.remove("border-red-500");
    }
  }

  // Check password match
  if (password !== confirmPassword) {
    confirmInput.classList.add("border-red-500");
    confirmError.classList.remove("hidden");
    isValid = false;
  }

  // Redirect if everything is valid
  if (isValid) {
    window.location.href = "sign_in.html";
  }
});

// Toggle Password
function togglePassword() {
  const input = document.getElementById("password");
  const icon = document.getElementById("eye-icon");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

// Toggle Confirm Password
function toggleConfirmPassword() {
  const input = document.getElementById("confirmPassword");
  const icon = document.getElementById("eye-icon-confirm");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    input.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
  }
}

// // If the user don't give the email or pw for login/signup error shows
document
      .getElementById("loginForm-signin")
      .addEventListener("submit", function (e) {
        const email = document.getElementById("email-signin").value.trim();
        const password = document.getElementById("password-signin").value.trim();
        const errorMsg = document.getElementById("errorMsg-signin");

        errorMsg.textContent = "";

        if (!email || !password) {
          e.preventDefault();

          if (!email && !password) {
            errorMsg.textContent = "Please enter both email and password.";
          } else if (!email) {
            errorMsg.textContent = "Please enter your email.";
          } else if (!password) {
            errorMsg.textContent = "Please enter your password.";
          }
        } else {
          e.preventDefault();
          window.location.href = "landing-page-user.html";
        }
      });

// Optional: Show/hide password toggle
function togglePassword() {
  const passwordInput = document.getElementById("password");
  const icon = document.getElementById("eye-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.classList.remove("fa-eye-slash");
    icon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    icon.classList.remove("fa-eye");
    icon.classList.add("fa-eye-slash");
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

// dashboard country api
// async function loadCountries() {
//   try {
//     const response = await fetch(
//       "https://countriesnow.space/api/v0.1/countries/positions"
//     );
//     const json = await response.json();

//     const select = document.getElementById("country");
//     select.innerHTML =
//       '<option value="" disabled selected>Select Country</option>';

//     const countries = json.data;

//     countries.sort((a, b) => a.name.localeCompare(b.name));

//     for (const country of countries) {
//       const option = document.createElement("option");
//       option.value = country.name;
//       option.textContent = country.name;
//       select.appendChild(option);
//     }
//   } catch (error) {
//     console.error("Error loading countries:", error);
//     const select = document.getElementById("country");
//     select.innerHTML =
//       "<option disabled selected>Unable to load countries</option>";
//   }
// }

// loadCountries();

//Landing-page-book-scroll

document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const cards = carousel?.children;
  const total = cards?.length;
  let start = 0;

  function updateVisibility() {
    for (let i = 0; i < total; i++) {
      cards[i].classList.add("hidden");
      cards[i].classList.remove("slide-in");
    }
    for (let i = 0; i < 3; i++) {
      const idx = (start + i) % total;
      cards[idx].classList.remove("hidden");
      cards[idx].classList.add("slide-in");
    }
  }

  const leftArrow = document.getElementById("leftArrow");
  const rightArrow = document.getElementById("rightArrow");

  if (leftArrow && rightArrow && carousel) {
    leftArrow.addEventListener("click", () => {
      start = (start - 1 + total) % total;
      updateVisibility();
    });

    rightArrow.addEventListener("click", () => {
      start = (start + 1) % total;
      updateVisibility();
    });

    updateVisibility(); // initial display
  } else {
    console.error("Carousel or arrow buttons not found in DOM.");
  }
});
