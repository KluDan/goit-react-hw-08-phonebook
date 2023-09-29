import { ContactsList } from 'components/ContactsList/ContactsList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { selectError, selectIsLoading } from 'redux/phonebookSlice';

import { LineWave } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { Filter } from 'components/FilterByName/Filter';
import {
  Wrapper,
  Contacts,
  ContentSide,
  BgImg,
  Title,
  AddNewContact,
  FilterModal,
} from './PhonebookPage.styled';
import PhonebookImg from '../../assets/images/PhobebookImg.jpg';
import { AiOutlineUserAdd } from 'react-icons/ai';

export const PhonebookPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <Wrapper>
      <Contacts>
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
        <AddNewContact>
          <AiOutlineUserAdd />
          <p>Add new contact</p>
        </AddNewContact>
        <ContactsList />
      </Contacts>
      <ContentSide>
        <Title>Create contact</Title>
        <BgImg src={PhonebookImg} />
        <PhonebookForm />
      </ContentSide>
    </Wrapper>
  );
};
