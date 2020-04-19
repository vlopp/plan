import styled from "styled-components";
import { animated } from "react-spring";
import {
  Box,
  Button,
  Checkbox,
  TextField,
  Typography,
} from "@material-ui/core";

export const StyledForm = styled.form`
  display: flex;
  flex-flow: column;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(4)}px;
  }
  padding: 50px;
`;
export const AccountFormsContainer = styled(animated.div)`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

export const SignUpLogInTextField = styled(TextField)`
  .MuiInputLabel-root{
    color: #636363;
  }
  
  .Mui-focused {
    color: #ffffff;
  }
  
  .MuiInput-underline:after{
    border-bottom-color: #FFFFFF;
  }
`;

export const LoginBox = styled(Box)`
  .MuiCheckbox-root{
    color: #636363;
  }

  .MuiCheckbox-root:hover{
    color: #FFFFFF;
  }
  
  .MuiIconButton-colorSecondary:hover{
    color: #FFFFFF;
  }
  
  .Mui-checked{
    color: #FFFFFF;
  }

  .MuiTypography-root{
    color: #636363;
  }
`;

export const LoginButton = styled(Button)`
  :hover{
    border-color: white;
    background-color: #636363;
  }
  
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
`;

export const LoginFacebookButton = styled(Button)`
  :hover{
    border-color: white;
    background-color: #032480;
  }
  
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
  background-color: #172A5C;
`;

export const LoginGoogleButton = styled(Button)`
  :hover{
    border-color: white;
    background-color: #932020;
  }
  
  border-radius: 100px;
  border: 1px solid #636363;
  text-transform: none;
  background-color: #6A2424;
`;

export const LoginTypography = styled(Typography)`
  color: #636363;
`;
