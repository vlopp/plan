import React from "react";
import { FormControlLabel, Button, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useRouteMatch, Link } from "react-router-dom";
import {
  LoginButton,
  LoginFacebookButton,
  LoginGoogleButton,
  LoginTypography,
  SignUpLogInTextField,
  StyledForm,
} from "./Forms.stl";
import { fireapp } from "../../firebase/fireapp";

export const SignupForm = () => {
  const { handleSubmit, register, setError, errors } = useForm();
  const { t } = useTranslation();

  const onSubmit = ({ email, password, passwordConfirmation }) => {
    if (passwordConfirmation !== password)
      return setError("passwordConfirmation", "Passwords do not match.");
    fireapp.auth!()
      .createUserWithEmailAndPassword(email, password)
      .catch((e) => {
        if (e.code.includes("password")) {
          return setError("password", e.message);
        }
        return setError("email", e.message);
      });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit as any)}>
      <Typography gutterBottom variant={"h4"} align={"center"}>
        {t("sign up")}
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
      <SignUpLogInTextField
        type={"password"}
        name={"passwordConfirmation"}
        inputRef={register}
        label={t("repeat password")}
        error={Boolean(errors.passwordConfirmation)}
        helperText={errors?.passwordConfirmation?.type}
      />
      <LoginButton variant={"outlined"} type={"submit"}>
        {t("sign up")}
      </LoginButton>
      <LoginFacebookButton variant={"outlined"} type={"submit"}>
        Facebook
      </LoginFacebookButton>
      <LoginGoogleButton variant={"outlined"} type={"submit"}>
        Google
      </LoginGoogleButton>
      <LoginTypography align={"center"}>
        {t("already got an account?")} <Link to={`log-in`}>{t("log in")}</Link>
      </LoginTypography>
    </StyledForm>
  );
};
