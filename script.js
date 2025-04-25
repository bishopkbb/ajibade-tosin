const quotes = [
    { text: "Style is a way to say who you are without having to speak.", author: "Rachel Zoe" },
    { text: "Fashion is the armor to survive the reality of everyday life.", author: "Bill Cunningham" },
    { text: "Elegance is not standing out, but being remembered.", author: "Giorgi Armani" },
    { text: "Don't be into trends. Don't make fashion own you.", author: "Giani Versace" },
    { text: "Elegance is the only beauty that never fades.", author: "Audrey Hepburn" },
    { text: "Clothes mean nothing until someone lives in them.", author: "Marc Jacobs" }
];

const quoteTextElement =
document.getElementById("quote-text");
const quoteAuthorElement =
document.getElementById("quote-author");

let index = 0;

function updateQuote() {
    quoteTextElement.textContent = quotes[index].text;
    quoteAuthorElement.textContent = `-${quotes[index].author}`;
}

function nextQuote() {
    index = (index + 1) % quotes.length;
    updateQuote();
}

function prevQuote() {
    index = (index - 1 + quotes.length) % quotes.length;
    updateQuote();
}

updateQuote();

setInterval(nextQuote, 5000);

document.getElementById("prev-quote").addEventListener("click", prevQuote);
document.getElementById("next-quote").addEventListener("click", nextQuote);
