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
      @media screen and (min-width: 769px) and (max-width: 940px) {
        width: 16px;
        height: 16px;
      }
    }
  }
`;
export const ListContact = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: auto;
  max-width: 240px;
  width: 50%;
  :first-child {
    /*     width: clamp(6rem, 2rem + 10vw, 14rem); */
    font-size: 24px;
    font-weight: 600;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  @media screen and (max-width: 768px) {
    :first-child {
      font-size: 20px;
      max-width: 400px;
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 990px) {
    font-size: 18px;
    :first-child {
      width: clamp(3rem, 2rem + 10vw, 16rem);
      font-size: 20px;
    }
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
  @media screen and (min-width: 769px) and (max-width: 990px) {
    width: 60px;
    height: 60px;
    margin-right: 15px;
  }
`;
