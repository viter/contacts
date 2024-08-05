import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactsList';
import Loader from './Components/Loader';
import { useGetContactsQuery } from './services/contacts';

const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full flex gap-10">
          <ContactForm />
          <ContactsList data={data.resources} error={error} />
        </div>
      )}
    </>
  );
};

export default App;
