import ContactsList from './Components/ContactsList';
import Loader from './Components/Loader';
import { useGetContactsQuery } from './services/contacts';

const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return <>{isLoading ? <Loader /> : <ContactsList data={data.resources} error={error} />}</>;
};

export default App;
