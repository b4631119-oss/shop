import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
      <div className="text-8xl mb-4 animate-bounce">📱</div>
      <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Страница не найдена</h2>
      <p className="text-gray-500 max-w-md mb-6">
        К сожалению, запрашиваемая страница не существует или была перемещена.
      </p>
      <Link
        to="/"
        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-xl font-medium transition-all hover:scale-105 shadow-lg shadow-orange-500/30"
      >
        На главную
      </Link>
    </div>
  );
};

export default ErrorPage;