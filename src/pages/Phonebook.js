import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { LineWave } from 'react-loader-spinner';
import styled from 'styled-components';
import { PhonebookForm } from '../components/PhonebookForm/PhonebookForm';
import { ContactsList } from '../components/ContactsList/ContactsList';
import { Filter } from '../components/FilterByName/Filter';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/phonebookSlice';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Wrapper = styled.div`
  margin: 20px;
`;

export default function Phonebook() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Wrapper>
        <Helmet>
          <title>Phonebook</title>
        </Helmet>
        <h1>Phonebook</h1>
        <PhonebookForm />
        <h2>Contacts</h2>
        <Filter />
        {isLoading && !error && (
          <LineWave
            height="70"
            width="100"
            color="#090a09"
            ariaLabel="line-wave"
            wrapperStyle={{
              padding: '0',
              marginLeft: '100px',
            }}
            wrapperClass=""
            visible={true}
            firstLineColor=""
            middleLineColor=""
            lastLineColor=""
          />
        )}
        <ContactsList />
      </Wrapper>
    </HelmetProvider>
  );
}
