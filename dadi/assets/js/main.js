// Elementi padre
const elementUser = document.querySelector("#dado-user");
const elementPc = document.querySelector("#dado-pc");

// EventListener
const buttonOk = document.getElementById("ok");
buttonOk.addEventListener("click", function() {
    var containerRisultato = document.getElementById("container-risultato");
    containerRisultato.classList.remove("d-none");
    
    // Rimuovere preventivamente i risultati per giocate multiple
    if (elementUser.firstChild) {
        elementUser.removeChild(elementUser.firstChild);
    }
    if (elementPc.firstChild) {
        elementPc.removeChild(elementPc.firstChild);
    }

    // Generatore per dadi
    let numberUser = Math.floor(Math.random() * 6) + 1;
    console.log("il tuo dado:", numberUser);
    let numberPc = Math.floor(Math.random() * 6) + 1;
    console.log("il dado del tuo avversario:", numberPc);
    const childUser = document.createElement("span");
    if (elementUser) {
        childUser.innerText = numberUser;
        childUser.classList.add('h-100', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold');
        elementUser.appendChild(childUser);
    }
    const childPc = document.createElement("span");
    if (elementPc) {
        childPc.innerText = numberPc;
        childPc.classList.add('h-100', 'd-flex', 'justify-content-center', 'align-items-center', 'fw-bold');
        elementPc.appendChild(childPc);
    }

    // Risultato
    if (numberUser == numberPc) {
        risultato.innerText = "PAREGGIO";
        console.log("Risultato: PAREGGIO");
    } else if (numberUser > numberPc) {
        risultato.innerText = "HAI VINTO!!";
        console.log("Risultato: HAI VINTO!!");
    } else {
        risultato.innerText = "HAI PERSO :(";
        console.log("Risultato: HAI PERSO :(");
    }
});