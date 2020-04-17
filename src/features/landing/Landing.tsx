import React from "react";
import styled from "styled-components";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import vid from "./assets/vid.mp4";

const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;
`;

const StyledForm = styled.form`
  display: flex;
  flex-flow: column;
  
  & > * + * {
    margin-top: ${({theme}) => theme.spacing(4)}px;
  }
  padding: 50px;
`;

const LoginPaper = styled(Paper)`
  height: 100%;
  max-width: 500px;
`;

const Main = styled.main`
  background-color: black;
  position: relative;

  & video {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledReactPlayer = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

const Vignette = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(0,0,0,0.53) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0,0,0,0.53) 100%
    ),
    linear-gradient(
      0deg,
      rgba(0,0,0,0.53) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0,0,0,0.53) 100%
    );
`;

const FadeinText = styled(Typography)`
  color: white;
`;


//todo anim
//todo routing
export default () => {
  const { handleSubmit, register } = useForm();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    console.log(data);
    //todo login proc
  };

  return (
    <Root>
      <Main>
        <StyledReactPlayer
          height={"100%"}
          width={"100%"}
          url={vid}
          playing
          loop
          muted
        />
        <Vignette />
        <Box
          height={"100%"}
          width={"100%"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <FadeinText variant={"h1"} style={{ position: "absolute" }}>
            Gotuj
          </FadeinText>
        </Box>
      </Main>
      <LoginPaper square>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <Typography gutterBottom variant={"h6"}>
            {t("log in")}
          </Typography>
          <TextField name={"login"} inputRef={register} label={t("email")} />
          <TextField
            type={"password"}
            name={"password"}
            inputRef={register}
            label={t("password")}
          />
          <Box display={"flex"} justifyContent={"space-around"}>
            <FormControlLabel
              control={<Checkbox inputRef={register} name="rememberMe" />}
              label={t("remember me")}
            />
            <Link to={"/recover-password"} component={Button}>
              {t("recover password")}
            </Link>
          </Box>
          <Button variant={"outlined"} type={"submit"}>
            {t("log in")}
          </Button>
          <Button variant={"outlined"} type={"submit"}>
            Facebook
          </Button>
          <Button variant={"outlined"} type={"submit"}>
            Google
          </Button>
          <Typography align={"center"}>
            {t("dont have an account yet")}{" "}
            <Link to={"create-account"}>{t("create account")}</Link>
          </Typography>
        </StyledForm>
      </LoginPaper>
    </Root>
  );
};
