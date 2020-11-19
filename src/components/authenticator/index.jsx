import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";

import Login from "../../pages/login";
import Users from "../../pages/users";
import axios from "axios";

const Authenticator = () => {
  const [isAuthenticated, setAuthentication] = useState(undefined);
  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");
    if (!token) {
      setAuthentication(false);
    } else {
      axios
        .get("https://ka-users-api.herokuapp.com/users", {
          headers: { Authorization: token },
        })
        .then(() => {
          setAuthentication(true);
          history.push("/users");
        })
        .catch(() => {
          setAuthentication(false);
        });
    }
  }, [history, setAuthentication]);
  if (isAuthenticated === undefined) {
    return <div>Loading...</div>;
  }

  // Não tá redirecionando quando o usuário tá deslogado
  if (isAuthenticated === false) {
    <Switch>
      <Route path="/">
        <Login setAuthentication={setAuthentication} />
      </Route>
    </Switch>;
  }

  return (
    <Switch>
      <Route exact path="/">
        <Login setAuthentication={setAuthentication} />
      </Route>
      <Route>
        <Users />
      </Route>
    </Switch>
  );
};

export default Authenticator;