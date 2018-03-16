import Swiper from 'swiper';

export default class Swip {
  constructor() {
    this.swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    // this.swiper = new Swiper('.swiper-container2', {
    //   pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    //   },
    //   a11y: true,
    // });
  }
}