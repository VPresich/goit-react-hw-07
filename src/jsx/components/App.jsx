import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { fetchContacts } from '../redux/operations';
import { selectError, selectIsLoading } from '../redux/selectors';
import AppContainer from './app-container/AppContainer';
import TitleSection from './titlesection/TitleSection';
import ContactForm from './contact-form/ContactForm';
import SearchBox from './search-box/SearchBox';
import Infinity from './loaders/Infinity/Infinity';
import ContactsList from './contacts-list/ContactsList';
import { SEARCH_LABEL, TITLE } from '../auxiliary/constants';

const App = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <Toaster />
      <TitleSection>{TITLE}</TitleSection>
      <ContactForm />
      <SearchBox>{SEARCH_LABEL}</SearchBox>
      {isLoading && !error && <Infinity isLoading={isLoading} />}
      <ContactsList />
    </AppContainer>
  );
};

export default App;
