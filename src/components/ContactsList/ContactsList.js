import PropTypes from 'prop-types';
import { Item, List } from './ContactsList.styled';

const ContactsList = ({ data, setContacts }) => {
  return (
    <div>
      <List>
        {data.map(el => {
          return (
            <Item key={el.id}>
              {`${el.name}: ${el.number}`}
              <button
                onClick={() => {
                  setContacts(prevState =>
                    prevState.filter(element => element.id !== el.id)
                  );
                }}
              >
                Delete
              </button>
            </Item>
          );
        })}
      </List>
    </div>
  );
};

ContactsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  setContacts: PropTypes.func.isRequired,
};

export default ContactsList;
