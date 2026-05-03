'use strict';

const productForm = document.getElementById('productForm');
const productIdInput = document.getElementById('productId');
const nameInput = document.getElementById('name');
const stockInput = document.getElementById('stock');
const priceInput = document.getElementById('price');
const searchInput = document.getElementById('searchInput');
const tableBody = document.getElementById('productTableBody');
const emptyProducts = document.getElementById('emptyProducts');
const cancelBtn = document.getElementById('cancelBtn');
const formTitle = document.getElementById('formTitle');

function showError(id, message) {
    document.getElementById(id).textContent = message;
}

function clearErrors() {
    showError('nameError', '');
    showError('stockError', '');
    showError('priceError', '');
}

function validateProduct(name, stock, price) {
    clearErrors();
    let isValid = true;

    if (!name.trim()) {
        showError('nameError', 'El nombre no puede estar vacío.');
        isValid = false;
    }

    if (!Number.isInteger(stock) || stock < 0) {
        showError('stockError', 'El stock debe ser un número entero mayor o igual a 0.');
        isValid = false;
    }

    if (Number.isNaN(price) || price <= 0) {
        showError('priceError', 'El precio debe ser mayor a 0.');
        isValid = false;
    }

    return isValid;
}

function resetForm() {
    productForm.reset();
    productIdInput.value = '';
    formTitle.textContent = 'Nuevo producto';
    clearErrors();
}

function renderProducts() {
    const filter = searchInput.value.trim().toLowerCase();
    const products = getProducts().filter(product => product.name.toLowerCase().includes(filter));

    tableBody.innerHTML = '';
    emptyProducts.style.display = products.length ? 'none' : 'block';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${escapeHTML(product.name)}</td>
            <td>${Number(product.stock)}</td>
            <td>${money(product.price)}</td>
            <td class="table-actions">
                <button class="btn small" data-action="edit" data-id="${product.id}">Editar</button>
                <button class="btn small danger" data-action="delete" data-id="${product.id}">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

productForm.addEventListener('submit', event => {
    event.preventDefault();

    const id = productIdInput.value;
    const name = nameInput.value.trim();
    const stock = Number(stockInput.value);
    const price = Number(priceInput.value);

    if (!validateProduct(name, stock, price)) {
        return;
    }

    const products = getProducts();

    if (id) {
        const index = products.findIndex(product => product.id === id);
        if (index !== -1) {
            products[index] = { ...products[index], name, stock, price };
        }
    } else {
        products.push({
            id: createId(),
            name,
            stock,
            price,
            createdAt: new Date().toISOString()
        });
    }

    saveProducts(products);
    resetForm();
    renderProducts();
});

tableBody.addEventListener('click', event => {
    const button = event.target.closest('button');
    if (!button) return;

    const action = button.dataset.action;
    const id = button.dataset.id;
    const products = getProducts();
    const product = products.find(item => item.id === id);

    if (action === 'edit' && product) {
        productIdInput.value = product.id;
        nameInput.value = product.name;
        stockInput.value = product.stock;
        priceInput.value = product.price;
        formTitle.textContent = 'Editar producto';
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (action === 'delete' && product) {
        const confirmDelete = confirm(`¿Eliminar el producto "${product.name}"?`);
        if (!confirmDelete) return;

        const updatedProducts = products.filter(item => item.id !== id);
        saveProducts(updatedProducts);
        renderProducts();
        resetForm();
    }
});

searchInput.addEventListener('input', renderProducts);
cancelBtn.addEventListener('click', resetForm);

document.addEventListener('DOMContentLoaded', renderProducts);
