const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const root = document.getElementById("root")


root.innerHTML = `<h1>Currency Converter</h1>
<p>Convert from USD to</p>
<div class="dropdown-menu" id="dropdown-menu>
<label for="currencyMenu" id="currencyMenu"></label>
<input id="currencyMenu" type=text></input>
<button id="submit">submit</button>
`


let selectConverter = document.getElementById("currency-converter")


for (let currency of currencies) {
  console.log(currency)
  let option = document.createElement("option")
  option.innerText = currency
  option.value = currency
  // // selectConverter.appendChild(option)
}