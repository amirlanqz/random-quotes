import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
import { localStorangeSetItem } from './src/utils/localStorage.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
  localStorangeSetItem('currentQuote', quote);
}
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

const favoritesContainer = document.getElementById('favorites-container');
const quoteFavoriteBtn = document.getElementById('quote-favorite-btn');
quoteFavoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, quoteFavoriteBtn, favoritesContainer)
);
hideFavoriteBtn();

export { quoteFavoriteBtn };
