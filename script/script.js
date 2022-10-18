function openCloseNav(x) {
    var nav = document.querySelector("nav");
    if (nav.style.width != "auto") {
        x.classList.add("change");
        nav.style.width = "auto";
    } else {
        x.classList.remove("change");
        nav.style.width = "0";
    }
}

const form = document.querySelector("form");
if (form != undefined) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert(message);
    });
}
