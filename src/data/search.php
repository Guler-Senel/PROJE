<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
header('Content-Type: text/html; charset=UTF-8');

// Arama terimi
$q = isset($_GET['q']) ? trim($_GET['q']) : '';

// JSON dosyasını oku
$jsonPath = __DIR__ . '/ilaclar.json';
$all = [];

if (file_exists($jsonPath)) {
    $jsonData = file_get_contents($jsonPath);
    $all = json_decode($jsonData, true);

    if (!is_array($all)) {
        $all = [];
    }
} else {
    die("JSON dosyası bulunamadı.");
}

// Arama işlemi
$warning = '';
$matches = [];

if ($q === '') {
    $warning = 'Lütfen arama terimi girin.';
} else {
    $qLower = mb_strtolower($q, 'UTF-8');
    foreach ($all as $item) {
        $searchableText = mb_strtolower(
            ($item['isimVeForm'] ?? '') . ' ' .
            ($item['kullanimAlani'] ?? '') . ' ' .
            ($item['halkDili'] ?? '') . ' ' .
            ($item['yanEtkiler'] ?? ''),
            'UTF-8'
        );

        if (mb_stripos($searchableText, $qLower) !== false) {
            $matches[] = $item;
        }
    }
}
?>

<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <title>İlaç Arama Sonuçları</title>
  <style>
    .search-results-wrapper {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 20px;
      margin-top: 30px;
    }

    .ilac-card {
      background: #ffffff;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
      border-left: 6px solid #0077cc;
      transition: transform 0.2s ease;
    }

    .ilac-card:hover {
      transform: translateY(-4px);
    }

    .ilac-label {
      font-weight: bold;
      color: #333;
    }

    .ilac-value {
      margin-bottom: 10px;
      color: #555;
    }

    h2 {
      text-align: center;
      margin-bottom: 30px;
      color: #0077cc;
    }

    .warning, .not-found {
      color: #cc0000;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>

<h2>Arama Sonuçları</h2>

<?php if ($warning): ?>
  <p class="warning"><?= htmlspecialchars($warning) ?></p>
<?php endif; ?>

<?php if ($q !== '' && empty($matches)): ?>
  <p class="not-found">“<?= htmlspecialchars($q) ?>” için sonuç bulunamadı.</p>
<?php endif; ?>

<?php if (!empty($matches)): ?>
  <div class="search-results-wrapper">
    <?php foreach ($matches as $item): ?>
      <div class="ilac-card">
        <div class="ilac-value"><span class="ilac-label">İsim:</span> <?= htmlspecialchars($item['isimVeForm']) ?></div>
        <div class="ilac-value"><span class="ilac-label">Kullanım Alanı:</span> <?= htmlspecialchars($item['kullanimAlani']) ?></div>
        <div class="ilac-value"><span class="ilac-label">Halk Dili:</span> <?= htmlspecialchars($item['halkDili']) ?></div>
        <div class="ilac-value"><span class="ilac-label">Yan Etkiler:</span> <?= htmlspecialchars($item['yanEtkiler']) ?></div>
        <div class="ilac-value"><span class="ilac-label">Reçete Rengi:</span> <?= htmlspecialchars($item['receteRengi']) ?></div>
        <div class="ilac-value"><span class="ilac-label">Reçetesiz Alınabilir mi?:</span> <?= $item['recetesizAlinabilirMi'] ? 'Evet' : 'Hayır' ?></div>
      </div>
    <?php endforeach; ?>
  </div>
<?php endif; ?>

</body>
</html>
