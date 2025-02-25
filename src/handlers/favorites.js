import { currentQuote } from '../../index.js';

function toggleFavoriteIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideBtn(btn) {
  btn.style.display = 'none';
}

const favoritesContainer = document.getElementById('favorites-container');
const toggleFavoriteBtn = document.getElementById('toggle-favorite-btn');

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoriteIcon(currentQuote.isFavorite, toggleFavoriteBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function hideFavoriteCard(currentQuote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(currentQuote)) {
      card.remove();
    }
  });
}

function showFavoriteCard(quote, author, container) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
    <p>${quote}</p>
    <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function handleFavorite(isFavorite) {
  showBtn(toggleFavoriteBtn);
  toggleFavoriteIcon(isFavorite, toggleFavoriteBtn);
}

toggleFavoriteBtn.addEventListener('click', toggleFavorite);
hideBtn(toggleFavoriteBtn);

export { handleFavorite };
