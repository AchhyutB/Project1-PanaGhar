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
// const deleteItems = document.querySelectorAll(".delete-items");
// deleteItems.forEach((button) => {
//   button.addEventListener("click", () => {
//     button.closest("div.flex.items-center").remove();
//   });
// });

// //Payment change if delete or add to cart

// // Get references to all required DOM elements
// const itemCountEl = document.getElementById("item-count");
// const orderSubtotalEl = document.getElementById("order-subtotal");
// const orderShippingEl = document.getElementById("order-shipping");
// const orderTotalEl = document.getElementById("order-total");
// const remainingAmountEl = document.getElementById("remaining-amount");
// const cartWrapper = document.getElementById("cart-wrapper");
// const emptyCartMsg = document.getElementById("empty-cart-msg");

// // Define shipping and free shipping threshold
// const freeShippingThreshold = 1000;
// const fixedShipping = 80;

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



//.........................................................................................................................

// ABOUT US
function handleMenu() {
    const navDialog = document.getElementById("nav-dialog");

    const isHidden = navDialog.classList.contains("hidden");

    if (isHidden) {
      navDialog.classList.remove("hidden");
      setTimeout(() => {
        navDialog.classList.remove("opacity-0", "-translate-y-5");
      }, 10);
    } else {
      navDialog.classList.add("opacity-0", "-translate-y-5");
      setTimeout(() => {
        navDialog.classList.add("hidden");
      }, 300);
    }
  }
  // to make the hover fixed when clicked

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("#nav-menu a, #nav-dialog a");

    const currentPath = window.location.pathname.split("/").pop(); // gets about-us.html etc.

    links.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === currentPath || href === "") {
        link.classList.add("text-[#b4cb6e]",);
      } else {
        link.classList.remove("text-[#b4cb6e]");
      }
    });
  });


//.........................................................................................................................


//BILLING-PAGE

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
      // Pop-Up after checkout

      const modal = document.getElementById("popupModal");
      const checkoutBtn = document.getElementById("checkout");

      checkoutBtn.addEventListener("click", () => {
        const items = document.querySelectorAll(".cart-item");
        if (items.length === 0) {
          return;
        }
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      });

      function closeModal() {
        modal.classList.remove("flex");
        modal.classList.add("hidden");
      }
      window.closeModal = closeModal;

      // for nav-bar

      function handleMenu() {
        const navDialog = document.getElementById("nav-dialog");

        const isHidden = navDialog.classList.contains("hidden");

        if (isHidden) {
          navDialog.classList.remove("hidden");
          setTimeout(() => {
            navDialog.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          navDialog.classList.add("opacity-0", "-translate-y-5");
          setTimeout(() => {
            navDialog.classList.add("hidden");
          }, 300);
        }
      }


//.........................................................................................................................


//DETAILS-PAGE

function handleMenu() {
        const navDialog = document.getElementById("nav-dialog");

        const isHidden = navDialog.classList.contains("hidden");

        if (isHidden) {
          navDialog.classList.remove("hidden");
          setTimeout(() => {
            navDialog.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          navDialog.classList.add("opacity-0", "-translate-y-5");
          setTimeout(() => {
            navDialog.classList.add("hidden");
          }, 300);
        }
      }
      // to make the hover fixed when clicked

      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("#nav-menu a, #nav-dialog a");

        const currentPath = window.location.pathname.split("/").pop(); // gets about-us.html etc.

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === currentPath || href === "") {
            link.classList.add("text-[#b4cb6e]");
          } else {
            link.classList.remove("text-[#b4cb6e]");
          }
        });
      });

      //like icon
      const heartIcon = document.getElementById("heart-icon");

      heartIcon.addEventListener("click", () => {
        // Toggle between regular and solid heart classes
        if (heartIcon.classList.contains("fa-regular")) {
          heartIcon.classList.remove("fa-regular");
          heartIcon.classList.add("fa-solid");
          heartIcon.style.color = "#324A16"; // liked color
          heartIcon.style.backgroundColor = "#b4cb6e";
        } else {
          heartIcon.classList.remove("fa-solid");
          heartIcon.classList.add("fa-regular");
          heartIcon.style.color = "#324A16"; // default color
          heartIcon.style.backgroundColor = "rgba(136, 150, 94, 0.5)";
        }

        // Restart animation
        heartIcon.classList.remove("animate-pop");
        void heartIcon.offsetWidth; // trigger reflow
        heartIcon.classList.add("animate-pop");
      });

      // Optional: Enable keyboard "Enter" key toggling for accessibility
      heartIcon.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          heartIcon.click();
        }
      });

