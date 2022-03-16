/* Create currencyConvertorAsync function. 
Reimplement the first task with async/await syntax. 
Use a separate *.js file for this task.
 */

const fetch = require("node-fetch");

const URL = "https://api.currencyapi.com/v3/latest";

const API_KEY = "1aW6ranUUztNMtMk6J6COlLN3mDrxqauzHorPX5v";

async function currencyConvertorAsync(amount, currency) {
  try {
    const result = await fetch(`${URL}?apikey=${API_KEY}&base_currency=USD&currencies=${currency}`);
    const jsonBody = await result.json();
    let currencyRate = jsonBody.data[`${currency}`].value;
    return `${amount} USD = ${currencyRate * amount} ${currency}`;
  } catch (e) {
    console.log(e);
  }
}

(async function runCode() {
  console.log(await currencyConvertorAsync(40, "EUR"));
})();