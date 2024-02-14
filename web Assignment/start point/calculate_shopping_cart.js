function calculateTotalCost(cart) {
  let totalCost = 0;
  for (let i = 0; i < cart.length; i++) {
    totalCost += cart[i].price * cart[i].quantity;
  }
  return totalCost;
}
let i = "item";
var cart = [
  { i: "Apple", price: 0.5, quantity: 3 },
  { i: "Banana", price: 0.3, quantity: 5 },
  { i: "Orange", price: 0.4, quantity: 2 },
  { i: "Samsung TV", price: 400, quantity: 2 },
  { i: "Sharp 380P sound system", price: 230, quantity: 5 },
];

var totalCost = calculateTotalCost(cart);
console.log(`Total cost of items in the shopping cart: $${totalCost}`);