//.........................................................................................................................

// FAV-PAGE

function handleMenu() {
        const navDialog = document.getElementById("nav-dialog");

        const isHidden = navDialog.classList.contains("hidden");

        if (isHidden) {
          navDialog.classList.remove("hidden");
          setTimeout(() => {
            navDialog.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          navDialog.classList.add("opacity-0", "-translate-y-5");
          setTimeout(() => {
            navDialog.classList.add("hidden");
          }, 300);
        }
      }
      // to make the hover fixed when clicked

      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("#nav-menu a, #nav-dialog a");

        const currentPath = window.location.pathname.split("/").pop(); // gets about-us.html etc.

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === currentPath || href === "") {
            link.classList.add("text-[#b4cb6e]");
          } else {
            link.classList.remove("text-[#b4cb6e]");
          }
        });
      });

//.........................................................................................................................

// LANDING-PAGE


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
      //nav bar
      function handleMenu() {
        const navDialog = document.getElementById("nav-dialog");

        const isHidden = navDialog.classList.contains("hidden");

        if (isHidden) {
          navDialog.classList.remove("hidden");
          setTimeout(() => {
            navDialog.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          navDialog.classList.add("opacity-0", "-translate-y-5");
          setTimeout(() => {
            navDialog.classList.add("hidden");
          }, 300);
        }
      }
      // to make the hover fixed when clicked

      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("#nav-menu a, #nav-dialog a");

        const currentPath = window.location.pathname.split("/").pop(); // gets about-us.html etc.

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === currentPath || href === "") {
            link.classList.add("text-[#b4cb6e]");
          } else {
            link.classList.remove("text-[#b4cb6e]");
          }
        });
      });


//.........................................................................................................................


//LANDING-PAGE-USER


const slideWrapper = document.getElementById("slideWrapper");
      const totalSlides = slideWrapper.children.length;
      const leftArrow = document.getElementById("leftArrow");
      const rightArrow = document.getElementById("rightArrow");
      let counter = 0;

      const goNext = () => {
        if (counter < totalSlides - 1) {
          counter++;
          updateSlider();
        }
      };

      const goPrev = () => {
        if (counter > 0) {
          counter--;
          updateSlider();
        }
      };

      const updateSlider = () => {
        slideWrapper.style.transform = `translateX(-${counter * 100}%)`;

        // Hide/show arrows
        leftArrow.style.display = counter === 0 ? "none" : "block";
        rightArrow.style.display =
          counter === totalSlides - 1 ? "none" : "block";
      };

      // Initialize on page load
      updateSlider();



      //nav bar
      function handleMenu() {
        const navDialog = document.getElementById("nav-dialog");

        const isHidden = navDialog.classList.contains("hidden");

        if (isHidden) {
          navDialog.classList.remove("hidden");
          setTimeout(() => {
            navDialog.classList.remove("opacity-0", "-translate-y-5");
          }, 10);
        } else {
          navDialog.classList.add("opacity-0", "-translate-y-5");
          setTimeout(() => {
            navDialog.classList.add("hidden");
          }, 300);
        }
      }
      // to make the hover fixed when clicked

      document.addEventListener("DOMContentLoaded", function () {
        const links = document.querySelectorAll("#nav-menu a, #nav-dialog a");

        const currentPath = window.location.pathname.split("/").pop(); // gets about-us.html etc.

        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href === currentPath || href === "") {
            link.classList.add("text-[#b4cb6e]");
          } else {
            link.classList.remove("text-[#b4cb6e]");
          }
        });
      });


//.........................................................................................................................


