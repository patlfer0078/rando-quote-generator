//variables...
let quoteBank;

var colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];
//Function to retrieve quotes from url
// Original code by Gabriel Nunes, modified by me
function getQuotes() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quoteBank = JSON.parse(jsonQuotes);
        console.log('quoteBank');
        console.log(quoteBank);
      }
    }
  });
}
//Generate quotes...code by me

//Function init runs immediately when opening
window.onload = init;
function init(){
  getQuotes().then(() => {
  generateQuote();
});
}
// random generators, for quotes and for colors
function randomGenerator(){
  return quoteBank.quotes[
    Math.floor(Math.random() * quoteBank.quotes.length)
  ];
}

function randomColors(){
  return colors[
    Math.floor(Math.random() * colors.length)
  ];
}
//generate a quote
//also activates the randomColors function
function generateQuote(){
  console.log("Quote Generated");
  let randomQuote = randomGenerator();
  let randomColor = randomColors();

  document.getElementById("text").innerText =  randomQuote.quote;
  document.getElementById("author").innerText = randomQuote.author;

  document.getElementById("container").style.color = randomColor;
  document.body.style.background = randomColor;

}
