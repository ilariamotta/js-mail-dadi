
/*Snack 1*/
//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.


//creo array
//1. creo ciclo for
//2. genero un numero e salvo in variabile vuota
//3. SE il numero è pari, stampo
//  ALTRIMENTI se è dispari stampo il successivo

const num = [];

for (i = 0; i <= 9; i++) {
    random = Math.floor(Math.random() * 100) + 1;
    num.push(random)
    if (random % 2 === 0) {
        console.log(`Numero pari: ${random}`);
    }
    else if (random % 2 !== 0)
        console.log(`Numero dispari: ${random} stampo ${random + 1}`);
}


/*Snack 2*/
// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

//1. creo due variabili vuote
//2. chiedo due parole all'utente con prompt
//3. verifico se parola1 è più lunga di parola2
//4. stampo la parola più lunga


let parola1 = prompt("Dimmi la prima parola")
let parola2 = prompt("Dimmi la seconda parola")

if (parola1.length > parola2.length) {
    console.log(parola1)
} else if (parola1.length < parola2.length) {
    console.log(parola2)
}
