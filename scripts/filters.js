const buttonFilterAll = document.getElementById("All");
const buttonFilterHTML = document.getElementById("HTML");
const buttonFilterJS = document.getElementById("JS");
const buttonFilterReact = document.getElementById("React");

const projects = Array.from(document.querySelectorAll(".project"));
console.log(projects);

buttonFilterAll.addEventListener("click", () => {
  projects.forEach((project) => {
    project.classList.remove("hidden");
    project.classList.add("visible");
  });
});

buttonFilterHTML.addEventListener("click", () => {
  projects.forEach((project) => {
    if (project.classList.contains("HTML")) {
      project.classList.remove("hidden");
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
      project.classList.add("hidden");
    }
  });
});

buttonFilterJS.addEventListener("click", () => {
  projects.forEach((project) => {
    if (project.classList.contains("JS")) {
      project.classList.remove("hidden");
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
      project.classList.add("hidden");
    }
  });
});

buttonFilterReact.addEventListener("click", () => {
  projects.forEach((project) => {
    if (project.classList.contains("React")) {
      project.classList.remove("hidden");
      project.classList.add("visible");
    } else {
      project.classList.remove("visible");
      project.classList.add("hidden");
    }
  });
});
