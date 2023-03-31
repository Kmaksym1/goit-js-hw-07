import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEL = document.querySelector('.gallery');
const markup = galleryItems.map(({ description, preview, original}) =>
    `<li class='gallery__item'>
    <a class="gallery__link" href="${original}">
    <img 
    class= "gallery__image" 
    src="${preview}" 
    alt="${description}"
    />
    </a>
    </li>`).join('')
galleryEL.insertAdjacentHTML('beforeend', markup)

const gallery = new SimpleLightbox('.gallery__item a', {
    captionsData: 'alt',
    captionDelay: 250
});
gallery.next();
