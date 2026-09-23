document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".level-btn");
  const sections = document.querySelectorAll(".level-content");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const targetLevel = btn.getAttribute("data-level");

      buttons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");

      sections.forEach(function (section) {
        if (section.getAttribute("data-level") === targetLevel) {
          section.hidden = false;
        } else {
          section.hidden = true;
        }
      });

      window.scrollTo({ top: document.querySelector(".topic-page").offsetTop - 20, behavior: "smooth" });
    });
  });
});
