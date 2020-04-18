import styled from "styled-components";
import { Paper, Typography, makeStyles, Theme, TextField, Button, Checkbox, Box } from "@material-ui/core";
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
  background: linear-gradient(#242424,#000000);
  display:flex;
  flex-direction: column;
  justify-content: center;
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
  font-family: 'Lemon', cursive;
`;

export const LoginTitleTypography = styled(Typography)`
  text-align: center;
  font-size: 1.5rem;
`;

export const LoginTextField = styled(TextField)`
  label{
    color: #636363;
  }
  .Mui-focused{
    color: #FFFFFF;
  }
`;

export const LoginBox = styled(Box)`
  color: #636363;
`;

export const LoginCheckbox = styled(Checkbox)`
  color: #636363;
`;

export const LoginButton = styled(Button)`
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
`;

export const LoginFacebookButton = styled(Button)`
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
  background-color: #001A62;
`;

export const LoginGoogleButton = styled(Button)`
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
  background-color: #932020;
`;

export const LoginTypography = styled(Typography)`
  color: #636363;
`;

const useStyles = makeStyles<Theme, {a:string}>( theme => ({
  asd:{
    backgroundColor: props => props.a,
  }
}));