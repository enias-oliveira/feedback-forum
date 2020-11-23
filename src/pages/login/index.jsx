import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Formulario } from "./style";
import Navigation from "../../components/navbar";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Person, EyeSlash } from "react-bootstrap-icons";

const Login = ({ setAuthentication }) => {
  const {
    register,
    unregister,
    setValue,
    errors,
    handleSubmit,
    setError,
  } = useForm();

  useEffect(() => {
    register("user", { required: "Campo precisa ser preenchido" });
    register("password", { required: "Campo precisa ser preenchido" });

    return () => {
      unregister("user");
      unregister("password");
    };
  }, [register, unregister]);

  const history = useHistory();

  const tryLogin = (data) => {
    axios
      .post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
      .then((res) => {
        window.localStorage.setItem("authToken", res.data.auth_token);
        setAuthentication(true);
        history.push("/users");
      })
      .catch((err) => {
        console.log(err.response);
        setError("password", {
          message: "Usuário ou senha inválidos",
        });
      });
  };

  return (
    <>
      <Navigation />
      <Formulario>
        <Container className="login-form">
          <form onSubmit={handleSubmit(tryLogin)}>
            <h1>Login</h1>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  onChange={(e) => setValue("user", e.target.value)}
                  ref={register}
                  name="user"
                  placeholder="Usuário"
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            {errors.user && (
              <p style={{ color: "red" }}>{errors.user.message}</p>
            )}
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  onChange={(e) => setValue("password", e.target.value)}
                  ref={register}
                  name="password"
                  type="password"
                  placeholder="Senha"
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <EyeSlash />
                  </InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </div>
            {errors.password && (
              <p style={{ color: "red " }}>{errors.password.message}</p>
            )}
            <div className="buttons">
              <Button variant="primary" type="Submit">
                Login
              </Button>
              <Button
                variant="primary"
                onClick={() => history.push("/userform")}
              >
                Cadastrar-se
              </Button>
            </div>
          </form>
        </Container>
      </Formulario>
    </>
  );
};

export default Login;
