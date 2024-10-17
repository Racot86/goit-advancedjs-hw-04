import './js/render-functions.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import injectElementsDataFromPixaBaySearch from './js/pixabay-api.js';

let gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-bar');
const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');
const loader = document.querySelector('.loader-btn');

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = form.data.value.trim();
  if (data.length > 0){
    btnSearch.classList.add('hidden');
    loader.classList.remove('hidden');
    injectElementsDataFromPixaBaySearch('46528220-f321f8a91f42a85f9ca952d44', data, gallery);
  }else {
    inputSearch.classList.add('blink');
    setTimeout(()=>{inputSearch.classList.remove('blink');},500)
  }

});

