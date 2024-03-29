
import { showAlert } from './util.js';

const SERVER_ADDRESS_GET = 'https://26.javascript.pages.academy/kekstagram/data';
const SERVER_ADDRESS_POST = 'https://26.javascript.pages.academy/kekstagram';
const ALERT_MESSAGE = 'Не удалось загрузить изображения с сервера';
const FAIL_MESSAGE = 'Не удалось отправить форму. Попробуйте ещё раз';

const getData = (onSuccess) => {
  fetch(SERVER_ADDRESS_GET)
    .then((response) =>
      response.json())
    .then((pictures) => {
      onSuccess(pictures);
    })
    .catch(() => {
      showAlert(ALERT_MESSAGE);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SERVER_ADDRESS_POST,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail(FAIL_MESSAGE);
      }
    })
    .catch(() => {
      onFail(FAIL_MESSAGE);
    });
};

export {getData, sendData};
