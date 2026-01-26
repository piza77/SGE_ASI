import { Outlet, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

/**
 * Layout principal de la aplicación con sidebar y header
 */
const MainLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    { name: 'Tenants', path: '/tenants', icon: '🏢' },
    { name: 'Centros de Costos', path: '/cost-centers', icon: '💰' },
    { name: 'Inventario', path: '/inventory', icon: '📦' },
    { name: 'Documentos', path: '/documents', icon: '📄' },
    { name: 'Clientes', path: '/clients', icon: '👥' },
    { name: 'Empleados', path: '/employees', icon: '👤' },
    { name: 'Cartera', path: '/portfolio', icon: '💳' },
    { name: 'Tesorería', path: '/treasury', icon: '🏦' },
    { name: 'Proveedores', path: '/suppliers', icon: '🚚' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">SGE ASI</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-700">
              {user?.firstName || user?.email}
            </span>
            <button
              onClick={handleLogout}
              className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-[calc(100vh-64px)]">
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center px-4 py-2 text-gray-700 rounded-md hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    <span className="mr-3">{item.icon}</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
