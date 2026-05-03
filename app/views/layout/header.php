<?php
$pageTitle = $pageTitle ?? 'Inventario y Ventas';
$currentPage = basename($_SERVER['PHP_SELF']);
?>
<!doctype html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;">
    <title><?= htmlspecialchars($pageTitle, ENT_QUOTES, 'UTF-8') ?></title>
    <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body>
<header class="topbar">
    <div class="brand">
        <span class="brand-icon">📦</span>
        <div>
            <h1>Inventario + Ventas</h1>
            <p>Sistema web simple en PHP y LocalStorage</p>
        </div>
    </div>
    <nav class="nav">
        <a class="<?= $currentPage === 'index.php' ? 'active' : '' ?>" href="index.php">Inicio</a>
        <a class="<?= $currentPage === 'productos.php' ? 'active' : '' ?>" href="productos.php">Productos</a>
        <a class="<?= $currentPage === 'ventas.php' ? 'active' : '' ?>" href="ventas.php">Ventas</a>
    </nav>
</header>
<main class="container">
