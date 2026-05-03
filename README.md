# Sistema Web: Inventario + Ventas Simple

Proyecto académico desarrollado en **PHP, HTML, CSS y JavaScript**, usando **LocalStorage** para almacenar productos y ventas en el navegador.

## Funcionalidades

### Módulo de productos
- Crear producto.
- Listar productos.
- Editar producto.
- Eliminar producto.
- Buscar producto por nombre.

### Validaciones obligatorias
- El nombre no puede estar vacío.
- El stock debe ser mayor o igual a 0.
- No se permite stock negativo.
- El precio debe ser mayor a 0.

### Módulo de ventas
- Seleccionar producto.
- Registrar cantidad vendida.
- Calcular total automáticamente.
- Descontar stock luego de registrar la venta.
- No permite vender más unidades que el stock disponible.
- Historial de ventas en LocalStorage.

## Estructura del proyecto

```txt
inventario_ventas_php/
├── app/
│   └── views/
│       └── layout/
│           ├── header.php
│           └── footer.php
├── database/
│   └── inventario_ventas.sql
├── public/
│   ├── assets/
│   │   ├── css/
│   │   │   └── styles.css
│   │   └── js/
│   │       ├── dashboard.js
│   │       ├── products.js
│   │       ├── sales.js
│   │       └── storage.js
│   ├── index.php
│   ├── productos.php
│   └── ventas.php
├── .gitignore
└── README.md
```

## Capas aplicadas

- **Presentación:** archivos PHP ubicados en `public/` y vistas de layout en `app/views/layout/`.
- **Lógica del cliente:** archivos JavaScript separados por responsabilidad en `public/assets/js/`.
- **Estilos:** archivo CSS independiente en `public/assets/css/styles.css`.
- **Persistencia:** LocalStorage mediante funciones centralizadas en `storage.js`.
- **Base de datos opcional:** script MySQL en `database/inventario_ventas.sql`.

## Seguridad básica aplicada

- Uso de `htmlspecialchars()` en PHP para imprimir títulos de forma segura.
- Uso de función `escapeHTML()` en JavaScript para evitar inserción de HTML malicioso al listar productos o ventas.
- Validaciones en formularios antes de guardar información.
- Restricción de valores numéricos desde HTML y JavaScript.
- Política básica CSP en el `<head>`.

## Cómo ejecutar el proyecto

1. Copiar la carpeta del proyecto dentro de `htdocs` si usa XAMPP:

```txt
C:\xampp\htdocs\inventario_ventas_php
```

2. Iniciar Apache desde XAMPP.

3. Abrir en el navegador:

```txt
http://localhost/inventario_ventas_php/public/index.php
```

También puede ejecutarse con el servidor integrado de PHP:

```bash
cd inventario_ventas_php/public
php -S localhost:8000
```

Luego abrir:

```txt
http://localhost:8000
```

## Consideraciones sobre LocalStorage

- Los datos se guardan solo en el navegador donde se utiliza el sistema.
- Si se borra la caché o el almacenamiento del navegador, se perderán los datos.
- No es una base de datos real para producción, pero sirve para prácticas académicas y prototipos.

## Bonus MySQL

Se adjunta el archivo:

```txt
database/inventario_ventas.sql
```

Este script crea las tablas `productos` y `ventas` con validaciones básicas mediante restricciones `CHECK` y relación por clave foránea.

## Propuesta de commits reales para GitHub

Para cumplir con el requisito de mínimo 7 commits, se recomienda trabajar así:

1. `git commit -m "Inicializar estructura del proyecto PHP"`
2. `git commit -m "Crear layout principal con header y footer"`
3. `git commit -m "Agregar estilos generales del sistema"`
4. `git commit -m "Implementar almacenamiento en LocalStorage"`
5. `git commit -m "Crear CRUD de productos con validaciones"`
6. `git commit -m "Implementar registro de ventas y descuento de stock"`
7. `git commit -m "Agregar dashboard y resumen de inventario"`
8. `git commit -m "Agregar script opcional de base de datos MySQL"`
9. `git commit -m "Documentar instalación y uso del sistema"`

## Comandos básicos para subir a GitHub

```bash
git init
git add .
git commit -m "Inicializar estructura del proyecto PHP"
git branch -M main
git remote add origin https://github.com/USUARIO/NOMBRE_REPOSITORIO.git
git push -u origin main
```

Después de cada avance:

```bash
git add .
git commit -m "Mensaje descriptivo del cambio"
git push
```
