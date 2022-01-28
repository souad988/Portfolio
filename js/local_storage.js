const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#msg');

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
    // everything except Firefox
      e.code === 22
            // Firefox
            || e.code === 1014
            // test name field too, because code might not be present
            // everything except Firefox
            || e.name === 'QuotaExceededError'
            // Firefox
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            // acknowledge QuotaExceededError only if there's something already stored
            && (storage && storage.length !== 0);
  }
}

function setInputs() {
  const contactName = localStorage.getItem('contactName');
  const contactEmail = localStorage.getItem('contactEmail');
  const contactMessage = localStorage.getItem('contactMessage');

  fullName.value = contactName;
  email.value = contactEmail;
  message.value = contactMessage;
}

function populateStorage() {
  localStorage.setItem('contactName', fullName.value);
  localStorage.setItem('contactEmail', email.value);
  localStorage.setItem('contactMessage', message.value);

  setInputs();
}

if (storageAvailable('localStorage')) {
  if (!localStorage.getItem('contactEmail')) {
    populateStorage();
  } else {
    setInputs();
  }
}

fullName.addEventListener('keyup', () => {
  populateStorage();
});
email.addEventListener('keyup', () => {
  populateStorage();
});
message.addEventListener('keyup', () => {
  populateStorage();
});
