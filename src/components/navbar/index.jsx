import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useHistory } from "react-router-dom";

const Navigation = () => {
  const history = useHistory();

  const logoutHandle = () => {
    window.localStorage.clear();
    history.push("/");
  };

  return (
    <Navbar bg="primary" variant="dark" stick="top" style={{ width: "100vw" }}>
      <Nav>
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link onClick={logoutHandle}>Logout</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
