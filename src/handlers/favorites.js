import { quoteFavoriteBtn } from '../../index.js';

function toggleFavoriteBtnIcon(isFavorite, el) {
  quoteFavoriteBtn.classList.toggle('fa', isFavorite);
  quoteFavoriteBtn.classList.toggle('far', !isFavorite);
}

function showBtn() {
  quoteFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = 'none';
}

function toggleFavorite(quote, btn, container, setCurrentQuote) {
  quote.isFavorite = !quote.isFavorite;
  setCurrentQuote(quote);
  const { id, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite);

  if (isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFavoriteCard(id);
  }
}

function removeFavoriteCard(id) {
  const card = document.querySelector(
    `.favorite-card[data-favorite-quote-id="${id}"]`
  );
  if (card) {
    card.remove();
  }
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = !quote.isFavorite;
  removeFavoriteCard(quote.id);
  const currentQuoteId = document.querySelector('[data-current-quote-id]')
    .dataset.currentQuoteId;
  if (currentQuoteId === quote.id) {
    toggleFavoriteBtnIcon(quote.isFavorite);
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
    <div class="favorite-card-content">
      <p>${text}</p>
      <p class="author">${author}</p>
    </div>
    <button class="btn btn-danger">Remove from favorite<i class="far fa-trash-alt"></i></button>
    `;
  container.appendChild(favoriteCard);

  const removeFavoriteCard = favoriteCard.querySelector('.btn-danger');
  removeFavoriteCard.addEventListener('click', () =>
    removeFavoriteQuote(quote)
  );
}

function handleFavorite(isFavorite) {
  showBtn(quoteFavoriteBtn);
  toggleFavoriteBtnIcon(isFavorite);
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
