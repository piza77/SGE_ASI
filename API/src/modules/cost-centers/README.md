# Módulo de Centros de Costos

Gestión completa de centros de costos con categorías predefinidas y seguimiento de ítems.

## 📋 Descripción

Este módulo permite crear y gestionar centros de costos con:
- Identificador único (IDE)
- Cliente asociado
- Número de contrato
- Número de identificación

Cada centro de costos incluye 6 categorías predefinidas:
1. Recursos Humanos
2. Logística
3. Reembolsables
4. Contratos
5. Otros
6. Imprevistos

## 🎯 Funcionalidades

- ✅ Crear centros de costos con validación de campos requeridos
- ✅ Asignación automática de 6 categorías al crear centro
- ✅ Gestión de ítems dentro de cada categoría
- ✅ Seguimiento temporal (fecha implementación, inicio, finalización)
- ✅ Control de valores y observaciones
- ✅ Reportes de costos por centro y categoría

## 📊 Estructura de Datos

### Centro de Costos
- `id` - ID único
- `ide` - Identificador del centro (requerido)
- `clientId` - ID del cliente (requerido)
- `contractNumber` - Número de contrato (requerido)
- `identification` - Número de identificación (requerido)
- `tenantId` - ID del tenant
- `createdAt` - Fecha de creación
- `updatedAt` - Fecha de actualización

### Categoría
- `id` - ID único
- `costCenterId` - ID del centro de costos
- `name` - Nombre de la categoría
- `type` - Tipo (enum: RRHH, LOGISTICA, REEMBOLSABLES, CONTRATOS, OTROS, IMPREVISTOS)
- `order` - Orden de visualización

### Ítem
- `id` - ID único
- `categoryId` - ID de la categoría
- `implementationDate` - Fecha de implementación
- `startDate` - Fecha de inicio
- `estimatedEndDate` - Fecha estimada de finalización
- `name` - Nombre del ítem (requerido)
- `identification` - Identificación (opcional)
- `value` - Valor monetario (requerido)
- `observations` - Observaciones
- `createdAt` - Fecha de creación
- `updatedAt` - Fecha de actualización

## 🔌 Endpoints

### Centros de Costos

#### Listar centros de costos
```http
GET /api/cost-centers
Authorization: Bearer <token>
```

#### Obtener centro específico
```http
GET /api/cost-centers/:id
Authorization: Bearer <token>
```

#### Crear centro de costos
```http
POST /api/cost-centers
Authorization: Bearer <token>
Content-Type: application/json

{
  "ide": "CC-2024-001",
  "clientId": 1,
  "contractNumber": "CTR-001",
  "identification": "ID-12345"
}
```

**Nota**: Al crear un centro, se crean automáticamente las 6 categorías predefinidas.

#### Actualizar centro de costos
```http
PUT /api/cost-centers/:id
Authorization: Bearer <token>
Content-Type: application/json

{
  "ide": "CC-2024-001-UPD",
  "contractNumber": "CTR-001-MOD"
}
```

#### Eliminar centro de costos
```http
DELETE /api/cost-centers/:id
Authorization: Bearer <token>
```

### Categorías

#### Obtener categorías de un centro
```http
GET /api/cost-centers/:id/categories
Authorization: Bearer <token>
```

### Ítems

#### Crear ítem en categoría
```http
POST /api/cost-centers/:centerId/categories/:categoryId/items
Authorization: Bearer <token>
Content-Type: application/json

{
  "implementationDate": "2024-01-15",
  "startDate": "2024-01-20",
  "estimatedEndDate": "2024-06-30",
  "name": "Contratación de personal",
  "identification": "EMP-001",
  "value": 5000000,
  "observations": "Ingeniero ambiental senior"
}
```

#### Actualizar ítem
```http
PUT /api/cost-centers/items/:itemId
Authorization: Bearer <token>
Content-Type: application/json

{
  "value": 5500000,
  "observations": "Aumento salarial aprobado"
}
```

#### Eliminar ítem
```http
DELETE /api/cost-centers/items/:itemId
Authorization: Bearer <token>
```

### Reportes

#### Reporte de costos
```http
GET /api/cost-centers/:id/report
Authorization: Bearer <token>
```

Respuesta:
```json
{
  "success": true,
  "data": {
    "costCenter": {
      "id": 1,
      "ide": "CC-2024-001",
      "client": { "name": "Cliente A" },
      "contractNumber": "CTR-001"
    },
    "summary": {
      "totalCost": 15000000,
      "itemCount": 12,
      "categories": [
        {
          "name": "Recursos Humanos",
          "totalCost": 8000000,
          "itemCount": 5
        },
        {
          "name": "Logística",
          "totalCost": 3000000,
          "itemCount": 3
        }
      ]
    }
  }
}
```

## 🔐 Permisos

- `cost-centers:read` - Ver centros de costos
- `cost-centers:create` - Crear centros de costos
- `cost-centers:update` - Actualizar centros de costos
- `cost-centers:delete` - Eliminar centros de costos
- `cost-centers:manage-items` - Gestionar ítems

## 🧪 Ejemplos de Uso

### Crear centro y añadir ítems

```javascript
// 1. Crear centro de costos
const createResponse = await fetch('/api/cost-centers', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    ide: 'CC-2024-001',
    clientId: 1,
    contractNumber: 'CTR-001',
    identification: 'ID-12345'
  })
});

const { data: costCenter } = await createResponse.json();
// costCenter.id = 1
// Las 6 categorías ya están creadas

// 2. Obtener categorías
const categoriesResponse = await fetch(`/api/cost-centers/${costCenter.id}/categories`, {
  headers: { 'Authorization': 'Bearer token' }
});

const { data: categories } = await categoriesResponse.json();
// categories[0] = { id: 1, name: 'Recursos Humanos', type: 'RRHH' }

// 3. Añadir ítem a categoría
const itemResponse = await fetch(`/api/cost-centers/${costCenter.id}/categories/${categories[0].id}/items`, {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer token',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Ingeniero Senior',
    implementationDate: '2024-01-15',
    startDate: '2024-02-01',
    estimatedEndDate: '2024-12-31',
    value: 6000000,
    observations: 'Contrato a término fijo'
  })
});
```

## 📝 Notas de Implementación

1. **Creación Automática de Categorías**: Al crear un centro de costos, el sistema automáticamente crea las 6 categorías predefinidas en el orden especificado.

2. **Validaciones**:
   - IDE debe ser único dentro del tenant
   - Cliente debe existir
   - Todos los campos requeridos deben estar presentes
   - Las fechas deben seguir el formato ISO 8601

3. **Multitenancy**: Todos los datos están aislados por tenant. Los usuarios solo pueden ver y gestionar centros de costos de su propio tenant.

4. **Soft Delete**: Los registros eliminados se marcan como eliminados pero no se borran físicamente (implementar `deletedAt`).

## 🔄 Flujo de Trabajo Típico

1. Usuario crea un centro de costos con datos básicos
2. Sistema crea automáticamente las 6 categorías
3. Usuario añade ítems a las categorías según necesidad
4. Usuario actualiza valores y fechas de ítems
5. Usuario genera reportes para analizar costos

## 📊 Casos de Uso

- **Gestión de Proyectos**: Asociar todos los costos de un proyecto a un centro específico
- **Control Presupuestal**: Seguimiento de gastos por categoría
- **Facturación**: Base para generar facturas basadas en costos reales
- **Reportes Gerenciales**: Análisis de costos por centro, categoría y período
