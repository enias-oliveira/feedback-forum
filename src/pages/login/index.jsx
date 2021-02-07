import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { Formulario } from "./style";

import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Person, EyeSlash } from "react-bootstrap-icons";
import NavBar from "../../components/navbar";
import Spinner from "react-bootstrap/Spinner";

const Login = ({ setToken }) => {
  const { register, errors, handleSubmit, setError } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleLogin = (data) => {
    setIsLoading(true);
    axios
      .post("https://ka-users-api.herokuapp.com/authenticate", { ...data })
      .then((res) => {
        setToken(true);
        history.push("/users");
      })
      .then(() => setIsLoading(false))
      .catch((err) => {
        console.log(err.response);
        setError("password", {
          message: "Usuário ou senha inválidos",
        });
        setIsLoading(false);
      });
  };

  return (
    <>
      <NavBar />
      <Formulario>
        <Container className="login-form">
          <Form noValidate onSubmit={handleSubmit(handleLogin)}>
            <h1>Login</h1>
            <Form.Group controlId="validationReactHookFormEmail">
              <InputGroup hasValidation>
                <FormControl
                  ref={register({ required: "Campo precisa ser preenchido" })}
                  name="email"
                  type="email"
                  placeholder="E-mail"
                  isInvalid={!!errors.email || !!errors.password}
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">
                  {errors.email?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="validationReactHookFormPassword">
              <InputGroup className="mb-3" hasValidation>
                <FormControl
                  ref={register({ required: "Campo precisa ser preenchido" })}
                  name="password"
                  type="password"
                  placeholder="Senha"
                  isInvalid={!!errors.password}
                />
                <InputGroup.Append>
                  <InputGroup.Text>
                    <EyeSlash />
                  </InputGroup.Text>
                </InputGroup.Append>
                <Form.Control.Feedback type="invalid">
                  {errors.password?.message}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <div className="buttons">
              <Button variant="primary" type="Submit" size="lg">
                {isLoading ? <Spinner animation="border" /> : "Login"}
              </Button>
              <Button
                variant="primary"
                onClick={() => history.push("/userform")}
              >
                Cadastrar-se
              </Button>
            </div>
          </Form>
        </Container>
      </Formulario>
    </>
  );
};

export default Login;
