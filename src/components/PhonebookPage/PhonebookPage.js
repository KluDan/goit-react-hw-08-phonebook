import { ContactsList } from 'components/ContactsList/ContactsList';
import { PhonebookForm } from 'components/PhonebookForm/PhonebookForm';
import { selectError, selectIsLoading } from 'redux/phonebookSlice';

import { useSelector } from 'react-redux';
import { useMediaQuery } from '@react-hook/media-query';
import { Filter } from 'components/FilterByName/Filter';
import {
  Wrapper,
  Contacts,
  ContentSide,
  BgImg,
  Title,
  AddNewContact,
  FormBlock,
} from './PhonebookPage.styled';
import PhonebookImg from '../../assets/images/PhonebookImg.jpg';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { EditForm } from 'components/EditForm/EditForm';
import { useState } from 'react';
import { Loader } from 'components/Loader';

export const PhonebookPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const isMobile = useMediaQuery('only screen and (max-width: 768px)', {
    initial: true,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingContact, setEditingContact] = useState(null);
  const [isEditingForm, setIsEditingForm] = useState(false);
  const [isPhonebookForm, setIsPhonebookForm] = useState(false);
  const [isContactsVisible, setIsContactsVisible] = useState(!isMobile);
  const [isContentSideVisible, setIsContentSideVisible] = useState(isMobile);

  const handleEditClick = contact => {
    setIsEditing(true);
    setEditingContact(contact);
    setIsEditingForm(true);
    setIsPhonebookForm(false);
    if (isMobile) {
      setIsContactsVisible(false);
      setIsContentSideVisible(true);
    }
  };
  const handleContactClick = contact => {
    if (isEditing) {
      setEditingContact(contact);
    } else {
      handleEditClick(contact);
    }
  };

  const handleAddContactClick = () => {
    setIsPhonebookForm(true);
    setIsEditingForm(false);
    if (isMobile) {
      setIsContactsVisible(false);
      setIsContentSideVisible(true);
    }
  };

  const handleFormClose = () => {
    setIsEditing(false);
    setEditingContact(null);
    setIsEditingForm(false);
    setIsPhonebookForm(false);
    if (isMobile) {
      setIsContactsVisible(true);
      setIsContentSideVisible(false);
    }
  };

  const renderForm = () => {
    if (isPhonebookForm) {
      return (
        <>
          <Title>Create contact</Title>
          <PhonebookForm onClose={handleFormClose} />
        </>
      );
    }

    if (isEditingForm && editingContact !== null) {
      return (
        <>
          <Title>Update contact</Title>
          <EditForm
            contactId={editingContact.id}
            contactData={editingContact}
            onClose={handleFormClose}
          />
        </>
      );
    }

    return null;
  };

  return (
    <Wrapper>
      <Contacts
        style={{ display: isMobile && !isContactsVisible ? 'none' : 'flex' }}
      >
        <Filter />
        {isLoading && !error && <Loader />}
        <AddNewContact>
          <AiOutlineUserAdd />
          <p onClick={handleAddContactClick}>Add new contact</p>
        </AddNewContact>
        <ContactsList
          onEditClick={handleEditClick}
          onContactClick={handleContactClick}
        />
      </Contacts>

      <ContentSide
        style={{
          display: isMobile && !isContentSideVisible ? 'none' : 'block',
        }}
      >
        <BgImg src={PhonebookImg} alt="Work table" />
        <FormBlock>{renderForm()}</FormBlock>
      </ContentSide>
    </Wrapper>
  );
};
