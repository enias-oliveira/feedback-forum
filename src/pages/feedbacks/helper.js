import axios from "axios";

const apiBaseUrl = "https://ka-users-api.herokuapp.com";

export const getFeedbacks = (setFeedbacks, params) => {
  axios
    .get(`${apiBaseUrl}/users/${params.id}/feedbacks`, {
      headers: {
        Authorization: window.localStorage.getItem("authToken"),
      },
    })
    .then((response) => {
      setFeedbacks(response.data);
    })
    .catch((error) => console.log(error));
};
