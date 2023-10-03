import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
  padding: 20px 40px;
  @media screen and (max-width: 940px) {
    padding: 20px 20px;
  }
`;
export const ListItem = styled.li`
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`;
