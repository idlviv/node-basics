const button = document.querySelectorAll('#button')[0];
const xhr = new XMLHttpRequest();

button.addEventListener('click', () => {
  xhr.open('get', '/open-session', true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const headers = xhr.getAllResponseHeaders();
      const resp = xhr.responseText;
      const status = xhr.status;
      console.log('headers', headers);
      console.log('responce', resp);
      console.log('status', status);
    }
  };
});
