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

const message =
    "Votre réservation a été prise en compte, nous avons hâte de vous recevoir. ";

document
    .getElementById("formular")
    .addEventListener("submit", function (event) {
        event.preventDefault();
        alert(message);
    });
