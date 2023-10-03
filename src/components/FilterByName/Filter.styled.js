import styled from 'styled-components';

export const FilterStyled = styled.div`
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: #b39b86;
  padding: 30px 40px;
  input {
    font-size: 24px;
    width: 100%;
    padding: 10px 10px 10px 35px;
    border: 1px solid #d4ae7a;
    border-radius: 10px;
    position: relative;
    &:focus {
      outline: none;
    }
  }
  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 50%;
    left: 48px;
    transform: translateY(-50%);
    z-index: 20;
  }
`;
