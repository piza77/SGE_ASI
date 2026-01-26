# Guía de Contribución - SGE ASI

¡Gracias por tu interés en contribuir al Sistema de Gestión Empresarial ASI!

## 📋 Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [¿Cómo Puedo Contribuir?](#cómo-puedo-contribuir)
3. [Configuración del Entorno](#configuración-del-entorno)
4. [Proceso de Desarrollo](#proceso-de-desarrollo)
5. [Estándares de Código](#estándares-de-código)
6. [Convenciones de Commits](#convenciones-de-commits)
7. [Pull Requests](#pull-requests)

## Código de Conducta

Este proyecto sigue un código de conducta profesional. Se espera que todos los contribuyentes:

- Sean respetuosos con otros colaboradores
- Acepten críticas constructivas
- Se enfoquen en lo que es mejor para el proyecto
- Muestren empatía hacia otros miembros de la comunidad

## ¿Cómo Puedo Contribuir?

### Reportar Bugs

Si encuentras un bug:

1. Verifica que no exista ya un issue abierto
2. Crea un nuevo issue con:
   - Título descriptivo
   - Pasos para reproducir
   - Comportamiento esperado vs actual
   - Screenshots si aplica
   - Versión del sistema

### Sugerir Mejoras

Para sugerir mejoras:

1. Abre un issue con la etiqueta "enhancement"
2. Describe claramente la mejora propuesta
3. Explica por qué sería útil
4. Si es posible, proporciona ejemplos

### Contribuir Código

1. Fork el repositorio
2. Crea una rama desde `main`
3. Realiza tus cambios
4. Escribe tests si aplica
5. Asegúrate de que los tests pasen
6. Envía un Pull Request

## Configuración del Entorno

### Prerrequisitos

- Node.js >= 18
- MySQL 8.0
- Git
- Docker (opcional)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI

# Frontend
cd FRONT
npm install
cp .env.example .env
npm run dev

# Backend (en otra terminal)
cd API
npm install
cp .env.example .env
# Configurar .env con tus credenciales MySQL
npm run dev
```

### Con Docker

```bash
docker-compose up -d
```

## Proceso de Desarrollo

### 1. Crear una Rama

```bash
git checkout -b feature/nombre-de-la-feature
# o
git checkout -b fix/descripcion-del-fix
```

### 2. Desarrollar

- Haz cambios pequeños y enfocados
- Commit frecuentemente
- Escribe mensajes de commit descriptivos

### 3. Testing

```bash
# Backend
cd API
npm test

# Frontend
cd FRONT
npm test
```

### 4. Documentar

- Actualiza README si es necesario
- Documenta funciones complejas
- Actualiza documentación Swagger para nuevos endpoints

## Estándares de Código

### General

- **Idioma**: Código en inglés, comentarios en español
- **Indentación**: 2 espacios
- **Línea máxima**: 100 caracteres
- **Encoding**: UTF-8

### JavaScript/Node.js

- Usar `const` y `let`, evitar `var`
- Usar arrow functions cuando sea apropiado
- Usar async/await en lugar de callbacks
- Destructuring cuando mejore legibilidad

### Nomenclatura

```javascript
// Variables y funciones: camelCase
const userName = 'John';
function getUserData() {}

// Clases y Componentes: PascalCase
class UserService {}
const Button = () => {};

// Constantes: UPPER_SNAKE_CASE
const API_URL = 'http://localhost:3000';

// Archivos: camelCase para JS, PascalCase para componentes
userService.js
Button.jsx
```

### React

- Componentes funcionales con hooks
- PropTypes o TypeScript para validación
- Extraer lógica compleja a custom hooks
- Mantener componentes pequeños y enfocados

### Backend

- Arquitectura en capas (routes → controllers → services → models)
- Validar datos de entrada
- Manejar errores apropiadamente
- Documentar endpoints con Swagger

### CSS/TailwindCSS

- Usar clases de TailwindCSS
- Evitar CSS inline cuando sea posible
- Componentes reutilizables para estilos comunes

## Convenciones de Commits

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

```
<tipo>(<alcance>): <descripción>

[cuerpo opcional]

[footer opcional]
```

### Tipos

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Formateo, punto y coma faltante, etc.
- `refactor`: Refactorización de código
- `test`: Agregar o corregir tests
- `chore`: Cambios en build, configuración, etc.

### Ejemplos

```bash
feat(auth): add JWT authentication
fix(api): resolve database connection timeout
docs(readme): update installation instructions
refactor(costCenter): simplify category creation logic
test(users): add unit tests for user service
```

## Pull Requests

### Antes de Enviar

- [ ] El código compila sin errores
- [ ] Los tests pasan
- [ ] El código sigue los estándares establecidos
- [ ] Se actualizó la documentación relevante
- [ ] Se agregaron tests para nueva funcionalidad
- [ ] No hay console.logs innecesarios
- [ ] Se probó manualmente la funcionalidad

### Plantilla de PR

```markdown
## Descripción
[Descripción clara de los cambios]

## Tipo de Cambio
- [ ] Bug fix
- [ ] Nueva funcionalidad
- [ ] Breaking change
- [ ] Documentación

## ¿Cómo se ha probado?
[Descripción de las pruebas realizadas]

## Checklist
- [ ] Mi código sigue los estándares del proyecto
- [ ] He realizado self-review de mi código
- [ ] He comentado código complejo
- [ ] He actualizado la documentación
- [ ] Mis cambios no generan nuevos warnings
- [ ] He agregado tests
- [ ] Todos los tests pasan
```

### Proceso de Revisión

1. Al menos un revisor debe aprobar
2. Todos los comentarios deben ser resueltos
3. Los tests de CI deben pasar
4. No debe haber conflictos con `main`

## Estructura de Archivos

### Frontend

```
FRONT/src/
├── components/
│   ├── common/           # Componentes reutilizables
│   ├── layout/           # Layouts
│   └── modules/          # Componentes por módulo
├── pages/                # Páginas de la app
├── services/             # Servicios API
├── context/              # Context providers
├── hooks/                # Custom hooks
└── utils/                # Utilidades
```

### Backend

```
API/src/
├── config/               # Configuraciones
├── middleware/           # Middlewares
├── models/               # Modelos Sequelize
├── routes/               # Rutas
├── controllers/          # Controladores
├── services/             # Lógica de negocio
└── utils/                # Utilidades
```

## Documentación de API

Todos los endpoints deben documentarse con Swagger:

```javascript
/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener lista de usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Número de página
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 */
```

## Testing

### Backend

```javascript
describe('User Service', () => {
  describe('create', () => {
    it('should create a new user', async () => {
      const userData = { email: 'test@test.com', password: '123456' };
      const user = await userService.create(userData);
      expect(user.email).toBe(userData.email);
    });

    it('should throw error if email exists', async () => {
      await expect(userService.create(existingEmail)).rejects.toThrow();
    });
  });
});
```

### Frontend

```javascript
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('renders button text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

## Preguntas

Si tienes preguntas, puedes:

1. Revisar la documentación existente
2. Buscar en issues cerrados
3. Abrir un nuevo issue con la etiqueta "question"
4. Contactar al equipo de desarrollo

## Recursos

- [Documentación del Proyecto](./README.md)
- [Tareas de Desarrollo](./tareas_copilot.md)
- [API Documentation](http://localhost:3000/api-docs)

---

¡Gracias por contribuir! 🎉
