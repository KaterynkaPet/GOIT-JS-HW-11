import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { imgGallery } from '../main';
import { formEl } from '../main';
    
    
export function getImage(inputValue) {
    const BASE_URL = 'https://pixabay.com';
    const END_POINT = '/api/';
    const params = new URLSearchParams({
        key: '43037018-42eeb016e636e06528ba4e47a',
        q: inputValue,
        image_type: 'photo',
        orientation: 'horisontal',
        safesearch: 'true',
    });
    const url = `${BASE_URL}${END_POINT}?${params}`;
    return fetch(url).then(res => {
        if (!res.ok) {
            throw new Error(response.status);
        }
        return res.json();
    })
}

 


