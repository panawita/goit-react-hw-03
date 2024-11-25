import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';
import * as Yup from 'yup';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short, use a min. of 3 characters')
    .max(50, 'Too long, use a max. of 50 characters')
    .required('Required'),
  telephone: Yup.string()
    .matches(
      /^[+]?[\d\s()-]{6,16}$/,
      'Phone number must be between 6 and 16 characters and can include digits, spaces, dashes, or parentheses.'
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  telephone: '',
};

const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, actions) => {
    onAddContact(values.name, values.telephone);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div className={css.cluster}>
          <label htmlFor="name">Name</label>
          <Field className={css.field} type="text" name="name" />
          <ErrorMessage className={css.error} name="name" as="span" />
        </div>
        <div className={css.cluster}>
          <label htmlFor="telephone">Number</label>
          <Field className={css.field} type="number" name="telephone" />
          <ErrorMessage className={css.error} name="telephone" as="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
