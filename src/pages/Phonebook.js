import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { fetchContacts } from 'redux/operations';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { PhonebookPage } from 'components/PhonebookPage/PhonebookPage';

export default function Phonebook() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <HelmetProvider>
      <Helmet>
        <title>Phonebook</title>
      </Helmet>
      <PhonebookPage />
    </HelmetProvider>
  );
}
