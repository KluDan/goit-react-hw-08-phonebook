import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding-inline: 20px;
  display: flex;
  height: 93vh;
  overflow: hidden;
`;

export const Contacts = styled.div`
  flex: 0 1 40%;
  background-color: rgba(153, 121, 94, 0.7);

  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-y: auto;
  position: relative;
`;
export const ContentSide = styled.div`
  flex: 0 1 60%;
  position: relative;
`;
export const FormBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const BgImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 50%;
`;
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 50px;
`;
export const AddNewContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
  p {
    font-size: 26px;
    &:hover {
      text-decoration: underline;
    }
  }
`;
