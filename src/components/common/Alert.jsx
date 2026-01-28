import clsx from 'clsx';
import { 
  CheckCircleIcon, 
  ExclamationCircleIcon, 
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

/**
 * Alert component for notifications
 */
function Alert({ 
  type = 'info', 
  title, 
  message, 
  onClose,
  className = '' 
}) {
  const types = {
    success: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      icon: CheckCircleIcon,
      iconColor: 'text-green-400',
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      icon: XCircleIcon,
      iconColor: 'text-red-400',
    },
    warning: {
      bg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-800',
      icon: ExclamationCircleIcon,
      iconColor: 'text-yellow-400',
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      icon: InformationCircleIcon,
      iconColor: 'text-blue-400',
    },
  };

  const config = types[type] || types.info;
  const Icon = config.icon;

  return (
    <div 
      className={clsx(
        'rounded-lg border p-4',
        config.bg,
        config.border,
        className
      )}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <Icon className={clsx('h-5 w-5', config.iconColor)} />
        </div>
        <div className="ml-3 flex-1">
          {title && (
            <h3 className={clsx('text-sm font-medium', config.text)}>
              {title}
            </h3>
          )}
          {message && (
            <div className={clsx('text-sm', config.text, title && 'mt-2')}>
              {message}
            </div>
          )}
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <button
              type="button"
              className={clsx(
                'inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2',
                config.text,
                'hover:bg-opacity-20'
              )}
              onClick={onClose}
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Alert;
