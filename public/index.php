<?php
$pageTitle = 'Inicio | Inventario y Ventas';
require_once __DIR__ . '/../app/views/layout/header.php';
?>
<section class="hero card">
    <div>
        <h2>Panel principal</h2>
        <p>Gestiona productos y registra ventas desde el navegador. La información se almacena en <strong>LocalStorage</strong>.</p>
        <div class="actions">
            <a class="btn primary" href="productos.php">Gestionar productos</a>
            <a class="btn" href="ventas.php">Registrar ventas</a>
        </div>
    </div>
    <div class="stats-grid">
        <article class="stat-card">
            <span id="totalProductos">0</span>
            <small>Productos</small>
        </article>
        <article class="stat-card">
            <span id="stockTotal">0</span>
            <small>Stock total</small>
        </article>
        <article class="stat-card">
            <span id="totalVentas">$0.00</span>
            <small>Total vendido</small>
        </article>
    </div>
</section>

<section class="card">
    <h3>Características incluidas</h3>
    <div class="features">
        <p>✅ CRUD completo de productos</p>
        <p>✅ Validaciones de nombre, stock y precio</p>
        <p>✅ Registro de ventas con descuento automático de stock</p>
        <p>✅ Estructura por capas y archivos separados</p>
        <p>✅ Seguridad básica contra inyección HTML desde JavaScript</p>
        <p>✅ Guía de commits para GitHub</p>
    </div>
</section>
<script src="assets/js/storage.js"></script>
<script src="assets/js/dashboard.js"></script>
<?php require_once __DIR__ . '/../app/views/layout/footer.php'; ?>
