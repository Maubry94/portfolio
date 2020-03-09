// Loading
let loading;

function showPage() {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("project-container").style.display = "flex";
        document.querySelector("body").style.height = "auto"
    }, 1000);

}