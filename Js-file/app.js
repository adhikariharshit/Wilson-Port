
let countClick = 0;
const menu = document.querySelector(".ham-menu-cont");
const responsiveNavContent = document.querySelector(".responsive-nav-content");

menu.addEventListener("click", () => {
    countClick += 1;
    if (countClick % 2 !== 0) {
        responsiveNavContent.style.display = "block";
    } else {
        responsiveNavContent.style.display = "none";
    }
});
