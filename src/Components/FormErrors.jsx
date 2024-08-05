const FormErrors = ({ errors }) => {
  return (
    <>
      <ul>
        {errors.map((error) => (
          <li className="text-sm" key={error.type}>
            {error.msg}
          </li>
        ))}
      </ul>
    </>
  );
};

export default FormErrors;
