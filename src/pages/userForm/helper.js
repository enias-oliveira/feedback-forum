import axios from "axios";

const apiBaseUrl = "https://ka-users-api.herokuapp.com";

export const postNewUser = (
  { name, user, email, password, password_confirmation },
  history,
  setErr
) => {
  axios
    .post(`${apiBaseUrl}/users`, {
      user: {
        name: name,
        user: user,
        image_url: "http://image.com.br/img.gif",
        about: "about",
        email: email,
        cpf: "111.111.111-11",
        cellphone: "41 98888-1111",
        address: "Rua dos Alfeneiros, nº4",
        password: password,
        password_confirmation: password_confirmation,
      },
    })
    .then(() => history.push("/login"))
    .catch((error) => setErr(error.response));
};
