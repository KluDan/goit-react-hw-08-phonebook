import { ListItem } from './ContactsListItem.styled';
import { useDispatch } from 'react-redux';

import { deleteContact } from '../../redux/phonebookSlice';
export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <ListItem>
        {contact.name}: {contact.number}
      </ListItem>
      <button onClick={() => handleDelete(contact.id)}>Delete</button>
    </>
  );
};
