import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();

  let message;

  if (error.status === 404) {
    message = 'Page not found.';
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-6">Oops!</h1>
      <p>{message}</p>
    </div>
  );
}
