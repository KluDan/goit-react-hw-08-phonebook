import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { AiOutlineCloseCircle } from 'react-icons/ai';

export const StyledForm = styled(Form)`
  width: 400px;
  padding: 50px 30px 30px;
  border-radius: 10px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  background: rgba(182, 145, 119, 0.6);
  position: relative;
`;

export const InputField = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  position: relative;
`;
export const StyledField = styled(Field)`
  width: 100%;
  padding: 15px 10px;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  &:hover,
  &:focus {
    outline: none;
  }
`;

export const ErrorStyled = styled(ErrorMessage)`
  position: absolute;
  top: 100%;
  left: 12%;
  color: red;
  margin-top: 2px;
  font-size: 18px;
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const CloseBtn = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 5px;
  background-color: transparent;
  cursor: pointer;
  width: 40px;
  height: 40px;
`;
