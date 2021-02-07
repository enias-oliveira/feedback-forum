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
  const { setToken, token } = useToken();

  if (!token) {
    return (
      <>
        <Switch>
          <Route exact path="/">
            <Login setToken={setToken} />
          </Route>
          <Route exact path="/userform">
            <UserForm />
          </Route>
        </Switch>
      </>
    );
  }

  return (
    <>
      <Switch>
        <NavBar />
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
    </>
  );
};

export default Authenticator;
