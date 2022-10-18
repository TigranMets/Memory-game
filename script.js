let isFlipped = false;
let firstCard;
let secondCard;

document.querySelectorAll('.card').forEach(card => {
  card.style.order = Math.floor(Math.random() * 16);
  card.addEventListener('click', function () {
    if (!secondCard) {
      this.classList.add('flip');
      if (!isFlipped) {
        isFlipped = true;
        firstCard = this;
      } else if (firstCard !== this) {
        isFlipped = false;
        secondCard = this;
        if (firstCard.dataset.image !== secondCard.dataset.image) {
          setTimeout(() => {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            secondCard = null;
          }, 1500);
        } else {
          secondCard = null;
        }
      }
    }
  })
});