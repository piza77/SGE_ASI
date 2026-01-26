# Deployment Guide - SGE ASI

This guide covers deployment options for the SGE ASI ERP system.

## 📋 Prerequisites

- Docker and Docker Compose installed
- MySQL 8.0+ database
- Node.js 18+ (for local development)
- Domain name configured (for production)
- SSL certificate (for production)

## 🐳 Docker Deployment (Recommended)

### Development Environment

1. **Clone the repository**
```bash
git clone <repository-url>
cd SGE_ASI
```

2. **Configure environment variables**
```bash
# Copy example files
cp API/.env.example API/.env
cp FRONT/.env.example FRONT/.env

# Edit configuration
nano API/.env
nano FRONT/.env
```

3. **Start all services**
```bash
docker-compose up -d
```

4. **Access the application**
- Frontend: http://localhost:5173
- API: http://localhost:3000
- API Documentation: http://localhost:3000/api-docs
- MySQL: localhost:3306

5. **View logs**
```bash
docker-compose logs -f
```

6. **Stop services**
```bash
docker-compose down
```

## 🔐 Security Checklist

### Before Production Deployment

- [ ] Change all default passwords
- [ ] Update JWT_SECRET to a strong random string
- [ ] Enable HTTPS/SSL
- [ ] Configure CORS properly
- [ ] Setup firewall rules
- [ ] Enable rate limiting
- [ ] Configure secure headers
- [ ] Setup monitoring and logging
- [ ] Configure automated backups
- [ ] Test disaster recovery plan
- [ ] Review and audit all endpoints
- [ ] Enable database encryption

## 🗄️ Database Backups

### Automated Backup Script

```bash
#!/bin/bash
# backup-mysql.sh

DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_DIR="/backups/mysql"
DB_NAME="sge_asi"
DB_USER="root"
DB_PASS="password"

# Create backup directory if not exists
mkdir -p $BACKUP_DIR

# Dump database
mysqldump -u $DB_USER -p$DB_PASS $DB_NAME | gzip > $BACKUP_DIR/backup_$DATE.sql.gz

# Delete backups older than 30 days
find $BACKUP_DIR -name "backup_*.sql.gz" -mtime +30 -delete

echo "Backup completed: backup_$DATE.sql.gz"
```

### Restore from Backup

```bash
gunzip < backup_20240101_020000.sql.gz | mysql -u root -p sge_asi
```

## 🔧 Troubleshooting

### API not starting

1. Check logs: `docker-compose logs api`
2. Verify environment variables
3. Check database connection
4. Verify port availability

### Frontend not loading

1. Check nginx logs
2. Verify build was successful
3. Check API URL configuration
4. Clear browser cache

### Database connection issues

1. Verify credentials
2. Check network connectivity
3. Verify database is running
4. Check firewall rules

## 📞 Support

For deployment issues, contact the development team or refer to the main README.md
