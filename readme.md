CONSEGNA:
Calcolo del prezzo del biglietto del treno

DESCRIZIONE:
Trenitalia ha bisogno di un programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due cifre decimali, per indicare centesimi sul prezzo).

<!-- STEPS -->

- Step1: Ottenre informazioni
    - Chiedere di inaserire il numero di km  
    - Chiedere l'età

- Step2: Calcolare prezzo biglietto
    - calcolare in base ai kilometri
    - calcolare sconti
        -SE meno di 18 20%
        -SE sopra i 65 40%

- Step3: Dare prezzo finale in forma umana

    - Arrotondare a 2 decimali

<!-- STRUMENTI -->

- variabili
- prompt
<!-- 
- math          NOT NECESSARY
- round -->
- .toFixed(2)   ---> per avere solo 2 decimali
- if
