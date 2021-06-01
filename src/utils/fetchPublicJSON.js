
function checkStatus(response) {
  if (response.ok) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(new Error(response.statusText));
  }
}

function parseJSON(response) {
  return response.json();
}

export default function fetchPublicJSON(path) {
  return fetch(`/${path}`)
          .then(checkStatus)
          .then(parseJSON)
          .catch(error => console.log(error));
}