import { Route, Switch } from "react-router-dom";

import Login from "../../pages/login";
import UserForm from "../../pages/userForm";
import Users from "../../pages/users";
import Feedbacks from "../../pages/feedbacks";
import FeedbackForm from "../../pages/feedbackForm";

import Container from "react-bootstrap/Container";
import NavBar from "../navbar";
import useToken from "./useToken";

const Authenticator = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login />;
  }

  // useEffect(() => {
  //   if (!token) {
  //     setAuthentication(false);
  //   } else {
  //     axios
  //       .get("https://ka-users-api.herokuapp.com/users", {
  //         headers: { Authorization: token },
  //       })
  //       .then(() => {
  //         setAuthentication(true);
  //         history.push("/users");
  //       })
  //       .catch(() => {
  //         setAuthentication(false);
  //       });
  //   }
  // }, [history, setAuthentication]);

  // if (isAuthenticated === undefined) {
  //   return (
  //     <Container
  //       style={{
  //         width: "100%",
  //         height: "100%",
  //         textAlign: "center",
  //         paddingTop: "25vh",
  //         color: "#fff",
  //       }}
  //     >
  //       <h1>Carregando...</h1>
  //     </Container>
  //   );
  // }

  // // Não tá redirecionando quando o usuário tá deslogado
  // if (isAuthenticated === false) {
  //   return (
  //     <Switch>
  //       <Route exact path="/userform">
  //         <UserForm />
  //       </Route>
  //       <Route exact path="/">
  //         <Login setAuthentication={setAuthentication} />
  //       </Route>
  //     </Switch>
  //   );
  // }

  return (
    <Switch>
      <NavBar />
      <Route exact path="/">
        <Login setAuthentication={setToken} />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route exact path="/users/feedbacks/:id">
        <Feedbacks />
      </Route>

      <Route exact path="/users/feedbacks/:id/new">
        <FeedbackForm />
      </Route>
    </Switch>
  );
};

export default Authenticator;
