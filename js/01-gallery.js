import { galleryItems } from './gallery-items.js';

const galleryEL = document.querySelector('.gallery');
const markup = galleryItems.map(({ description, preview, original}) =>
    `<li class='gallery__item'>
    <a class="gallery__link" href="${original}">
    <img 
    class= "gallery__image" 
    src="${preview}" 
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </li>`).join('')
galleryEL.insertAdjacentHTML('beforeend', markup)

galleryEL.addEventListener('click', onClick)
function onClick(eve) {
    eve.preventDefault()
    const instance = basicLightbox.create(`<div><img src=${eve.target.dataset.source}></div>`
    )
    instance.show();
    const originalEL=document.querySelector('.basicLightbox')
    document.addEventListener('keydown', onEscape)
    function onEscape(eve) {
    if(eve.keyCode === 27) {originalEL.remove()};
        }; 
    }