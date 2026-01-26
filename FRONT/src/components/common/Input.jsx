<<<<<<< HEAD
/**
 * Componente de Input reutilizable
 */
const Input = ({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  disabled = false,
  required = false,
  className = '',
  ...props
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
=======
import clsx from 'clsx';

/**
 * Input component with label and error handling
 */
function Input({
  label,
  name,
  type = 'text',
  value,
  onChange,
  onBlur,
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  className = '',
  ...props
}) {
  const inputId = `input-${name}`;

  return (
    <div className={className}>
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
>>>>>>> origin/copilot/create-erp-module-structure
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
<<<<<<< HEAD
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`
          w-full px-3 py-2 border rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500' : 'border-gray-300'}
        `}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};
=======
      
      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={clsx(
          'w-full px-4 py-2 border rounded-lg transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
          'disabled:bg-gray-100 disabled:cursor-not-allowed',
          error 
            ? 'border-red-500 focus:ring-red-500' 
            : 'border-gray-300'
        )}
        {...props}
      />
      
      {(error || helperText) && (
        <p className={clsx(
          'mt-1 text-sm',
          error ? 'text-red-600' : 'text-gray-500'
        )}>
          {error || helperText}
        </p>
      )}
    </div>
  );
}
>>>>>>> origin/copilot/create-erp-module-structure

export default Input;
