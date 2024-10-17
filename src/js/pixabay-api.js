
import SimpleLightBox from 'simplelightbox';

import generateImageElementsFromJSON from './render-functions.js';
import iziToast from 'izitoast';

const btnSearch = document.querySelector('.btn-search');
const loader = document.querySelector('.loader-btn');

let box = new SimpleLightBox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
});

export default function injectElementsDataFromPixaBaySearch (key, searchVal='flower', elementToInject) {
  const requestOptions = new URLSearchParams( {
    key: key,
    q: searchVal,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: 'true'
  })
  const options = {
    headers: {
      Accept: "application/json",
    }
  };

  fetch(`https://pixabay.com/api/?${requestOptions}`, options)
    .then(res => {
      return res.json();
    })
    .then(data => {
      setTimeout(()=>{
      elementToInject.innerHTML = '';
      elementToInject.appendChild(generateImageElementsFromJSON(data.hits));
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });

        box.refresh();
        btnSearch.classList.remove('hidden');
        loader.classList.add('hidden');
      },500)

    })
    .catch(error => {
      iziToast.error({title:error.message});
    })

}

