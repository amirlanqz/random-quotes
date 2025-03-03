import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
import {
  localStorangeSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js';
import { displayQuote, findQuoteById } from './src/handlers/quote.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorangeSetItem('currentQuote', quote);
}
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

function init() {
  const currentQuoteFromStorage = localStorageGetItem('currentQuote');
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }
}

window.addEventListener('load', init);

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(
    currentQuote,
    quoteFavoriteBtn,
    favoritesContainer,
    setCurrentQuote
  )
);
hideFavoriteBtn();

export { quoteFavoriteBtn };
