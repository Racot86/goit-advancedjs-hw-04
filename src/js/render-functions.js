export default function generateImageElementsFromJSON(json) {

  const createHTMLElementsFromString = (htmlString) => {
    let div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
  }

  let allImagesFrag = new DocumentFragment();
  if (json.length > 0) {
    json.forEach((image) => {
      const { largeImageURL, webformatURL, likes, views, comments, downloads } = image;
      allImagesFrag.appendChild(createHTMLElementsFromString(`
        <div class="gallery-item">
              <a class="gallery-link" href="${largeImageURL}">
                <img
                  class="gallery-image"
                  src="${webformatURL}"
                />
              </a>
              <div class="bottom-panel">
              <div class="icon-wrapper">
                <div class="like-chip">
                  <span class="material-symbols-outlined">thumb_up</span>
                  <p class="like-number chip-text">${likes}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">visibility</span>
                  <p class="like-number chip-text">${views}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">chat</span>
                  <p class="like-number chip-text">${comments}</p>
                </div>
                <div class="like-chip">
                  <span class="material-symbols-outlined">download</span>
                  <p class="like-number chip-text">${downloads}</p>
                </div>
                </div>
              </div>
        </div>`
      ));
    });
  }else {
    allImagesFrag.appendChild(createHTMLElementsFromString(`
        <div class="not-found">
              <span class="material-symbols-outlined">search_off</span>
              <p>Sorry, there are no images matching your search query. Please try again!</p>
        </div>`
    ));
  }
  allImagesFrag.children[0].classList.add('scroll');
  return allImagesFrag;
}