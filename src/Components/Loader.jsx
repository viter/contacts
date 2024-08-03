import loader from '../assets/loader.svg';
const Loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-24 h-24">
        <img src={loader} />
      </div>
    </div>
  );
};

export default Loader;
