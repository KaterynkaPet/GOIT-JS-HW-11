import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImage } from './js/pixabay-api';
import { imageTemplate } from './js/render-functions';

export const imgGallery = document.querySelector('.gallery');
export const formEl = document.querySelector('.form');

const galleryCfg = {
    captionsData: 'alt',
};

let lightbox = new SimpleLightbox('.gallery a', galleryCfg);
lightbox.on('show.simplelightbox', function () {});

formEl.addEventListener('submit', e => {
    e.preventDefault();
    const inputValue = e.currentTarget.elements.image.value.trim();
    imgGallery.innerHTML = '<div class="loader"></div>';

    getImage(inputValue).then(data => {
        const markup = imageTemplate(data.hits);
        imgGallery.innerHTML = markup;
        lightbox.refresh();
        if (data.hits.length === 0) {
            iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            })
        }
    })
        .catch(error => {
            iziToast.error({
                maxWidth: '432px',
                height: '48px',
                color: 'red',
                position: 'topRight',
                message: 'Sorry, there are no images matching your search query. Please try again!',

            })
        })
       
});


