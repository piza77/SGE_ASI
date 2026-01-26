import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

function Header() {
  return (
    <header className="h-16 bg-white shadow-sm border-b border-gray-200">
      <div className="h-full px-6 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-xl font-semibold text-gray-800">
            Sistema de Gestión Empresarial
          </h2>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-100">
            <BellIcon className="h-6 w-6" />
          </button>
          <button className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
            <UserCircleIcon className="h-8 w-8" />
            <span className="font-medium">Usuario</span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
