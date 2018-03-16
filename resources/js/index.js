import Movie from './modules/Movie';
import swiper from './modules/Swiper';

const movie = new Movie();


var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

window.onYouTubeIframeAPIReady = () => {
  movie.playMovie();
};

new swiper();