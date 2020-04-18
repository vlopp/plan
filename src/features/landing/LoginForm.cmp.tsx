import React from "react";
import { FormControlLabel, Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import {
  LoginBox,
  LoginButton,
  LoginCheckbox,
  LoginFacebookButton,
  LoginGoogleButton,
  LoginTypography,
  SignUpLogInTextField,
  StyledForm,
} from "./Forms.stl";
import { fireapp } from "../../firebase/fireapp";

export const LoginForm = () => {
  const { handleSubmit, register, setError, errors } = useForm();
  const { t } = useTranslation();
  const history = useHistory();
  const onSubmit = ({ email, password }) => {
    fireapp.auth!()
      .signInWithEmailAndPassword(email, password)
      .catch((e) => {
        if (e.code.includes("password")) {
          return setError("password", e.message);
        }
        return setError("email", e.message);
      })
      .then((x) => history.push("/"));
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit as any)}>
      <Typography gutterBottom variant={"h4"} align={"center"}>
        {t("log in")}
      </Typography>
      <SignUpLogInTextField
        name={"email"}
        inputRef={register}
        label={t("email")}
        error={Boolean(errors.email)}
        helperText={errors?.email?.type}
      />
      <SignUpLogInTextField
        type={"password"}
        name={"password"}
        inputRef={register}
        label={t("password")}
        error={Boolean(errors.password)}
        helperText={errors?.password?.type}
      />
      <LoginBox display={"flex"} justifyContent={"space-around"}>
        <FormControlLabel
          control={<LoginCheckbox inputRef={register} name="rememberMe" />}
          label={t("remember me")}
        />
        <Link to={"recover-password"} component={Button}>
          {t("recover password")}
        </Link>
      </LoginBox>
      <LoginButton variant={"outlined"} type={"submit"}>
        {t("log in")}
      </LoginButton>
      <LoginFacebookButton variant={"outlined"} type={"submit"}>
        Facebook
      </LoginFacebookButton>
      <LoginGoogleButton variant={"outlined"} type={"submit"}>
        Google
      </LoginGoogleButton>
      <LoginTypography align={"center"}>
        {t("don't have an account yet?")}{" "}
        <Link to={`/welcome/sign-up`}>{t("Create account")}</Link>
      </LoginTypography>
    </StyledForm>
  );
};
