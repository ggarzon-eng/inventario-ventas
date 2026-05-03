'use strict';

const saleForm = document.getElementById('saleForm');
const productSelect = document.getElementById('productSelect');
const quantityInput = document.getElementById('quantity');
const unitPrice = document.getElementById('unitPrice');
const saleTotal = document.getElementById('saleTotal');
const availableStock = document.getElementById('availableStock');
const salesTableBody = document.getElementById('salesTableBody');
const emptySales = document.getElementById('emptySales');
const clearSalesBtn = document.getElementById('clearSalesBtn');

function setSaleError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearSaleErrors() {
    setSaleError('productError', '');
    setSaleError('quantityError', '');
}

function selectedProduct() {
    const products = getProducts();
    return products.find(product => product.id === productSelect.value);
}

function loadProductOptions() {
    const products = getProducts();
    productSelect.innerHTML = '';

    if (!products.length) {
        productSelect.innerHTML = '<option value="">No hay productos registrados</option>';
        updateSaleSummary();
        return;
    }

    productSelect.innerHTML = '<option value="">Seleccione un producto</option>';
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = `${product.name} - Stock: ${product.stock}`;
        productSelect.appendChild(option);
    });

    updateSaleSummary();
}

function updateSaleSummary() {
    const product = selectedProduct();
    const quantity = Number(quantityInput.value) || 0;

    if (!product) {
        unitPrice.textContent = money(0);
        saleTotal.textContent = money(0);
        availableStock.textContent = '0';
        return;
    }

    unitPrice.textContent = money(product.price);
    saleTotal.textContent = money(product.price * quantity);
    availableStock.textContent = product.stock;
}

function validateSale(product, quantity) {
    clearSaleErrors();
    let isValid = true;

    if (!product) {
        setSaleError('productError', 'Debe seleccionar un producto.');
        isValid = false;
    }

    if (!Number.isInteger(quantity) || quantity <= 0) {
        setSaleError('quantityError', 'La cantidad debe ser un número entero mayor a 0.');
        isValid = false;
    }

    if (product && quantity > Number(product.stock)) {
        setSaleError('quantityError', 'La cantidad no puede superar el stock disponible.');
        isValid = false;
    }

    return isValid;
}

function renderSales() {
    const sales = getSales().sort((a, b) => new Date(b.date) - new Date(a.date));
    salesTableBody.innerHTML = '';
    emptySales.style.display = sales.length ? 'none' : 'block';

    sales.forEach(sale => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${new Date(sale.date).toLocaleString('es-EC')}</td>
            <td>${escapeHTML(sale.productName)}</td>
            <td>${Number(sale.quantity)}</td>
            <td>${money(sale.total)}</td>
        `;
        salesTableBody.appendChild(row);
    });
}

saleForm.addEventListener('submit', event => {
    event.preventDefault();

    const product = selectedProduct();
    const quantity = Number(quantityInput.value);

    if (!validateSale(product, quantity)) {
        return;
    }

    const products = getProducts();
    const productIndex = products.findIndex(item => item.id === product.id);
    products[productIndex].stock = Number(products[productIndex].stock) - quantity;
    saveProducts(products);

    const sales = getSales();
    sales.push({
        id: createId(),
        productId: product.id,
        productName: product.name,
        quantity,
        unitPrice: Number(product.price),
        total: Number(product.price) * quantity,
        date: new Date().toISOString()
    });
    saveSales(sales);

    saleForm.reset();
    loadProductOptions();
    renderSales();
});

clearSalesBtn.addEventListener('click', () => {
    if (!confirm('¿Limpiar todo el historial de ventas? Esta acción no devuelve el stock.')) return;
    saveSales([]);
    renderSales();
});

productSelect.addEventListener('change', updateSaleSummary);
quantityInput.addEventListener('input', updateSaleSummary);

document.addEventListener('DOMContentLoaded', () => {
    loadProductOptions();
    renderSales();
});
