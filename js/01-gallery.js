import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryList = document.querySelector('.gallery');

const markup = galleryItems.reduce((acc, { preview: smallImage, original: largeImage, description: alt }) =>
    acc + `<div class="gallery__item">
  <a class="gallery__link" href="">
    <img
      class="gallery__image"
      src="${smallImage}"
      data-source="${ largeImage}"
      alt="${alt}"
    />
  </a>
</div> `, '')
galleryList.insertAdjacentHTML("beforeend", markup)
galleryList.addEventListener('click', onOpenModalImage)
galleryList.addEventListener('keyup', onCloseModal)

let instance;
function onOpenModalImage(e) {
  e.preventDefault();

  if (!e.target.nodeName === "IMG") {
    return 
  } else {
        instance = basicLightbox.create(`<img src="${e.target.dataset.source}" width="800" height="600">`);
    showInstance();
 
  }
}

function onCloseModal(e) {
    e.code === "Escape"?
       closeInstance():alert('Чтобы закрыть нажмите Esc')
}

function showInstance() {
    instance.show() 
};

function closeInstance() {
    instance.close()
}