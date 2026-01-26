import { Outlet } from 'react-router-dom';

/**
 * Layout para páginas de autenticación (login, registro, etc.)
 */
const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">SGE ASI</h1>
          <p className="text-primary-100">Sistema de Gestión Empresarial</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <Outlet />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-sm text-primary-100">
            © 2026 ASI - Consultora Medioambiental
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
