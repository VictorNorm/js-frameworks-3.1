import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ValidationError from "../common/FormError";

import { BASE_URL, TOKEN_PATH } from "../../constants/api";

const url = BASE_URL + TOKEN_PATH;

function LoginForm() {
  const [submitting, setSubmitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const schema = yup.object().shape({
    username: yup.string().required("Please enter your username"),
    password: yup.string().required("Please enter your password"),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(url, data);
      console.log("Response:", response.data);
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {loginError && <ValidationError>{loginError}</ValidationError>}
        <fieldset disabled={submitting}>
          <div>
            <input name="username" placeholder="Username" ref={register} />
            {errors.username && (
              <ValidationError>{errors.username.message}</ValidationError>
            )}
          </div>

          <div>
            <input
              name="password"
              placeholder="Password"
              ref={register}
              type="password"
            />
            {errors.password && (
              <ValidationError>{errors.password.message}</ValidationError>
            )}
          </div>
          <button>{submitting ? "Loggin in..." : "Login"}</button>
        </fieldset>
      </form>
    </>
  );
}

export default LoginForm;
