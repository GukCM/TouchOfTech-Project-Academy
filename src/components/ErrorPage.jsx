import React from 'react';
import logo from '../assets/logo-icon.png'; // Asegúrate de reemplazar esto con la ruta correcta a tu logo

function Error() {
  const goBackHome = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full flex justify-center mb-6">
        <img src={logo} alt="Logo" className="h-24 w-auto" />
      </div>
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
        <p className="mt-4 text-xl text-gray-600">Page not found</p>
        <p className="mt-2 text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
        <div className="mt-6">
          <button
            onClick={goBackHome}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Go back home
          </button>
        </div>
      </div>
    </div>
  );
}

export default Error;
