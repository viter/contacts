import ContactItem from './ContactItem';

const ContactsList = ({ data, error }) => {
  if (data) {
    console.log(data);
  }
  return (
    <>
      {error ? (
        <div>Error</div>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.id}>
              <ContactItem contact={item} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ContactsList;
