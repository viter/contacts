import { useGetContactsQuery } from './services/contacts';

const App = () => {
  const { data, error, isLoading } = useGetContactsQuery();
  if (data) {
    console.log(data);
  }

  return <>Hello</>;
};

export default App;
