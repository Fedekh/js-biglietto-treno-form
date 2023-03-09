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
const fee = 0.21;
console.log(fee, submit, typeof fee, typeof submit);

submit.addEventListener("click", function() {
    const result = document.getElementById ("result");
    // RIPULIRE IL PRICE
    result.className = "";  //se ho classi css sopra le toglo tutte
    
    // Input
    
    const distanceInput = document.getElementById ("distance");
    const distance = parseInt(distanceInput.value);
    
    const ageInput = document.getElementById("user-age");
    const age = ageInput.value;
    
    let price = 0;
    price = distance * 0.21;
    console.log(distance,age, price, typeof price, typeof distance, typeof age);

    // Logica
    // Occorre inserire un adeguato valore numerico per spicificare i km

    if ((isNaN(distance)) || distance < 0) {
        alert ('Per favore inserisci la distanza in km usando solo valori numerici positivi');
        // RIPULISCO I CAMPI
        distanceInput.value = ""; //riferimeto riga 22 html, il valore lo resetti
        ageInput.value = "";  //riferimeto riga 25 html, il valore lo resetti
    }
    

    // Occorre fare distinzioni di prezzo dipendentemente dall'età del cliente

    if (age === "") {
        alert('Scegliere la tua fascia d\'eta');
        document.getElementById('result').innerHTML = "";

    }


    if (age === "junior") {
        price = price * 0.8;
        document.getElementById('result').innerHTML = `Il costo del biglietto viene ${price.toFixed(2)}`;
        document.getElementById('rac').innerHTML = `Sarebbe meglio che viaggiassi accompagnato da un genitore`;
        console.log(price, age, typeof age, typeof price);
    }
    
    if (age === "adult") {
        price = price;
        document.getElementById('result').innerHTML = `Il costo del biglietto viene ${price.toFixed(2)}`;
        console.log(price, age, typeof age, typeof price);
        document.getElementById('rac').innerHTML = "";

    }
    
    if (age === "senior") {
        price = price * 0.6;
        document.getElementById('result').innerHTML = `Il costo del biglietto viene ${price.toFixed(2)}`;
        console.log(price, age, typeof age, typeof price);
        document.getElementById('rac').innerHTML = "";

    }
    
    // Output
     

    
     //Ripulisco i campi di input

     ageInput.value = "";
     distanceInput.value = "";


    

})
