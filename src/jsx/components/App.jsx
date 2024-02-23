import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchContacts } from '../redux/operations';
import TitleSection from './titlesection/TitleSection';
import ContactsList from './contacts-list/ContactsList';
import SearchBox from './search-box/SearchBox';
import ContactForm from './contact-form/ContactForm';

import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';

import styles from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm />
      <SearchBox>{SEARCH_LABEL}</SearchBox>
      <ContactsList />
    </div>
  );
};

export default App;
