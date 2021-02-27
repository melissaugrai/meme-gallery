var imageUrls = [];

const gallery = document.querySelector('main');
const imageUrlInput = document.querySelector('input');
const addImageButton = document.querySelector('button');

addImageButton.addEventListener('click', function (event) {

    if (imageUrlInput.value !== '') {
        imageUrls.push(imageUrlInput.value);
    }
    imageUrlInput.value = '';
    updateGallery();
});

function updateGallery() {
    gallery.innerHTML = '';
    for (let i = 0; i < imageUrls.length; i++) {
        let imageElement = document.createElement('img');
        imageElement.className = 'gallery-image';
        imageElement.src = imageUrls[i];
        gallery.appendChild(imageElement);
    }
}
updateGallery();