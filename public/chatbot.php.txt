<?php
// Définir l'URL de l'API externe
$apiUrl = 'https://nexus.0-0-0.click/';

// Récupérer les paramètres 'backup' (userId) et 'msg'
$userId = isset($_GET['backup']) ? $_GET['backup'] : null;
$msg = isset($_GET['msg']) ? $_GET['msg'] : null;

// Vérifier si les deux paramètres sont fournis
if (!$userId || !$msg) {
    echo 'Erreur : les paramètres sont requis.';
    exit;
}

// Construire l'URL de requête à l'API externe
$requestUrl = $apiUrl . '?backup=' . urlencode($userId) . '&msg=' . urlencode($msg);

// Initialiser une session cURL pour envoyer la requête
$ch = curl_init($requestUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// Obtenir la réponse
$response = curl_exec($ch);
curl_close($ch);

// Vérifier si cURL a échoué
if ($response === false) {
    echo 'Erreur lors de la connexion à l\'API. Réessayez plus tard.';
    exit;
}

// Décoder la réponse JSON de l'API
$responseData = json_decode($response, true);

// Vérifier si une réponse valide a été obtenue
if (isset($responseData['message'])) {
    echo $responseData['message'];  // Retourner la réponse
} else {
    echo 'Aucune réponse de l\'API.';
}
?>
