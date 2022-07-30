import { renderPictures } from './pictures.js';
import { initEffects } from './effects.js';
import { closeUploadPopup } from './form.js';
import { submitForm } from './form.js';
import { getData } from './api.js';
import { showFilteredPictures } from './filter.js';

getData((pictures) => {
  renderPictures(pictures);
  showFilteredPictures(pictures);
});

submitForm(closeUploadPopup);
initEffects();
