const unfoldMenu = document.getElementById("unfoldMenu");
const more = document.getElementById("unfoldMenu");
const moreContent = document.getElementById("moreContent");

unfoldMenu.addEventListener("click", () => {
  if (unfoldMenu.textContent === "More +") {
    unfoldMenu.textContent = "More -";
    moreContent.removeAttribute("hidden");
  } else if (unfoldMenu.textContent === "More -") {
    unfoldMenu.textContent = "More +";
    moreContent.setAttribute("hidden", true);
  }
});
