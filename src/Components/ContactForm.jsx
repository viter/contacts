import { useEffect, useRef, useState } from 'react';
import FormErrors from './FormErrors';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [formErrors, setFormErrors] = useState([]);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    updateFormFieldsLook();
  }, [formErrors]);

  useEffect(() => {
    if (formErrors.length) {
      validateInput();
    }
  }, [firstName, lastName, email]);

  const addContact = (e) => {
    const isValid = validateInput();
    if (isValid) {
      console.log(email);
    }
    e.preventDefault();
  };

  const handleIputChange = (input) => {
    if (input.id === 'firstName') {
      setFirstName(input.value);
    }
    if (input.id === 'lastName') {
      setLastName(input.value);
    }
    if (input.id === 'email') {
      setEmail(input.value);
    }
  };

  const validateInput = () => {
    setFormErrors([]);
    if (!firstName.trim() && !lastName.trim()) {
      setFormErrors((prev) => [
        ...prev,
        { type: 'name', msg: 'Either First Name or Last Name should be filled to add a contact!' },
      ]);
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.trim())) {
      setFormErrors((prev) => [...prev, { type: 'email', msg: 'Wrong email format!' }]);
    }

    if (formErrors.length) return false;

    return true;
  };

  const updateFormFieldsLook = () => {
    if (hasErrorType(formErrors, 'name')) {
      [firstNameRef.current, lastNameRef.current].map((field) => {
        field.classList.add('bg-red-200');
      });
    } else {
      [firstNameRef.current, lastNameRef.current].map((field) => {
        field.classList.remove('bg-red-200');
      });
    }

    if (hasErrorType(formErrors, 'email')) {
      emailRef.current.classList.add('bg-red-200');
    } else {
      emailRef.current.classList.remove('bg-red-200');
    }
  };

  const hasErrorType = (arr, val) =>
    arr.some((obj) => obj.hasOwnProperty('type') && obj.type === val);

  return (
    <div className="relative w-2/5">
      <div className="md:sticky md:top-0">
        <p className="font-bold text-lg">Create Contact</p>
        <form className="my-3">
          <label htmlFor="firstName" className="mb-2 block text-sm pl-2">
            First Name
          </label>
          <input
            ref={firstNameRef}
            className="block mb-3 w-full p-2 rounded-md text-base focus:outline-slate-300"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => handleIputChange(e.target)}
            autoComplete="off"
          />

          <label htmlFor="lastName" className="mb-2 block text-sm pl-2">
            Last Name
          </label>
          <input
            ref={lastNameRef}
            className="block mb-3 w-full p-2 rounded-md text-base focus:outline-slate-300"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="off"
          />

          <label htmlFor="email" className="mb-2 block text-sm pl-2">
            Email
          </label>
          <input
            ref={emailRef}
            className="block mb-3 w-full p-2 rounded-md text-base focus:outline-slate-300"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            autoComplete="off"
          />
          {formErrors.length ? <FormErrors errors={formErrors} /> : null}
          <button
            className="text-sm bg-neutral-300 hover:bg-opacity-50 rounded-md p-2 w-full mt-5"
            onClick={addContact}
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
