import { useSelector } from 'react-redux';
import { selectFilteredItems } from '../../redux/selectors';
import ContactItem from './ContactItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredItems);
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
