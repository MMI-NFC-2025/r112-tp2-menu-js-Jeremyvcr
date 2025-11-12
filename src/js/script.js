const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
toggle.addEventListener("click",() => {
    nav.ariaHidden = nav.ariaHidden === "false";
    toggle.ariaExpended = toggle.ariaExpended === "true";

});