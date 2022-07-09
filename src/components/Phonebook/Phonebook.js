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

const Phonebook = () => {
  return (
    <>
      <Container>
        <WrapperBorder>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm />
        </WrapperBorder>

        <Wrapper>
          <Title>Contacts</Title>
          <Filter />

          <ContactsList />
        </Wrapper>
      </Container>
    </>
  );
};

export default Phonebook;
