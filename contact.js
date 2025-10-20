document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  const fields = {
    name: {
      input: document.getElementById("name"),
      error: document.getElementById("error-name"),
      validation: (value) => value.trim() !== "",
      errorMessage: "Full name is required.",
    },
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("error-email"),
      validation: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
      errorMessage: "A valid email is required.",
    },
    subject: {
      input: document.getElementById("subject"),
      error: document.getElementById("error-subject"),
      validation: (value) => value.trim() !== "",
      errorMessage: "Subject is required.",
    },
    message: {
      input: document.getElementById("message"),
      error: document.getElementById("error-message"),
      validation: (value) => value.trim().length >= 10,
      errorMessage: "Message must be at least 10 characters long.",
    },
  };

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isFormValid = true;
    successMessage.textContent = "";
    successMessage.style.display = "none";

    Object.values(fields).forEach((field) => {
      const isValid = field.validation(field.input.value);
      if (!isValid) {
        isFormValid = false;
        field.error.textContent = field.errorMessage;
        field.error.style.display = "block";
        field.input.setAttribute("aria-invalid", "true");
      } else {
        field.error.textContent = "";
        field.error.style.display = "none";
        field.input.removeAttribute("aria-invalid");
      }
    });

    if (isFormValid) {
      console.log("Form submitted successfully!");
      successMessage.textContent = "Thank you! Your message has been sent successfully.";
      successMessage.style.display = "block";
      form.reset();
      
      // Reset aria-invalid attributes on successful submission
      Object.values(fields).forEach(field => {
        field.input.removeAttribute("aria-invalid");
      });

    }
  });

  // Clear errors on input
  Object.values(fields).forEach((field) => {
    field.input.addEventListener("input", () => {
      if (field.error.textContent) {
        field.error.textContent = "";
        field.error.style.display = "none";
        field.input.removeAttribute("aria-invalid");
      }
    });
  });
});