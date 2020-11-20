import axios from "axios";

const apiBaseUrl = "https://ka-users-api.herokuapp.com";

export const getUsers = (setUsers) => {
  axios
    .get(`${apiBaseUrl}/users`, {
      headers: {
        Authorization: window.localStorage.getItem("authToken"),
      },
    })
    .then((response) => {
      setUsers(response.data);
    })
    .catch((error) => console.log(error));
};
