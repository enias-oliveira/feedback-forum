import "./App.css";
import Login from "./pages/login";
import UserForm from "./pages/userForm";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/users"></Route>
          <Route exact path="/userfeedbacks"></Route>
          <Route exact path="/feedbackform"></Route>
          <Route exact path="/userform">
            <UserForm />
          </Route>
          <Route exact path="/login"></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
