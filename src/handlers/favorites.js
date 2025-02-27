import { favoriteBtn } from '../../index.js';

function toggleFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle('fa', isFavorite);
  el.classList.toggle('far', !isFavorite);
}

function showBtn(btn) {
  btn.style.display = 'inline-block';
}

function hideFavoriteBtn(btn) {
  btn.style.display = 'none';
}

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { id, isFavorite } = quote;
  toggleFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(id);
  }
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
    <p>${text}</p>
    <p class="author">${author}</p>
    `;
  container.appendChild(favoriteCard);
}

function handleFavorite(isFavorite) {
  showBtn(favoriteBtn);
  toggleFavoriteBtnIcon(isFavorite, favoriteBtn);
}

export { handleFavorite, toggleFavorite, hideFavoriteBtn };
