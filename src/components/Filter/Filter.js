import { Label, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter, getFilterValue } from 'redux/contactsSlice';

const Filter = () => {
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text "
        name="filter"
        onChange={e => {
          dispatch(updateFilter(e.currentTarget.value));
        }}
        value={filter}
      />
    </>
  );
};

export default Filter;
