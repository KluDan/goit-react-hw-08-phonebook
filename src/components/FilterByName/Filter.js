import { useSelector, useDispatch } from 'react-redux';
import { FilterStyled } from './Filter.styled';
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
      <input
        type="text"
        value={filter}
        onChange={handleChange}
        placeholder="Find contact"
      />
    </FilterStyled>
  );
};
