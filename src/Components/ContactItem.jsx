import { Link } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const firstName = contact.fields['first name'] ? contact.fields['first name'][0].value : '';
  const lastName = contact.fields['last name'] ? contact.fields['last name'][0].value : '';
  const email = contact.fields.email ? contact.fields.email[0].value : '';
  console.log(firstName);
  return (
    <Link to={`contact/${contact.id}`}>
      <div className="my-3 mx-2 bg-neutral-300 p-3 rounded-sm shadow-sm">
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{email}</p>
      </div>
    </Link>
  );
};

export default ContactItem;
