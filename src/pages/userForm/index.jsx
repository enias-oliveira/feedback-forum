import { useForm } from "react-hook-form";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useHistory } from "react-router-dom";

import { postNewUser } from "./helper.js";
import { Formulario } from "./style";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const UserForm = () => {
  const [err, useErr] = useState("");
  const history = useHistory();

  const handleForm = (data) => {
    postNewUser(data, history, useErr);
  };

  const schema = yup.object().shape({
    user: yup.string().required("Campo obrigatório"),
    name: yup
      .string()
      .matches(
        /^(.[a-zÀ-ÿ].+\s).+$/i,
        "Nome precisa ser completo e sem caracteres especiais"
      )
      .required("Campo obrigatório"),
    email: yup.string().email().required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Mínimo de 6 dígitos")
      .matches(
        /(^(?=.*?[#?!@$%^&*-]).{6,}$)/gm,
        "Senha precisa de pelo menos 1 caracter especial"
      )
      .required("Campo obrigatório"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas não são iguais"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      <Formulario>
        <Container>
          <form onSubmit={handleSubmit(handleForm)}>
            <Row>
              <label for="user">
                Usuário:
                <InputGroup>
                  <div>
                    <FormControl
                      name="user"
                      ref={register}
                      placeholder="Usuário"
                    />
                    <p style={{ color: "red" }}>
                      {errors.user?.message}
                      {err.data?.user}
                    </p>
                  </div>
                </InputGroup>
              </label>
            </Row>

            <Row>
              <label for="name">
                Nome Completo:
                <InputGroup>
                  <div>
                    <FormControl
                      name="name"
                      ref={register}
                      placeholder="Nome"
                    />
                    <p style={{ color: "red" }}>{errors.name?.message}</p>
                  </div>
                </InputGroup>
              </label>
            </Row>

            <Row>
              <label for="email">
                Email:
                <InputGroup>
                  <div>
                    <FormControl
                      placeholder="Email"
                      name="email"
                      ref={register}
                    />
                    <p style={{ color: "red" }}>{errors.email?.message}</p>
                  </div>
                </InputGroup>
              </label>
            </Row>

            <Row>
              <label for="password">
                Senha:
                <InputGroup>
                  <div>
                    <FormControl
                      placeholder="Sua senha"
                      name="password"
                      ref={register}
                      type="password"
                    />
                    <p style={{ color: "red" }}>{errors.password?.message}</p>
                  </div>
                </InputGroup>
              </label>
            </Row>

            <Row>
              <label for="password_confirm">
                Confirmar senha:
                <InputGroup>
                  <div>
                    <FormControl
                      placeholder="Confirmar senha"
                      name="password_confirmation"
                      type="password"
                      ref={register}
                    />
                    <p style={{ color: "red" }}>
                      {errors.password_confirmation?.message}
                    </p>
                  </div>
                </InputGroup>
              </label>
            </Row>

            <div>
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </Container>
      </Formulario>
    </>
  );
};

export default UserForm;
