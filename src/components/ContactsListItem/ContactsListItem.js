import { useDispatch } from 'react-redux';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { ListContact, ListImg, ListItemBlock } from './ContactsListItem.styled';
import { deleteContact } from '../../redux/operations';

export const ContactsListItem = ({ contact, onEditClick }) => {
  const dispatch = useDispatch();

  const handleEditClick = () => {
    onEditClick(contact);
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  const firstLetters = contact.name
    .split(' ')
    .map(namePart => namePart[0])
    .join('');

  return (
    <ListItemBlock>
      <ListImg>{firstLetters}</ListImg>
      <ListContact>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </ListContact>

      <button onClick={() => handleDelete(contact.id)}>
        <FaTrash />
      </button>

      <button onClick={handleEditClick}>
        <FaEdit />
      </button>
    </ListItemBlock>
  );
};
