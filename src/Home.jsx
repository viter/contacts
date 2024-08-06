import ContactForm from './Components/ContactForm';
import ContactsList from './Components/ContactsList';

const App = () => {
  return (
    <div className="w-full flex gap-10">
      <ContactForm />
      <ContactsList />
    </div>
  );
};

export default App;
