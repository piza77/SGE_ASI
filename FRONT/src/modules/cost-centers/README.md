# Módulo de Centros de Costos - Frontend

Interfaz de usuario para gestionar centros de costos con categorías y seguimiento de ítems.

## 📋 Descripción

Este módulo permite a los usuarios:
- Crear y gestionar centros de costos
- Ver categorías predefinidas automáticamente creadas
- Añadir, editar y eliminar ítems dentro de cada categoría
- Generar reportes de costos
- Visualizar resúmenes y estadísticas

## 📁 Estructura

```
cost-centers/
├── pages/
│   ├── CostCentersList.jsx      # Lista de centros de costos
│   ├── CostCenterDetail.jsx     # Detalle de un centro
│   ├── CreateCostCenter.jsx     # Formulario de creación
│   └── CostCenterReport.jsx     # Reportes y estadísticas
├── components/
│   ├── CostCenterCard.jsx       # Tarjeta de centro de costos
│   ├── CategoryList.jsx         # Lista de categorías
│   ├── ItemForm.jsx             # Formulario de ítem
│   ├── ItemsTable.jsx           # Tabla de ítems
│   └── CostSummary.jsx          # Resumen de costos
├── services/
│   └── costCenter.service.js    # Llamadas API
├── hooks/
│   └── useCostCenters.js        # Hook personalizado
└── README.md
```

## 🎯 Páginas Principales

### 1. Lista de Centros de Costos

Muestra todos los centros de costos con:
- Búsqueda y filtros
- Paginación
- Acciones rápidas (ver, editar, eliminar)
- Botón para crear nuevo centro

### 2. Crear Centro de Costos

Formulario con campos obligatorios:
- **IDE**: Identificador único del centro
- **Cliente**: Selector de cliente
- **Número de Contrato**: Número del contrato asociado
- **Número de Identificación**: Identificación adicional

Al crear, se generan automáticamente 6 categorías:
1. Recursos Humanos
2. Logística
3. Reembolsables
4. Contratos
5. Otros
6. Imprevistos

### 3. Detalle del Centro de Costos

Vista completa que muestra:
- Información del centro
- 6 categorías en tabs o acordeón
- Lista de ítems por categoría
- Resumen de costos totales
- Gráficos de distribución

### 4. Gestión de Ítems

Formulario para añadir/editar ítems con:
- Fecha de implementación (date picker)
- Fecha de inicio (date picker)
- Fecha estimada de finalización (date picker)
- Nombre del ítem (text input)
- Identificación (text input, opcional)
- Valor (number input con formato de moneda)
- Observaciones (textarea)

## 🔌 Integración con API

### Service: costCenter.service.js

```javascript
import api from '@services/api';

export const costCenterService = {
  // Obtener todos los centros
  getAll: (params) => api.get('/api/cost-centers', { params }),
  
  // Obtener un centro específico
  getById: (id) => api.get(`/api/cost-centers/${id}`),
  
  // Crear centro (auto-crea categorías)
  create: (data) => api.post('/api/cost-centers', data),
  
  // Actualizar centro
  update: (id, data) => api.put(`/api/cost-centers/${id}`, data),
  
  // Eliminar centro
  delete: (id) => api.delete(`/api/cost-centers/${id}`),
  
  // Obtener categorías
  getCategories: (centerId) => 
    api.get(`/api/cost-centers/${centerId}/categories`),
  
  // Añadir ítem a categoría
  addItem: (centerId, categoryId, data) =>
    api.post(`/api/cost-centers/${centerId}/categories/${categoryId}/items`, data),
  
  // Actualizar ítem
  updateItem: (itemId, data) =>
    api.put(`/api/cost-centers/items/${itemId}`, data),
  
  // Eliminar ítem
  deleteItem: (itemId) =>
    api.delete(`/api/cost-centers/items/${itemId}`),
  
  // Obtener reporte
  getReport: (centerId) =>
    api.get(`/api/cost-centers/${centerId}/report`)
};
```

## 🎨 Componentes

### CostCenterCard

Tarjeta visual para mostrar un centro de costos en la lista.

```jsx
<CostCenterCard
  costCenter={center}
  onView={() => navigate(`/cost-centers/${center.id}`)}
  onEdit={() => navigate(`/cost-centers/${center.id}/edit`)}
  onDelete={() => handleDelete(center.id)}
/>
```

### CategoryList

Lista o tabs de las 6 categorías con contadores de ítems y totales.

```jsx
<CategoryList
  categories={categories}
  onSelectCategory={setSelectedCategory}
/>
```

### ItemsTable

Tabla con todos los ítems de una categoría.

```jsx
<ItemsTable
  items={items}
  onEdit={handleEdit}
  onDelete={handleDelete}
/>
```

### ItemForm

Formulario modal o drawer para crear/editar ítems.

```jsx
<ItemForm
  item={selectedItem}
  onSubmit={handleSubmit}
  onCancel={handleCancel}
/>
```

### CostSummary

Resumen visual de costos con gráficos.

```jsx
<CostSummary
  data={reportData}
  showCharts={true}
/>
```

## 🎨 Diseño UI

### Paleta de Colores por Categoría

```javascript
const categoryColors = {
  'RRHH': 'bg-blue-100 text-blue-800',
  'LOGISTICA': 'bg-green-100 text-green-800',
  'REEMBOLSABLES': 'bg-yellow-100 text-yellow-800',
  'CONTRATOS': 'bg-purple-100 text-purple-800',
  'OTROS': 'bg-gray-100 text-gray-800',
  'IMPREVISTOS': 'bg-red-100 text-red-800'
};
```

