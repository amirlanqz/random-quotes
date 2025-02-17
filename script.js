const quotes = [
  {
    quote: 'Do what you can, with what you have, where you are.',
    author: 'Theodore Roosevelt',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts.',
    author: 'Winston Churchill',
  },
  {
    quote: 'In the middle of every difficulty lies opportunity.',
    author: 'Albert Einstein',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop.',
    author: 'Confucius',
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: 'Sam Levenson',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    author: 'Albert Einstein',
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: 'Theodore Roosevelt',
  },
  {
    quote: 'The best way to predict the future is to create it.',
    author: 'Peter Drucker',
  },
  {
    quote: 'It always seems impossible until it’s done.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'Act as if what you do makes a difference. It does.',
    author: 'William James',
  },
];

const quoteElement = document.getElementById('quote');
const quoteAuthorElement = document.getElementById('quote-author');
const generateBtn = document.getElementById('generate-btn');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  // const quote = `"<em>${randomQuote.quote}"</em><br>${randomQuote.author}`;

  quoteElement.textContent = randomQuote.quote;
  quoteAuthorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener('click', generateRandomQuote);
