import { FormBtn } from 'components/FormBtn/FormBtn';
import { FormInput } from 'components/FormInput/FormInput';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

import { Error, Form, StyledLink } from './LoginForm.styled';

export const LoginForm = () => {
  const error = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setFormData({ email: '', password: '' });
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormInput
        name={'email'}
        type={'text'}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <FormInput
        name={'password'}
        type={'password'}
        onChange={e => setFormData({ ...formData, password: e.target.value })}
      />
      {error && (
        <p>
          Invalid email or password. Please check entered data or{' '}
          <StyledLink to="/register">register</StyledLink> it.
        </p>
      )}

      <FormBtn name="sign in" />
    </Form>
  );
};
