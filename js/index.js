document.addEventListener("DOMContentLoaded", (event) => {
    let guardar = document.getElementById("buttonText");
    guardar.addEventListener("click", () => {
        let entrada = document.getElementById("inputText").value;
        localStorage.setItem("dato", entrada);
    });
});