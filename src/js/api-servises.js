import axios from "axios"

axios.defaults.baseURL = "https://pixabay.com/api/?key=26992012-e6a459b4fdd9a0e95b25f973a&q"

 function fetchPictures(searcEl, page) {
    return axios.get(`=${searcEl}&image_type=photo&per_page=40&page=${page}&orientation=horizontal&safesearch=true&fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`)
    // return fetch(`https://pixabay.com/api/?key=26992012-e6a459b4fdd9a0e95b25f973a&q=${searcEl}&image_type=photo&per_page=40&page=${page}&orientation=horizontal&safesearch=true&fields=webformatURL,largeImageURL,tags,likes,views,comments,downloads`)
    
    //   .then(response => {
    //   if (!response.ok) {
    //     throw new Error(response.statusText);
    //   }
    //   return response.json();
      
    // })
};