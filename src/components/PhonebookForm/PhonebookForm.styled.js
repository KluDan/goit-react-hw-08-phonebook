import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  width: 300px;
  padding: 20px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
  position: relative;
`;
export const StyledField = styled(Field)`
  height: 30px;
  width: 100%;
  padding: 5px;
`;

export const ErrorStyled = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 12%;
  color: red;
  margin-top: 2px;
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormButton = styled.button`
  font-size: 18px;
  padding: 6px;
  display: block;
`;
