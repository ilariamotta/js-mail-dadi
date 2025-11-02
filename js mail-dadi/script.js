// MAIL
// Crea un array con delle email di chi può acedere.
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.
// NON USARE INCLUDES!

//1. creo un array con delle mail 
//2. con prompt chiedo la mail utente
//3. confronto mail immessa con quelle presenti nell'array
//4. resistuisco messaggio 


const mail = ["silvanamail", "harrymail", "tommasomail", "caterinamail"];
let message = "";
prompt("Scrivi la tua mail")

if (prompt === mail) {
}

console.log("Mail valida")

//////////////////////////////////////////
// GIOCO DEI DADI
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//1. creo variabile vuota numero giocatore & creo variabile vuota numero computer
//2. genero un numero random sia per il giocatore che per il computer, salvo i numeri
//3. confronto i due numeri
    // SE numero giocatore è più alto di computer ALLORA ha vinto giocatore, stampo messaggio vittoria
    // ALTRIMENTI numero giocatore è più basso di computer ALLORA ha vinto computer, stampo messaggio