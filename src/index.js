import './sass/main.scss';

import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import axios from 'axios';
import { renderGallery } from './js/renderGallery';


const inputRef = document.querySelector('#search-form');
const galleryRef = document.querySelector('.gallery');
const loadButton = document.querySelector('.load-more');
let page = 1;


loadButton.classList.add('is-hiden');

inputRef.addEventListener('submit', e => {
  e.preventDefault();
  galleryRef.innerHTML = '';
  const searcEl = inputRef.firstElementChild.value;
  if (!searcEl) {
    return;
  } else {
    fetchPictures(searcEl)
      .then(data => {
        if (data.totalHits === 0) {
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again',
          );
        } else {
          Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images`);
          renderGallery(data.hits);
          page += 1;
          var lightbox = new SimpleLightbox (".gallery a");
          lightbox;
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
 
  loadButton.classList.remove('is-hiden');
  
});



loadButton.addEventListener('click', () => {
  const searcEl = inputRef.firstElementChild.value;
  fetchPictures(searcEl)
    .then(data => {
        const totalPictures = data.totalHits;
      const picturePerPage = 40;
      const pages = totalPictures / picturePerPage;
      renderGallery(data.hits);
        page += 1;
        var lightbox = new SimpleLightbox (".gallery a");
        lightbox.refresh()
      if (page > pages) {
        loadButton.classList.add('is-hiden');
        Notiflix.Notify.info("We're sorry, but you've reached the end of search results");
      }
    })

    .catch(error => {
      console.log(error);
    });
});



axios.defaults.baseURL = 'https://pixabay.com/api';

const fetchPictures = async searcEl => {
  const response = await axios.get(
    `/?key=26992012-e6a459b4fdd9a0e95b25f973a&q=${searcEl}&image_type=photo&per_page=40&page=${page}&orientation=horizontal&safesearch=true&fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`,
  );
  return response.data;
};


