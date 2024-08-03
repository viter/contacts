import { useParams } from 'react-router-dom';
import { useGetContactByIdQuery } from '../services/contacts';
import Loader from '../Components/Loader';

const Contact = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetContactByIdQuery(id);

  let firstName, lastName, email, avatar;
  if (data) {
    firstName = data.resources[0].fields['first name']
      ? data.resources[0].fields['first name'][0].value
      : '';
    lastName = data.resources[0].fields['last name']
      ? data.resources[0].fields['last name'][0].value
      : '';
    email = data.resources[0].fields.email ? data.resources[0].fields.email[0].value : '';
    avatar = data.resources[0].avatar_url;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : data ? (
        <div>
          {avatar && <img src={avatar} className="rounded-full" />}
          <p>{firstName}</p>
          <p>{lastName}</p>
          <p>{email}</p>
        </div>
      ) : null}
    </>
  );
};

export default Contact;
