import styled from "styled-components";
import { makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import { animated } from "react-spring";

export const SlideContainer = styled(animated.div)`
  position: absolute;
  transform: translateX(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Vignette = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.53) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 0, 0, 0.53) 100%
    ),
    linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.53) 0%,
      transparent 30%,
      transparent 70%,
      rgba(0, 0, 0, 0.53) 100%
    );
`;

export const Root = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  height: 100%;
  & video {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const AccountPaper = styled(Paper)`
  position: relative;
  height: 100%;
  width: 450px;
  background: linear-gradient(#000000cc, #000000f7);
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const Main = styled.main`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

export const AnimatedTypography = styled(animated(Typography))`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 500px;
  font-family: "Lemon", cursive;
`;
