const button = document.querySelectorAll('#button')[0];
const xhr = new XMLHttpRequest();

localStorage.setItem('token', 'bnvbnvbvbvb');

button.addEventListener('click', () => {
  xhr.open('COPY', 'http://localhost:8070/getroute', true);
  xhr.withCredentials = true;
  xhr.setRequestHeader('yo', 'yo value');
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
