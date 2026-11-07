const year = new Date().getFullYear();

document.querySelector("#currentyear").textContent = year;

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;

const menuButton = document.querySelector("#menu");

const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuButton.textContent = "✖";
    }
    else {
        menuButton.textContent = "☰";
    }
});