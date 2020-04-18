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
  label {
    color: #636363;
  }
  .Mui-focused {
    color: #ffffff;
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
  background-color: #001a62;
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
