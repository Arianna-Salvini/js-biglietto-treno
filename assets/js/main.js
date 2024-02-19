// Get variables from user with prompt

const total_km = prompt("Inserisci il numero totale di chilometri da percorrere (km)")
const user_age = prompt( "Inserisci la tua età")

console.log(total_km);
console.log(user_age);

// Calculate the cost of tickets based on the amount of kilometres

const cost_per_km = 0.21;
let ticket_Amount = Math.floor(total_km * cost_per_km);

console.log(ticket_Amount);

// Discount

const discount_under18 = Math.floor(ticket_Amount * 0.2);
const discount_over65 = Math.floor(ticket_Amount * 0.5);

// total amount with eventual discount

