import { useSelector } from 'react-redux';
import { getItems, getFilter } from '../../redux/selectors';
import ContactItem from './ContactItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const contacts = useSelector(getItems);
  const strFilter = useSelector(getFilter);

  const filteredContacts =
    strFilter?.length === 0
      ? contacts
      : contacts.filter(contact =>
          contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
        );

  return (
    <ul className={styles.contacts}>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <li className={styles.item} key={contact.id}>
            <ContactItem contact={contact} />
          </li>
        ))
      ) : (
        <div className={styles.text}>No contacts!</div>
      )}
    </ul>
  );
};

export default ContactsList;
