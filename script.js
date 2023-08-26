const exploreButton = document.getElementById('explore-button');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeButton = document.getElementById('close-button');

exploreButton.addEventListener('click', () => {
    modalImage.src = 'yoda.png'; // Replace with the actual path to your photo
    modal.classList.add('show');
});

closeButton.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});
