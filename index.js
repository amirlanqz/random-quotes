import quotes from './src/data/quotes.js';
import { handleQuote } from './src/handlers/quote.js';
import { toggleFavorite, hideFavoriteBtn } from './src/handlers/favorites.js';
let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}
const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
);

const favoritesContainer = document.getElementById('favorites-container');
const favoriteBtn = document.getElementById('favorite-btn');
favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);
hideFavoriteBtn(favoriteBtn);

export { favoriteBtn };
