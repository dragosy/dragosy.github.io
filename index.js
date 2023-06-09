var activePage = "skills";

document.getElementById(activePage).style.display = "block";

function hide(id) {
  document.getElementById(id).style.display = "none";
}
function show(id) {
  document.getElementById(id).style.display = "block";
}
function hideAllPages() {
  var pages = document.querySelectorAll("#main .page");
  pages.forEach(function (page) {
    hide(page.id);
  });
}

function showPage(id) {
  hideAllPages();
  show(id);
}

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  if (e.target.matches("a")) {
    var id = e.target.dataset.page;
    showPage(id);
  }
});
function showSkills() {
  var skills = ["HTML", "CSS", "JS"];
  var skillsHTML = "";
  skills.forEach(function (skill) {
    skillsHTML += `<li>${skill}</li>`;
  });
  var container = document.querySelector("#skills ul");
  container.innerHTML = skillsHTML;
}

showSkills();
