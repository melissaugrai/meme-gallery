let imageUrls = [];
const imageUrlInput = document.querySelector('input');
const addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function () {

    if (imageUrlInput.value !== '') {
        imageUrls.push(imageUrlInput.value);
    }
    imageUrlInput.value = '';
});