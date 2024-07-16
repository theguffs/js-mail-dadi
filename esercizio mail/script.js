// Lista di email che possono accedere

const listaEmail = ["youssef1@gmail.com", "youssef2@gmail.com", "youssef3@gmail.com"];

// pulsante al click

document.getElementById("verificaButton").addEventListener("click", function() {

    // email inserita dall'utente

    const emailUtente = document.getElementById("emailInput").value;
    const messaggio = document.getElementById("messaggio");

    // se la mail è nella lista allora fai questo
    if (listaEmail.includes(emailUtente)) {
        messaggio.textContent = "Benvenuto Youssef!";
        messaggio.classList.add('text-success');
    } 
    // altrimenti fai questo
    else {
        messaggio.textContent = "non sei Youssef =(";
        messaggio.classList.add('text-danger');
    }
});