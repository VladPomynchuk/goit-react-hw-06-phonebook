import { Item, List } from './ContactsList.styled';
import { deleteContact, getFilterValue, getItems } from 'redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const ContactsList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilterValue);
  const contacts = useSelector(getItems).filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <List>
        {contacts.map(el => {
          return (
            <Item key={el.id}>
              {`${el.name}: ${el.number}`}
              <button
                onClick={() => {
                  dispatch(deleteContact(el.id));
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

export default ContactsList;
