function showAlert() {
    alert("Hello! You clicked the button!");
}

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("alertButton");
    button.addEventListener("click", showAlert);
});
