import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {playVideo} from './blocks/video';
import {initTabs} from './blocks/init-tabs';
import {setSwiper} from './blocks/page-swiper';
import {initAccordions} from './blocks/init-accordion';

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();
  playVideo();
  initTabs();
  setSwiper();
  initAccordions();
  initModals();
  const form = new Form();
  window.form = form;
  form.init();
});
