import { showFilteredPictures } from './filter.js';
import { renderPictures } from './pictures.js';
import { closeUploadPopup } from './form.js';
import { initEffects } from './effects.js';
import { submitForm } from './form.js';
import { getData } from './api.js';


getData((pictures) => {
  renderPictures(pictures);
  showFilteredPictures(pictures);
});

submitForm(closeUploadPopup);
initEffects();
