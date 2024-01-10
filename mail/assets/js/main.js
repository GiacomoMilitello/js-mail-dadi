// Email autorizzate
const emailAutorizzate = ["alessio&hyur@gmail.com", "alessandro&elisabetta@libero.it"];

const buttonOk = document.getElementById("ok");

buttonOk.addEventListener("click", function() {
    const emailInput = document.getElementById("email").value;
    var containerRisultato = document.getElementById("container-risultato");
    containerRisultato.classList.remove("d-none");

    if (emailAutorizzate.includes(emailInput)) {
        document.getElementById("risultato").innerHTML = "Sei autorizzato";
    } else {
        document.getElementById("risultato").innerHTML = "Non sei autorizzato";
    }
});