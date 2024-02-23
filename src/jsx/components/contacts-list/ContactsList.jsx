import { useSelector } from 'react-redux';
import { getFilter, getContacts } from '../../redux/selectors';
import ContactItem from './ContactItem';
import Infinity from '../loaders/Infinity/Infinity';
import styles from './ContactsList.module.css';

const ContactsList = () => {
  const { items, error, isLoading } = useSelector(getContacts);
  const strFilter = useSelector(getFilter);

  const filteredContacts =
    strFilter?.length === 0
      ? items
      : items.filter(contact =>
          contact.name.toLowerCase().includes(strFilter.trim().toLowerCase())
        );

  return (
    <ul className={styles.contacts}>
      {isLoading && !error && <Infinity />}
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
