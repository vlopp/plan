import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import vid from "./assets/vid.mp4";
import { useTransition } from "react-spring";
import {
  AccountPaper,
  AnimatedTypography,
  Main,
  Root,
  SlideContainer,
  StyledReactPlayer,
  Vignette,
} from "./Landing.stl";
import { LoginForm } from "./LoginForm.cmp";
import { SignupForm } from "./SignupForm.cmp";
import { AccountFormsContainer } from "./Forms.stl";

//todo slides
const Plakietka = styled(Paper)`
  &.MuiPaper-root {
    width: 700px;
    height: 500px;
    background: linear-gradient(#1010108a, #1e1e1e66);
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
// tego nie ruszaj, tymczasowe
const Slides = ({ slideNumber }: { slideNumber: number }) => {
  const { t } = useTranslation();
  switch (slideNumber) {
    case 0:
      return <Typography variant={"h1"}>Gotuj</Typography>;
    case 1:
      return <Typography variant={"h1"}>Bardzo dużo gotuj...</Typography>;
    case 2:
      return <Typography variant={"h1"}>Jak najwięcej gotuj...</Typography>;
    case 3:
      return (
        <Plakietka>
          <Typography align={"center"}>Dużo ficzurów</Typography>
        </Plakietka>
      );
    default:
      return (
        <Plakietka>
          <Typography align={"center"}>Bardzo durzo ficzuruw...</Typography>
        </Plakietka>
      );
  }
};
Slides.slideCount = 5;

export default () => {
  const routeMatch = useRouteMatch();
  const location = useLocation();

  const { handleSubmit, register } = useForm();
  const { t } = useTranslation();
  const onSubmit = (data) => {
    console.log(data);
    // TODO login proc
  };

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  useEffect(() => {
    setInterval(
      () =>
        setCurrentSlideIndex((x) => (x + 1 === Slides.slideCount ? 0 : ++x)),
      4000
    );
  }, [setCurrentSlideIndex]);

  const textTrn = useTransition(currentSlideIndex, (item) => item, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: {
      duration: 500,
    },
  });

  const formsTrn = useTransition(location, (location) => location.pathname, {
    from: {
      position: "absolute",
      opacity: 0,
      transform: "translateY(100%) scale(0)",
    },
    enter: {
      position: "static",
      opacity: 1,
      transform: "translateX(0) scale(1)",
    },
    leave: {
      position: "absolute",
      opacity: 0,
      transform: "translateY(-100%) scale(0)",
    },
    config: { mass: 5, friction: 500, tension: 5000 },
  });

  return (
    <Root>
      <StyledReactPlayer
        height={"100%"}
        width={"100%"}
        url={vid}
        playing
        loop
        muted
      />
      <Main>
        <AnimatedTypography />

        <Vignette />
        {textTrn.map(({ item: Item, props, key }) => (
          <SlideContainer style={props} key={key}>
            <Slides slideNumber={Item} />
          </SlideContainer>
        ))}
      </Main>
      <AccountPaper square>
        {formsTrn.map(({ item, key, props }) => (
          <AccountFormsContainer key={key} style={props}>
            <Switch location={item}>
              <Route path={`${routeMatch.path}/sign-up`}>
                <SignupForm />
              </Route>
              <Route path={"*"}>
                <LoginForm />
              </Route>
            </Switch>
          </AccountFormsContainer>
        ))}
      </AccountPaper>
    </Root>
  );
};
