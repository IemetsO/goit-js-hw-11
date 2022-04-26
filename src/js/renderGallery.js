const galleryRef = document.querySelector('.gallery');

export function renderGallery(pictures) {
  galleryRef.innerHTML = '';

  const markup = pictures
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      
      <a href="${largeImageURL}" class ="gallery__link">
      <div class="photo-card">
           <img class = "gallery__image" src="${webformatURL}" alt="${tags}" loading="lazy"/> 
             <div class="info">
          <p class="info-item">
            <b>Likes ${likes} </b>
          </p>
          <p class="info-item">
            <b>Views ${views}</b>
          </p>
          <p class="info-item">
            <b>Comments ${comments}</b>
          </p>
          <p class="info-item">
            <b>Downloads ${downloads}</b>
          </p>
          </div>
          </div>
          </a>
              `,
    )
    .join('');
  galleryRef.insertAdjacentHTML('beforeend', markup);
}
