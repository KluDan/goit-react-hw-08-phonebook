import { Formik } from 'formik';
import React, { useState } from 'react';
import { FaUser, FaPhone } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import {
  FormLabel,
  StyledField,
  StyledForm,
  ErrorStyled,
  InputField,
} from './PhonebookForm.styled';
import { addContact } from '../../redux/operations';
import { FormBtn } from 'components/FormBtn/FormBtn';
import { CloseBtn } from 'components/EditForm/EditForm.styled';
import { SuccessMessage } from 'components/SuccessMessage/SuccessMessage';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const Schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .required('It is a required field!')
    .matches(nameRegExp, 'Name is not valid'),
});

export const PhonebookForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [inputNumber, setInputNumber] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleNumberChange = event => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g, '');

    let formattedNumber = numericValue;

    if (numericValue.length >= 4 && numericValue.charAt(3) !== '-') {
      formattedNumber = numericValue.slice(0, 3) + '-' + numericValue.slice(3);
    }
    if (numericValue.length >= 7 && numericValue.charAt(6) !== '-') {
      formattedNumber =
        formattedNumber.slice(0, 7) + '-' + formattedNumber.slice(7);
    }

    if (formattedNumber.length > 12) {
      formattedNumber = formattedNumber.slice(0, 12);
    }

    setInputNumber(formattedNumber);
  };

  const handleSubmit = async (values, { resetForm }) => {
    await dispatch(addContact({ ...values, number: inputNumber }));
    resetForm();
    setInputNumber('');
    setIsSuccess(true);
  };

  return (
    <>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={Schema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <CloseBtn onClick={onClose} />
          <InputField>
            <FormLabel htmlFor="name">
              <FaUser />
            </FormLabel>
            <StyledField
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <ErrorStyled name="name" component="div" />
          </InputField>

          <InputField>
            <FormLabel htmlFor="number">
              <FaPhone />
            </FormLabel>
            <StyledField
              id="number"
              name="number"
              type="tel"
              placeholder="Phone Number"
              title="Phone number must be digits"
              value={inputNumber}
              onChange={handleNumberChange}
              required
            />
            <ErrorStyled name="number" component="div" />
          </InputField>

          <FormBtn type="submit" name="add contact" />
          <SuccessMessage
            message="Contact successfully added!"
            onClose={() => setIsSuccess(false)}
            show={isSuccess}
          />
        </StyledForm>
      </Formik>
    </>
  );
};
