const radioButtons = document.querySelectorAll('input[name="queryType"]');
function validateForm() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const queryType = document.querySelector('input[name="queryType"]:checked');
  const message = document.getElementById("message").value.trim();
  const consent = document.getElementById("consent").checked;

  let isValid = true;

  // Reset previous errors
  document.querySelectorAll(".error").forEach(function (error) {
    error.textContent = "";
  });

  document.querySelectorAll(".error-border").forEach(function (input) {
    input.classList.remove("error-border");
  });

  // Validate First Name
  if (firstName === "") {
    document.getElementById("firstNameError").textContent =
      "This field is required";
    document.getElementById("firstName").classList.add("error-border");
    isValid = false;
  }

  // Validate Last Name
  if (lastName === "") {
    document.getElementById("lastNameError").textContent =
      "This field is required";
    document.getElementById("lastName").classList.add("error-border");
    isValid = false;
  }

  // Validate Email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").textContent =
      "This field is required";
    document.getElementById("email").classList.add("error-border");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address";
    document.getElementById("email").classList.add("error-border");
    isValid = false;
  }

  // Validate Query Type
  if (!queryType) {
    document.getElementById("queryTypeError").textContent =
      "Please select a query type";
    isValid = false;
  }

  // Validate Message
  if (message === "") {
    document.getElementById("messageError").textContent =
      "This field is required";
    document.getElementById("message").classList.add("error-border");
    isValid = false;
  }

  // Validate Consent
  if (!consent) {
    document.getElementById("consentError").textContent =
      "To submit this form, please consent to being contacted";
    isValid = false;
  }

  // If all fields are valid, show success message
  if (isValid) {
    document.getElementById("contactForm").reset(); // Reset form fields

    document.querySelectorAll(".radio-item").forEach((item) => {
      item.classList.remove("active");
    });

    // Show success message
    var successBox = document.getElementById("successBox");
    successBox.classList.add("show");

    // Hide success message after 10 seconds
    setTimeout(function () {
      successBox.classList.remove("show");
    }, 10000);
  }

  //   return false; // Prevent form submission
}

const submitBTN = document.querySelector('input[type="submit"]');
submitBTN.addEventListener("click", (event) => {
  event.preventDefault();
  validateForm();
});

radioButtons.forEach((radio) => {
  radio.addEventListener("change", () => {
    document.querySelectorAll(".radio-item").forEach((item) => {
      item.classList.remove("active");
    });
    radio.parentElement.classList.add("active");
  });
});

// Disable mouse events for all form elements
// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .querySelectorAll(".form-container input, .form-container textarea")
//     .forEach((element) => {
//       element.addEventListener("mousedown", (event) => {
//         event.preventDefault();
//       });
//     });
// });
