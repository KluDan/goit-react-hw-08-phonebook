import { GlobalStyle } from './GlobalStyle';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './FilterByName/Filter';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 20px;
`;

export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      <GlobalStyle />
    </Wrapper>
  );
};
