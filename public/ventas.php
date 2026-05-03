<?php
$pageTitle = 'Ventas | Inventario y Ventas';
require_once __DIR__ . '/../app/views/layout/header.php';
?>
<section class="page-header">
    <div>
        <h2>Registro de ventas</h2>
        <p>Selecciona un producto, registra la cantidad vendida y el sistema descontará el stock.</p>
    </div>
</section>

<section class="grid-2">
    <form id="saleForm" class="card form-card" novalidate>
        <h3>Nueva venta</h3>

        <label for="productSelect">Producto</label>
        <select id="productSelect" required></select>
        <small class="error" id="productError"></small>

        <label for="quantity">Cantidad</label>
        <input type="number" id="quantity" min="1" step="1" placeholder="1" required>
        <small class="error" id="quantityError"></small>

        <div class="summary-box">
            <p>Precio unitario: <strong id="unitPrice">$0.00</strong></p>
            <p>Total: <strong id="saleTotal">$0.00</strong></p>
            <p>Stock disponible: <strong id="availableStock">0</strong></p>
        </div>

        <button type="submit" class="btn primary">Registrar venta</button>
    </form>

    <section class="card">
        <div class="section-title">
            <h3>Historial de ventas</h3>
            <button class="btn danger" id="clearSalesBtn" type="button">Limpiar ventas</button>
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody id="salesTableBody"></tbody>
            </table>
        </div>
        <p class="empty" id="emptySales">No hay ventas registradas.</p>
    </section>
</section>
<script src="assets/js/storage.js"></script>
<script src="assets/js/sales.js"></script>
<?php require_once __DIR__ . '/../app/views/layout/footer.php'; ?>
