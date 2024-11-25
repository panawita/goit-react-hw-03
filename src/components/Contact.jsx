import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={css.contactCard}>
      <div className={css.contact}>
        <div className={css.name}>
          <IoPersonSharp />
          <p>{name}</p>
        </div>
        <div className={css.number}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
