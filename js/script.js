// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
//  Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.

// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati),
//  realizziamo le specifiche scritte sopra. 
// La risposta finale (o output) sarà anch’essa da scrivere in console.

// MILESTONE 2:
// Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
// Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo).



const submit = document.getElementById ("submit-btn");
submit.addEventListener("click", function() {
    
    const price = document.getElementById ("price");
    // RIPULIRE IL PRICE
    // price = "";
    
    // Input

    const distance = document.getElementById ("distance");
    const distanceUser = parseInt(distance.value);

    const age = document.getElementById("user-age");
    const userAge = age.value;
    console.log(distanceUser,userAge, typeof distanceUser, typeof userAge);

    // Logica

    if (isNaN(distance) || distance < 0) {
        alert ('Per favore inserisci la distanza in km usando solo valori numerici positivi');
        // RIPULISCO I CAMPI
        distanceUser = "";
        userAge = "";

    }
    
    
    
    // Output


    

})
