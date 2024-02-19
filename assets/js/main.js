// Get variables from user with prompt

const total_km = prompt("Inserisci il numero totale di chilometri da percorrere (km)");
const user_age = prompt( "Inserisci la tua età");

console.log(total_km);
console.log(user_age);

// Calculate the cost of tickets based on the amount of kilometres

const cost_per_km = 0.21;
const ticket_amount =(total_km * cost_per_km).toFixed(2);

console.log(ticket_amount);

// Discount (amount/100 * discount = amount discounted)

let under18_discount = 80 / 100;
let over65_discount = 60 / 100;

const amount_under18 =(ticket_amount * under18_discount).toFixed(2);
const amount_over65 = (ticket_amount * over65_discount).toFixed(2);

console.log(amount_under18);
console.log(amount_over65);

// total amount with eventual discount

if (user_age < 18){
    console.log(`L'importo totale è ${amount_under18}`);
} else if (user_age >= 65) {
    console.log(`L'importo totale è ${amount_over65}`);
} else {
   console.log(`L'importo totale è ${ticket_amount}`); 
}

