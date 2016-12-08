import data from './quotes.json';
import shuffle from '../utils/shuffle';

function getRandomQuote(lastQuoteHat = []) {
  const quotes = data.quotes;
  let quoteHat = lastQuoteHat.slice(0);
  if (quoteHat.length === 0) {
    const tempHat = [];
    for (let i = 0; i < quotes.length; i += 1) {
      tempHat.push(i);
    }
    quoteHat = shuffle(tempHat).slice(0);
  }
  const quoteIndex = quoteHat.pop();
  return {
    quote: quotes[quoteIndex],
    quoteHat: quoteHat.slice(0),
  };
}

export default {
  getRandomQuote,
};