function showAlert() {alert ("Holaloh, cuidado eh, esta es una alerta xd");}
const form = document.getElementById("myForm")
form.addEventListener("sumbit", function(event) {
    event.preventDefault();
    validateForm
})
function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
}
function validateForm() {
    const emailInput = document.getElementById("email");
    const email = emailInput.value;
    if (!validateEmail(email)) {
        alert("Por favor, pone el gmail bien.")
    }
}