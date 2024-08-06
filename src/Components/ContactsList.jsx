import ContactItem from './ContactItem';
import { useGetContactsQuery } from '../services/contacts';
import Loader from './Loader';

const ContactsList = () => {
  const { data, error, isLoading, isFetching } = useGetContactsQuery({ sort: 'created:desc' });
  return (
    <>
      <div className="w-full">
        {isLoading || isFetching ? (
          <Loader />
        ) : error ? (
          <div>Error</div>
        ) : (
          <>
            <p className="font-bold text-lg">Contacts</p>
            <ul>
              {data.resources.map((item) => (
                <li key={item.id}>
                  <ContactItem contact={item} contactId={item.id} />
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </>
  );
};

export default ContactsList;
