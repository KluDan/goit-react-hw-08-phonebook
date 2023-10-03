import styled from 'styled-components';

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
`;

export const Input = styled.input`
  font-size: 24px;
  width: 100%;
  padding: 12px 45px 12px 15px;
  border: 1px solid rgb(117, 117, 117);
  border-radius: 10px;
  outline: none;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  &:hover {
    background: rgb(236, 239, 241);
  }
  &:focus {
    background-color: #fff;
    border: 1px solid #d4ae7a;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  text-transform: capitalize;
  color: #d4ae7a;
  font-size: 20px;
`;

export const InputField = styled.div`
  position: relative;
  margin-bottom: clamp(1rem, 0.3rem + 3vw, 2.5rem);
`;
export const EyeBtn = styled.button`
  border: none;
  outline: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: inherit;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  svg {
    width: 30px;
    height: 30px;
  }
`;
