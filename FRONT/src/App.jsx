<<<<<<< HEAD
<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';
import Login from './pages/auth/Login';
import Dashboard from './pages/dashboard/Dashboard';
import Loading from './components/common/Loading';

/**
 * Componente para proteger rutas que requieren autenticación
 */
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading size="lg" />
      </div>
    );
  }

  return isAuthenticated ? children : <Navigate to="/login" />;
};

/**
 * Componente principal de la aplicación con enrutamiento
 */
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas (Autenticación) */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<div>Registro (Por implementar)</div>} />
            <Route path="/forgot-password" element={<div>Recuperar contraseña (Por implementar)</div>} />
          </Route>

          {/* Rutas protegidas */}
          <Route
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tenants" element={<div className="text-2xl">Tenants (Por implementar)</div>} />
            <Route path="/cost-centers" element={<div className="text-2xl">Centros de Costos (Por implementar)</div>} />
            <Route path="/inventory" element={<div className="text-2xl">Inventario (Por implementar)</div>} />
            <Route path="/documents" element={<div className="text-2xl">Documentos (Por implementar)</div>} />
            <Route path="/clients" element={<div className="text-2xl">Clientes (Por implementar)</div>} />
            <Route path="/employees" element={<div className="text-2xl">Empleados (Por implementar)</div>} />
            <Route path="/portfolio" element={<div className="text-2xl">Cartera (Por implementar)</div>} />
            <Route path="/treasury" element={<div className="text-2xl">Tesorería (Por implementar)</div>} />
            <Route path="/suppliers" element={<div className="text-2xl">Proveedores (Por implementar)</div>} />
          </Route>

          {/* Ruta por defecto */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
=======
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
>>>>>>> origin/copilot/create-erp-module-structure
=======
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tenants from './pages/Tenants';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="/tenants" 
            element={
              <ProtectedRoute requiredPermission="tenant.view">
                <Tenants />
              </ProtectedRoute>
            } 
          />
          
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </AuthProvider>
    </Router>
>>>>>>> origin/copilot/complete-authentication-and-tenants
  );
}

export default App;
