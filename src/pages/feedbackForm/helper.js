import axios from "axios";

const apiBaseUrl = "https://ka-users-api.herokuapp.com";

const postNewFeedback = (data, { id }, history) => {
  axios
    .post(
      `${apiBaseUrl}/users/${id}/feedbacks/`,
      {
        feedback: { ...data },
      },
      {
        headers: {
          Authorization: window.localStorage.getItem("authToken"),
        },
      }
    )
    .then((response) => {
      console.log("FeedBack Post Succeeded");
      history.goBack();
    });
};

export default postNewFeedback;
