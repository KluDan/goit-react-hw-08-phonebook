import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-inline: clamp(1rem, 0.3rem + 2vw, 2rem);
  padding-block: clamp(1rem, 0.3rem + 2vw, 2rem);
  border: 2px solid #d4ae7a;
  border-radius: 30px;
`;
