import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const UserForm = () => {
  const handleForm = (data) => {
    console.log(data);
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
    <form onSubmit={handleSubmit(handleForm)}>
      <div>
        Usuário:
        <div>
          <input name="user" ref={register} placeholder="Usuário" />
          <p style={{ color: "red" }}>{errors.user?.message}</p>
        </div>
      </div>

      <div>
        Nome Completo:
        <div>
          <input name="name" ref={register} placeholder="Nome" />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>
      </div>

      <div>
        Email:
        <div>
          <input placeholder="Email" name="email" ref={register} />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
      </div>

      <div>
        Senha:
        <div>
          <input
            placeholder="Sua senha"
            name="password"
            ref={register}
            type="password"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>
      </div>

      <div>
        Confirmar senha:
        <div>
          <input
            placeholder="Confirmar senha"
            name="password_confirmation"
            type="password"
            ref={register}
          />
          <p style={{ color: "red" }}>
            {errors.password_confirmation?.message}
          </p>
        </div>
      </div>
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
  );
};

export default UserForm;
