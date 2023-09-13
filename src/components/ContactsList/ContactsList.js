import { ContactsListItem } from 'components/ContactsListItem/ContactsListItem';
import { List, ListItem } from './ContactsList.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilters } from '../../redux/phonebookSlice';

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilters);

  const filteredContacts = contacts.filter(
    contact =>
      contact &&
      contact.name &&
      contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <ContactsListItem contact={contact} />
        </ListItem>
      ))}
    </List>
  );
};
