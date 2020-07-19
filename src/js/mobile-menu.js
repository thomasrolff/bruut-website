const toggler = document.querySelector("input[name=checkbox]");
const menu = document.querySelector(".menu-mobile");
const menuOverlay = document.querySelector(".menu-overlay");

toggler.addEventListener("change", (e) => { 
    // toggle menu visibility 
    if(e.target.checked) {
        menu.style.visibility = "visible";
        menuOverlay.style.transform = "translateX(0%)";
        menuOverlay.style.transition = "transform .15s ease";
        document.body.setAttribute("class", "no-scroll");
    } else {
        menu.style.visibility = "hidden";
        menuOverlay.style.transform = "translateX(100%)";
        menuOverlay.style.transition = "transform .15s ease";
        document.body.removeAttribute("class", "no-scroll");
    }
});
