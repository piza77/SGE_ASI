import { useAuth } from '../../context/AuthContext';
import Card from '../../components/common/Card';

/**
 * Página principal del Dashboard
 */
const Dashboard = () => {
  const { user } = useAuth();

  const stats = [
    { name: 'Centros de Costos', value: '12', icon: '💰', color: 'bg-blue-500' },
    { name: 'Clientes Activos', value: '48', icon: '👥', color: 'bg-green-500' },
    { name: 'Proyectos en Curso', value: '23', icon: '📊', color: 'bg-purple-500' },
    { name: 'Facturas Pendientes', value: '8', icon: '💳', color: 'bg-yellow-500' },
  ];

  const recentActivity = [
    { action: 'Nuevo centro de costos creado', time: 'Hace 2 horas' },
    { action: 'Factura #1234 generada', time: 'Hace 3 horas' },
    { action: 'Cliente actualizado', time: 'Hace 5 horas' },
    { action: 'Documento subido', time: 'Hace 1 día' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          Hola, {user?.firstName || 'Usuario'}
        </h1>
        <p className="text-gray-600 mt-1">
          Aquí tienes un resumen de tu sistema
        </p>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.name} className="hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </p>
              </div>
              <div className={`${stat.color} p-4 rounded-full text-3xl`}>
                {stat.icon}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Actividad Reciente */}
        <Card title="Actividad Reciente">
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 mt-2 bg-primary-500 rounded-full"></div>
                <div className="ml-4">
                  <p className="text-sm text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Tareas Pendientes */}
        <Card title="Tareas Pendientes">
          <div className="space-y-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 rounded"
              />
              <span className="ml-3 text-sm text-gray-900">
                Revisar facturas pendientes
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 rounded"
              />
              <span className="ml-3 text-sm text-gray-900">
                Aprobar órdenes de pago
              </span>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-primary-600 rounded"
              />
              <span className="ml-3 text-sm text-gray-900">
                Actualizar inventario
              </span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
