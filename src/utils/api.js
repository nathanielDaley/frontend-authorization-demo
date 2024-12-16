export const BASE_URL = "https://api.nomoreparties.co";

export const getUserInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Error: ${response.status}`);
  });
};
