/* There is an array of prices of goods in the receipt. 
In the console, you need to display the sum of all prices and
the average price of the product.*/

const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

let sum = 0;
for (let index = 0; index < prices.length; index++) {
  sum = sum + prices[index];
}
let avg = sum / prices.length;

console.log("Avg = " + avg);
console.log("Sum = " + sum);