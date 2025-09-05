// Handle Accept / Reject button clicks
document.querySelectorAll(".accept").forEach(btn => {
  btn.addEventListener("click", () => {
    let row = btn.closest("tr");
    let teacherName = row.cells[1].innerText;
    alert(`✅ ${teacherName} has been accepted.`);
    row.style.background = "#d4edda"; // green background
  });
});

document.querySelectorAll(".reject").forEach(btn => {
  btn.addEventListener("click", () => {
    let row = btn.closest("tr");
    let teacherName = row.cells[1].innerText;
    alert(`❌ ${teacherName} has been rejected.`);
    row.style.background = "#f8d7da"; // red background
  });
});