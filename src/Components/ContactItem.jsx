import { Link } from 'react-router-dom';

const ContactItem = ({ contact }) => {
  const firstName = contact.fields['first name'] ? contact.fields['first name'][0].value : '';
  const lastName = contact.fields['last name'] ? contact.fields['last name'][0].value : '';
  const email = contact.fields.email ? contact.fields.email[0].value : '';
  const avatar = contact.avatar_url;
  return (
    <Link to={`contact/${contact.id}`}>
      <div className="flex my-3 w-full bg-neutral-300 p-3 rounded-md shadow-sm dark:bg-neutral-600">
        <img className="w-14 h-14 rounded-full mr-5" src={avatar} />

        <div>
          <p>
            {firstName} {lastName}
          </p>
          <p>{email}</p>
        </div>
      </div>
    </Link>
  );
};

export default ContactItem;
