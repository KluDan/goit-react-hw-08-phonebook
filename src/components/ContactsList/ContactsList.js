import { useSelector } from 'react-redux';
import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { List, ListItem } from './ContactsList.styled';
import { selectFilteredContacts } from '../../redux/phonebookSlice';

export const ContactsList = ({ onEditClick }) => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const sortedContacts = filteredContacts.slice().sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  return (
    <List>
      {sortedContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactsListItem contact={contact} onEditClick={onEditClick} />
        </ListItem>
      ))}
    </List>
  );
};
