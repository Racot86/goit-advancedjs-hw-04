import './js/render-functions.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import injectElementsDataFromPixaBaySearch from './js/pixabay-api.js';
import generateImageElementsFromJSON from './js/render-functions.js';
import iziToast from 'izitoast';
import SimpleLightBox from 'simplelightbox';

let gallery = document.querySelector('.gallery');
const form = document.querySelector('.search-bar');
const btnSearch = document.querySelector('.btn-search');
const inputSearch = document.querySelector('.input-search');
const loader = document.querySelector('.loader-btn');
const loadMoreBtn = document.querySelector('.load-more-btn');
const dotAnimation = document.querySelector('.dot-animation');
const moreText = document.querySelector('.more-text');
const btnGoUp = document.querySelector('.btn-go-up');
const paginationEnd = document.querySelector('.pagination-end');
let currentPage = 1;
let searchVal = '';
const perPage = 15;

let box = new SimpleLightBox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
});

form.addEventListener('submit', e => {
  e.preventDefault();
  currentPage = 1;
  loadMoreBtn.classList.add('hidden');
  paginationEnd.classList.add('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  searchVal = form.data.value.trim();
  if (searchVal.length > 0){
    btnSearch.classList.add('hidden');
    loader.classList.remove('hidden');
    injectElementsDataFromPixaBaySearch('46528220-f321f8a91f42a85f9ca952d44', searchVal, currentPage, perPage)
      .then((resData)=>{
        setTimeout(()=>{
          gallery.innerHTML = '';
          gallery.appendChild(generateImageElementsFromJSON(resData.data));
          box.refresh();
          btnSearch.classList.remove('hidden');
          loader.classList.add('hidden');
          if (resData.maxPages>1){
            loadMoreBtn.classList.remove('hidden');
          }
          const scrollTo = document.querySelector('.scroll');
          scrollTo.classList.remove('scroll');
        },500)
      })
      .catch((err)=>{
        iziToast.error({title:err.message});
      })
  }else {
    inputSearch.classList.add('blink');
    setTimeout(()=>{inputSearch.classList.remove('blink');},500)
  }

});

loadMoreBtn.addEventListener('click', e => {
  dotAnimation.classList.remove('hidden');
  moreText.classList.add('hidden');
  setTimeout(()=>{
    currentPage += 1;
    injectElementsDataFromPixaBaySearch('46528220-f321f8a91f42a85f9ca952d44', searchVal,currentPage, perPage)
      .then((resData)=>{
        if (resData.data.length > 0){
          gallery.appendChild(generateImageElementsFromJSON(resData.data));
          box.refresh();
        }
        console.log(resData.maxPages + " " + currentPage);
        if(currentPage === resData.maxPages){
          loadMoreBtn.classList.add('hidden');
          paginationEnd.classList.remove('hidden');
        }
        dotAnimation.classList.add('hidden');
        moreText.classList.remove('hidden');
        const scrollTo = document.querySelector('.scroll');
        window.scrollBy({
          top: scrollTo.getBoundingClientRect().top - 16,
          behavior: 'smooth'
        });
        scrollTo.classList.remove('scroll');
      })

  },500);


})
btnGoUp.addEventListener('click', e => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
})