-- Script opcional para versión con MySQL
-- Base de datos: inventario_ventas
-- Este proyecto principal usa LocalStorage, pero se adjunta este script como bonus.

CREATE DATABASE IF NOT EXISTS inventario_ventas
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE inventario_ventas;

CREATE TABLE productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    stock INT NOT NULL DEFAULT 0,
    precio DECIMAL(10,2) NOT NULL,
    creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT chk_productos_stock CHECK (stock >= 0),
    CONSTRAINT chk_productos_precio CHECK (precio > 0)
);

CREATE TABLE ventas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT NOT NULL,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT chk_ventas_cantidad CHECK (cantidad > 0),
    CONSTRAINT chk_ventas_total CHECK (total > 0),
    CONSTRAINT fk_ventas_productos FOREIGN KEY (producto_id)
        REFERENCES productos(id)
        ON UPDATE CASCADE
        ON DELETE RESTRICT
);

INSERT INTO productos (nombre, stock, precio) VALUES
('Arroz 1kg', 20, 1.25),
('Azúcar 1kg', 15, 1.10),
('Aceite 1L', 10, 2.50);
