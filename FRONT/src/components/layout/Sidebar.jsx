import { NavLink } from 'react-router-dom';
import {
  HomeIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  CubeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  UsersIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Tenants', href: '/tenants', icon: BuildingOfficeIcon },
  { name: 'Centros de Costos', href: '/cost-centers', icon: CurrencyDollarIcon },
  { name: 'Inventarios', href: '/inventory', icon: CubeIcon },
  { name: 'Documentos', href: '/documents', icon: DocumentTextIcon },
  { name: 'Clientes', href: '/clients', icon: UserGroupIcon },
  { name: 'Empleados', href: '/employees', icon: UsersIcon },
  { name: 'Cartera', href: '/portfolio', icon: BanknotesIcon },
  { name: 'Tesorería', href: '/treasury', icon: BuildingLibraryIcon },
  { name: 'Proveedores', href: '/suppliers', icon: TruckIcon },
];

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg">
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-xl font-bold text-primary-600">SGE ASI</h1>
      </div>
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            <item.icon className="h-6 w-6" />
            <span className="font-medium">{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;
