import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  CloseBtn,
  InputField,
  StyledField,
  StyledForm,
  FormLabel,
  ErrorStyled,
} from './ContactForm.styled';
import { FaPhone, FaUser } from 'react-icons/fa';
import { FormBtn } from 'components/FormBtn/FormBtn';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('Name is required')
    .matches(nameRegExp, 'Name is not valid'),
  number: Yup.string()
    .matches(/^[0-9-]+$/, 'Number must be digits and may contain dashes')
    .required('Phone number is required'),
});

export const ContactForm = ({
  initialValues,
  onSubmit,
  buttonText,
  onClose,
  inputNumber,
  handleNumberChange,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Schema}
      onSubmit={onSubmit}
    >
      <StyledForm>
        <CloseBtn onClick={onClose} />
        <InputField>
          <FormLabel htmlFor="name">
            <FaUser />
          </FormLabel>
          <StyledField
            type="text"
            id="name"
            name="name"
            placeholder="Enter name"
            required
          />
          <ErrorStyled name="name" component="div" />
        </InputField>
        <InputField>
          <FormLabel htmlFor="number">
            <FaPhone />
          </FormLabel>
          <StyledField
            type="tel"
            id="number"
            name="number"
            placeholder="Enter phone number"
            value={inputNumber}
            onChange={handleNumberChange}
            required
          />
          <ErrorStyled name="number" component="div" />
        </InputField>
        <FormBtn type="submit" name={buttonText}></FormBtn>
      </StyledForm>
    </Formik>
  );
};
