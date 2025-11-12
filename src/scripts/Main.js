import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initpagination();
  }

  initpagination() {
    console.log('test');
    const target = document.querySelector('.js-page');
    const swiper = new Swiper(target, {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  }
}
new Main();
