import { useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { ListItem, ListItemBlock } from './ContactsListItem.styled';
import { deleteContact } from '../../redux/operations';

export const ContactsListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <ListItemBlock>
      <ListItem>
        {contact.name}: {contact.number}
      </ListItem>
      <button onClick={() => handleDelete(contact.id)}>
        <FaTrash />
      </button>
    </ListItemBlock>
  );
};