//LOGIN-PAGE

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
            errorMsg.textContent = "Please enter both Email and Password.";
          } else if (!email) {
            errorMsg.textContent = "Please enter your Email.";
          } else if (!password) {
            errorMsg.textContent = "Please enter your Password.";
          }
        } else {
          e.preventDefault();
          window.location.href = "landing-page-user.html";
        }
      });
      function togglePassword() {
  const passwordInput = document.getElementById("password-signin");
  const icon = document.getElementById("eye-icon-signin");

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


//.........................................................................................................................


//MANAGE-BOOKS

// Global edit/delete handlers
      function handleDelete(e) {
        e.target.closest("tr").remove();
      }

      function attachDeleteEvents() {
        document.querySelectorAll(".deleteBtn").forEach((btn) => {
          btn.removeEventListener("click", handleDelete);
          btn.addEventListener("click", handleDelete);
        });
      }

      function handleEdit(e) {
        const editBtn = e.target;
        const row = editBtn.closest("tr");
        const cells = row.querySelectorAll("td");

        const originalValues = [];
        for (let i = 1; i <= 4; i++) {
          originalValues.push(cells[i].innerText.trim());
          cells[
            i
          ].innerHTML = `<input type="text" class="border border-gray-300 px-1 py-[2px] w-full text-sm rounded" value="${
            originalValues[i - 1]
          }">`;
        }

        const actionCell = cells[5];
        actionCell.innerHTML = `
      <div class="flex justify-center gap-2">
        <button class="saveBtn bg-green-600 text-white hover:bg-green-700 px-3 py-1 rounded">Save</button>
        <button class="cancelBtn bg-red-600 text-white hover:bg-red-700 px-3 py-1 rounded">Cancel</button>
      </div>
    `;

        actionCell.querySelector(".saveBtn").addEventListener("click", () => {
          for (let i = 1; i <= 4; i++) {
            const val = cells[i].querySelector("input").value;
            cells[i].innerText = val;
          }
          restoreActionButtons(actionCell);
        });

        actionCell.querySelector(".cancelBtn").addEventListener("click", () => {
          for (let i = 1; i <= 4; i++) {
            cells[i].innerText = originalValues[i - 1];
          }
          restoreActionButtons(actionCell);
        });
      }

      function attachEditEvents() {
        document.querySelectorAll(".editBtn").forEach((btn) => {
          btn.removeEventListener("click", handleEdit);
          btn.addEventListener("click", handleEdit);
        });
      }

      function restoreActionButtons(cell) {
        cell.innerHTML = `
      <div class="flex justify-center items-center space-x-2">
        <button class="editBtn text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded">Edit</button>
        <button class="deleteBtn text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1 rounded">Delete</button>
      </div>
    `;
        attachEditEvents();
        attachDeleteEvents();
      }

      // DOM Ready
      document.addEventListener("DOMContentLoaded", () => {
        // Sidebar toggle
        const menuItems = document.querySelectorAll(".button_upload");
        menuItems.forEach((item) => {
          item.addEventListener("click", () => {
            menuItems.forEach((i) => {
              i.classList.remove(
                "bg-[#88965E80]",
                "border",
                "border-[#88965E]"
              );
            });
            item.classList.add("bg-[#88965E80]", "border", "border-[#88965E]");
          });
        });

        // Initial binding
        attachEditEvents();
        attachDeleteEvents();

        // Create functionality
        const createBtn = document.getElementById("createBtn");
        createBtn.addEventListener("click", () => {
          const bookNameInput = document.getElementById("newBookName");
          const authorNameInput = document.getElementById("newAuthorName");
          const categoryInput = document.getElementById("newCategory");
          const priceInput = document.getElementById("newPrice");

          const bookName = bookNameInput.value.trim();
          const authorName = authorNameInput.value.trim();
          const category = categoryInput.value.trim();
          const price = priceInput.value.trim();

          if (!bookName || !authorName || !category || !price) {
            alert("Please fill in all fields to create a new book.");
            return;
          }

          const tbody = document.querySelector("#table tbody");
          const nextSN = tbody.querySelectorAll("tr").length + 1;

          const newRow = document.createElement("tr");
          newRow.classList.add("hover:bg-gray-50");
          newRow.innerHTML = `
        <td class="px-4 py-3 border">${nextSN}</td>
        <td class="px-4 py-3 border text-center">${bookName}</td>
        <td class="px-4 py-3 border text-center">${authorName}</td>
        <td class="px-4 py-3 border text-center">${category}</td>
        <td class="px-4 py-3 border text-center">${price}</td>
        <td class="px-4 py-3 border text-center">
          <div class="flex justify-center items-center space-x-2">
            <button class="editBtn text-blue-600 bg-blue-100 hover:bg-blue-200 px-3 py-1 rounded">Edit</button>
            <button class="deleteBtn text-red-600 bg-red-100 hover:bg-red-200 px-3 py-1 rounded">Delete</button>
          </div>
        </td>
      `;

          tbody.appendChild(newRow);

          // Clear inputs
          bookNameInput.value = "";
          authorNameInput.value = "";
          categoryInput.value = "";
          priceInput.value = "";

          // Bind new buttons
          attachEditEvents();
          attachDeleteEvents();
        });
      });


//.........................................................................................................................



//SIGN-UP


document
      .getElementById("signupForm")
      .addEventListener("submit", function (e) {
        e.preventDefault(); // Stop form from submitting

        // Get field values
        const email = document.getElementById("email-signup").value.trim();
        const password = document
          .getElementById("password-signup")
          .value.trim();
        const confirmPassword = document
          .getElementById("confirmPassword")
          .value.trim();
        const confirmError = document.getElementById("confirm-error");
        const confirmInput = document.getElementById("confirmPassword");

        // Reset all error states
        confirmError.classList.add("hidden");
        confirmInput.classList.remove("border-red-500");

        // Get required fields
        const requiredFields = [
          "firstName",
          "lastName",
          "phone",
          "email-signup",
          "password-signup",
          "confirmPassword",
        ];

        let isValid = true;

        // Check for empty fields
        requiredFields.forEach((id) => {
          const input = document.getElementById(id);
          if (!input.value.trim()) {
            input.classList.add("border-red-500");
            isValid = false;
          } else {
            input.classList.remove("border-red-500");
          }
        });

        // Show general error if fields are empty
        let generalError = document.getElementById("general-error");
        if (!generalError) {
          generalError = document.createElement("p");
          generalError.id = "general-error";
          generalError.className = "text-red-600 text-sm mb-2";
          document.getElementById("signupForm").prepend(generalError);
        }

        if (!isValid) {
          generalError.textContent = "Please fill the required information.";
          return;
        } else {
          generalError.textContent = "";
        }

        // Check if passwords match
        if (password !== confirmPassword) {
          confirmInput.classList.add("border-red-500");
          confirmError.classList.remove("hidden");
          return;
        }

        // If all validations pass, redirect
        window.location.href = "login.html";
      });

    // password eye button

    function togglePassword() {
      const password = document.getElementById("password-signup");
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


//.........................................................................................................................


//UPLOAD-BOOKS

const fileInput = document.getElementById("imageUpload");
    const previewImg = document.getElementById("previewImage");

    fileInput.addEventListener("change", function () {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          previewImg.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

//.........................................................................................................................

//USER-DASHBOARD


     // Get the sidebar, hamburger, and close buttons
      const sidebar = document.getElementById("sidebar");
      const hamburgerBtn = document.getElementById("hamburger-btn");
      const closeBtn = document.getElementById("close-btn");

      // Function to toggle the sidebar
      function toggleSidebar() {
        const isSidebarVisible =
          !sidebar.classList.contains("-translate-x-full");
        if (isSidebarVisible) {
          // Hide sidebar
          sidebar.classList.add("-translate-x-full");
          closeBtn.classList.add("hidden"); // Hide the close button
          hamburgerBtn.classList.remove("hidden"); // Show the hamburger button
        } else {
          // Show sidebar
          sidebar.classList.remove("-translate-x-full");
          closeBtn.classList.remove("hidden"); // Show the close button
          hamburgerBtn.classList.add("hidden"); // Hide the hamburger button
        }
      }

      // Add event listeners to hamburger and close buttons
      hamburgerBtn.addEventListener("click", toggleSidebar);
      closeBtn.addEventListener("click", toggleSidebar);


//.........................................................................................................................