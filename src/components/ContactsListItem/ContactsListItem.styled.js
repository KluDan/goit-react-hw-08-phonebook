import styled from 'styled-components';

export const ListItemBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background-color: transparent;
    border: none;
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;
export const ListContact = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: auto;
  :first-child {
    font-size: 24px;
    font-weight: 600;
  }
`;
export const ListImg = styled.div`
  font-size: 26px;
  letter-spacing: 2px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: #cdcbc7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;
