// Get variables from user with prompt

const total_km = prompt("Inserisci il numero totale di chilometri da percorrere (km)")
const user_age = prompt( "Inserisci la tua età")

console.log(total_km);
console.log(user_age);

// Calculate the cost of tickets based on the amount of kilometres

const cost_per_km = 0.21;
let ticket_Amount =(total_km * cost_per_km).toFixed(2);

console.log(ticket_Amount);

// Discount

let ticket_under18 =(ticket_Amount * 0.8).toFixed(2);
let ticket_over65 = (ticket_Amount * 0.6).toFixed(2);

console.log(ticket_over65);
console.log(ticket_under18);

// total amount with eventual discount


