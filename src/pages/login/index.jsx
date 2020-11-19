import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

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
      .catch((err) =>
        setError("password", {
          message: err.response.data.error.user_authentication,
        })
      );
  };

  return (
    <form onSubmit={handleSubmit(tryLogin)}>
      <div>
        <label>User:</label>
        <input onChange={(e) => setValue("user", e.target.value)} />
        {errors.user && <p>{errors.user.message}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input onChange={(e) => setValue("password", e.target.value)} />
        {errors.user && <p>{errors.user.message}</p>}
      </div>
      <button type="Submit">Login</button>
    </form>
  );
};

export default Login;
