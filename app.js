// Exercise 1
 
// ​Create an array to represent your shopping list with the following items: 'pop tarts', 'ramen noodles', 'chips', 'salsa', and 'coffee'.
// Add 'fruit loops' to the list.
// Update 'coffee' to 'fair trade coffee'
// Replace 'chips' and 'salsa' with 'rice' and 'beans'
// Create an empty array to represent your shopping cart.
// Remove the last item from your shopping list and add it to your cart

// Remove the first item from your shopping list and add it to the cart

// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.

// Sort the items in your cart alphabetically... backwards

// Print the list of items in your shopping cart to the console as comma separated string.

const shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];

console.log(shoppingList);

// add fruit loops
shoppingList.push('fruit loops');

console.log('add fruit loops: ', shoppingList);

// update coffee to fair trade coffee
shoppingList.splice(4, 1, 'fair trade coffee');

console.log('update coffee to fair trade coffee ', shoppingList);

// Replace 'chips' and 'salsa' with 'rice' and 'beans'

shoppingList.splice(2,2, 'rice', 'beans');

console.log('replace ships and salsa with rice and beans ', shoppingList);

// Create an empty array to represent your shopping cart.

const shoppingCart = [];

// Remove the last item from your shopping list and add it to your cart

shoppingCart.push(shoppingList.pop());
//shoppingList.splice(-1, 1);

console.log('add item to shopping cart: ',shoppingCart);
console.log('remove item from shopping list: ', shoppingList);

// Remove the first item from your shopping list and add it to the cart
shoppingCart.push(shoppingList.shift());

console.log('add item to cart : ',shoppingCart);
console.log('remove first item from shopping list: ', shoppingList);

// Write a 'while' loop that takes items from your shopping list and moves them to your cart until there are no items left on the list.

while(shoppingList.length > 0) {
	shoppingCart.push(shoppingList.pop());
}
console.log('move shopping list to shopping cart:')
console.log('shopping cart: ', shoppingCart);
console.log('shopping list: ', shoppingList);

// Sort the items in your cart alphabetically... backwards
shoppingCart.sort().reverse();

console.log('sort itmes in shopping cart, alphabetically...backwards: ', shoppingCart);

// Print the list of items in your shopping cart to the console as comma separated string.
console.log(shoppingCart.toString());



