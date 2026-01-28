<<<<<<< HEAD
/**
 * Componente de Card reutilizable
 */
const Card = ({ children, title, className = '', ...props }) => {
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`} {...props}>
      {title && (
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        </div>
      )}
      <div className="p-6">
=======
import clsx from 'clsx';

/**
 * Card component
 */
function Card({ 
  children, 
  title, 
  subtitle,
  headerAction,
  padding = true,
  className = '' 
}) {
  return (
    <div className={clsx('bg-white rounded-lg shadow-soft', className)}>
      {(title || subtitle || headerAction) && (
        <div className={clsx('border-b border-gray-200', padding && 'px-6 py-4')}>
          <div className="flex items-center justify-between">
            <div>
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="mt-1 text-sm text-gray-500">
                  {subtitle}
                </p>
              )}
            </div>
            {headerAction && (
              <div>
                {headerAction}
              </div>
            )}
          </div>
        </div>
      )}
      <div className={padding ? 'p-6' : ''}>
>>>>>>> origin/copilot/create-erp-module-structure
        {children}
      </div>
    </div>
  );
<<<<<<< HEAD
};
=======
}
>>>>>>> origin/copilot/create-erp-module-structure

export default Card;
