import { Link } from 'react-router-dom';
import cancel from '../assets/cancel.svg';
import { useRemoveContactMutation } from '../services/contacts';

const ContactItem = ({ contact, contactId }) => {
  const firstName = contact.fields['first name'] ? contact.fields['first name'][0].value : '';
  const lastName = contact.fields['last name'] ? contact.fields['last name'][0].value : '';
  const email = contact.fields.email ? contact.fields.email[0].value : '';
  const avatar = contact.avatar_url;

  const [removeContact] = useRemoveContactMutation();

  return (
    <div className="relative my-3 w-full bg-neutral-300 p-3 rounded-md shadow-sm dark:bg-neutral-600">
      <div className="absolute right-2 top-2">
        <button
          onClick={() => removeContact(contactId)}
          className="w-7 h-7 rounded-full hover:bg-gray-200 hover:shadow-md flex justify-center items-center"
        >
          <img src={cancel} />
        </button>
      </div>
      <Link to={`contact/${contact.id}`}>
        <div className="flex pt-3">
          <img className="w-14 h-14 rounded-full mr-5" src={avatar} />

          <div>
            <p>
              {firstName} {lastName}
            </p>
            <p>{email}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ContactItem;
