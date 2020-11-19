import { useEffect } from "react";
import { useForm } from "react-hook-form";

const Login = () => {
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
  const tryLogin = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(tryLogin)}>
      <div>
        <label>User:</label>
        <input onChange={(e) => setValue("user", e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input onChange={(e) => setValue("password", e.target.value)} />
      </div>
      <button type="Submit">Login</button>
    </form>
  );
};

export default Login;
