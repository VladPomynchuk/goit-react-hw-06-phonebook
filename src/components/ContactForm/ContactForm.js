import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Label, Div, ErrorText } from './ContactForm.styled';

import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, updateContacts } from 'redux/contactsSlice';

export const initialValues = {
  name: '',
  number: '',
};

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const phoneValid =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object({
  name: yup.string().required(),
  number: yup
    .string()
    .min(3)
    .required()
    .matches(phoneValid, 'Phone number is not valid'),
});

const ContactForm = () => {
  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const handleSubmit = (value, { resetForm }) => {
    const { name } = value;

    if (contacts.some(el => el.name.toLowerCase() === name.toLowerCase())) {
      return toast.error(`${name} is already in contacts`);
    }
    dispatch(updateContacts({ id: nanoid(), ...value }));

    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Label htmlFor="name">Name</Label>
        <Div>
          <Field type="text" name="name" placeholder="Full name"></Field>
          <FormError name="name" />
        </Div>

        <Label htmlFor="number">Number</Label>
        <Div>
          <Field type="tel" name="number" placeholder="Phone number"></Field>
          <FormError name="number" />
        </Div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
