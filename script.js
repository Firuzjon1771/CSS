const showImageBtn = document.getElementById('showImageBtn');
const imageModal = document.getElementById('imageModal');
const popupImage = document.getElementById('popupImage');
const closeButton = document.getElementById('closeButton');

showImageBtn.addEventListener('click', () => {
    imageModal.style.display = 'flex';
    popupImage.src = '8.gif'; // Replace with the actual path to your image
});

closeButton.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

popupImage.addEventListener('click', () => {
    imageModal.style.display = 'none';
});
