import styled from "styled-components";
import { Paper, Typography, makeStyles, Theme } from "@material-ui/core";
import ReactPlayer from "react-player";
import {animated} from 'react-spring';

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
`;

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(4)}px;
  }
  padding: 50px;
`;

export const LoginPaper = styled(Paper)`
  height: 100%;
  max-width: 500px;
`;

export const Main = styled.main`
  background-color: black;
  position: relative;
  & video {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledReactPlayer = styled(ReactPlayer)`
  height: 100%;
  width: 100%;
  position: absolute;
`;

 

export const FadeinText = styled(Typography)`
  color: white;
`;

export const AnimatedTypography = styled(animated(Typography))`
  position: absolute;
  transform: translate(-50%, -50%);
  width: 500px;
`;


const useStyles = makeStyles<Theme, {a:string}>( theme => ({
  asd:{
    backgroundColor: props => props.a,
  }
}));