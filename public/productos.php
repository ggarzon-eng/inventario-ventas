<?php
$pageTitle = 'Productos | Inventario y Ventas';
require_once __DIR__ . '/../app/views/layout/header.php';
?>
<section class="page-header">
    <div>
        <h2>CRUD de productos</h2>
        <p>Crea, lista, edita y elimina productos. Los datos se guardan en LocalStorage.</p>
    </div>
</section>

<section class="grid-2">
    <form id="productForm" class="card form-card" novalidate>
        <h3 id="formTitle">Nuevo producto</h3>
        <input type="hidden" id="productId">

        <label for="name">Nombre del producto</label>
        <input type="text" id="name" placeholder="Ejemplo: Arroz 1kg" maxlength="80" required>
        <small class="error" id="nameError"></small>

        <label for="stock">Stock</label>
        <input type="number" id="stock" min="0" step="1" placeholder="0" required>
        <small class="error" id="stockError"></small>

        <label for="price">Precio</label>
        <input type="number" id="price" min="0.01" step="0.01" placeholder="0.00" required>
        <small class="error" id="priceError"></small>

        <div class="form-actions">
            <button type="submit" class="btn primary" id="saveBtn">Guardar</button>
            <button type="button" class="btn secondary" id="cancelBtn">Cancelar</button>
        </div>
    </form>

    <section class="card">
        <div class="section-title">
            <h3>Listado de productos</h3>
            <input type="search" id="searchInput" placeholder="Buscar producto...">
        </div>
        <div class="table-wrap">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Stock</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody id="productTableBody"></tbody>
            </table>
        </div>
        <p class="empty" id="emptyProducts">No hay productos registrados.</p>
    </section>
</section>
<script src="assets/js/storage.js"></script>
<script src="assets/js/products.js"></script>
<?php require_once __DIR__ . '/../app/views/layout/footer.php'; ?>