### Iconos por Categoría

```javascript
import {
  UsersIcon,          // Recursos Humanos
  TruckIcon,          // Logística
  CurrencyDollarIcon, // Reembolsables
  DocumentTextIcon,   // Contratos
  EllipsisHorizontalIcon, // Otros
  ExclamationTriangleIcon // Imprevistos
} from '@heroicons/react/24/outline';
```

## 📊 Visualización de Datos

### Tabla de Ítems

Columnas:
- Nombre
- Identificación
- Fecha inicio
- Fecha fin estimada
- Valor (formato moneda)
- Acciones (editar, eliminar)

### Gráficos

1. **Pie Chart**: Distribución de costos por categoría
2. **Bar Chart**: Costos por mes
3. **Line Chart**: Tendencia de costos en el tiempo

## 🔍 Filtros y Búsqueda

### Filtros Disponibles

- Por cliente
- Por rango de fechas
- Por estado (activo, completado, etc.)
- Por rango de valor

### Búsqueda

- Por IDE del centro
- Por número de contrato
- Por nombre de ítem

## ✅ Validaciones

### Crear Centro de Costos

```javascript
const validationSchema = yup.object({
  ide: yup.string().required('IDE es requerido'),
  clientId: yup.number().required('Cliente es requerido'),
  contractNumber: yup.string().required('Número de contrato es requerido'),
  identification: yup.string().required('Identificación es requerida')
});
```

### Crear/Editar Ítem

```javascript
const itemValidationSchema = yup.object({
  name: yup.string().required('Nombre es requerido'),
  value: yup.number()
    .required('Valor es requerido')
    .positive('El valor debe ser positivo'),
  implementationDate: yup.date(),
  startDate: yup.date(),
  estimatedEndDate: yup.date()
    .min(yup.ref('startDate'), 'Fecha fin debe ser después de fecha inicio')
});
```

## 🔄 Estados de Loading

```javascript
const { data, loading, error } = useCostCenters();

if (loading) return <Loader />;
if (error) return <Alert type="error" message={error.message} />;
```

## 📱 Responsive Design

- **Desktop**: Vista de tabla completa
- **Tablet**: Tarjetas en grid 2 columnas
- **Mobile**: Lista vertical de tarjetas

## 🎯 Casos de Uso

### 1. Crear Nuevo Centro

```javascript
async function handleCreateCenter(formData) {
  try {
    const response = await costCenterService.create(formData);
    // Categorías ya creadas automáticamente
    navigate(`/cost-centers/${response.data.id}`);
    showNotification('Centro creado exitosamente', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
  }
}
```

### 2. Añadir Ítem a Categoría

```javascript
async function handleAddItem(categoryId, itemData) {
  try {
    await costCenterService.addItem(centerId, categoryId, itemData);
    refreshItems();
    closeModal();
    showNotification('Ítem añadido exitosamente', 'success');
  } catch (error) {
    showNotification(error.message, 'error');
  }
}
```

### 3. Ver Reporte

```javascript
async function handleViewReport(centerId) {
  const report = await costCenterService.getReport(centerId);
  setReportData(report.data);
  setShowReport(true);
}
```

## 🧪 Testing

```bash
# Tests de componentes
npm test -- cost-centers

# Tests E2E
npm run test:e2e -- cost-centers
```

## 📝 Notas de Implementación

1. **Categorías Automáticas**: Al crear un centro, las 6 categorías se crean automáticamente en el backend.
2. **Formato de Moneda**: Usar `Intl.NumberFormat` para formatear valores monetarios.
3. **Date Pickers**: Usar biblioteca como `react-datepicker` o componente nativo.
4. **Permisos**: Verificar permisos antes de mostrar botones de edición/eliminación.
5. **Optimistic Updates**: Actualizar UI inmediatamente y revertir si falla la petición.

## 🔐 Permisos

- `cost-centers:read` - Ver centros de costos
- `cost-centers:create` - Crear centros
- `cost-centers:update` - Editar centros
- `cost-centers:delete` - Eliminar centros
- `cost-centers:manage-items` - Gestionar ítems

## 🎨 Ejemplo de Interfaz

```
┌─────────────────────────────────────────────────────────┐
│ Centros de Costos                    [+ Nuevo Centro]   │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  🔍 Buscar...  [Cliente ▼] [Fecha ▼]    [Filtros]      │
│                                                          │
│  ┌───────────────┐  ┌───────────────┐  ┌──────────────┐│
│  │ CC-2024-001   │  │ CC-2024-002   │  │ CC-2024-003  ││
│  │ Cliente A     │  │ Cliente B     │  │ Cliente C    ││
│  │ $15,000,000   │  │ $8,500,000    │  │ $12,300,000  ││
│  │ [Ver] [Editar]│  │ [Ver] [Editar]│  │ [Ver][Editar]││
│  └───────────────┘  └───────────────┘  └──────────────┘│
│                                                          │
└─────────────────────────────────────────────────────────┘
```

## 🚀 Mejoras Futuras

- Exportar reportes a PDF/Excel
- Gráficos interactivos con Recharts
- Comparación entre centros de costos
- Alertas de sobrecostos
- Integración con sistema de aprobaciones
