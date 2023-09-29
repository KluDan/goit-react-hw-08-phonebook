import { FormBtn } from 'components/FormBtn/FormBtn';
import { FormInput } from 'components/FormInput/FormInput';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <FormInput name={'name'} type={'text'} required />
      <FormInput name={'email'} type={'text'} required />
      <FormInput name={'password'} type={'password'} required />
      <FormBtn name="sign up" />
    </Form>
  );
};
