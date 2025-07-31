const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const facebookBtn = document.getElementById("facebook");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
  { text: "Always forgive your enemies; nothing annoys them so much.", author: "Oscar Wilde" },
  { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", author: "Mahatma Gandhi" },
  { text: "We accept the love we think we deserve.", author: "Stephen Chbosky" },
  { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
  {
    text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    author: "Ralph Waldo Emerson",
  },
  { text: "Here's to the crazy ones...", author: "Steve Jobs" },
  { text: "It is never too late to be what you might have been.", author: "George Eliot" },
  { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { text: "Whatever you are, be a good one.", author: "Abraham Lincoln" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama" },
  {
    text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    author: "Ralph Waldo Emerson",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  { text: "Turn your wounds into wisdom.", author: "Oprah Winfrey" },
];

// Show Loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// Hide Loading
function complete() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// Show New Quote
function newQuote() {
  loading(); // Show loader

  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  authorText.textContent = quote.author || "Unknown";

  if (quote.text.length > 90) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;

  // Simulate delay before showing quote
  setTimeout(() => {
    complete(); // Hide loader after 1.5 seconds
  }, 1000);
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);

// On Load
newQuote();
