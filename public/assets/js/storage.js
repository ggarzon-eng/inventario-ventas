'use strict';

const STORAGE_KEYS = Object.freeze({
    products: 'inventario_productos_v1',
    sales: 'inventario_ventas_v1'
});

function getFromStorage(key) {
    try {
        return JSON.parse(localStorage.getItem(key)) || [];
    } catch (error) {
        console.error('Error al leer LocalStorage:', error);
        return [];
    }
}

function saveToStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function getProducts() {
    return getFromStorage(STORAGE_KEYS.products);
}

function saveProducts(products) {
    saveToStorage(STORAGE_KEYS.products, products);
}

function getSales() {
    return getFromStorage(STORAGE_KEYS.sales);
}

function saveSales(sales) {
    saveToStorage(STORAGE_KEYS.sales, sales);
}

function createId() {
    return crypto.randomUUID ? crypto.randomUUID() : String(Date.now() + Math.random());
}

function money(value) {
    return Number(value).toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

function escapeHTML(value) {
    return String(value)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;')
        .replaceAll('"', '&quot;')
        .replaceAll("'", '&#039;');
}
