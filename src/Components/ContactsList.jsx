import ContactItem from './ContactItem';

const ContactsList = ({ data, error }) => {
  return (
    <>
      {error ? (
        <div>Error</div>
      ) : (
        <div className="w-full">
          <p className="font-bold text-lg">Contacts</p>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <ContactItem contact={item} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ContactsList;
