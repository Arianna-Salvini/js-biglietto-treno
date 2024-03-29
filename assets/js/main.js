// Get variables from user with prompt

const total_km = Number(prompt("Inserisci il numero totale di chilometri da percorrere (km)"));
const user_age = Number(prompt( "Inserisci la tua età"));

console.log(total_km);
console.log(user_age);

// Calculate the cost of tickets based on the amount of kilometres

const cost_per_km = 0.21;
const ticket_amount =(total_km * cost_per_km).toFixed(2);

console.log(ticket_amount);

// Discount (amount/100 * discount = amount discounted)

// let under18_discount = 80 / 100;
// let over65_discount = 60 / 100;

let under18_discount = (ticket_amount / 100) * 20;
let over65_discount = (ticket_amount / 100) * 40;

//OPTION 1)
//Total amount with eventual discount

// if (user_age < 18){
//     const amount_under18 = (ticket_amount - under18_discount).toFixed(2);
//     alert(`L'importo totale è di € ${amount_under18}`);
// } else if (user_age >= 65) {
//     const amount_over65 = (ticket_amount - over65_discount).toFixed(2);
//     alert(`L'importo totale è di € ${amount_over65}`);
// } else {
//    alert(`L'importo totale è di € ${ticket_amount}`); 
// }

//OPTION 2)
// Print resul regardless of the case

let amount_tot ;

if (user_age < 18){
    amount_tot = (ticket_amount - under18_discount).toFixed(2);
} else if (user_age >= 65) {
    amount_tot = (ticket_amount - over65_discount).toFixed(2);
} else {
     amount_tot = ticket_amount
}

alert(`L'importo totale è di € ${amount_tot}`)

document.writeln(`PROMEMORIA: Importo totale € ${amount_tot}`)
