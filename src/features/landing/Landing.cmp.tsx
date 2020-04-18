import React, { useEffect, useRef, useState } from "react";
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
import {
  useSprings,
  animated,
  useSpring,
  useChain,
  useTrail,
  useTransition,
} from "react-spring";
import {
  Root,
  Main,
  StyledReactPlayer,
  FadeinText,
  LoginPaper,
  StyledForm,
  Vignette,
  AnimatedTypography,
} from "./Landing.stl";

// TODO anim
// TODO routing
export default () => {
  const { handleSubmit, register } = useForm();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    console.log(data);
    // TODO login proc
  };

  const a = ["Gotuj", "Planuj", "Cośtam"];
  const springRefs = useRef<any>();
  // @ts-ignore
  const springs = useSprings(
    a.length,
    [1, 2, 3].map((x) => ({
      from: { opacity: 0 },
      opacity: 1,
      ref: springRefs,
    }))
  );
  const sprr = useRef<any>();

  const spr = useSpring({ from: { opacity: 0 }, opacity: 1, ref: sprr });

  useChain([springRefs, sprr]);

  const trails = useTrail(a.length, { from: { opacity: 0 }, opacity: 1 });
  const [text, setText] = useState("Hello, nig!");
  useEffect(() => {
    setInterval(() => {
      setText(a[(Math.floor(Math.random() * a.length))]);
    }, 1000);
  }, []);

  const textTrn = useTransition(text, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  });

  return (
    <Root>
      <Main>
        <AnimatedTypography />
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
            {textTrn.map((x) => (
              <AnimatedTypography align="center" variant={"h1"} style={x.props}>
                {x.item}
              </AnimatedTypography>
            ))}
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
