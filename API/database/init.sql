-- Script de inicialización de base de datos SGE ASI
-- Este script se ejecuta automáticamente al iniciar MySQL en Docker

-- Crear base de datos si no existe
CREATE DATABASE IF NOT EXISTS sge_asi CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE sge_asi;

-- La creación de tablas se maneja automáticamente por Sequelize
-- Este archivo puede contener:
-- - Configuraciones iniciales
-- - Datos semilla (seeds)
-- - Índices adicionales
-- - Procedimientos almacenados (si se requieren)

-- Configurar zona horaria
SET time_zone = '+00:00';

-- Mensaje de confirmación
SELECT 'Base de datos SGE ASI inicializada correctamente' AS message;
