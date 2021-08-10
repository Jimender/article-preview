const shareBtn = document.querySelector('.article__share-icon');
const shareList = document.querySelector('.article__share-list');

// Event Listeners
shareBtn.addEventListener('click', function (e) {
  e.preventDefault();

  clicked = e.target.closest('.article__share-icon');

  clicked.parentNode.children[1].classList.toggle('active');
});
