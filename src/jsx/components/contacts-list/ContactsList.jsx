import { useSelector } from 'react-redux';
import { selectFilter, selectItems } from '../../redux/selectors';
import ContactItem from './ContactItem';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const items = useSelector(selectItems);
  const strFilter = useSelector(selectFilter);

  const filteredContacts =
    strFilter?.length === 0
      ? items
      : items.filter(contact =>
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
