// Lista di email che possono accedere

const listaEmail = ["youssef1@gmail.com", "youssef2@gmail.com", "youssef3@gmail.com"];

 // pulsante

 document.getElementById("verificaButton").addEventListener("click", function() {

    // Ottieni l'email inserita dall'utente

    const emailUtente = document.getElementById("emailInput").value;
    const messaggio = document.getElementById("messaggio");

    // Flag per verificare se l'email è presente nella lista

    let emailValida = false;

    // Ciclo per controllareemail nella lista

    for (let i = 0; i < listaEmail.length; i++) {

        if (listaEmail[i] == emailUtente) {
            emailValida = true;
        }

    }

    // se la mail è valida scrivi questo

    if (emailValida) 

        messaggio.textContent = "Benvenuto Youssef!";
        messaggio.classList.add('text-success');

    } 

    // altrimenti scrivi questo

    else {

        messaggio.textContent = "Non sei Youssef =(";
        messaggio.classList.add('text-danger');
        
    }
});