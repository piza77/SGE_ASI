import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-500 to-primary-700">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">SGE ASI</h1>
            <p className="text-gray-600 mt-2">Sistema de Gestión Empresarial</p>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AuthLayout;
