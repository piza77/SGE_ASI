import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../../components/common/Button';
import Input from '../../components/common/Input';

/**
 * Página de inicio de sesión
 */
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
        Iniciar Sesión
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <Input
          label="Correo Electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="correo@ejemplo.com"
          required
        />

        <Input
          label="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="••••••••"
          required
        />

        <div className="flex items-center justify-between mb-6">
          <Link
            to="/forgot-password"
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          Iniciar Sesión
        </Button>
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          ¿No tienes cuenta?{' '}
          <Link
            to="/register"
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Regístrate
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
