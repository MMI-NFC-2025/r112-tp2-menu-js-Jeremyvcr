
//On cible les éléments à modifier
const toggle = document.querySelector(".menu-btn");
const nav = document.querySelector(".menu");
const main = document.querySelector("main");

//On ajoute un écouteur d'événement à l'élément toggle
toggle.addEventListener("click"), () => {
    const isOpen = toggle.arialExpanded === "true";
    const isClosed = !isOpen;
    console.log("isOpen : ", isOpen, "isClosed :", isClosed);

    //si
    if (isClosed) {
        nav.arialExpanded = "false";
        toggle.arialExpanded = "true";
        main.setAttribute("hidden","");
    }
    //fermeture
    else {
        nav.ariaHidden = "true";
        toggle.ariaExpended = "false";
        main.removeAttribute("hidden");
    }document.body.classList.toggle("no-scroll", isClosed);


};