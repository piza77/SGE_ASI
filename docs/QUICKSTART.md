# Quick Start Guide - SGE ASI

Get started with SGE ASI in minutes!

## 🚀 Quick Start with Docker

The fastest way to run SGE ASI is using Docker Compose:

```bash
# 1. Clone the repository
git clone https://github.com/piza77/SGE_ASI.git
cd SGE_ASI

# 2. Start all services
docker-compose up -d

# 3. Wait for services to start (30-60 seconds)
docker-compose logs -f

# 4. Access the application
# Frontend: http://localhost:5173
# API: http://localhost:3000
# API Docs: http://localhost:3000/api-docs
```

## 🔑 Default Credentials

**Default Admin Account:**
- Email: `admin@asi.com`
- Password: `admin123`

⚠️ **Important:** Change the default password immediately after first login!

## 📦 Manual Setup (Without Docker)

### Prerequisites

- Node.js 18+
- MySQL 8.0+
- npm or yarn

### Backend Setup

```bash
# 1. Navigate to API folder
cd API

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env with your database credentials

# 4. Initialize database
# Run the SQL script in database/init/01-init.sql
mysql -u root -p < database/init/01-init.sql

# 5. Start the API
npm run dev

# API will be available at http://localhost:3000
```

### Frontend Setup

```bash
# 1. Navigate to FRONT folder
cd FRONT

# 2. Install dependencies
npm install

# 3. Configure environment
cp .env.example .env
# Edit .env to point to your API (default: http://localhost:3000)

# 4. Start the development server
npm run dev

# Frontend will be available at http://localhost:5173
```

## 🎯 First Steps After Installation

1. **Login** with default credentials
2. **Change password** in user profile
3. **Configure tenant** settings (branding, company info)
4. **Create users** for your team
5. **Add clients** to start using the system

## 📚 Explore the Modules

### 1. Dashboard
View overview of system metrics and quick access to modules.

### 2. Tenants
Configure your company information and branding.

### 3. Cost Centers
Create and manage cost centers with automatic categories:
- Recursos Humanos
- Logística
- Reembolsables
- Contratos
- Otros
- Imprevistos

### 4. Clients
Add your clients with contact information and contracts.

### 5. Inventory
Manage your inventory catalog and track movements.

### 6. Documents
Upload and organize company documents with version control.

### 7. Employees
Manage employee information, timesheets, and training.

### 8. Suppliers
Maintain supplier catalog and purchase orders.

### 9. Portfolio
Create invoices and track payments.

### 10. Treasury
Manage payment orders and cash flow.

## 🔧 Configuration

### Database Configuration

Edit `API/.env`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=sge_asi
DB_USER=your_user
DB_PASSWORD=your_password
```

### API Configuration

Edit `API/.env`:
```env
PORT=3000
JWT_SECRET=change-this-to-a-strong-random-string
JWT_EXPIRES_IN=24h
```

### Frontend Configuration

Edit `FRONT/.env`:
```env
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=SGE ASI
```

## 🐛 Troubleshooting

### Port Already in Use

If you get port conflicts:

```bash
# Change ports in docker-compose.yml
# Or stop conflicting services
sudo lsof -ti:3000 | xargs kill -9  # Kill process on port 3000
sudo lsof -ti:5173 | xargs kill -9  # Kill process on port 5173
```

### Database Connection Failed

1. Check MySQL is running
2. Verify credentials in `.env`
3. Ensure database `sge_asi` exists
4. Check MySQL logs

### API Not Responding

```bash
# Check API logs
docker-compose logs api

# Or if running manually
cd API && npm run dev
```

### Frontend Not Loading

```bash
# Check frontend logs
docker-compose logs front

# Clear cache and rebuild
cd FRONT
rm -rf node_modules dist
npm install
npm run dev
```

## 📖 Next Steps

- Read the full [README.md](../README.md)
- Check [API Documentation](../API/README.md)
- Check [Frontend Documentation](../FRONT/README.md)
- Review [Development Tasks](../tareas_copilot.md)
- Read [Deployment Guide](./DEPLOYMENT.md)
- Review [Contributing Guidelines](./CONTRIBUTING.md)

## 🆘 Getting Help

- Check the documentation
- Review existing issues on GitHub
- Contact the development team

## ✅ Verify Installation

After starting the services, verify everything is working:

1. **Frontend**: Open http://localhost:5173 - Should show login page
2. **API**: Open http://localhost:3000/health - Should return `{"success": true}`
3. **API Docs**: Open http://localhost:3000/api-docs - Should show Swagger UI
4. **Database**: Connect to MySQL on localhost:3306 - Should have `sge_asi` database

## 🎉 You're Ready!

You now have a fully functional ERP system. Start by logging in and exploring the modules!

---

**Questions?** Check the documentation or contact support.
