/*
Create a currency converter using an exchange rate from https://currencyapi.com/. 
A user should be able to pass a currency and amount of money in a function 
and get the amount of money in the desired currency in output. 
Use “then” syntax to implement the function.

currencyConvertor(40, EUR) ⇒ 35 EUR */

const fetch = require("node-fetch"); 

const URL = "https://api.currencyapi.com/v3/latest";

const API_KEY = "1aW6ranUUztNMtMk6J6COlLN3mDrxqauzHorPX5v";

function currencyConvertor(amount, currency) {
  return fetch(`${URL}?apikey=${API_KEY}&base_currency=USD&currencies=${currency}`)
    .then((response) =>
      response.json().then((jsonBody) => {
        let currencyRate = jsonBody.data[`${currency}`].value;
        return `${amount} USD = ${currencyRate * amount} ${currency}`;
      }),
    )
    .catch((error) => {
      console.log(error);
    });
}
currencyConvertor(40, "EUR").then((result) => {
  console.log(result);
});