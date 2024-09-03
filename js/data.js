document.addEventListener("DOMContentLoaded", (event) => {
    let dato = localStorage.getItem("dato");

    let data = document.getElementById("data");
    data.innerHTML = dato;
});