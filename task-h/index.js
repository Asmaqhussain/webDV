// index.js
// Author: Asmaq
// Date: 2025-10-04
// Handles adding new course rows with day marks (✅/❌)
// Updated by Asmaq for Task G: custom validation and full form submission

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("addCourseForm");
    const table = document.getElementById("timetable");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      // Clear previous error messages
      ["nameError", "emailError", "phoneError", "birthError", "termsError"].forEach(id => {
        document.getElementById(id).textContent = "";
      });
  
      // Fill timestamp automatically
      const timestamp = new Date().toLocaleString();
      document.getElementById("timestamp").value = timestamp;
  
      // Get form values
      const name = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const birth = document.getElementById("birthDate").value;
      const termsAccepted = document.getElementById("terms").checked;
  
      let valid = true;
  
      // Validate full name
      const nameParts = name.split(" ").filter(part => part.length >= 2);
if (nameParts.length < 2) {
  document.getElementById("nameError").textContent =
    "Please enter your full name (first and last, each at least 2 characters).";
  valid = false;


      }
  
      // Validate email format
      if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        valid = false;
      }
  
      // Validate phone number (basic pattern)
      if (!/^\+?\d{7,15}$/.test(phone)) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number (7–15 digits).";
        valid = false;
      }
  
      // Validate birth date
      if (!birth) {
        document.getElementById("birthError").textContent = "Birth date is required.";
        valid = false;
      } else {
        const birthDateObj = new Date(birth);
        const today = new Date();
        if (birthDateObj > today) {
          document.getElementById("birthError").textContent = "Birth date cannot be in the future.";
          valid = false;
        }
      }
  
      // Validate terms acceptance
      if (!termsAccepted) {
        document.getElementById("termsError").textContent = "You must accept the terms to proceed.";
        valid = false;
      }
  
      // Stop if any validation failed
      if (!valid) return;
  
      // Create new table row
      const row = document.createElement("tr");
  
      // Add cells for each value
      [timestamp, name, email, phone, birth].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
      });
  
      // Append row to table
      table.appendChild(row);
  
      // Reset form and focus
      form.reset();
      document.getElementById("fullName").focus();
    });
  });
  