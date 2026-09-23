function renderSemesterGrid() {
  const grid = document.getElementById("semester-grid");
  if (!grid || typeof PHYSICS_SYLLABUS === "undefined") return;

  grid.innerHTML = PHYSICS_SYLLABUS.map(module => `
    <a class="semester-card" href="syllabus.html#${module.id}">
      <h3>${module.title}</h3>
      <p>${module.semesterLabel} · ${module.topics.length} topics</p>
    </a>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderSemesterGrid);
