import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Tenants from "./pages/tenants/Tenants";
import Loading from "./components/common/Loading";
import TenantsList from "./components/TenantsList";

/**
 * Componente para proteger rutas que requieren autenticación
 */
const ProtectedRouteWrapper = ({ children, requiredPermission }) => {
  const { isAuthenticated, loading, hasPermission } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (requiredPermission && !hasPermission(requiredPermission)) {
    return <div className="text-center text-red-500">Acceso denegado</div>;
  }

  return children;
};

/**
 * Componente principal de la aplicación con enrutamiento
 */
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rutas públicas (Autenticación) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/register"
              element={<div>Registro (Por implementar)</div>}
            />
            <Route
              path="/forgot-password"
              element={<div>Recuperar contraseña (Por implementar)</div>}
            />
          </Route>

          {/* Rutas protegidas */}
          <Route
            path="/tenants"
            element={
              <ProtectedRouteWrapper requiredPermission="tenant.view">
                <div>
                  <Tenants /> {/* Presentación principal de Tenants */}
                  <TenantsList /> {/* Lista de tenants conectada al backend */}
                </div>
              </ProtectedRouteWrapper>
            }
          />
          <Route
            element={
              <ProtectedRouteWrapper>
                <MainLayout />
              </ProtectedRouteWrapper>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/tenants"
              element={
                <ProtectedRouteWrapper requiredPermission="tenant.view">
                  <Tenants />
                </ProtectedRouteWrapper>
              }
            />
            <Route
              path="/cost-centers"
              element={
                <div className="text-2xl">
                  Centros de Costos (Por implementar)
                </div>
              }
            />
            <Route
              path="/inventory"
              element={
                <div className="text-2xl">Inventario (Por implementar)</div>
              }
            />
            <Route
              path="/documents"
              element={
                <div className="text-2xl">Documentos (Por implementar)</div>
              }
            />
            <Route
              path="/clients"
              element={
                <div className="text-2xl">Clientes (Por implementar)</div>
              }
            />
            <Route
              path="/employees"
              element={
                <div className="text-2xl">Empleados (Por implementar)</div>
              }
            />
            <Route
              path="/portfolio"
              element={
                <div className="text-2xl">Cartera (Por implementar)</div>
              }
            />
            <Route
              path="/treasury"
              element={
                <div className="text-2xl">Tesorería (Por implementar)</div>
              }
            />
            <Route
              path="/suppliers"
              element={
                <div className="text-2xl">Proveedores (Por implementar)</div>
              }
            />
          </Route>

          {/* Rutas por defecto */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
