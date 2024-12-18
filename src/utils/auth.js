export const BASE_URL = "https://api.nomoreparties.co";

export const register = (username, password, email) => {
  return fetch(`${BASE_URL}/auth/local/register`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password, email }),
  }).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status}`);
  });
};

export const authorize = (identifier, password) => {
  return fetch(`${BASE_URL}/auth/local`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ identifier, password }),
  }).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status}`);
  });
};
