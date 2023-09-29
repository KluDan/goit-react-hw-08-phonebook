import React, { useState } from 'react';
import {
  Input,
  Label,
  InputBlock,
  InputField,
  EyeBtn,
} from './FormInput.styled';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const FormInput = ({ name, type }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <InputBlock>
      <Label htmlFor={name}>{name}</Label>
      <InputField>
        <Input name={name} id={name} type={isPasswordVisible ? 'text' : type} />
        {type === 'password' && (
          <EyeBtn type="button" onClick={togglePasswordVisibility}>
            {isPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />}
          </EyeBtn>
        )}
      </InputField>
    </InputBlock>
  );
};
