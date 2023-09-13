import { FilterStyled } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../../redux/phonebookSlice';

export const Filter = () => {
  const filter = useSelector(state => state.phonebook.filter);
  const dispatch = useDispatch();

  const handleChange = e => {
    const newFilter = e.target.value;
    dispatch(setFilter(newFilter));
  };
  return (
    <FilterStyled>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </FilterStyled>
  );
};
