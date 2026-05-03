'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const products = getProducts();
    const sales = getSales();

    const totalProductos = products.length;
    const stockTotal = products.reduce((sum, item) => sum + Number(item.stock), 0);
    const totalVentas = sales.reduce((sum, sale) => sum + Number(sale.total), 0);

    document.getElementById('totalProductos').textContent = totalProductos;
    document.getElementById('stockTotal').textContent = stockTotal;
    document.getElementById('totalVentas').textContent = money(totalVentas);
});
