
import SimpleLightBox from 'simplelightbox';
import axios from 'axios';



let box = new SimpleLightBox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  showCounter: false,
});

const returnData = {
  maxPages:1,
  data:{}
};

export default async function injectElementsDataFromPixaBaySearch (key, searchVal='flower', page = 1, perPage= 20) {
  const requestOptions = {
    key: key,
    q: searchVal,
    image_type: 'photo',
    orientation: 'portrait',
    safesearch: 'true',
    page:page,
    per_page: perPage,
  };

  let data = await axios.get(`https://pixabay.com/api/`, {
    params: requestOptions
  })
  returnData.data = data.data.hits;
  returnData.maxPages = Math.ceil(data.data.totalHits / perPage);
  return returnData;
}

