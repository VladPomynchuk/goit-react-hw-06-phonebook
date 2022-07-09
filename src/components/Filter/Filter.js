import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

const Filter = ({ setFilter, value }) => {
  return (
    <>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input
        type="text "
        name="filter"
        onChange={e => {
          setFilter(e.currentTarget.value);
        }}
        value={value}
      />
    </>
  );
};

Filter.propTypes = {
  setFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Filter;
