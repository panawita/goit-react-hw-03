import Contact from './Contact';
import css from './Contact.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={css.contacts}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Contact
            id={id}
            name={name}
            number={number}
            onDeleteContact={onDeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
