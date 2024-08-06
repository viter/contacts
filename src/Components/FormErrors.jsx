const FormErrors = ({ errors }) => {
  return (
    <>
      <ul>
        {errors.map((error) => (
          <li className="text-sm text-red-500 mb-3" key={error.type}>
            {error.msg}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormErrors;
