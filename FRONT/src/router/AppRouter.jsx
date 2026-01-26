import { Routes, Route, Navigate } from 'react-router-dom';
import DashboardLayout from '@components/layout/DashboardLayout';
import AuthLayout from '@components/layout/AuthLayout';

// Placeholder pages - to be implemented
const Dashboard = () => <div className="p-6"><h1>Dashboard</h1></div>;
const Login = () => <div className="p-6"><h1>Login</h1></div>;

function AppRouter() {
  return (
    <Routes>
      {/* Public routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Protected routes */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<div className="p-6"><h1>404 - Not Found</h1></div>} />
    </Routes>
  );
}

export default AppRouter;
