import data from './quotes.json';

function getRandomQuote() {
  const quotes = data.quotes;
  return quotes[Math.floor(Math.random() * quotes.length)];
}

export default {
  getRandomQuote,
};