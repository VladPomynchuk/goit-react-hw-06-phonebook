import { useState, useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import ContactsList from 'components/ContactsList';
import Filter from 'components/Filter';
import {
  Container,
  WrapperBorder,
  Wrapper,
  MainTitle,
  Title,
} from './Phonebook.styled';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';

const LS_KEY = 'contacts_array';

const Phonebook = () => {
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem(LS_KEY));
    return localStorageContacts || [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = value => {
    const { name } = value;

    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.error(`${name} is already in contacts`);
    }
    setContacts(prevState => [...prevState, { id: nanoid(), ...value }]);
  };

  const filterContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Container>
        <WrapperBorder>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm onSubmit={handleSubmit} />
        </WrapperBorder>

        <Wrapper>
          <Title>Contacts</Title>
          <Filter setFilter={setFilter} value={filter} />

          <ContactsList setContacts={setContacts} data={filterContacts} />
        </Wrapper>
      </Container>
    </>
  );
};

export default Phonebook;
