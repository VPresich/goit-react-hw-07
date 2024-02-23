import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchContacts } from '../redux/operations';
import { getError, getIsLoading } from '../redux/selectors';
import AppContainer from './app-container/AppContainer';
import TitleSection from './titlesection/TitleSection';
import ContactForm from './contact-form/ContactForm';
import SearchBox from './search-box/SearchBox';
import Infinity from './loaders/Infinity/Infinity';
import ContactsList from './contacts-list/ContactsList';
import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';

const App = () => {
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm />
      <SearchBox>{SEARCH_LABEL}</SearchBox>
      {isLoading && !error && <Infinity isLoading={isLoading} />}
      <ContactsList />
    </AppContainer>
  );
};

export default App;
