import $ from 'jquery';

export default class Movie {
  constructor() {
    this.windowWidth = $(window).width();
    this.contentHeight = 0;
    this.contentWidth = 0;
    this.player = {};
  }

  playMovie() {
    this.setHeight();
    const $player = $('.js-youtube');
    for (let i = 0; i < $player.length; i += 1) {
      const id = $player.eq(i).attr('data-movie');
      this.player[id] = new YT.Player($player[i], {
        videoId: id,
        width: '100%',
        height: this.contentHeight,
        playerVars: {
          rel: 0,
          playsinline: 1
        }
      });
    }
    // this.player = new YT.Player('player', {
    //   height: this.contentHeight,
    //   width: '100%',
    //   videoId: 'mA56uvlgD4A',
    //   playerVars: {
    //     rel: 0
    //   },
    //   events: {
    //     onStateChange: this.onPlayStateChange
    //   }
    // });
  }

  setHeight() {
    this.contentWidth = this.windowWidth * 0.9;
    this.contentHeight = this.windowWidth * 1.77;
    // $('.swiper-slide').css('width', this.contentWidth);
  }
}