// Seleziona il button

const lanciaDadiButton = document.getElementById("lanciaDadi");

// Aggiungi un gestore di eventi per il click sul pulsante

lanciaDadiButton.onclick = function() {

    // Ottieni il nome inserito dall'utente

    const nomeUtente = document.getElementById("nomeutente").value;

    // Genera numeri casuali tra 1 e 6 per l'utente e per il computer

    const numeroUtente = Math.floor(Math.random() * 6) + 1;
    const numeroComputer = Math.floor(Math.random() * 6) + 1;

    // Determina il risultato del gioco

    let risultato;

    //se numero random dell'utente è più grande di numero random del pc 

    if (numeroUtente > numeroComputer) {
        risultato = "Vince " + nomeUtente;
    } 

    //invece se numero random del pc è più grande di numero random dell'utente 

    else if (numeroComputer > numeroUtente) {
        risultato = "Vince computer";
    } 

     //altrimenti se entrambi i 2 numeri random sono uguali 

    else {
        risultato = "Pareggio";
    }

    // Mostra il risultato nel div con id "risultato"
    const risultatoDiv = document.getElementById("risultato");
    risultatoDiv.innerHTML = "<p>" + nomeUtente + ": " + numeroUtente + "</p>"
                           + "<p>Computer: " + numeroComputer + "</p>"
                           + "<p>Risultato: " + risultato + "</p>";

};