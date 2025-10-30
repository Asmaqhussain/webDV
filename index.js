// index.js
// Author: Asmaq
// Date: 2025-10-30
// Handles adding new course rows with day marks (✅/❌)

document.addEventListener("DOMContentLoaded", () => {
    const CHECK = '✅';
    const CROSS = '❌';
    const dayOrder = ["Tue", "Thu"];
  
    const form = document.getElementById("addCourseForm");
    const table = document.getElementById("timetable").querySelector("tbody");
    const courseInput = document.getElementById("courseName");
    const addRowBtn = document.getElementById("addRowBtn");
  
   
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const courseName = courseInput.value.trim();
      if (!courseName) return;
  
      const checkedDays = new Set(
        Array.from(form.querySelectorAll('input[name="day"]:checked'))
          .map((cb) => cb.value)
      );
  
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = courseName;
      row.appendChild(nameCell);
  
      dayOrder.forEach((day) => {
        const cell = document.createElement("td");
        cell.textContent = checkedDays.has(day) ? CHECK : CROSS;
        cell.dataset.day = day;
        cell.className = "day-cell";
        row.appendChild(cell);
      });
  
      table.appendChild(row);
      form.reset();
      courseInput.focus();
    });
  
   
    addRowBtn.addEventListener("click", () => {
      const row = document.createElement("tr");
  
      const nameCell = document.createElement("td");
      nameCell.textContent = "New Course";
      row.appendChild(nameCell);
  
      dayOrder.forEach((day) => {
        const cell = document.createElement("td");
        cell.textContent = CROSS;
        cell.dataset.day = day;
        cell.className = "day-cell";
        row.appendChild(cell);
      });
  
      table.appendChild(row);
    });
  });
  